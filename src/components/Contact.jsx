import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:michael.chionye@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact">
      <div className="sechead" style={{ justifyContent: 'center' }}><h2>contact_form.js</h2></div>
      <div className="term contact-term">
        <div className="term-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="term-title">contact.js</span></div>
        <div style={{ padding: 22 }}>
          <label>$ name --input</label>
          <input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <label>$ email --input</label>
          <input placeholder="email@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <label>$ message --write</label>
          <textarea rows="4" placeholder="Hello Valentine, I'm interested in..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button className="send" onClick={handleSubmit}>$ send --message</button>
        </div>
      </div>
    </section>
  )
}
