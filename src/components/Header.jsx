import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'

const links = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      setScrolled(y > 24)
      const max = document.documentElement.scrollHeight - window.innerHeight
      barRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll) }
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: '-45% 0px -50% 0px' })
    links.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div className="progress" ref={barRef} />
      <header className={`nav ${scrolled ? 'scrolled' : ''} ${open ? 'open' : ''}`}>
        <nav className="nav-inner">
          <a href="#top" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">V</span>
            Valentine Michael
          </a>
          <div className="links">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''}>{l.label}</a>
            ))}
          </div>
          <a className="btn btn-primary btn-sm magnetic nav-cta" href="#contact">
            Let's talk <Icon name="arrow-right" size={16} />
          </a>
          <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <Icon name={open ? 'x' : 'menu'} size={20} />
          </button>
        </nav>
        <div className="mobile-menu">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
      </header>
    </>
  )
}
