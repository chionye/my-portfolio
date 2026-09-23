import { useMemo } from 'react'
import { logEntries } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Contributions() {
  const cells = useMemo(() => Array.from({ length: 168 }, () => Math.random()), [])

  return (
    <section>
      <div className="sechead"><h2>Contribution Activity</h2><span className="comment">git.push(daily_progress)</span></div>
      <div className="contrib">
        <Reveal>
          <div style={{ fontSize: 11, color: 'var(--dim)', marginBottom: 10 }}>
            GITHUB CONTRIBUTIONS <span style={{ float: 'right' }}>Last 12 months</span>
          </div>
          <div className="gh">
            {cells.map((r, i) => (
              <div
                key={i}
                className="cell"
                title={`${Math.floor(r * 8)} contributions`}
                style={{ background: r > 0.85 ? 'var(--pink)' : r > 0.7 ? 'var(--violet)' : r > 0.5 ? '#3a2e5c' : '#1a1a26' }}
              />
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div style={{ fontSize: 11, color: 'var(--dim)', marginBottom: 10 }}>RECENT LOG</div>
          <ul className="log">
            {logEntries.map((l, i) => <li key={i}>&#8226; {l}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
