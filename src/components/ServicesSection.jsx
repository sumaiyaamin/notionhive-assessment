'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('local');

  const services = [
    {
      id: 'local',
      title: 'Tailored local seo',
      content: {
        title: 'Tailored local seo',
        description:
          "We specialize in hyper-local strategies tailored for your business area. Whether it's optimizing for maps or boosting local relevance, our approach ensures your visibility skyrockets among nearby customers.",
        image: '/images/image 374.png',
      },
    },
    {
      id: 'onpage',
      title: 'On-page seo and technical audit',
      content: {
        title: 'On-page seo and technical audit',
        description:
          "We run a full technical health check of your site – fixing broken links, optimizing page speed, structuring data, and perfecting your tags and meta. Everything your website needs to rank clean and high.",
        image: '/images/image 374.png',
      },
    },
    {
      id: 'technical',
      title: 'Expert technical seo suggestions',
      content: {
        title: 'Expert technical seo suggestions',
        description:
          "We provide data-driven SEO strategies with actionable recommendations backed by research and expert insights to help you implement SEO effectively and avoid common pitfalls.",
        image: '/images/image 374.png',
      },
    },
    {
      id: 'backlink',
      title: 'High-quality backlink building',
      content: {
        title: 'High-quality backlink building',
        description:
          "We help you build authority through white-hat link-building strategies, relevant niche backlinks, and ethical outreach that earns long-term credibility from Google.",
        image: '/images/image 374.png',
      },
    },
  ];

  const activeContent = services.find((s) => s.id === activeTab)?.content;

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const validIds = services.map((s) => s.id);

    if (validIds.includes(hash)) {
      setActiveTab(hash);
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto bg-[#EBF1FF] rounded-3xl p-10">
        {/* Avatars */}
        <div className="flex justify-center -space-x-2 mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Image
              key={i}
              src={`/images/team${i}.jpeg`}
              alt={`Team Member ${i}`}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          ))}
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Here's what we bring to the table
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Discover our winning combination of expertise, tailor-made strategies, transparency,
          and proven results. We're not just your average SEO service; we're your digital partners,
          serving up a recipe for online success.
        </p>

        {/* Row layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tabs */}
          <div className="w-full lg:w-1/3 space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`w-full text-left py-3 px-5 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === service.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Content */}
          {activeContent && (
            <div className="w-full lg:w-2/3 relative">
              <span id={activeTab} className="absolute -top-24" aria-hidden="true" />
              <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{activeContent.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{activeContent.description}</p>
                </div>

                <div className="relative w-full max-w-xs h-[382px]">
                  <Image
                    src={activeContent.image}
                    alt={activeContent.title}
                    fill
                    className="rounded-xl object-cover"
                  />
                  <div
                    className="absolute bg-red-500 text-white text-xs flex items-center justify-center rounded-full px-4 py-1 text-center"
                    style={{ top: '45%', left: '60%' }}
                  >
                    Consultant
                  </div>
                  <div
                    className="absolute bg-green-500 text-white text-xs flex items-center justify-center rounded-full px-5 py-1 text-center"
                    style={{ top: '70%', left: '30%' }}
                  >
                    Customer
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition">
            Request a Proposal
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
