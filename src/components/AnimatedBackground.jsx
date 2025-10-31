import React from "react";

const decorativeElements = [
  { top: "top-[75%]", left: "left-[85%]", rounded: "rounded-[72px_72px_0px_0px]"}, 
  { top: "top-[5%]", left: "left-[20%]", rounded: "rounded-[72px_0px_0px_72px]" }, 
  { top: "top-[25%]", left: "left-[5%]", rounded: "rounded-[0px_0px_72px_0px]" }, 
  { top: "top-[25%]", left: "left-[90%]", rounded: "rounded-[0px_0px_72px_0px]" }, 
  { top: "top-[85%]", left: "left-[65%]", rounded: "rounded-[0px_72px_0px_0px]" },
  { top: "top-[40%]", left: "left-[80%]", rounded: "rounded-[72px]" },
  { top: "top-[55%]", left: "left-[10%]", rounded: "rounded-[72px]" },
  { top: "top-[55%]", left: "left-[90%]", rounded: "rounded-[0px_72px_0px_72px]" },
  { top: "top-[70%]", left: "left-[75%]", rounded: "rounded-[0px_0px_0px_72px]" },
  { top: "top-[80%]", left: "left-[30%]", rounded: "rounded-[72px_0px_72px_0px]" },
  { top: "top-[35%]", left: "left-[35%]", rounded: "rounded-[0px_0px_72px_0px]" },
  { top: "top-[10%]", left: "left-[45%]", rounded: "rounded-[72px_0px_72px_0px]" },
  { top: "top-[60%]", left: "left-[15%]", rounded: "rounded-[0px_0px_0px_72px]" },
  { top: "top-[95%]", left: "left-[50%]", rounded: "rounded-[0px_0px_72px_0px]" },
  { top: "top-[90%]", left: "left-[5%]", rounded: "rounded-[0px_72px_0px_0px]" },
  { top: "top-[80%]", left: "left-[55%]", rounded: "rounded-[0px_72px_0px_72px]" },
  { top: "top-[80%]", left: "left-[45%]", rounded: "rounded-[0px_0px_72px_0px]" },
  { top: "top-[0%]", left: "left-[60%]", rounded: "rounded-none" },
  { top: "top-[10%]", left: "left-[70%]", rounded: "rounded-none" },
];

export const AnimatedBackground = ({children}) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background elements container - positioned behind content */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated background elements */}
        {decorativeElements.map((element, index) => (
          <div
            key={index}
            className={`${element.top} ${element.left} ${element.rounded} absolute w-36 h-36 bg-white animate-float`}
            style={{
              animationDelay: `${index * 0.2}s`,
              boxShadow: '20px 20px 60px rgba(0, 0, 0, 0.1), -20px -20px 60px rgba(255, 255, 255, 0.7)'
            }}
            aria-hidden="true"
          />
        ))}
        
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-primary opacity-40 animate-gradient"
          style={{
            backgroundSize: '400% 400%'
          }}
        />
        
        {/* Blur overlay - reduced blur to be less intrusive */}
        <div className="absolute inset-0 backdrop-blur-[15px] [-webkit-backdrop-filter:blur(15px)]" />
      </div>
      
      {/* Content container - positioned above background */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient {
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </div>
  );
};
export default AnimatedBackground;