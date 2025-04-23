import Header from "./components/Header"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Resume from "./components/Resume"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Resume />
        <Technologies />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
