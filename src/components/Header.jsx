'use client';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const dropdownItems = [
    { label: 'On-page SEO and Technical Audit', id: 'onpage' },
    { label: 'Tailored Local SEO', id: 'local' },
    { label: 'Expert Technical SEO Suggestions', id: 'technical' },
    { label: 'High-quality Backlink Building', id: 'backlink' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/Logo (2).png"
              alt="NotionHive Logo"
              width={120}
              height={40}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 relative">
            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition"
              >
                Our Services
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-[#EFEFEF] shadow-md rounded-lg py-2 z-50"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {dropdownItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => scrollTo(item.id)}
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-white hover:text-[#375DFB] transition"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Other nav links */}
            <button onClick={() => scrollTo('work')} className="text-gray-800 hover:text-blue-600 transition">
              Our Work
            </button>
            <button onClick={() => scrollTo('about')} className="text-gray-800 hover:text-blue-600 transition">
              About Us
            </button>
            <button onClick={() => scrollTo('careers')} className="text-gray-800 hover:text-blue-600 transition">
              Careers
            </button>
            <button onClick={() => scrollTo('blog')} className="text-gray-800 hover:text-blue-600 transition">
              Blog
            </button>
          </nav>

          {/* Desktop Contact Button */}
          <button
            onClick={() => scrollTo('contact')}
            className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Contact Us
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white mt-2 px-4 py-3 space-y-2">
            <button onClick={() => scrollTo('services')} className="block w-full text-left hover:text-blue-600">
              Our Services
            </button>
            {dropdownItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left text-sm pl-4 text-gray-700 hover:text-blue-600"
              >
                ↳ {item.label}
              </button>
            ))}
            <button onClick={() => scrollTo('work')} className="block w-full text-left hover:text-blue-600">
              Our Work
            </button>
            <button onClick={() => scrollTo('about')} className="block w-full text-left hover:text-blue-600">
              About Us
            </button>
            <button onClick={() => scrollTo('careers')} className="block w-full text-left hover:text-blue-600">
              Careers
            </button>
            <button onClick={() => scrollTo('blog')} className="block w-full text-left hover:text-blue-600">
              Blog
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="block w-full text-center bg-[#375DFB] text-white py-2 rounded hover:bg-blue-700 mt-2"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
