"use client"

import { useState, useEffect } from "react"
import "./Header.css"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Resume", href: "#resume" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#projects" },
]

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar to sticky after scrolling down
      setScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <a
            href="#home"
            className="logo"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("home")
            }}
          >
            <span>Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={activeSection === item.href.substring(1) ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href.substring(1))
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <span className="close-icon">✕</span> : <span className="menu-icon">☰</span>}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="mobile-nav">
          <div className="mobile-nav-content">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={activeSection === item.href.substring(1) ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href.substring(1))
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
