import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ScrollNavigation = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show scroll to top button when scrolled down 300px
      setShowScrollTop(scrollTop > 300);
      
      // Hide scroll down button when near bottom
      setShowScrollDown(scrollTop + windowHeight < documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollDown = () => {
    const currentPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const nextPosition = currentPosition + windowHeight;
    
    window.scrollTo({
      top: nextPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-3">
      {/* Scroll Down Button */}
      {showScrollDown && (
        <button
          onClick={scrollDown}
          className="group relative p-4 bg-gradient-to-br from-blue-900 to-teal-500 hover:from-blue-800 hover:to-teal-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce"
          aria-label="Scroll down"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <ChevronDown className="w-6 h-6 relative z-10" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap">
              Scroll Down
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        </button>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="group relative p-4 bg-gradient-to-br from-teal-500 to-yellow-600 hover:from-teal-400 hover:to-yellow-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <ChevronUp className="w-6 h-6 relative z-10" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap">
              Scroll to Top
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default ScrollNavigation;