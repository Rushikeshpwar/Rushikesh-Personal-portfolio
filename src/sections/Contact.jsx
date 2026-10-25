import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { profile } from '../data/profile'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim()) e.email = 'Please enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.subject.trim()) e.subject = 'Please add a subject.'
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = 'Message should be at least 10 characters.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      toast.info(`Opening your email client to send the message directly to ${profile.email}...`)
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(`Hi Rushikesh,\n\n${form.message}\n\nFrom: ${form.name} (${form.email})`)}`
      setForm(initialForm)
      return
    }

    setSending(true)
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          name: form.name,
          from_email: form.email,
          email: form.email,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
        },
        publicKey
      )
      toast.success('Message sent! Rushikesh will get back to you soon.')
      setForm(initialForm)
    } catch (err) {
      console.error(err)
      toast.error('Something went wrong sending your message. Please try emailing directly.')
    } finally {
      setSending(false)
    }
  }

  const contactCards = [
    { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: FiMapPin, label: 'Location', value: profile.location, href: null },
    { icon: FiGithub, label: 'GitHub', value: 'Rushikeshpwar', href: profile.github },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'rushikesh50', href: profile.linkedin },
  ]

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <SectionHeading
        title="Let's Work Together"
        subtitle="Open to Full-Time, Internship, and contract software development opportunities — reach out and I'll respond as soon as I can."
      />

      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-3 sm:gap-4">
          {contactCards.map((c) => (
            <div key={c.label} className="flex items-center gap-3 sm:gap-4 rounded-xl border border-white/5 bg-card/50 p-3.5 sm:p-4 transition-all hover:border-accent/30 overflow-hidden">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-accent text-base sm:text-lg">
                <c.icon />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-text-muted">{c.label}</p>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="focus-ring block truncate text-xs sm:text-sm text-text hover:text-accent font-medium transition-colors"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="truncate text-xs sm:text-sm text-text font-medium">{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-white/5 bg-card/50 p-4 sm:p-6 md:p-8"
        >
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs text-text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="focus-ring w-full rounded-xl border border-white/10 bg-dark px-4 py-2.5 text-base sm:text-sm text-text placeholder:text-text-muted"
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs text-text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="focus-ring w-full rounded-xl border border-white/10 bg-dark px-4 py-2.5 text-base sm:text-sm text-text placeholder:text-text-muted"
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-4 sm:mt-5">
            <label htmlFor="subject" className="mb-1.5 block text-xs text-text-muted">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="focus-ring w-full rounded-xl border border-white/10 bg-dark px-4 py-2.5 text-base sm:text-sm text-text placeholder:text-text-muted"
              placeholder="What's this about?"
            />
            {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
          </div>

          <div className="mt-4 sm:mt-5">
            <label htmlFor="message" className="mb-1.5 block text-xs text-text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="focus-ring w-full resize-none rounded-xl border border-white/10 bg-dark px-4 py-2.5 text-base sm:text-sm text-text placeholder:text-text-muted"
              placeholder="Tell me a bit about the role, project, or collaboration..."
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

          <Button type="submit" variant="primary" className="mt-5 sm:mt-6 w-full sm:w-auto" disabled={sending}>
            <FiSend /> {sending ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
