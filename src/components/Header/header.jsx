const Header  = () => {
    const logos = [
        { src: './../src/assets/images/LinkedIn.png', name: 'LinkedIn' },
        { src: './../src/assets/images/GitHub.png', name: 'GitHub' },
        { src: './../src/assets/images/Google Plus.png', name: 'Google' },
      ];
    return (
            <header id="home" className="pt-32  pb-16 bg-primary min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Main Layout: Row on large screens, Column on mobile */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-10 lg:space-y-0">
                  
                  {/* Section 1: Content (Left Side) - Column Layout */}
                  <div className="lg:w-1/2 flex flex-col space-y-20 text-center lg:text-left">
                    
                    {/* Subsection 1.1 (Text Content) - Column Layout */}
                    <div className="space-y-4 ">
                    <div className="flex items-baseline gap-3 flex-wrap justify-center ">
                    <p className="text-3xl font-bold font-sans uppercase [text-shadow:0px_4px_4px_#00000040] bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-black">
                        Hello, I'm 
                      </p>
                      <div className="rounded-[20px] border-[3px] border-solid border-[#692e2e] shadow-[5px_4px_10px_#000000cc] blur-[1.5px] transform hover:scale-105 transition duration-300 z-0">
                      <p className="m-3 text-3xl md:text-4xl font-extrabold text-black leading-tight">
                        Salmi Farah
                      </p>
                      </div>
                      <p className="text-3xl font-bold font-sans uppercase [text-shadow:0px_4px_4px_#00000040] bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-black">
                        A 
                      </p>
                      <div className="flex items-center gap-3  justify-center">
                      <div
                          
                          className="transform hover:scale-105 transition duration-300"
                        >
                    <img className="w-20 h-20" src='./../src/assets/images/Laptop Coding.png' />
                    </div>
                    <p className="text-4xl md:text-5xl font-bold [text-shadow:0px_4px_4px_#00000040] bg-clip-text text-transparent bg-gradient-to-r from-black to-accent ">
                    Software engineer
                    </p>
                    
                </div>
                <p className="text-1xl text-black font-sans max-w-xl mx-auto lg:mx-0 pt-4 text-center">
                    A dedicated Software Engineer. I combine clean code with responsive design to create robust applications.
                </p>
                
                </div>
</div>
        
                    {/* Subsection 1.2 (Logos/Icons) - Row Layout */}
                    <div className="flex justify-center  space-x-4 pt-4">
                      {logos.map((Logo, index) => (
                        <a
                          key={index}
                          href="#" 
                          aria-label={Logo.name}
                          className="transform hover:scale-105 transition duration-300"
                        >
                          <img className="w-15 h-15 lg:w-30 h-30" src={Logo.src} />
                        </a>
                      ))}
                    </div>
                  </div>
        
                  {/* Section 2: Image (Right Side) */}
                  <div className=" lg:w-1/2 flex justify-center">
                    <img 
                      src="./../src/assets/images/MacBook Air.png" 
                      alt="Salmi Farah - Professional Profile"
                      className="w-fill max-w-lg md:max-w-2xl h-auto "
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/e5e7eb/6b7280?text=Image+Not+Found"; }}
                    />
                  </div>
                </div>
              </div>
            </header>
        
    )
}
export default Header;