import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import '../../styles/FeaturedProjects.css'

const featuredProjects = [
  {
    title: 'MetroEval',
    description:
      'A production-grade, full-stack AI-powered feedback and peer review system for Metropolia University with Google Gemini AI integration.',
    technologies: ['React', 'Flask', 'MongoDB', 'Python', 'AI'],
    githubUrl: 'https://github.com/TanvirNibir/MetroEval',
    image: '/images/projects/MetroEval.jpeg',
  },
  {
    title: 'Bookish App',
    description:
      'A full-stack personal book management platform with AI-powered recommendations and comprehensive reading tracking features.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/TanvirNibir/Bookish-App',
    image: '/images/projects/bookish.webp',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="featuredProjects">
      <div className="featuredProjectsContainer">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="featuredProjectsHeader"
        >
          <h2 className="featuredProjectsTitle">Featured Projects</h2>
          <p className="featuredProjectsSubtitle">
            A glimpse into my recent work and technical expertise
          </p>
        </motion.div>

        <div className="featuredProjectsGrid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="featuredProjectCard"
            >
              <div className="featuredProjectImage">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="featuredProjectImg"
                  />
                ) : (
                  <div className="featuredProjectPlaceholder">
                    <span>{project.title}</span>
                  </div>
                )}
              </div>
              <div className="featuredProjectContent">
                <h3 className="featuredProjectTitle">{project.title}</h3>
                <p className="featuredProjectDescription">{project.description}</p>
                <div className="featuredProjectTechnologies">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="featuredTechTag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="featuredProjectLinks">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featuredProjectLink"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="featuredProjectsFooter"
        >
          <Link to="/projects" className="viewAllProjects">
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

