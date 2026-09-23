import { useEffect, useState } from 'react'
import { projects } from '../data.js'

const dotColor = { web: 'var(--violet)', mobile: 'var(--pink)' }

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const filtered = projects.filter((p) => filter === 'all' || p.cat === filter)
  const [active, setActive] = useState(filtered[0]?.name)

  useEffect(() => {
    if (!filtered.find((p) => p.name === active)) {
      setActive(filtered[0]?.name)
    }
  }, [filter]) // eslint-disable-line react-hooks/exhaustive-deps

  const current = filtered.find((p) => p.name === active) || filtered[0]

  return (
    <section id="projects">
      <div className="sechead">
        <h2>Featured Projects</h2>
        <div className="filters">
          {['all', 'web', 'mobile'].map((f) => (
            <div key={f} className={`fbtn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f === 'all' ? 'All' : f[0].toUpperCase() + f.slice(1)}
            </div>
          ))}
        </div>
      </div>

      <div className="proj-explorer">
        <div className="proj-list">
          {filtered.map((p) => (
            <div
              key={p.name}
              className={`proj-row ${current && p.name === current.name ? 'active' : ''}`}
              onMouseEnter={() => setActive(p.name)}
              onClick={() => setActive(p.name)}
            >
              <span className="dot2" style={{ background: dotColor[p.cat] }} />
              {p.name}
            </div>
          ))}
        </div>

        {current && (
          <div className="proj-preview">
            <span className="badge">{current.tag}</span>
            <h3>{current.name}</h3>
            <p>{current.desc}</p>
            <div className="techline">{current.tech}</div>
            <a className="openbtn" href={current.url} target="_blank" rel="noreferrer">$ open --live &#8594;</a>
          </div>
        )}
      </div>
    </section>
  )
}
