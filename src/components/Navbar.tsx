import { useState } from 'react'
import logo from '../assets/heroAssets/logo.png'

const navLinks = [
  { label: 'Events', href: '#' },
  { label: 'Programs', href: '#' },
  { label: 'Community', href: '#' },
  { label: 'Ranks', href: '#' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Events')

  return (
    <nav className="w-full bg-black/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="BotLeague Logo"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`relative text-sm font-medium transition-colors duration-200 pb-1 ${activeLink === link.label
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                    }`}
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                  {link.label}
                  {activeLink === link.label && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="px-5 py-1.5 text-sm font-semibold text-white border border-white/60 rounded hover:bg-white/10 transition-colors duration-200"
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
              LOGIN
            </a>
            <a
              href="#"
              className="px-5 py-1.5 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-500 transition-colors duration-200"
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
              REGISTER NOW
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white focus:outline-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className="block h-0.5 bg-white transition-all duration-300"
                style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}
              />
              <span
                className="block h-0.5 bg-white transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block h-0.5 bg-white transition-all duration-300"
                style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? '400px' : '0', opacity: menuOpen ? 1 : 0 }}
      >
        <div className="bg-black/98 border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => { setActiveLink(link.label); setMenuOpen(false) }}
              className={`text-sm font-medium transition-colors duration-200 ${activeLink === link.label ? 'text-white' : 'text-gray-400'
                }`}
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
            <a
              href="#"
              className="text-center px-5 py-2 text-sm font-semibold text-white border border-white/60 rounded hover:bg-white/10 transition-colors duration-200"
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
              LOGIN
            </a>
            <a
              href="#"
              className="text-center px-5 py-2 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-500 transition-colors duration-200"
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
              REGISTER NOW
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
