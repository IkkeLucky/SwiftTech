"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md" : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="font-semibold text-primary dark:text-white text-lg">SwiftTech</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-primary dark:text-white"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-primary dark:text-white"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleMenu} className="text-primary dark:text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-full left-0 right-0 shadow-md md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto ${
              isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm" : "bg-white dark:bg-gray-900"
            }`}
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <MobileNavLink href="/" toggleMenu={toggleMenu}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/pricing" toggleMenu={toggleMenu}>
                Pricing
              </MobileNavLink>
              <MobileNavLink href="/contact" toggleMenu={toggleMenu}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-primary dark:text-white font-semibold hover:text-secondary dark:hover:text-gray-300 transition duration-300"
  >
    {children}
  </Link>
)

const MobileNavLink = ({
  href,
  children,
  toggleMenu,
}: { href: string; children: React.ReactNode; toggleMenu: () => void }) => (
  <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
    <Link
      href={href}
      className="text-primary dark:text-white font-semibold hover:text-secondary dark:hover:text-gray-300 transition duration-300"
      onClick={toggleMenu}
    >
      {children}
    </Link>
  </motion.div>
)

export default Navbar

