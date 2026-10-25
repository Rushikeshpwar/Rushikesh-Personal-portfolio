import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-4 sm:px-6 text-center">
      <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-accent">404 Error</p>
      <h1 className="mt-2.5 sm:mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-3 sm:mt-4 max-w-md text-xs sm:text-sm text-text-muted">
        The page or project case study you're looking for doesn't exist or has been moved.
      </p>
      <div className="mt-6 sm:mt-8">
        <Link to="/">
          <Button variant="primary">Return to Home</Button>
        </Link>
      </div>
    </div>
  )
}
