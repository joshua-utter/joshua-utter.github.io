import { motion } from 'framer-motion'

export default function JobTitles() {
  const titles = [
    {
      role: "Project Specialist",
      company: "PRGX Global",
      period: "2001 - Present",
      description: "Expert at distilling complex functional and technical requirements into illuminating, intuitive, and performant analytical solutions that range from monthly management reports to petabyte-scale data operations."
    }
  ]

  return (
    <section className="section">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-64 h-64 mx-auto mb-10 rounded-full overflow-hidden"
      >
        <img 
          src="assets/profile.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <h2 className="heading">Professional Experience</h2>
      <div className="space-y-8">
        {titles.map((title, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="border-l-4 border-primary pl-4"
          >
            <h3 className="text-xl font-bold">{title.role}</h3>
            <p className="text-secondary">{title.company} | {title.period}</p>
            <p className="mt-2">{title.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
