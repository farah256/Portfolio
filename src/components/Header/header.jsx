import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { ContainerTextFlip } from "./../ui/layout-text-flip";
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations';
import laptop from '../../assets/images/MacBook.png' ;
import github from '../../assets/images/GitHub.png';
import gmail from '../../assets/images/Google.png';
import linkedin from'../../assets/images/LinkedIn.png';
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const logos = useMemo(() => [
    { 
      src: linkedin, 
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/farah-salmi/' 
    },
    { 
      src: github, 
      name: 'GitHub',
      url: 'https://github.com/farah256' 
    },
    { 
      src: gmail, 
      name: 'Google',
      url: 'mailto:farah.salmi02@gmail.com'
    },
  ], []);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <header ref={ref} id="home" className="pt-32 pb-16 min-h-screen flex items-center relative overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-10 lg:space-y-0">
          
          {/* Section 1: Content (Left Side) */}
          <div className="lg:w-1/2 flex flex-col space-y-20 text-center lg:text-left">
            
            {/* Text Content with staggered animations */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-3 flex-wrap justify-center">
                
                {/* "Hello, I'm" */}
                <motion.p 
                  className="text-3xl md:text-4xl font-bold font-sans uppercase [text-shadow:0px_4px_4px_#00000040] bg-clip-text text-transparent bg-black "
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {t.header.hello}
                </motion.p>

                {/* Software Engineer section */}
                <motion.div 
                  className="flex items-center gap-3 justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="relative inline-block p-1">
                    <div className="relative z-10">
                      <ContainerTextFlip words={[t.header.softwareEngineer]} />
                    </div>
                    <div className="absolute inset-0 rounded-lg opacity-75"></div>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p 
                  className="text-xl text-black font-sans max-w-xl mx-auto lg:mx-0 pt-4 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {t.header.description}
                </motion.p>
              </div>
            </div>

            {/* Social Logos */}
            <motion.div 
              className="flex justify-center space-x-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
           {logos.map((logo, index) => (
            <motion.button
              key={logo.name}
              onClick={() => {
                if (logo.name === 'Google') {
                  navigator.clipboard.writeText('farah.salmi02@gmail.com')
                    .then(() => {
                      const toast = document.createElement('div');
                      toast.className = 'fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce-in';
                      toast.innerHTML = `
                        <div class="flex items-center gap-2">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Email copied!</span>
                        </div>
                      `;
                      document.body.appendChild(toast);
                
                      setTimeout(() => {
                        toast.remove();
                      }, 2000);
                    })
                    .catch(err => {
                      console.error('Failed to copy email: ', err);
                    });
                }else {
                  window.open(logo.url, '_blank', 'noopener,noreferrer');
                }
              }}
              aria-label={logo.name}
              className="transform hover:scale-105 transition duration-300 bg-transparent border-none cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                className="w-15 h-15 lg:w-30 lg:h-30" 
                src={logo.src} 
                alt={logo.name}
                loading="lazy"
              />
            </motion.button>
          ))}
            </motion.div>
          </div>

          {/* Section 2: MacBook Image */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img 
              src ={laptop}
              alt="Salmi Farah - Professional Profile"
              className="w-full max-w-lg md:max-w-2xl h-auto"
              loading="eager"
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src="https://placehold.co/400x400/e5e7eb/6b7280?text=Image+Not+Found"; 
              }}
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;