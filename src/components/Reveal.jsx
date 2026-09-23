import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('in')
        obs.disconnect()
      }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>
}
