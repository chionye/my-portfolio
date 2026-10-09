import { useEffect, useRef, useState } from 'react'

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v))

// Flips to true the first time the element scrolls into view.
export function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        obs.disconnect()
      }
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView]
}

// Calls fn(progress) on every animation frame the page scrolls, where progress
// runs 0 → 1 while a tall element scrolls past a pinned (sticky) viewport.
export function useScrollProgress(ref, fn, deps = []) {
  const fnRef = useRef(fn)
  fnRef.current = fn

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight
      fnRef.current(total > 0 ? clamp(-r.top / total) : r.top < 0 ? 1 : 0, r)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}

// Spotlight (.spot), 3D tilt (.tilt) and magnetic pull (.magnetic) for every
// matching element, driven by one document-level pointer listener.
export function usePointerEffects() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const reduce = reducedMotion()
    let tiltEl = null
    let magEl = null
    const clear = (el, props) => el && props.forEach((p) => el.style.removeProperty(p))

    const onMove = (e) => {
      const t = e.target instanceof Element ? e.target : null
      if (!t) return

      const spot = t.closest('.spot')
      if (spot) {
        const r = spot.getBoundingClientRect()
        spot.style.setProperty('--mx', `${e.clientX - r.left}px`)
        spot.style.setProperty('--my', `${e.clientY - r.top}px`)
      }
      if (reduce) return

      const tilt = t.closest('.tilt')
      if (tilt !== tiltEl) { clear(tiltEl, ['--rx', '--ry']); tiltEl = tilt }
      if (tilt) {
        const r = tilt.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        tilt.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`)
        tilt.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`)
      }

      const mag = t.closest('.magnetic')
      if (mag !== magEl) { clear(magEl, ['--tx', '--ty']); magEl = mag }
      if (mag) {
        const r = mag.getBoundingClientRect()
        mag.style.setProperty('--tx', `${((e.clientX - r.left - r.width / 2) * 0.25).toFixed(1)}px`)
        mag.style.setProperty('--ty', `${((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1)}px`)
      }
    }
    const onLeave = () => {
      clear(tiltEl, ['--rx', '--ry']); tiltEl = null
      clear(magEl, ['--tx', '--ty']); magEl = null
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    return () => {
      document.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])
}
