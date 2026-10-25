import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const qualities = [
  'Architects scalable web applications with React.js & Node.js',
  'Implements JWT authentication, OpenFGA RBAC & ZITADEL security',
  'Designs real-time event-driven systems using Socket.IO',
  'Containerizes microservices using Docker for consistent CI/CD',
  'Manages complex state seamlessly with Redux Toolkit & Zustand',
  'Passionate about writing clean, maintainable code & Agile delivery',
]

const timeline = [
  {
    year: '2021 – 2025',
    title: 'B.Tech in Computer Science & Technology',
    desc: 'Completed engineering at Department of Technology, Shivaji University, Kolhapur (GPA: 7.30). Built robust foundations in OOP, Data Structures, DBMS, and Web Architecture.',
  },
  {
    year: 'Jan – Apr 2025',
    title: 'Industrial Training — KiranAcademy',
    desc: 'Completed intensive backend development training in Pune, developing the "Inventory Analyzer" web application with persistent relational models and CRUD endpoints.',
  },
  {
    year: 'Feb – Aug 2026',
    title: 'Software Development Intern — Edso Services',
    desc: 'Contributed 7 months to an AI-powered HRMS platform in Pune. Integrated JWT, OpenFGA RBAC, ZITADEL identity federation, and Dockerized microservices.',
  },
  {
    year: '2026',
    title: 'MERN Real-Time Applications',
    desc: 'Engineered high-performance applications including WhatsApp-like Instant Chat (Socket.IO, OTP, Cloudinary) and Food Villa (Redux Toolkit, REST APIs).',
  },
  {
    year: 'Now',
    title: 'Open to Opportunities',
    desc: 'Actively seeking Full-Stack Developer, MERN Stack Developer, or Software Engineer positions to build secure, scalable, and high-impact digital products.',
  },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <SectionHeading title="About Me" />

      <div className="grid gap-10 sm:gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed text-text-muted"
        >
          <p>
            I'm a <span className="text-text font-medium">Full-Stack MERN Developer</span> with 7 months of hands-on industry experience building business-focused web applications. I focus on developing clean, responsive React frontends and integrating them with resilient Node.js backends and secure RESTful APIs.
          </p>

          <p>
            During my internship at <span className="text-text font-medium">Edso Services Pvt. Ltd.</span>, I contributed to an AI-powered Human Resource Management platform where I integrated fine-grained authorization with <span className="text-text font-medium">OpenFGA RBAC</span>, federated identity through <span className="text-text font-medium">ZITADEL</span>, and containerized deployment workflows using <span className="text-text font-medium">Docker</span>.
          </p>

          <p>
            I hold a B.Tech in Computer Science and Technology from Shivaji University, Kolhapur, and industrial training certification from KiranAcademy. My passion lies in solving real-world challenges through real-time architectures (Socket.IO), efficient database design (MongoDB, MySQL), and modern component-driven frontends.
          </p>

          <p>
            I'm currently seeking a full-time role where I can work with ambitious engineering teams, build scalable web architectures, optimize API performance, and deliver exceptional user experiences.
          </p>

          <div className="grid gap-2.5 sm:gap-3 pt-2 sm:grid-cols-2">
            {qualities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 sm:gap-3 rounded-xl border border-white/10 bg-card/40 p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-xs sm:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative border-l border-white/10 pl-6 sm:pl-8 ml-2 sm:ml-0"
        >
          {timeline.map((item) => (
            <div key={item.title} className="relative mb-8 sm:mb-10 last:mb-0">
              <span className="absolute -left-[1.82rem] sm:-left-[2.32rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-dark" />

              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                {item.year}
              </p>

              <h3 className="mt-1.5 sm:mt-2 font-display text-base sm:text-lg font-semibold text-text">
                {item.title}
              </h3>

              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
