import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiStar, FiUsers, FiGitBranch, FiTrendingUp, FiExternalLink } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

const USERNAME = 'Rushikeshpwar'

const fallbackStats = {
  public_repos: 12,
  followers: 5,
  following: 8,
  avatar_url: '/profilePic.jpeg',
  name: 'Rushikesh Pawar',
  login: 'Rushikeshpwar',
  bio: 'Full-Stack Developer | MERN Stack Enthusiast specializing in React.js, Node.js, and scalable web apps.',
  stars: 6,
  topLanguages: [
    { name: 'JavaScript', percentage: 52 },
    { name: 'React / JSX', percentage: 28 },
    { name: 'HTML / CSS', percentage: 12 },
    { name: 'TypeScript', percentage: 8 },
  ],
  topics: [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Socket.IO',
    'Tailwind CSS',
    'REST APIs',
    'JWT Security',
    'Docker',
    'Redux Toolkit',
    'Git & GitHub',
  ],
  featuredRepos: [
    {
      id: 1,
      name: 'WhatsApp-Clone-MERN',
      description: 'Full-stack real-time messaging platform with Socket.IO, OTP verification, and Cloudinary.',
      html_url: 'https://github.com/Rushikeshpwar/WhatsApp-Clone-MERN',
      language: 'JavaScript',
      stargazers_count: 2,
      forks_count: 1,
    },
    {
      id: 2,
      name: 'Food-Villa-Portfolio',
      description: 'Interactive food ordering application with Redux Toolkit and REST APIs.',
      html_url: 'https://github.com/Rushikeshpwar/Food-Villa-Portfolio',
      language: 'JavaScript',
      stargazers_count: 2,
      forks_count: 0,
    },
    {
      id: 3,
      name: 'News-App',
      description: 'Live headline aggregator with category filters and asynchronous REST feeds.',
      html_url: 'https://github.com/Rushikeshpwar/News-App',
      language: 'JavaScript',
      stargazers_count: 1,
      forks_count: 0,
    },
    {
      id: 4,
      name: 'Text-to-Audio',
      description: 'Speech synthesis browser web app converting text to realistic voice via Web Speech API.',
      html_url: 'https://github.com/Rushikeshpwar/Text-to-Audio',
      language: 'JavaScript',
      stargazers_count: 1,
      forks_count: 0,
    },
  ],
}

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = parseInt(value, 10)
    if (isNaN(end) || end <= 0) {
      setCount(end || 0)
      return
    }

    const duration = 1000
    const stepTime = Math.max(Math.floor(duration / end), 20)

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) {
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [value])

  return <span>{count}</span>
}

function SkeletonLoader() {
  return (
    <div className="grid gap-6 animate-pulse">
      <div className="flex flex-col md:flex-row items-center gap-6 rounded-2xl border border-white/5 bg-card/20 p-6">
        <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white/5" />
        <div className="flex-1 space-y-3">
          <div className="h-6 w-48 rounded bg-white/5" />
          <div className="h-4 w-32 rounded bg-white/5" />
          <div className="h-4 w-full max-w-xl rounded bg-white/5" />
        </div>
        <div className="h-10 w-32 rounded-full bg-white/5" />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-28 rounded-2xl border border-white/5 bg-card/20 p-6 flex flex-col items-center justify-center space-y-2">
            <div className="h-6 w-6 rounded bg-white/5" />
            <div className="h-8 w-16 rounded bg-white/5" />
            <div className="h-4 w-24 rounded bg-white/5" />
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="h-64 rounded-2xl border border-white/5 bg-card/20 p-6" />
        <div className="h-64 rounded-2xl border border-white/5 bg-card/20 p-6" />
      </div>
    </div>
  )
}

