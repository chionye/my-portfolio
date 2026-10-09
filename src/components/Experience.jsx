import { useRef } from 'react'
import { experience } from '../data.js'
import { clamp, useScrollProgress } from '../motion.js'
import Reveal, { SectionHead } from './Reveal.jsx'

export default function Experience() {
  const listRef = useRef(null)
  const fillRef = useRef(null)

  // The timeline line fills as you scroll and each role lights up as it passes the middle of the screen.
  useScrollProgress(listRef, (_, r) => {
    const mid = window.innerHeight * 0.55
    fillRef.current.style.transform = `scaleY(${clamp((mid - r.top) / r.height)})`
    listRef.current.querySelectorAll('.exp-item').forEach((item) => {
      item.classList.toggle('active', item.getBoundingClientRect().top + 30 < mid)
    })
  })

  return (
    <section className="section" id="experience">
      <div className="wrap exp">
        <div className="exp-side">
          <SectionHead
            eyebrow="// experience"
            title="Where I've worked"
            desc="Leading frontend architecture and shipping products for healthcare, government and enterprise teams."
          />
        </div>
        <div className="exp-list" ref={listRef}>
          <div className="exp-line"><div className="exp-line-fill" ref={fillRef} /></div>
          {experience.map((e, i) => (
            <div className="exp-item" key={e.role}>
              <span className="exp-dot" />
              <Reveal from="right" delay={i * 0.05}>
                <div className="card exp-card tilt spot">
                  <span className="mono exp-when">{e.when}</span>
                  <h3>{e.role}</h3>
                  <div className="exp-co">{e.co.replace(/^@\s*/, '')}</div>
                  <p>{e.desc}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
