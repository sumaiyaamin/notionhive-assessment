'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'Are my deposits insured?',
    answer:
      "Think of your website's organic traffic like a plant in your digital garden. It won't flourish if you're serving up content as bland as a cardboard sandwich, grappling with technical troubles, or leaving it starving for keywords and backlinks.",
  },
  {
    question: 'How to find suitable keywords for your business?',
    answer:
      'We conduct comprehensive keyword research using advanced tools and competitor analysis to identify the most valuable keywords for your business.',
  },
  {
    question: "How to check my website's ranking?",
    answer:
      "We provide detailed ranking reports and use professional SEO tools to track your website's position for target keywords.",
  },
  {
    question: 'Do I need a digital marketing agency for SEO?',
    answer:
      'While you can do some SEO yourself, a professional agency brings expertise, tools, and strategies that accelerate your results.',
  },
  {
    question: 'How soon should I expect results from SEO?',
    answer:
      'SEO is a long-term strategy. You can typically expect to see results in 3–6 months, with significant gains after 6–12 months.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Have any question? We're here to help.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-5 font-medium text-foreground focus:outline-none hover:bg-muted transition-all flex justify-between items-center"
              >
                {faq.question}
                <span className="ml-2 text-lg">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

       {/* CTA */}
<div
  className="rounded-2xl p-6 sm:p-10 md:p-12"
  style={{ backgroundColor: "#C2D6FF" }}
>
  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
    <div className="text-left mb-6 md:mb-0">
      <h3 className="text-2xl font-bold text-foreground mb-2">
        Still have questions?
      </h3>
      <p className="text-muted-foreground max-w-md">
        Can't seem to find the answer? Get in direct contact with our team.
      </p>
    </div>

    <button
      className="text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
      style={{ backgroundColor: "#375DFB" }}
    >
      Contact us
    </button>
  </div>
</div>

      </div>
    </section>
  );
};

export default FAQSection;
