import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
// import emailjs from '@emailjs/browser' // Uncomment when ready to use EmailJS
import '../../styles/Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Option 1: Use EmailJS if configured (uncomment and add your keys)
    // const serviceID = 'YOUR_SERVICE_ID'
    // const templateID = 'YOUR_TEMPLATE_ID'
    // const publicKey = 'YOUR_PUBLIC_KEY'
    
    // For now, using mailto as a working solution
    const subject = encodeURIComponent(`Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:tanvir.nibir@metropolia.fi?subject=${subject}&body=${body}`

    // Simulate sending (opens email client)
    setTimeout(() => {
      window.location.href = mailtoLink
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
      setIsSubmitting(false)
    }, 500)

    // Alternative: If you want to use EmailJS, uncomment below and comment the mailto approach
    /*
    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'tanvir.nibir@metropolia.fi',
        },
        publicKey
      )
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
    */
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="contactContainer">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contactHeader"
        >
          <h2 className="contactTitle">Get In Touch</h2>
          <div className="contactDivider"></div>
          <p className="contactDescription">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Send me a message and I'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="contactFormContainer">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contactForm"
          >
            <form onSubmit={handleSubmit} className="form">
              <div>
                <label htmlFor="name" className="formGroup">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="formInput"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="formGroup">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="formInput"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="formGroup">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="formTextarea"
                  placeholder="Your message..."
                />
              </div>
              <button type="submit" disabled={isSubmitting} className="submitButton">
                {isSubmitting ? (
                  'Sending...'
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <AlertCircle size={20} />
                    Try Again
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="statusMessage successMessage"
                >
                  <CheckCircle size={18} />
                  <span>Thank you! Your message has been sent. I'll get back to you soon.</span>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="statusMessage errorMessage"
                >
                  <AlertCircle size={18} />
                  <span>Oops! Something went wrong. Please try again or email me directly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="emailLinkContainer"
          >
            <a href="mailto:tanvir.nibir@metropolia.fi" className="emailLink">
              <Mail size={20} />
              <span>tanvir.nibir@metropolia.fi</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

