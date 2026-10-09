import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import { heroLines, marquee } from '../data.js'
import { reducedMotion } from '../motion.js'

// Tech tiles orbiting the terminal; `depth` sets how far each one drifts with the cursor.
const tiles = [
  { icon: 'code', label: 'React', wide: true, pos: { left: '-7%', top: '6%' }, depth: 26, delay: 0 },
  { icon: 'smartphone', label: 'React Native', pos: { right: '-5%', top: '-6%' }, depth: 18, delay: 0.7, accent: true },
  { icon: 'braces', label: 'TypeScript', wide: true, pos: { left: '-10%', top: '52%' }, depth: 14, delay: 1.4, accent: true },
  { icon: 'server', label: 'Node.js', wide: true, pos: { right: '-9%', top: '40%' }, depth: 30, delay: 2.1 },
  { icon: 'database', label: 'PostgreSQL', pos: { left: '8%', top: '92%' }, depth: 20, delay: 1 },
  { icon: 'cloud', label: 'CI / Cloud', pos: { right: '6%', top: '90%' }, depth: 24, delay: 1.8, accent: true },
  { icon: 'rocket', label: 'Ship it', wide: true, pos: { left: '46%', top: '-14%' }, depth: 12, delay: 2.6 },
]

// Light beams that travel along the dot grid: [axis, row/column index, duration, delay].
const beams = [['h', 5, 7, 0], ['h', 17, 9, 3.5], ['h', 26, 8, 1.6], ['v', 9, 8, 2.2], ['v', 31, 10, 0.8], ['v', 44, 9, 4.5]]

// Colour JSON-ish text: keys, strings and punctuation.
function highlight(line) {
  if (line.startsWith('$')) return <span className="t-cmd">{line}</span>
  const parts = []
  const re = /("[^"]*"?)(\s*:)?/g
  let last = 0
  let m
  while ((m = re.exec(line))) {
    if (m.index > last) parts.push(<span key={last} className="t-punc">{line.slice(last, m.index)}</span>)
    parts.push(<span key={m.index} className={m[2] ? 't-key' : 't-str'}>{m[1]}</span>)
    if (m[2]) parts.push(<span key={`${m.index}c`} className="t-punc">{m[2]}</span>)
    last = re.lastIndex
  }
  if (last < line.length) parts.push(<span key={last} className="t-punc">{line.slice(last)}</span>)
  return parts
}

function Terminal() {
  const [typed, setTyped] = useState([''])
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (reducedMotion()) { setTyped(heroLines); setDone(true); return }
    let li = 0
    let ci = 0
    const lines = ['']
    let timer
    const tick = () => {
      if (li >= heroLines.length) { setDone(true); return }
      const text = heroLines[li]
      if (ci < text.length) {
        lines[li] += text[ci++]
        setTyped([...lines])
        timer = setTimeout(tick, li === 0 ? 45 : 9)
      } else {
        li++; ci = 0
        if (li < heroLines.length) lines.push('')
        setTyped([...lines])
        timer = setTimeout(tick, li === 1 ? 380 : 70)
      }
    }
    timer = setTimeout(tick, 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="term tilt">
      <div className="term-bar">
        <i /><i /><i />
        <span className="mono">valentine@portfolio — zsh</span>
      </div>
      <pre className="term-body mono">
        {typed.map((l, i) => (
          <div key={i}>
            {highlight(l)}
            {i === typed.length - 1 && <span className={`caret ${done ? 'blink' : ''}`} />}
          </div>
        ))}
      </pre>
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = reducedMotion()

    const onMove = (e) => {
      const r = hero.getBoundingClientRect()
      hero.style.setProperty('--cx', `${e.clientX - r.left}px`)
      hero.style.setProperty('--cy', `${e.clientY - r.top}px`)
      if (reduce) return
      hero.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5) * 2)
      hero.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5) * 2)
    }
    const onLeave = () => {
      ;['--cx', '--cy', '--px', '--py'].forEach((p) => hero.style.removeProperty(p))
    }

    // Content drifts up and fades as the hero scrolls away.
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const y = window.scrollY
        if (y > window.innerHeight) return
        contentRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0)`
        contentRef.current.style.opacity = Math.max(0, 1 - y / 700)
      })
    }

    if (fine) {
      hero.addEventListener('pointermove', onMove)
      hero.addEventListener('pointerleave', onLeave)
    }
    if (!reduce) window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      hero.removeEventListener('pointermove', onMove)
      hero.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <section className="hero" id="top" ref={heroRef}>
        <div className="hero-bg" aria-hidden="true">
          <div className="dots" />
          <div className="dots dots-spot" />
          <div className="beams">
            {beams.map(([axis, n, dur, delay], i) => (
              <span
                key={i}
                className={`beam ${axis}`}
                style={{ [axis === 'h' ? 'top' : 'left']: n * 28 + 13.5, animationDuration: `${dur}s`, animationDelay: `${delay}s` }}
              />
            ))}
          </div>
          <div className="hero-orb" />
          <div className="hero-fade" />
        </div>

        <div className="wrap hero-layout" ref={contentRef}>
          <div className="hero-copy">
            <div className="enter" style={{ '--d': '0.1s' }}>
              <span className="pill"><span className="ping" />Available for new projects</span>
            </div>
            <h1 className="hero-title">
              <span className="line"><span style={{ animationDelay: '0.2s' }}>Fullstack developer.</span></span>
              <span className="line"><span className="grad-text" style={{ animationDelay: '0.3s' }}>React &amp; React Native</span></span>
              <span className="line"><span style={{ animationDelay: '0.4s' }}>specialist.</span></span>
            </h1>
            <p className="hero-sub enter" style={{ '--d': '0.55s' }}>
              I build production web and mobile apps end to end, from healthcare dashboards to AI-powered mobile apps, and mentor engineers along the way.
            </p>
            <div className="hero-ctas enter" style={{ '--d': '0.67s' }}>
              <a href="#projects" className="btn btn-primary magnetic">View projects <Icon name="arrow-right" size={17} /></a>
              <a href="#contact" className="btn btn-ghost magnetic">Get in touch</a>
            </div>
            <div className="hero-meta mono enter" style={{ '--d': '0.8s' }}>
              <span><Icon name="map-pin" size={14} /> Lagos, Nigeria · Remote</span>
              <span><Icon name="briefcase" size={14} /> 8+ years</span>
            </div>
          </div>

          <div className="hero-stage enter" style={{ '--d': '0.45s' }}>
            <Terminal />
            {tiles.map((t, i) => (
              <div key={t.label} className={`decor ${t.wide ? 'wide-only' : ''}`} style={{ ...t.pos, '--depth': t.depth }}>
                <div className="float" style={{ animationDelay: `${t.delay}s` }}>
                  <div className={`tile ${t.accent ? 'accent' : ''}`} style={{ animationDelay: `${0.8 + i * 0.09}s` }} tabIndex={0}>
                    <Icon name={t.icon} size={18} />
                    <span className="tile-tip mono">{t.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee" aria-label="Technologies I use">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="marquee-item" aria-hidden={i >= marquee.length}>
              <i />{m}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
