import { motion } from 'framer-motion'
import { services } from '../data/social'
import SectionHeading from '../components/SectionHeading'
import {
  Laptop,
  MessageSquare,
  ShieldCheck,
  Layout,
  Database,
  Boxes,
} from 'lucide-react'

const icons = [Laptop, MessageSquare, ShieldCheck, Layout, Database, Boxes]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <SectionHeading
        title="What I Build"
        subtitle="End-to-end full-stack capabilities engineered to transform project requirements into production-ready software."
      />

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/5 bg-card/50 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30"
            >
              <div className="mb-3.5 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 text-lg sm:text-xl text-accent transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-base sm:text-lg font-semibold text-text">{s.title}</h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-text-muted">{s.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
