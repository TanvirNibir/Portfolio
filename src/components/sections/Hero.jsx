import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import '../../styles/Hero.css'

export default function Hero() {

  return (
    <section id="home" className="hero">
      <div className="heroContainer">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heroContent"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heroImageWrapper"
          >
            <img
              src="/images/about/Home.jpeg"
              alt="Tanvir Nibir"
              className="heroImage"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="heroImagePlaceholder" style={{ display: 'none' }}>
              <span>TN</span>
            </div>
          </motion.div>
          <div className="heroText">
            <h1 className="heroTitle">
              Hi, I'm <span className="heroTitleAccent">Tanvir Nibir</span>
            </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heroSubtitle"
          >
            Software Engineering Student | Mobile Development Major | Crafting Android & Web Experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="heroButtons"
          >
            <a
              href="https://github.com/TanvirNibir"
              target="_blank"
              rel="noopener noreferrer"
              className="buttonGithub"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tanvirnibir/"
              target="_blank"
              rel="noopener noreferrer"
              className="buttonLinkedIn"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:tanvir.nibir@metropolia.fi"
              className="buttonContact"
            >
              <Mail size={20} />
              Contact
            </a>
          </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/about" className="scrollButton" aria-label="Go to about page">
                <span>Learn more about me</span>
                <ArrowDown size={20} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

