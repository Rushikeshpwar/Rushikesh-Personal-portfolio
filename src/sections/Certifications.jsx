import { motion } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import { certifications, extracurricular } from '../data/experience'
import SectionHeading from '../components/SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <SectionHeading title="Certifications & Activities" />

      <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
        <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col justify-between rounded-2xl border border-white/5 bg-card/50 p-4 sm:p-6 transition-colors hover:border-accent/30"
            >
              <div>
                <FiAward className="mb-2.5 sm:mb-3 text-xl sm:text-2xl text-accent transition-transform group-hover:scale-110" />
                <h3 className="font-display text-sm sm:text-base font-semibold text-text">{c.title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-text-muted">{c.issuer}</p>
                {c.desc && (
                  <p className="mt-2 text-xs text-text-muted/80 leading-relaxed">{c.desc}</p>
                )}
              </div>
              {c.certificateUrl && (
                <div className="mt-4">
                  <a
                    href={c.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    View Document <FiExternalLink className="text-[10px]" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/5 bg-card/50 p-4 sm:p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-display text-base font-semibold text-text">Technical Highlights & Learning</h3>
            <ul className="mt-3.5 sm:mt-4 space-y-2.5 sm:space-y-3">
              {extracurricular.map((item, i) => (
                <li key={i} className="flex gap-2 text-xs sm:text-sm leading-relaxed text-text-muted">
                  <span className="mt-1.5 sm:mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border-t border-white/5 pt-4">
            <p className="font-mono text-xs text-text-muted">
              Actively exploring microservices, AI integrations, and cloud architectures.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
