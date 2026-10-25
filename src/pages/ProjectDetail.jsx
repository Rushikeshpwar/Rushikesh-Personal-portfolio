import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/projects'
import Button from '../components/Button'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = projects.find((p) => p.id === projectId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  if (!project) {
    return <Navigate to="/404" replace />
  }

  const { name, tagline, tech, github, demo, features, image, overview, architecture } = project

  return (
    <article className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-20 pt-24 sm:pt-32 min-h-screen">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-20 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[150px]" />

      <Link
        to="/#projects"
        className="focus-ring inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-accent hover:underline mb-6 sm:mb-8"
      >
        <FiArrowLeft /> Back to projects
      </Link>

      <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1fr_2fr]">
        {/* Left Column - Sticky Meta Info */}
        <div className="space-y-5 sm:space-y-6 lg:sticky lg:top-28 lg:h-fit">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-2xl sm:text-4xl font-semibold leading-tight text-text"
            >
              {name}
            </motion.h1>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg font-light text-accent/90">{tagline}</p>
          </div>

          {image && (
            <div className="overflow-hidden rounded-xl border border-white/10 bg-dark/60">
              <img src={image} alt={name} className="w-full h-auto object-cover" />
            </div>
          )}

          <div className="border-t border-white/5 pt-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/5 bg-card/40 px-2.5 py-1 text-xs text-text-muted font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {(github || demo) && (
            <div className="border-t border-white/5 pt-6 flex flex-col gap-3">
              {github && (
                <Button href={github} variant="outline" className="w-full justify-center text-sm !py-2.5">
                  <FiGithub /> View Source Code
                </Button>
              )}
              {demo && (
                <Button href={demo} variant="primary" className="w-full justify-center text-sm !py-2.5">
                  <FiExternalLink /> Live Demo
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Right Column - Narrative Sections */}
        <div className="space-y-10 lg:pl-4">
          {overview && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="border-b border-white/5 pb-8"
            >
              <h2 className="font-display text-lg font-semibold text-text mb-3">
                Overview
              </h2>
              <p className="leading-relaxed text-text-muted text-sm sm:text-base">
                {overview}
              </p>
            </motion.div>
          )}

          {architecture && architecture.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="border-b border-white/5 pb-8"
            >
              <h2 className="font-display text-lg font-semibold text-text mb-3">
                Architecture & Implementation
              </h2>
              <ul className="space-y-3">
                {architecture.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm sm:text-base text-text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {features && features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="pt-2"
            >
              <h2 className="font-display text-lg font-semibold text-text mb-4">
                Core Features
              </h2>
              <ul className="space-y-3">
                {features.map((f, idx) => (
                  <li key={idx} className="flex gap-3 text-sm sm:text-base text-text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </article>
  )
}
