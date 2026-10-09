import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { projects } from '../data.js'
import { useScrollProgress, reducedMotion } from '../motion.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'

const filterLabel = { all: 'All', web: 'Web', mobile: 'Mobile', oss: 'Open Source' }
const pad = (n) => String(n).padStart(2, '0')

function ProjectCard({ p, index, total }) {
  const host = new URL(p.url).host.replace(/^www\./, '')

  return (
    <article className="pcard card spot">
      <a className="pshot" href={p.url} target="_blank" rel="noreferrer" tabIndex={-1}>
        <div className="chrome"><i /><i /><i /><span className="mono">{host}</span></div>
        <div className="pshot-img">
          <img src={p.img} alt={`${p.name} screenshot`} loading="lazy" />
        </div>
      </a>
      <div className="pinfo">
        <div className="pmeta">
          <span className="mono">{pad(index + 1)} / {pad(total)}</span>
          <span className="ptag">{p.tag}</span>
        </div>
        <h3>{p.name}</h3>
        <p>{p.desc}</p>
        <div className="chips">
          {p.tech.split('#').filter(Boolean).map((t) => <span key={t} className="chip mono">{t.trim()}</span>)}
        </div>
        <a className="plink" href={p.url} target="_blank" rel="noreferrer">
          View live <span className="plink-ico"><Icon name="arrow-up-right" size={16} /></span>
        </a>
      </div>
    </article>
  )
}

// The section pins to the viewport and vertical scrolling slides the cards
// sideways; its height is set so one pixel of scroll moves the track one pixel.
export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [pinned, setPinned] = useState(true)
  const [height, setHeight] = useState(null)
  const secRef = useRef(null)
  const trackRef = useRef(null)
  const barRef = useRef(null)
  const countRef = useRef(null)
  const list = projects.filter((p) => filter === 'all' || p.cat === filter)

  useEffect(() => setPinned(!reducedMotion()), [])

  useLayoutEffect(() => {
    const track = trackRef.current
    if (!pinned) {
      setHeight(null)
      track.style.transform = ''
      return
    }
    const measure = () => setHeight(window.innerHeight + Math.max(0, track.scrollWidth - window.innerWidth))
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [pinned, filter])

  useScrollProgress(secRef, (p) => {
    if (!pinned) return
    const track = trackRef.current
    const dist = Math.max(0, track.scrollWidth - window.innerWidth)
    track.style.transform = `translate3d(${(-p * dist).toFixed(1)}px, 0, 0)`
    barRef.current.style.transform = `scaleX(${p})`

    // Cards ease up to full size and opacity as they reach the centre.
    const mid = window.innerWidth / 2
    let current = 0
    let best = Infinity
    track.querySelectorAll('.pcard').forEach((card, i) => {
      const r = card.getBoundingClientRect()
      const d = Math.abs(r.left + r.width / 2 - mid) / window.innerWidth
      card.style.setProperty('--s', (1 - Math.min(1, d) * 0.1).toFixed(3))
      card.style.setProperty('--o', (1 - Math.min(1, d) * 0.5).toFixed(3))
      if (d < best) { best = d; current = i }
    })
    countRef.current.textContent = pad(current + 1)
  }, [pinned, filter, height])

  const choose = (f) => {
    setFilter(f)
    const top = secRef.current.getBoundingClientRect().top
    if (top < 0) window.scrollTo({ top: window.scrollY + top, behavior: 'smooth' })
  }

  return (
    <section id="projects" className={`hscroll ${pinned ? 'pinned' : 'static'}`} ref={secRef} style={{ height: height ?? undefined }}>
      <div className="hscroll-sticky">
        <div className="wrap hscroll-head">
          <div>
            <Reveal><span className="eyebrow">// featured work</span></Reveal>
            <Reveal delay={0.08}><h2 className="sec-title">Selected projects</h2></Reveal>
          </div>
          <Reveal from="right" className="filters" role="tablist">
            {Object.keys(filterLabel).map((f) => (
              <button key={f} role="tab" aria-selected={filter === f} className={`fbtn ${filter === f ? 'active' : ''}`} onClick={() => choose(f)}>
                {filterLabel[f]}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="track-wrap">
          <div className="track" ref={trackRef} key={filter}>
            {list.map((p, i) => <ProjectCard key={p.name} p={p} index={i} total={list.length} />)}
          </div>
        </div>

        <div className="wrap hs-foot">
          <span className="mono hs-count"><b ref={countRef}>01</b> / {pad(list.length)}</span>
          <div className="hs-progress"><div className="hs-bar" ref={barRef} /></div>
          <span className="mono hs-hint">{pinned ? 'Scroll to explore' : 'Swipe to explore'}</span>
        </div>
      </div>
    </section>
  )
}
