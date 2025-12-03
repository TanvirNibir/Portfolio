import { Github, Linkedin, Mail, Twitter, Instagram, Globe } from 'lucide-react'
import '../styles/Footer.css'

const socialLinks = [
  { icon: Github, href: 'https://github.com/TanvirNibir', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/tanvirnibir/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/Tanvir_Nibir_', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/callme.tanvirr/', label: 'Instagram' },
  { icon: Globe, href: 'https://tanvirnibir.github.io', label: 'Portfolio' },
  { icon: Mail, href: 'mailto:tanvir.nibir@metropolia.fi', label: 'Email' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerContent">
          <p className="copyright">
            © {currentYear} Tanvir Nibir. All rights reserved.
          </p>
          <div className="socialLinks">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="socialLink"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

