import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiSearch } from 'react-icons/fi'
import { projects } from '../data/projects'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const filters = ['All', 'MERN', 'React.js', 'Socket.IO', 'Node.js', 'Redux', 'Security']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter = filter === 'All' || p.tags.includes(filter)
      const matchesQuery =
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tagline.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.join(' ').toLowerCase().includes(query.toLowerCase())
      return matchesFilter && matchesQuery
    })
  }, [filter, query])

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <SectionHeading
        title="Featured Projects"
        subtitle="Real-world full-stack web applications, real-time communication systems, and responsive frontends engineered with modern industry practices."
      />

      <div className="mb-8 sm:mb-10 flex flex-col gap-3.5 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`focus-ring rounded-full border px-3 sm:px-4 py-1 sm:py-1.5 font-mono text-[11px] sm:text-xs transition-colors cursor-pointer ${
                filter === f
                  ? 'border-accent bg-accent/10 text-accent font-medium'
                  : 'border-white/10 text-text-muted hover:border-accent/40 hover:text-text'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="focus-ring w-full rounded-lg border border-white/10 bg-card/50 py-2 pl-9 pr-3 text-xs sm:text-sm text-text placeholder:text-text-muted"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
        {filtered.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            className="glass group flex flex-col rounded-2xl overflow-hidden p-4 sm:p-6 transition-transform duration-300 hover:-translate-y-1.5"
          >
            {p.image && (
              <div className="mb-4 sm:mb-5 overflow-hidden rounded-xl border border-white/10 bg-dark/60">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-40 sm:h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}

            <div className="mb-2.5 sm:mb-3 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-2 sm:px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] text-accent">
                  {t}
                </span>
              ))}
            </div>

            <h3 className="font-display text-lg sm:text-xl font-semibold text-text">{p.name}</h3>
            <p className="mt-1 text-xs sm:text-sm text-primary">{p.tagline}</p>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-text-muted">{p.description}</p>

            <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="rounded bg-white/5 px-2 py-0.5 text-[10px] sm:text-[11px] text-text-muted font-mono">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 pt-2">
              {p.detailPath && (
                <Button to={p.detailPath} variant="primary" className="!px-3 sm:!px-4 !py-2 text-xs flex-1 sm:flex-initial text-center justify-center">
                  Case Study →
                </Button>
              )}
              {p.github && (
                <Button href={p.github} variant="outline" className="!px-3 sm:!px-4 !py-2 text-xs flex-1 sm:flex-initial text-center justify-center">
                  <FiGithub /> Code
                </Button>
              )}
              {p.demo && (
                <Button href={p.demo} variant="ghost" className="!px-3 sm:!px-4 !py-2 text-xs flex-1 sm:flex-initial text-center justify-center">
                  <FiExternalLink /> Live Demo
                </Button>
              )}
            </div>
          </motion.article>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center text-text-muted">
            No projects match that search — try a different keyword or filter.
          </p>
        )}
      </div>
    </section>
  )
}
