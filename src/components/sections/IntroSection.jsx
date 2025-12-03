import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Rocket } from 'lucide-react'
import '../../styles/IntroSection.css'

export default function IntroSection() {
  return (
    <section className="introSection">
      <div className="introContainer">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="introContent"
        >
          <div className="introText">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="introTitle"
            >
              Building the Future, One Line of Code at a Time
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="introDescription"
            >
              I'm a passionate Software Engineering student specializing in Mobile Development, 
              dedicated to creating innovative solutions that solve real-world problems. With expertise 
              in full-stack development, AI integration, and modern web technologies, I bring ideas to 
              life through clean, scalable code.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="introFeatures"
            >
              <div className="introFeature">
                <Code className="introFeatureIcon" />
                <span>Full-Stack Development</span>
              </div>
              <div className="introFeature">
                <Rocket className="introFeatureIcon" />
                <span>AI-Powered Solutions</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="introActions"
            >
              <Link to="/about" className="introButtonPrimary">
                <span>Learn More About Me</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="introButtonSecondary">
                View My Work
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

