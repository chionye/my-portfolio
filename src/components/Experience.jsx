import { experience } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience">
      <div className="sechead"><h2>Professional Experience</h2><span className="comment">// history.log()</span></div>
      <div className="timeline">
        {experience.map((e) => (
          <Reveal key={e.role} className="tl-item">
            <span className="when">{e.when}</span>
            <h3>{e.role}</h3>
            <div className="co">{e.co}</div>
            <p>{e.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
