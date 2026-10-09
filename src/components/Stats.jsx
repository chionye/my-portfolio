import { useEffect, useState } from 'react'
import { stats } from '../data.js'
import { useInView, reducedMotion } from '../motion.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'

function Stat({ count, label, icon, index }) {
  const [ref, inView] = useInView(0.4)
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reducedMotion()) { setVal(count); return }
    let raf = 0
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 1600)
      setVal(Math.round(count * (1 - Math.pow(1 - t, 4))))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, count])

  return (
    <Reveal from="up" delay={index * 0.08}>
      <div className="card stat tilt spot" ref={ref}>
        <span className="itile"><Icon name={icon} size={20} /></span>
        <div className="stat-num">{val}<span className="plus">+</span></div>
        <div className="stat-label">{label}</div>
      </div>
    </Reveal>
  )
}

export default function Stats() {
  return (
    <section className="stats-sec">
      <div className="wrap stats">
        {stats.map((s, i) => <Stat key={s.label} index={i} {...s} />)}
      </div>
    </section>
  )
}
