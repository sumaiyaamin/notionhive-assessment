'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

const WhyUsSection = () => {
  const features = [
    {
      icon: '/icons/Icon.svg',
      title: 'Understanding of SEO',
      subtitle: 'Keywords, meta tags optimization',
      status: 'Selected',
      color: '#38C793',
      bg: '#CBF5E599',
    },
    {
      icon: '/icons/Icon (1).svg',
      title: 'Crafting tailored content',
      subtitle: 'Tailored to your audience intent',
      status: 'Selected',
      color: '#F2AE40',
      bg: '#FCF1E1',
    },
    {
      icon: '/icons/Icon (2).svg',
      title: 'Utilizing SEO strategies',
      subtitle: 'Such as social media engagement',
      status: 'Selected',
      color: '#38C793',
      bg: '#CBF5E599',
    },
    {
      icon: '/icons/Icon (3).svg',
      title: 'Analyzing SEO metrics',
      subtitle: 'To identify areas for improvement',
      status: 'Selected',
      color: '#F2AE40',
      bg: '#FCF1E1',
    },
  ];

  const chartRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(chartRef, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView]);

  const chartVariants = {
    hidden: { height: 0 },
    visible: (i) => ({ height: `${40 + i * 10}px`, transition: { duration: 0.6, delay: i * 0.2 } }),
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why We're the Top Pick
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Ever wondered what makes us stand out? We're not just another player in the game; we're the
            game-changers. Dive into the mechanics of our top-ranking status, where expertise, tailor-made
            solutions, transparency, and a track record of success blend into a digital symphony!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="bg-[#FEF7EC] p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Empowering your digital success</h3>
            <p className="text-muted-foreground mb-6">
              Notionhive offers affordable SEO packages to boost your website's organic
              visibility, traffic, and rankings. Our proven approach includes strategic planning,
              efficient keyword research, transparency, & white hat SEO techniques.
            </p>
            <div className="space-y-5">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all group hover:shadow-md`} 
                  style={{ backgroundColor: feature.bg }}
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Image src={feature.icon} alt="icon" width={20} height={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                      <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: feature.bg, color: feature.color }}>
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#FFFCF9] p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h4 className="text-lg font-semibold mb-4">Comprehensive organic seo services</h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <p className="text-sm text-muted-foreground">
                  Attract customers in your specific area with our comprehensive local SEO services. We'll
                  consult, implement, and optimize your website to help you climb the search engine ladder
                  organically.
                </p>
                <motion.div
                  ref={chartRef}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl w-full sm:w-56"
                >
                  <div className="text-xs text-muted-foreground mb-1">Engagement rate</div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="text-2xl font-bold text-green-500">100%</div>
                    <span className="text-green-500">↑</span>
                  </div>
                  <div className="relative flex items-end gap-1 h-24">
                    {[3, 4, 5, 5, 4].map((v, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate={controls}
                        variants={chartVariants}
                        className="bg-blue-500 rounded-t w-6"
                      />
                    ))}
                    <motion.svg
                      className="absolute top-0 left-0 w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2 }}
                    >
                      <polyline
                        fill="none"
                        stroke="gold"
                        strokeWidth="2"
                        points="5,60 25,40 45,20 65,20 85,40"
                      />
                    </motion.svg>
                  </div>
                  <div className="flex justify-between text-[10px] mt-2 text-gray-400">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-[#FFFCF9] p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h4 className="text-lg font-semibold mb-4">Expert organic seo consultant</h4>
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                >
                  <Image
                    src="/images/team5.jpeg"
                    alt="Consultant"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </motion.div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-semibold"
                  >
                    SEO Expert
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-yellow-400"
                  >
                    {'★'.repeat(5)}
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full h-2 rounded bg-gradient-to-r from-yellow-300 to-yellow-500 mb-4"
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-sm text-muted-foreground"
              >
                Our dedicated team of consultants will create customized strategies that will help you
                stand out from the crowd. Our experts will work closely to understand your needs,
                develop effective strategies, and offer support.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
