import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle, centered = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className={`mb-8 sm:mb-14 ${centered ? 'text-center' : ''}`}
    >
      <div className={`flex items-center gap-2.5 sm:gap-3 ${centered ? 'justify-center' : ''}`}>
        <span className="h-2 w-2 rounded-full bg-accent shrink-0" />
        <span className="section-eyebrow">{'// DISCOVER'}</span>
      </div>
      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 sm:mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-text-muted">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
