import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src="/images/logo.png" alt="Planto" className="w-10 h-10" />
          <span className="text-2xl md:text-3xl font-black text-white">Planto.</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#home" className="text-lg md:text-xl font-medium text-white hover:text-primary-light transition-colors duration-300">
            Home
          </a>
          <div className="relative group">
            <a href="#trendy" className="text-lg md:text-xl font-medium text-white hover:text-primary-light transition-colors duration-300 flex items-center gap-2">
              Plant Types
              <svg className="w-3.5 h-3 text-gray-300" viewBox="0 0 14 12" fill="none">
                <path d="M7 12L0 0H14L7 12Z" fill="#D9D9D9"/>
              </svg>
            </a>
          </div>
          <a href="#top" className="text-lg md:text-xl font-medium text-white hover:text-primary-light transition-colors duration-300">
            Top Selling
          </a>
          <a href="#reviews" className="text-lg md:text-xl font-medium text-white hover:text-primary-light transition-colors duration-300">
            Reviews
          </a>
          <a href="#contact" className="text-lg md:text-xl font-medium text-white hover:text-primary-light transition-colors duration-300">
            Contact
          </a>
        </nav>

        {/* Search and Cart */}
        <div className="flex gap-4 items-center">
          <img src="/images/search-icon.png" alt="Search" className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-300" />
          <img src="/images/shopaholic-icon.png" alt="Cart" className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-300" />
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Nav Panel */}
      {isOpen && (
        <nav className="md:hidden bg-primary/95 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <a href="#home" className="text-white text-base" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#trendy" className="text-white text-base" onClick={() => setIsOpen(false)}>Plant Types</a>
            <a href="#top" className="text-white text-base" onClick={() => setIsOpen(false)}>Top Selling</a>
            <a href="#reviews" className="text-white text-base" onClick={() => setIsOpen(false)}>Reviews</a>
            <a href="#contact" className="text-white text-base" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
