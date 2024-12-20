import { motion } from 'framer-motion'

export default function Skills() {
  const skills = {
    "Frontend": ["React", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    "Backend": ["Node.js", "Python", "SQL", "REST APIs"],
    "Tools": ["Git", "Docker", "AWS", "CI/CD"],
    "Soft Skills": ["Team Leadership", "Problem Solving", "Communication"]
  }

  return (
    <section className="section">
      <h2 className="heading">Skills & Proficiencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">{category}</h3>
            <ul className="space-y-2">
              {items.map((skill, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
