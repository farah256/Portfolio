import { useState,useMemo } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations/index';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, toggleLanguage } = useLanguage();
  const t = translations[currentLanguage];

   const navLinks = useMemo(() => [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.activities, href: '#activities' },
    { name: t.nav.contact, href: '#contact' },
  ], [t]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
  
        {/* Logo/Name - Left */}
        <a href="#home" className="text-3xl font-heading text-black">
          Salmi Farah
        </a>
        {/* Menu Links - Shows when burger is clicked */}
      {isMenuOpen && (
        
        <div className="hidden max-w-7xl mx-auto  md:flex flex-row space-x-8">
          {navLinks.map((link) => (
           <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 text-2xl font-heading hover:text-3xl hover:text-accent transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      
    )}
        {/* Burger Menu Icon - Right */}
        <button
            onClick={toggleLanguage}
            className=" px-3 py-1 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
          >
            {currentLanguage === 'en' ? 'FR' : 'EN'}
          </button>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black ml-20  focus:outline-none"
        >
          {isMenuOpen ? (
            
            // X icon when menu is open
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Burger icon when menu is closed
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        
      </div>
      {/* Mobile Dropdown Menu (only visible on mobile when open) */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-gray-300 z-50">
          <div className="px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
            <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-black text-2xl font-heading hover:text-3xl hover:text-accent transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}