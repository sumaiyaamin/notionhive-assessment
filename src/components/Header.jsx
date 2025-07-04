'use client';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollTo('services')} className="text-gray-800 hover:text-blue-600 transition">
              Our Services
            </button>
            <button onClick={() => scrollTo('work')} className="text-gray-800 hover:text-blue-600 transition">
              Our Work
            </button>
            <button onClick={() => scrollTo('about')} className="text-gray-800 hover:text-blue-600 transition">
              About Us
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
            <button onClick={() => scrollTo('work')} className="block w-full text-left hover:text-blue-600">
              Our Work
            </button>
            <button onClick={() => scrollTo('about')} className="block w-full text-left hover:text-blue-600">
              About Us
            </button>
            <button onClick={() => scrollTo('blog')} className="block w-full text-left hover:text-blue-600">
              Blog
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-2"
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
