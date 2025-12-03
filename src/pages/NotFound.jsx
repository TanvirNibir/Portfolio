import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/NotFound.css'

export default function NotFound() {
  return (
    <div className="notFound">
      <div className="notFoundContainer">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="notFoundContent"
        >
          <h1 className="notFoundTitle">404</h1>
          <h2 className="notFoundSubtitle">Page Not Found</h2>
          <p className="notFoundDescription">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="notFoundButton">
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

