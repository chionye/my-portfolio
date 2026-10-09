import { skillGroups } from '../data.js'
import { useInView } from '../motion.js'
import Icon from './Icon.jsx'
import Reveal, { SectionHead } from './Reveal.jsx'

const directions = ['left', 'up', 'right']

function SkillCard({ group }) {
  const [ref, inView] = useInView(0.3)

  return (
    <div className={`card skill-card tilt spot ${inView ? 'in' : ''}`} ref={ref}>
      <div className="skill-head">
        <span className="itile"><Icon name={group.icon} size={20} /></span>
        <div>
          <h3>{group.title}</h3>
          <span className="mono path">{group.path}</span>
        </div>
      </div>
      {group.skills.map((s, i) => (
        <div className="skill-row" key={s.name}>
          <div className="skill-top"><span>{s.name}</span><span className="mono pct">{s.pct}%</span></div>
          <div className="bar-track"><div className="fill" style={{ '--pct': s.pct / 100, '--d': `${0.2 + i * 0.08}s` }} /></div>
        </div>
      ))}
    </div>
  )
}

export default function TechStack() {
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="// stack"
          title="Tools I build with"
          desc="The languages, frameworks and infrastructure I reach for to ship web and mobile products end to end."
        />
        <div className="skills">
          {skillGroups.map((g, i) => (
            <Reveal key={g.path} from={directions[i % 3]} delay={i * 0.1}>
              <SkillCard group={g} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
