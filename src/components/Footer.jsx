import Icon from './Icon.jsx'

const socials = [
  { icon: 'github', label: 'GitHub', href: 'https://github.com/chionye' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/valentine-michael' },
  { icon: 'phone', label: 'Phone', href: 'tel:+2347031215032' },
  { icon: 'mail', label: 'Email', href: 'mailto:michael.chionye@gmail.com' },
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <a href="#top" className="brand"><span className="brand-mark">V</span>Valentine Michael</a>
        <p>Designed &amp; developed by Valentine Michael © {new Date().getFullYear()}</p>
        <div className="socials">
          {socials.map((s) => (
            <a key={s.label} className="social magnetic" href={s.href} aria-label={s.label} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <Icon name={s.icon} size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
