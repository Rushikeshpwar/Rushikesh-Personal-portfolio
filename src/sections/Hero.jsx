import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link as ScrollLink } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { profile } from '../data/profile'
import Button from '../components/Button'

export default function Hero() {
  const animationSequence = []
  profile.roles.forEach((role) => {
    animationSequence.push(role)
    animationSequence.push(2000)
  })

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 grid-bg"
    >
      {/* Ambient background glow orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-[100px] animate-float-slow" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px] animate-float" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 w-full grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-12 items-center">
        {/* Profile Photo Container */}
        <motion.div
          className="lg:col-span-5 order-1 lg:order-1 flex justify-center lg:justify-start"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="relative group w-full max-w-[190px] xs:max-w-[210px] sm:max-w-[260px] lg:max-w-[320px]">
            {/* Ambient glow behind photo */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-30 blur-lg group-hover:opacity-50 transition duration-500" />

            <div className="relative w-full h-auto overflow-hidden rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm shadow-2xl">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>

        {/* Welcome Text Content */}
        <motion.div
          className="lg:col-span-7 order-2 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-emerald-400 tracking-wider uppercase">
              Available for Hire
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-primary">{profile.name}</span>
          </h1>

          <div className="mt-3 sm:mt-4 font-mono text-lg sm:text-2xl text-accent min-h-[32px] sm:min-h-[36px]">
            {animationSequence.length > 0 && (
              <TypeAnimation
                key={profile.roles.join(',')}
                sequence={animationSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            )}
          </div>

          <p className="mt-4 sm:mt-6 max-w-xl leading-relaxed text-sm sm:text-base text-text-muted">
            {profile.tagline}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <a
              href={profile.resumeUrl}
              download="Rushikesh_Resume.pdf"
              className="focus-ring w-full sm:w-auto"
            >
              <Button variant="primary" className="w-full sm:w-auto text-xs sm:text-sm !py-2.5">
                <FiDownload /> Download Resume
              </Button>
            </a>
            <ScrollLink to="projects" smooth duration={500} offset={-80} className="w-[calc(50%-5px)] sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto text-xs sm:text-sm !py-2.5">
                View Projects
              </Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth duration={500} offset={-80} className="w-[calc(50%-5px)] sm:w-auto">
              <Button variant="ghost" className="w-full sm:w-auto text-xs sm:text-sm !py-2.5">
                Contact Me
              </Button>
            </ScrollLink>
          </div>

          <div className="mt-8 sm:mt-10 flex gap-4 justify-center lg:justify-start">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="focus-ring text-xl text-text-muted hover:text-accent transition-colors p-1"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="focus-ring text-xl text-text-muted hover:text-accent transition-colors p-1"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="focus-ring text-xl text-text-muted hover:text-accent transition-colors p-1"
            >
              <FiMail />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
