import { motion } from 'framer-motion'
import { Code, FolderKanban, Award, Coffee } from 'lucide-react'
import '../../styles/QuickStats.css'

const stats = [
  {
    icon: FolderKanban,
    value: '3+',
    label: 'Major Projects',
    description: 'Full-stack applications',
  },
  {
    icon: Code,
    value: '10+',
    label: 'Technologies',
    description: 'Languages & frameworks',
  },
  {
    icon: Award,
    value: '4.0',
    label: 'Average Grade',
    description: 'Academic excellence',
  },
  {
    icon: Coffee,
    value: '100',
    label: 'Credits Earned',
    description: 'University progress',
  },
]

export default function QuickStats() {
  return (
    <section className="quickStats">
      <div className="quickStatsContainer">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="quickStatsHeader"
        >
          <h2 className="quickStatsTitle">Quick Overview</h2>
          <p className="quickStatsSubtitle">
            A snapshot of my journey and achievements
          </p>
        </motion.div>

        <div className="quickStatsGrid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="quickStatCard"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="quickStatIconWrapper">
                <stat.icon className="quickStatIcon" />
              </div>
              <div className="quickStatContent">
                <div className="quickStatValue">{stat.value}</div>
                <div className="quickStatLabel">{stat.label}</div>
                <div className="quickStatDescription">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

