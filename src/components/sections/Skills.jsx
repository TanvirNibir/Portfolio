import { motion } from 'framer-motion'
import '../../styles/Skills.css'

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'HTML/CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Express', 'Flask', 'SQLAlchemy', 'Mongoose', 'JWT', 'Axios', 'Framer Motion', 'Vite'],
  },
  {
    category: 'Tools & Technologies',
    skills: ['Git/GitHub', 'VS Code', 'Cursor', 'IntelliJ IDEA', 'MongoDB', 'Firebase', 'Postman', 'Docker', 'npm', 'Chrome DevTools'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skillsContainer">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="skillsHeader"
        >
          <h2 className="skillsTitle">Skills & Technologies</h2>
          <div className="skillsDivider"></div>
        </motion.div>

        <div className="skillsGrid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="skillCategory"
            >
              <h3 className="categoryTitle">{category.category}</h3>
              <div className="skillsList">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="skillTag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

