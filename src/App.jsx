import { useState } from 'react'
import Header from './components/Header'
import JobTitles from './components/JobTitles'
import Skills from './components/Skills'
import Interests from './components/Interests'
import Insights from './components/Insights'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div className="min-h-screen">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Header />
      <main>
        <JobTitles />
        <Skills />
        <Interests />
        <Insights />
      </main>
      <Footer />
    </div>
  )
}

export default App
