import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-primary z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo/Name - Left */}
        <a href="#home" className="text-3xl font-heading text-black">
          Salmi Farah
        </a>
        {/* Menu Links - Shows when burger is clicked */}
      {isMenuOpen && (
        
        <div className="hidden max-w-7xl mx-auto  md:flex flex-row space-x-4">
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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black focus:outline-none"
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
        <div className="md:hidden bg-primary border-t border-gray-300 ">
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