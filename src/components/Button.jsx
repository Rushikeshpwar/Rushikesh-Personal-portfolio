import { Link } from 'react-router-dom'

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const baseClasses =
    'focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 select-none cursor-pointer'

  const variants = {
    primary:
      'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-blue-600 hover:shadow-primary/40 active:scale-[0.98]',
    outline:
      'border border-white/10 bg-white/5 text-text hover:border-accent hover:bg-accent/10 hover:text-accent active:scale-[0.98]',
    ghost:
      'text-text-muted hover:bg-white/5 hover:text-text active:scale-[0.98]',
  }

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  )
}
