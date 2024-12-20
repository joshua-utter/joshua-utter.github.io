import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="section text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-4"
      >
        Joshua Utter
      </motion.h1>
      <p className="text-xl text-secondary">
        Full Stack Developer & Technology Enthusiast
      </p>
    </header>
  )
}
