'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "1",
    title: "SEO Spy Games",
    description: "We put on our digital detective hats to spy on your competitors and uncover the keywords that work.",
    circleBg: "#FDE9C7",
  },
  {
    number: "2", 
    title: "Crafting the SEO Drink",
    description: "We mix the perfect keywords, sizzling content, and a dash of technical wizardry to create the perfect SEO drink that'll send your website up the ranks.",
    circleBg: "#E1DDFF",
  },
  {
    number: "3",
    title: "On-page Opera",
    description: "Now, it's time to fine-tune every page of your website like a maestro composing a symphony. Every keyword needs to be in perfect harmony.",
    circleBg: "#E0F8DE",
  },
  {
    number: "4",
    title: "The SEO Catapult",
    description: "Finally, we launch your website into SEO stardom. It's like sending a rocket into the digital stratosphere where online success awaits.",
    circleBg: "#FFDAC2",
  }
];

const ProcessSection = () => {
  return (
    <section id="work" className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#EBF1FF', borderRadius: '2rem' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            The Way We Do It!
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            In our SEO journey, we have a roadmap filled with proven strategies, witty tactics, and a touch of 
            digital magic. Explore the steps that take your website from the shadows to the spotlight.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl"
                    style={{ backgroundColor: step.circleBg }}
                  >
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
