import { useInView } from '../motion.js'

// Fades children in as they scroll into view, sliding from `from`: up | left | right | scale.
export default function Reveal({ children, className = '', from = 'up', delay = 0, as: Tag = 'div', ...rest }) {
  const [ref, inView] = useInView(0.15)

  return (
    <Tag
      ref={ref}
      className={`reveal ${from} ${inView ? 'in' : ''} ${className}`}
      style={{ '--delay': `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHead({ eyebrow, title, desc, center = false }) {
  return (
    <div className={`sec-head ${center ? 'center' : ''}`}>
      <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
      <Reveal delay={0.08}><h2 className="sec-title">{title}</h2></Reveal>
      {desc && <Reveal delay={0.16}><p className="sec-desc">{desc}</p></Reveal>}
    </div>
  )
}
