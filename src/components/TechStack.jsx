import { useEffect, useRef } from 'react'
import { skillGroups } from '../data.js'

function SkillCol({ group }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('in')
        obs.disconnect()
      }
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="skillcol" ref={ref}>
      <div className="skillcol-head"><span className="folder">&#128193;</span>{group.path}</div>
      <div className="skillcol-body">
        {group.skills.map((s) => (
          <div className="skillrow" key={s.name}>
            <div className="skillrow-top"><span className="sname">{s.name}</span><span className="spct">{s.pct}%</span></div>
            <div className="skilltrack"><div className="skillfill" style={{ '--pct': `${s.pct}%` }} /></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="stack">
      <div className="sechead"><h2>Tech Stack</h2><span className="comment">// tools.filter(expertise &gt;= 8.5)</span></div>
      <div className="skills">
        {skillGroups.map((g) => <SkillCol key={g.path} group={g} />)}
      </div>
    </section>
  )
}
