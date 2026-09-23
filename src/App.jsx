import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import TechStack from './components/TechStack.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contributions from './components/Contributions.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <div className="wrap">
        <Hero />
        <Stats />
        <TechStack />
        <Projects />
        <Experience />
        <Contributions />
        <Contact />
      </div>
      <Footer />
    </>
  )
}
