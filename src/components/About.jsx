import { useRef } from 'react'
import { statement } from '../data.js'
import { useScrollProgress, clamp } from '../motion.js'

const words = statement.flatMap((seg) => seg.text.split(' ').map((w) => ({ w, hl: seg.hl })))

// The section pins in place while each word lights up as you scroll.
export default function About() {
  const secRef = useRef(null)
  const wordRefs = useRef([])

  useScrollProgress(secRef, (p) => {
    const n = words.length
    const head = p * 1.15 * (n + 4)
    wordRefs.current.forEach((el, i) => {
      if (el) el.style.opacity = 0.14 + 0.86 * clamp((head - i) / 4)
    })
  })

  return (
    <section className="statement" id="about" ref={secRef}>
      <div className="statement-sticky">
        <div className="wrap">
          <span className="eyebrow">// about</span>
          <p className="statement-text">
            {words.map(({ w, hl }, i) => (
              <span key={i} ref={(el) => (wordRefs.current[i] = el)} className={`w ${hl ? 'grad-text' : ''}`}>{w} </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
