import { useEffect, useRef, useState } from 'react'
import { heroLines } from '../data.js'

export default function Hero() {
  const [typed, setTyped] = useState([])
  const [done, setDone] = useState(false)
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true
    let li = 0, ci = 0
    let lines = ['']
    const tick = () => {
      if (li >= heroLines.length) { setDone(true); return }
      const text = heroLines[li]
      if (ci < text.length) {
        lines[li] = (lines[li] || '') + text[ci]
        setTyped([...lines])
        ci++
        setTimeout(tick, 8)
      } else {
        li++; ci = 0; lines[li] = ''
        setTyped([...lines])
        setTimeout(tick, 60)
      }
    }
    tick()
  }, [])

  return (
    <section className="hero" style={{ paddingTop: 70 }}>
      <div>
        <div className="tag">const developer = 'Valentine Michael'<span className="cursor"></span></div>
        <h1>Fullstack Developer,<br /><span className="grad">React &amp; React Native</span><br />Specialist</h1>
        <p>I build production web and mobile apps end to end — from healthcare dashboards to AI-powered mobile apps — and mentor engineers along the way.</p>
        <div className="btnrow">
          <a href="#projects" className="btn primary">$ view --projects</a>
          <a href="#contact" className="btn ghost">$ contact --email</a>
        </div>
      </div>
      <div className="term">
        <div className="term-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="term-title">valentine-michael — zsh — 80x24</span></div>
        <div className="term-body">
          {typed.map((l, i) => <div key={i}>{l}</div>)}
          {done && <span className="cursor"></span>}
        </div>
      </div>
    </section>
  )
}
