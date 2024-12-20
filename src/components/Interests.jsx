import { motion } from 'framer-motion'

export default function Interests() {
  const interests = [
    {
      title: "Artificial Intelligence",
      description: "Exploring machine learning applications in web development"
    },
    {
      title: "Cloud Architecture",
      description: "Building scalable and resilient cloud solutions"
    },
    {
      title: "Open Source",
      description: "Contributing to and maintaining open source projects"
    }
  ]

  return (
    <section className="section">
      <h2 className="heading">Areas of Interest</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 rounded-lg bg-opacity-5 bg-primary"
          >
            <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
            <p className="text-secondary">{interest.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
