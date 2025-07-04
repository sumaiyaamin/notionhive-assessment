'use client';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0A0D14]">
              Our SEO services<br />
              are Your key to great{' '}
              <span className="text-[#6D86EC]">online success</span>
            </h1>

            <p className="text-lg text-gray-600 mt-6 mb-8 max-w-xl">
              Meet the Organic SEO Agency – your guides through the digital wilderness. We're all about sustainable growth, not quick fixes. Join us for an adventure in organic growth!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition">
                Get Started
              </button>
              <button className="px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded font-semibold transition">
                Learn More
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>1 month free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>24/7 customer service</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <Image
                src="/images/Rectangle 6310.png"
                alt="Professional team"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-lg"
              />

              {/* Floating Twitter Icon */}
              <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full p-3 shadow-lg animate-bounce">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723..." />
                </svg>
              </div>

              {/* Google Icon */}
              <div className="absolute bottom-4 -left-8 bg-white rounded-full p-3 shadow-lg">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path d="M22.56 12.25..." fill="#4285F4" />
                  <path d="M12 23..." fill="#34A853" />
                  <path d="M5.84 14.09..." fill="#FBBC05" />
                  <path d="M12 5.38..." fill="#EA4335" />
                </svg>
              </div>

              {/* Stats Cards */}
              <div className="absolute top-8 -right-4 bg-white rounded-lg p-4 shadow-lg min-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-sm">120% more engagement</div>
                    <div className="text-xs text-gray-500">Get 100% engagement than before.</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-16 -right-8 bg-white rounded-lg p-4 shadow-lg min-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172..." clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Great Client Experience</div>
                    <div className="text-xs text-gray-500">Get satisfied customer experience.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
