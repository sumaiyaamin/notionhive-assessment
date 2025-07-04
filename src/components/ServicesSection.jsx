'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('local-seo');

  const services = [
    {
      id: 'local-seo',
      title: 'Tailored local seo',
      content: {
        title: 'Tailored local seo',
        description:
          "Irrespective of your industry – whether you're in retail, hospitality, healthcare, or any other field – our tailor-made strategies are crafted to make your business not just blend in but stand out prominently. We specialize in ensuring your business captures the spotlight and attracts clients from your precisely targeted locality.          Our extensive experience and proven tactics are your secret weapons in the quest for online prominence. Picture your website rising to the zenith of search engine results pages, basking in the digital limelight. Our expertise is like a map, guiding your business through the intricate terrain of the online world, ultimately leading you to the treasure trove of increased visibility and client engagement. Your digital success is not just a possibility – it's a promise with us.",
        image: '/images/image 374.png',
      },
    },
    {
      id: 'technical-audit',
      title: 'On-page seo and technical audit',
    },
    {
      id: 'seo-suggestions',
      title: 'Expert technical seo suggestions',
    },
    {
      id: 'backlink-building',
      title: 'High-quality backlink building',
    },
  ];

  const activeContent = services.find((s) => s.id === activeTab)?.content;

  return (
    <section className="py-20 px-4 bg-[#FFFFF]">
      <div className="max-w-7xl mx-auto bg-[#EBF1FF] rounded-3xl p-10">
        {/* Avatars */}
        <div className="flex justify-center -space-x-2 mb-6 ">
          {[1, 2, 3, 4, 5].map((i) => (
            <Image
              key={i}
              src={`/images/team${i}.jpeg`}
              alt={`Team Member ${i}`}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-white"
            />
          ))}
        </div>

        {/* Title & Desc */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Here's what we bring to the table</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Discover our winning combination of expertise, tailor-made strategies, transparency,
          and proven results. We're not just your average SEO service; we're your digital partners,
          serving up a recipe for online success.
        </p>

        {/* Row layout for tabs + content */}
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

          {/* White Content Box */}
          {activeContent && (
            <div className="w-full lg:w-2/3 bg-white rounded-3xl shadow-lg p-8 flex flex-col lg:flex-row items-start gap-10">
              {/* Text */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">{activeContent.title}</h3>
                <p className="text-gray-700 leading-relaxed">{activeContent.description}</p>
              </div>

              {/* Image */}
              <div className="relative w-[337px] h-[382px] shrink-0">
                <Image
                  src={activeContent.image}
                  alt={activeContent.title}
                  fill
                  className="rounded-xl object-cover"
                />
                <div
                  className="absolute bg-red-500 text-white text-xs flex items-center justify-center rounded-full"
                  style={{ width: '99px', height: '33px', top: '158px', left: '193px' }}
                >
                  Consultant
                </div>
                <div
                  className="absolute bg-green-500 text-white text-xs flex items-center justify-center rounded-full"
                  style={{ width: '132.15px', height: '34.26px', top: '263px', left: '102px' }}
                >
                  Customer
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
