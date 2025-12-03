import { motion } from 'framer-motion'
import { Code, Coffee, Rocket, GraduationCap, Award, Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react'
import '../../styles/About.css'

const features = [
  {
    icon: Code,
    title: 'Technical Expertise',
    description:
      'Proficient in Java object-oriented programming and modern web technologies including React and Node.js. Strong foundation in software design patterns and best practices. Currently exploring mobile development and Android technologies.',
  },
  {
    icon: Rocket,
    title: 'Project Development',
    description:
      'Experienced in developing end-to-end solutions from requirements analysis to deployment. Skilled in building scalable applications with clean architecture and maintainable codebases.',
  },
  {
    icon: Coffee,
    title: 'Professional Vision',
    description:
      'Committed to achieving excellence in software engineering through continuous learning, technical innovation, and contribution to impactful projects that solve real-world challenges.',
  },
]

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/Tanvir_Nibir_', label: 'Follow on X' },
  { icon: Instagram, href: 'https://www.instagram.com/callme.tanvirr/', label: 'Follow on Instagram' },
  { icon: Github, href: 'https://github.com/TanvirNibir', label: 'Follow on GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/tanvirnibir/', label: 'Follow on LinkedIn' },
  { icon: Mail, href: 'mailto:tanvir.nibir@metropolia.fi', label: 'tanvir.nibir@metropolia.fi', isEmail: true },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="aboutContainer">
        <div className="aboutMainContent">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aboutTextColumn"
          >
            <h2 className="aboutTitle">About Me</h2>
            <div className="aboutTextContent">
              <p className="aboutParagraph">
                I am a Software Engineering student at Metropolia University of Applied Sciences, specializing in 
                Mobile Development, with a strong foundation in software engineering principles and modern development 
                practices. My academic journey is complemented by hands-on experience building production-ready 
                applications across multiple technology stacks.
              </p>
              <p className="aboutParagraph">
                I am committed to excellence in software engineering, continuously expanding my expertise in 
                object-oriented programming, mobile development, and full-stack technologies. I am actively seeking 
                opportunities to contribute to innovative projects and collaborate with industry-leading teams, with 
                the ultimate goal of becoming the best of the best software engineer.
              </p>
              <p className="aboutParagraph">
                My journey with technology began with a curiosity about how software systems work, which has evolved 
                into a passion for building scalable, maintainable applications that solve real-world problems. 
                Today, I'm focused on mastering software engineering principles and contributing to impactful projects 
                that make a difference.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Profile Image & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aboutImageColumn"
          >
            <div className="aboutImageWrapper">
              <img
                src="/images/about/about.jpeg"
                alt="Tanvir Nibir"
                className="aboutProfileImage"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="aboutImagePlaceholder" style={{ display: 'none' }}>
                <span>TN</span>
              </div>
            </div>
            <div className="aboutSocialLinks">
              {socialLinks.map(({ icon: Icon, href, label, isEmail }) => (
                <a
                  key={label}
                  href={href}
                  target={isEmail ? undefined : '_blank'}
                  rel={isEmail ? undefined : 'noopener noreferrer'}
                  className="aboutSocialLink"
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="educationCard"
        >
          <div className="educationHeader">
            <GraduationCap className="educationIcon" />
            <div className="educationInfo">
              <h3 className="educationTitle">Education</h3>
              <p className="educationInstitution">Metropolia University of Applied Sciences</p>
              <p className="educationMajor">Software Engineering — Mobile Development Major</p>
            </div>
            <div className="educationStats">
              <Award className="awardIcon" />
              <div className="statsInfo">
                <span className="gradeLabel">Average Grade</span>
                <span className="gradeValue">4.0</span>
              </div>
            </div>
          </div>
          <div className="coursesSection">
            <h4 className="coursesTitle">Key Courses Completed</h4>
            <div className="coursesGrid">
              <div className="courseGroup">
                <span className="courseGroupTitle">Core Software Engineering</span>
                <div className="coursesList">
                  <span className="courseItem">Software 1</span>
                  <span className="courseItem">Software 2</span>
                  <span className="courseItem">Object-oriented Programming</span>
                  <span className="courseItem">Programming Project</span>
                </div>
              </div>
              <div className="courseGroup">
                <span className="courseGroupTitle">Web Development</span>
                <div className="coursesList">
                  <span className="courseItem">Web Development</span>
                  <span className="courseItem">Web Project</span>
                </div>
              </div>
              <div className="courseGroup">
                <span className="courseGroupTitle">Hardware & Systems</span>
                <div className="coursesList">
                  <span className="courseItem">Hardware 1</span>
                  <span className="courseItem">Hardware 2</span>
                </div>
              </div>
            </div>
            <div className="creditsInfo">
              <span className="creditsText">100 out of 240 credits completed</span>
            </div>
          </div>
        </motion.div>

        <div className="featuresGrid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="featureCard"
            >
              <feature.icon className="featureIcon" />
              <h3 className="featureTitle">{feature.title}</h3>
              <p className="featureDescription">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

