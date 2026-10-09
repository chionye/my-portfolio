import { useState } from 'react'
import Icon from './Icon.jsx'
import Reveal, { SectionHead } from './Reveal.jsx'

const details = [
  { icon: 'mail', label: 'Email', value: 'michael.chionye@gmail.com', href: 'mailto:michael.chionye@gmail.com' },
  { icon: 'phone', label: 'Phone', value: '+234 703 121 5032', href: 'tel:+2347031215032' },
  { icon: 'map-pin', label: 'Location', value: 'Lagos, Nigeria (Remote)' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:michael.chionye@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="section contact-sec" id="contact">
      <div className="section-grid" aria-hidden="true"><div className="dots" /></div>
      <div className="wrap contact">
        <div>
          <SectionHead
            eyebrow="// contact"
            title={<>Let's build something <span className="grad-text">great together</span></>}
            desc="Have a product to ship or a team that needs a frontend lead? Send a message and I'll get back to you."
          />
          <div className="contact-list">
            {details.map((d, i) => {
              const Tag = d.href ? 'a' : 'div'
              return (
                <Reveal key={d.label} from="left" delay={0.1 + i * 0.08}>
                  <Tag className="contact-item" href={d.href}>
                    <span className="itile"><Icon name={d.icon} size={18} /></span>
                    <span><small>{d.label}</small>{d.value}</span>
                  </Tag>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal from="right" delay={0.1}>
          <form className="card form-card spot" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="c-name">Name</label>
              <input id="c-name" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" type="email" placeholder="email@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="c-msg">Message</label>
              <textarea id="c-msg" rows="5" placeholder="Hello Valentine, I'm interested in..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <button type="submit" className="btn btn-primary btn-block magnetic">
              Send message <Icon name="send" size={16} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
