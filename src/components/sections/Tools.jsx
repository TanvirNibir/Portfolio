import { motion } from 'framer-motion'
import '../../styles/Tools.css'

const tools = [
  // Languages
  { name: 'Java', category: 'language' },
  { name: 'Python', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'HTML', category: 'language' },
  { name: 'CSS', category: 'language' },
  
  // Frameworks & Libraries
  { name: 'React', category: 'framework' },
  { name: 'Node.js', category: 'framework' },
  { name: 'Express', category: 'framework' },
  { name: 'Flask', category: 'framework' },
  { name: 'SQLAlchemy', category: 'framework' },
  { name: 'Mongoose', category: 'framework' },
  { name: 'JWT', category: 'framework' },
  { name: 'Axios', category: 'framework' },
  { name: 'Framer Motion', category: 'framework' },
  { name: 'Vite', category: 'framework' },
  
  // Databases
  { name: 'MongoDB', category: 'database' },
  { name: 'Firebase', category: 'database' },
  
  // Tools & Platforms
  { name: 'Git', category: 'tool' },
  { name: 'GitHub', category: 'tool' },
  { name: 'VS Code', category: 'tool' },
  { name: 'Cursor', category: 'tool' },
  { name: 'IntelliJ IDEA', category: 'tool' },
  { name: 'Postman', category: 'tool' },
  { name: 'Docker', category: 'tool' },
  { name: 'npm', category: 'tool' },
  { name: 'Chrome DevTools', category: 'tool' },
  
  // AI & Services
  { name: 'Gemini AI', category: 'ai' },
]

// Generate random positions for floating effect
const getRandomPosition = (index) => {
  const positions = [
    { x: '8%', y: '12%' },
    { x: '22%', y: '6%' },
    { x: '38%', y: '10%' },
    { x: '52%', y: '4%' },
    { x: '68%', y: '8%' },
    { x: '82%', y: '12%' },
    { x: '12%', y: '32%' },
    { x: '28%', y: '26%' },
    { x: '44%', y: '30%' },
    { x: '60%', y: '24%' },
    { x: '76%', y: '28%' },
    { x: '18%', y: '52%' },
    { x: '34%', y: '46%' },
    { x: '50%', y: '50%' },
    { x: '66%', y: '44%' },
    { x: '80%', y: '48%' },
    { x: '10%', y: '72%' },
    { x: '26%', y: '66%' },
    { x: '42%', y: '70%' },
    { x: '58%', y: '64%' },
    { x: '74%', y: '68%' },
    { x: '90%', y: '72%' },
    { x: '16%', y: '20%' },
    { x: '32%', y: '16%' },
    { x: '48%', y: '18%' },
    { x: '64%', y: '14%' },
    { x: '14%', y: '40%' },
    { x: '30%', y: '36%' },
    { x: '46%', y: '38%' },
    { x: '62%', y: '34%' },
  ]
  return positions[index % positions.length]
}

export default function Tools() {
  return (
    <section id="tools" className="tools">
      <div className="toolsContainer">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="toolsHeader"
        >
          <h2 className="toolsTitle">TOOLS I LOVE AND WORK WITH</h2>
        </motion.div>

        <div className="toolsGrid">
          {tools.map((tool, index) => {
            const position = getRandomPosition(index)
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                }}
                className="toolIcon"
                style={{
                  left: position.x,
                  top: position.y,
                }}
                whileHover={{ scale: 1.15, zIndex: 10 }}
              >
                <div className="toolCircle">
                  <span className="toolName">{tool.name}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

