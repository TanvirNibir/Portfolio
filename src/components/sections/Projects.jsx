import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import '../../styles/Projects.css'

const projects = [
  {
    title: 'MetroEval',
    description:
      'A production-grade, full-stack AI-powered feedback and peer review system for Metropolia University. Features Google Gemini AI integration for instant feedback generation, intelligent peer matching algorithms, comprehensive analytics dashboard, AI-generated flashcards, interactive tutor chat, and performance prediction models. Built with React, Flask, MongoDB, and advanced ML capabilities.',
    technologies: ['React', 'Flask', 'MongoDB', 'Python', 'Google Gemini AI', 'JavaScript', 'RESTful API', 'Machine Learning'],
    githubUrl: 'https://github.com/TanvirNibir/MetroEval',
    liveUrl: null,
    image: '/images/projects/MetroEval.jpeg',
  },
  {
    title: 'Bookish App',
    description:
      'A full-stack personal book management platform with AI-powered recommendations. Features JWT authentication, digital bookshelf organization, reading progress tracking, personal notes and reviews, image uploads, PDF export, and intelligent book suggestions powered by Google Gemini AI. Built with React, Node.js, Express, MongoDB, and modern web technologies.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Google Gemini AI', 'JavaScript', 'RESTful API'],
    githubUrl: 'https://github.com/TanvirNibir/Bookish-App',
    liveUrl: null,
    image: '/images/projects/bookish.webp',
  },
  {
    title: 'Coffee Machine POS System',
    description:
      'A premium full-stack web application for coffee store operations featuring a glassmorphism-designed POS system, admin dashboard, RESTful API, and comprehensive inventory management. Built with Flask, SQLAlchemy, and modern JavaScript with real product images, shopping cart functionality, multiple payment methods, and receipt generation.',
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'JavaScript', 'HTML', 'CSS', 'RESTful API'],
    githubUrl: 'https://github.com/TanvirNibir/Coffee_Machine',
    liveUrl: null,
    image: '/images/projects/coffeMachine.jpeg',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projectsContainer">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="projectsHeader"
        >
          <h2 className="projectsTitle">Featured Projects</h2>
          <div className="projectsDivider"></div>
          <p className="projectsDescription">
            A selection of projects I've worked on, showcasing my skills and
            experience.
          </p>
        </motion.div>

        <div className="projectsGrid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="projectCard"
            >
              <div className="projectImage">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projectImageImg"
                  />
                ) : (
                  <span className="projectImagePlaceholder">Project Image</span>
                )}
              </div>
              <div className="projectContent">
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectDescription">{project.description}</p>
                <div className="projectTechnologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="technologyTag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="projectLinks">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectLink"
                  >
                    <Github size={18} />
                    <span className="projectLinkText">Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projectLink"
                    >
                      <ExternalLink size={18} />
                      <span className="projectLinkText">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

