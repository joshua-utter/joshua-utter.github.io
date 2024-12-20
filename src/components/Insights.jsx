import { motion } from 'framer-motion'

export default function Insights() {
  const insights = [
    {
      title: "The Future of Web Development",
      date: "July 2023",
      content: "Thoughts on emerging trends and technologies in web development"
    },
    {
      title: "Building Scalable Applications",
      date: "June 2023",
      content: "Best practices for creating maintainable and scalable web applications"
    }
  ]

  return (
    <section className="section">
      <h2 className="heading">Insights</h2>
      <div className="space-y-8">
        {insights.map((insight, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="prose"
          >
            <h3 className="text-xl font-bold">{insight.title}</h3>
            <p className="text-sm text-secondary">{insight.date}</p>
            <p className="mt-2">{insight.content}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
