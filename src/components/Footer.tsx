import { FaYoutube, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

const quickLinksCol1 = [
  { name: 'The Arena', href: '#' },
  { name: 'Episodes', href: '#' },
  { name: 'National Rankings', href: '#' },
  { name: 'Programs', href: '#' },
  { name: 'Rulebooks', href: '#' },
]

const quickLinksCol2 = [
  { name: 'Join the Team', href: '#' },
  { name: 'Sponsorships', href: '#' },
  { name: 'Help Center', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Legal', href: '#' },
]

const Footer = () => (
  <footer className="relative w-full bg-[#050505] pt-12 pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
    
    {/* Divider line */}
    <div className="max-w-7xl mx-auto border-t border-white/10 pt-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Quick Links Title and Column 1 */}
        <div className="flex flex-col gap-4">
          <h3 className="font-roboto text-white font-black text-xs uppercase tracking-widest mb-2">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {quickLinksCol1.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-roboto text-gray-400 hover:text-white text-xs transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column 2 */}
        <div className="flex flex-col gap-4 justify-end lg:justify-start lg:pt-8">
          <ul className="flex flex-col gap-3">
            {quickLinksCol2.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-roboto text-gray-400 hover:text-white text-xs transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-4 lg:items-end">
          <div>
            <h3 className="font-roboto text-white font-black text-xs uppercase tracking-widest mb-4 lg:text-right">
              Social Media
            </h3>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </footer>
)

export default Footer
