import { useMemo } from 'react'
import { logEntries } from '../data.js'
import { useInView } from '../motion.js'
import Icon from './Icon.jsx'
import Reveal, { SectionHead } from './Reveal.jsx'

const COLS = 24

export default function Contributions() {
  const cells = useMemo(() => Array.from({ length: COLS * 7 }, () => Math.random()), [])
  const [heatRef, inView] = useInView(0.3)

  return (
    <section className="section">
      <div className="wrap">
        <SectionHead center eyebrow="// git.push(daily_progress)" title="Contribution activity" />
        <div className="contrib">
          <Reveal from="left">
            <div className="card contrib-card spot">
              <div className="card-label"><span>GitHub contributions</span><span className="mono">Last 12 months</span></div>
              <div className={`heat ${inView ? 'in' : ''}`} ref={heatRef}>
                {cells.map((r, i) => (
                  <div
                    key={i}
                    className={`hcell l${r > 0.85 ? 4 : r > 0.7 ? 3 : r > 0.5 ? 2 : r > 0.3 ? 1 : 0}`}
                    title={`${Math.floor(r * 8)} contributions`}
                    style={{ '--d': `${(i % COLS) * 0.025 + Math.floor(i / COLS) * 0.02}s` }}
                  />
                ))}
              </div>
              <div className="heat-legend mono">Less <i className="hcell l0" /><i className="hcell l1" /><i className="hcell l2" /><i className="hcell l3" /><i className="hcell l4" /> More</div>
            </div>
          </Reveal>
          <Reveal from="right" delay={0.08}>
            <div className="card contrib-card spot">
              <div className="card-label"><span>Recent log</span></div>
              <ul className="log">
                {logEntries.map((l) => (
                  <li key={l}><span className="log-ico"><Icon name="git-merge" size={14} /></span>{l}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
