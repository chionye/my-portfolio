import { useEffect, useRef, useState } from 'react'
import { stats } from '../data.js'

function Stat({ count, label }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  const done = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true
        ref.current.classList.add('in')
        const step = Math.max(1, Math.ceil(count / 40))
        let cur = 0
        const t = setInterval(() => {
          cur += step
          if (cur >= count) { cur = count; clearInterval(t) }
          setVal(cur)
        }, 30)
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [count])

  return (
    <div className="stat" ref={ref}>
      <div className="num">{val}+</div>
      <div className="lbl">{label}</div>
      <div className="bar" />
    </div>
  )
}

export default function Stats() {
  return (
    <div className="stats-wrap">
      <div className="stats-prompt">$ whoami --stats</div>
      <div className="stats-bar">
        {stats.map((s) => <Stat key={s.label} {...s} />)}
      </div>
    </div>
  )
}