export default function GithubStats() {
  const [stats, setStats] = useState(fallbackStats)
  const [loading, setLoading] = useState(true)

  const fetchStats = async () => {
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${USERNAME}`),
        fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`),
      ])

      let user = null
      let repos = []

      if (userRes.ok) {
        user = await userRes.json()
      }
      if (reposRes.ok) {
        repos = await reposRes.json()
      }

      if (!user && (!repos || repos.length === 0)) {
        setStats(fallbackStats)
        setLoading(false)
        return
      }

      const stars = Array.isArray(repos)
        ? repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
        : fallbackStats.stars

      const totalReposWithLang = Array.isArray(repos)
        ? repos.filter((r) => r.language).length
        : 0

      const langCount = {}
      const topicsSet = new Set()

      if (Array.isArray(repos)) {
        repos.forEach((r) => {
          if (r.language) {
            langCount[r.language] = (langCount[r.language] || 0) + 1
          }
          if (r.topics && Array.isArray(r.topics)) {
            r.topics.forEach((t) => topicsSet.add(t))
          }
        })
      }

      const topLanguages = Object.entries(langCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, count]) => ({
          name,
          percentage: totalReposWithLang ? Math.round((count / totalReposWithLang) * 100) : 0,
        }))

      const fetchedTopics = Array.from(topicsSet)
        .map((t) => t.replace(/-/g, ' '))
        .slice(0, 15)

      const featuredRepos = Array.isArray(repos)
        ? repos
            .filter((r) => !r.fork)
            .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
            .slice(0, 4)
        : fallbackStats.featuredRepos

      setStats({
        public_repos: user?.public_repos ?? fallbackStats.public_repos,
        followers: user?.followers ?? fallbackStats.followers,
        following: user?.following ?? fallbackStats.following,
        avatar_url: user?.avatar_url || fallbackStats.avatar_url,
        name: user?.name || user?.login || fallbackStats.name,
        login: user?.login || USERNAME,
        bio: user?.bio || fallbackStats.bio,
        stars: stars > 0 ? stars : fallbackStats.stars,
        topLanguages: topLanguages.length > 0 ? topLanguages : fallbackStats.topLanguages,
        topics: fetchedTopics.length > 0 ? fetchedTopics : fallbackStats.topics,
        featuredRepos: featuredRepos.length > 0 ? featuredRepos : fallbackStats.featuredRepos,
      })
      setLoading(false)
    } catch (e) {
      console.warn('GitHub stats live fetch notice:', e)
      setStats(fallbackStats)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  return (
    <section id="github" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <SectionHeading
        title="Open Source & GitHub Activity"
        subtitle="Real-time analytics and code contributions directly from my public repositories."
      />

      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="space-y-6 sm:space-y-8">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 rounded-2xl border border-white/10 bg-card/50 p-4 sm:p-6 md:p-8"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left">
              <img
                src={stats.avatar_url}
                alt={stats.name}
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-primary/40 object-cover shadow-lg"
              />
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-text flex items-center gap-2 justify-center sm:justify-start">
                  {stats.name}
                  <span className="font-mono text-xs font-normal text-text-muted">
                    (@{stats.login})
                  </span>
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-text-muted max-w-xl">{stats.bio}</p>
              </div>
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-xl bg-primary px-5 py-2.5 font-mono text-xs font-semibold text-white shadow-lg shadow-primary/20 hover:bg-blue-600 transition-colors shrink-0"
            >
              <FiGithub className="text-base" /> View on GitHub
            </a>
          </motion.div>

          {/* Stat counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4"
          >
            {[
              { label: 'Public Repos', value: stats.public_repos, icon: FiGitBranch, color: 'text-primary' },
              { label: 'Total Stars', value: stats.stars, icon: FiStar, color: 'text-yellow-400' },
              { label: 'Followers', value: stats.followers, icon: FiUsers, color: 'text-accent' },
              { label: 'Following', value: stats.following, icon: FiTrendingUp, color: 'text-emerald-400' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/5 bg-card/40 p-3.5 sm:p-5 text-center transition-all duration-300 hover:border-accent/30 hover:-translate-y-1"
              >
                <stat.icon className={`mx-auto mb-1.5 sm:mb-2 text-xl sm:text-2xl ${stat.color}`} />
                <p className="font-display text-xl sm:text-2xl font-bold text-text">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="mt-1 font-mono text-[11px] sm:text-xs text-text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Languages & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="grid gap-4 sm:gap-6 lg:grid-cols-2"
          >
            <div className="rounded-2xl border border-white/10 bg-card/50 p-4 sm:p-6">
              <h3 className="font-display text-base sm:text-lg font-semibold text-text">Top Languages</h3>
              <p className="mt-1 text-xs text-text-muted mb-4 sm:mb-5">Primary languages across public repositories.</p>

              <div className="space-y-3 sm:space-y-4">
                {stats.topLanguages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-xs font-mono text-text-muted mb-1.5">
                      <span>{lang.name}</span>
                      <span>{lang.percentage}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card/50 p-4 sm:p-6">
              <h3 className="font-display text-base sm:text-lg font-semibold text-text">Technologies I Work With</h3>
              <p className="mt-1 text-xs text-text-muted mb-4 sm:mb-5">Tech ecosystem from my public projects & repositories.</p>

              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {stats.topics.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/30 bg-accent/10 px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs text-accent font-mono capitalize"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Analytics Cards: GitHub Stats & GitHub Streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid gap-4 sm:gap-6 md:grid-cols-2"
          >
            {/* GitHub Stats Card — Visual summary of activity */}
            <div className="rounded-2xl border border-white/10 bg-card/50 p-4 sm:p-6 flex flex-col justify-between">
              <div className="w-full flex items-center justify-between mb-3 sm:mb-4">
                <div>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-text">GitHub Stats</h3>
                  <p className="text-xs text-text-muted mt-0.5">Visual summary of GitHub activity</p>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-blue-400 bg-blue-500/10 px-2 sm:px-2.5 py-1 rounded-full border border-blue-500/20 font-mono font-semibold shrink-0">
                  <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                  Live Stats
                </span>
              </div>
              <div className="w-full flex justify-center items-center py-2 overflow-hidden min-h-[160px]">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&include_all_commits=true&count_private=true&hide_border=true&bg_color=00000000&title_color=3b82f6&icon_color=60a5fa&text_color=f8fafc&cache_seconds=1800`}
                  alt="GitHub Stats Card"
                  className="w-full max-w-[420px] h-auto object-contain transition-all duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = `https://github-readme-stats-eight-theta.vercel.app/api?username=${USERNAME}&show_icons=true&include_all_commits=true&count_private=true&hide_border=true&bg_color=00000000&title_color=3b82f6&icon_color=60a5fa&text_color=f8fafc`
                  }}
                />
              </div>
            </div>

            {/* GitHub Streak Card — Current & longest streak */}
            <div className="rounded-2xl border border-white/10 bg-card/50 p-4 sm:p-6 flex flex-col justify-between">
              <div className="w-full flex items-center justify-between mb-3 sm:mb-4">
                <div>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-text">Contribution Streak</h3>
                  <p className="text-xs text-text-muted mt-0.5">Current and longest contribution streak</p>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-emerald-400 bg-emerald-500/10 px-2 sm:px-2.5 py-1 rounded-full border border-emerald-500/20 font-mono font-semibold shrink-0">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Streak
                </span>
              </div>
              <div className="w-full flex justify-center items-center py-2 overflow-hidden min-h-[160px]">
                <img
                  src={`https://streak-stats.demolab.com/?user=${USERNAME}&background=00000000&hide_border=true&ring=3b82f6&fire=3b82f6&currStreakNum=3b82f6&currStreakLabel=60a5fa&sideNums=f8fafc&sideLabels=94a3b8&dates=64748b`}
                  alt="GitHub Streak Card"
                  className="w-full max-w-[420px] h-auto object-contain transition-all duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = `https://streak-stats.demolab.com/?user=${USERNAME}&theme=dark&hide_border=true&ring=3b82f6&fire=10b981&currStreakNum=10b981&sideNums=ffffff&sideLabels=ffffff&dates=e2e8f0`
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Live Public Repositories Grid */}
          {stats.featuredRepos && stats.featuredRepos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="space-y-4 pt-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-text">Popular Repositories</h3>
                  <p className="text-xs text-text-muted">Direct from GitHub API with live repository metrics.</p>
                </div>
                <a
                  href={`https://github.com/${USERNAME}?tab=repositories`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-accent hover:underline inline-flex items-center gap-1"
                >
                  View all ({stats.public_repos}) →
                </a>
              </div>

              <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                {stats.featuredRepos.map((repo) => (
                  <a
                    key={repo.id || repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col justify-between rounded-xl border border-white/5 bg-card/40 p-4 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:bg-card/60"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-display text-sm sm:text-base font-semibold text-text group-hover:text-accent transition-colors flex items-center gap-2 truncate">
                          <FiGitBranch className="shrink-0 text-accent text-sm" />
                          <span className="truncate">{repo.name}</span>
                        </h4>
                        <FiExternalLink className="shrink-0 text-xs text-text-muted group-hover:text-accent transition-colors" />
                      </div>
                      <p className="mt-1.5 text-xs text-text-muted line-clamp-2 leading-relaxed">
                        {repo.description || 'Full-stack repository on GitHub.'}
                      </p>
                    </div>

                    <div className="mt-3.5 flex items-center gap-4 text-xs font-mono text-text-muted">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-accent" />
                          <span>{repo.language}</span>
                        </span>
                      )}
                      <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                        <FiStar className="text-[11px]" /> {repo.stargazers_count ?? 0}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex w-fit items-center gap-2 font-mono text-xs sm:text-sm text-accent hover:underline pt-2"
          >
            <FiGithub /> Explore All Repositories on GitHub →
          </a>
        </div>
      )}
    </section>
  )
}
