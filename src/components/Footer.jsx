import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="section flex justify-center space-x-8">
        <a
          href="https://github.com/joshua-utter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:opacity-80 transition-opacity"
        >
          <FiGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/joshua-utter-1266bb33/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:opacity-80 transition-opacity"
        >
          <FiLinkedin size={24} />
        </a>
        <a
          href="mailto:joshua.utter+ghio@gmail.com"
          aria-label="Email"
          className="hover:opacity-80 transition-opacity"
        >
          <FiMail size={24} />
        </a>
      </div>
    </footer>
  )
}
