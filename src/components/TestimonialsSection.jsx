'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { useInView } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Micheal Johnson',
      position: 'CEO, Ranksite Techs',
      image: '/images/Avatar Image.png',
      quote:
        "Notionhive offers affordable SEO packages to boost your website's organic visibility, traffic, and rankings. Our proven approach includes strategic planning",
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      position: 'Marketing Director, TechFlow',
      image: '/images/pexels-edmond-dantes-4342352.jpg',
      quote:
        'The team at Notionhive transformed our online presence completely. Their strategic approach and attention to detail resulted in a 300% increase in organic traffic.',
      rating: 5,
    },
    {
      name: 'David Chen',
      position: 'Founder, StartupHub',
      image: '/images/sundar-pichai-pictures-z7z6ots42w282po1.jpg',
      quote:
        'Working with Notionhive was a game-changer for our business. Their expertise in SEO helped us rank #1 for our most important keywords within 6 months.',
      rating: 5,
    },
  ];

  const kpis = [
    { number: 560, label: 'Satisfied Customers' },
    { number: 256, label: '5 star reviews' },
    { number: 100, label: 'Recommendation Rate', isPercent: true },
  ];

  const [animatedCounts, setAnimatedCounts] = useState(kpis.map(() => 0));

  const kpiRef = useRef(null);
  const isInView = useInView(kpiRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const interval = 30;

    kpis.forEach((kpi, index) => {
      const totalSteps = duration / interval;
      const stepValue = kpi.number / totalSteps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        setAnimatedCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.min(Math.round(current), kpi.number);
          return updated;
        });

        if (current >= kpi.number) clearInterval(timer);
      }, interval);
    });
  }, [isInView]);

  return (
    <section className="py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Hear From Our Clients</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            In our SEO journey, we have a roadmap filled with proven strategies, witty tactics,
            and a touch of digital magic.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-6xl mx-auto relative">
          <div className="border border-border rounded-2xl p-6 relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={40}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              loop={true}
              className="testimonial-swiper"
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col lg:flex-row items-center gap-12 relative">
                    {/* Image */}
                    <div className="lg:w-1/3 flex justify-center">
                      <div className="relative w-80 h-80 rounded-2xl overflow-hidden">
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 80vw, 320px"
                          priority={index === 0}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3 px-4 sm:px-0 w-full">
                      {/* Stars */}
                      <div className="flex mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-2xl font-medium text-foreground mb-8 leading-relaxed">
                        &quot;{t.quote}&quot;
                      </blockquote>

                      {/* Name + Position */}
                      <div>
                        <p className="font-bold text-foreground text-lg">{t.name}</p>
                        <p className="text-muted-foreground">{t.position}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons - Bottom Right */}
            <div className="absolute bottom-20 right-28 flex gap-2 z-10">
              <button
                type="button"
                aria-label="Previous testimonial"
                className="swiper-button-prev rounded-full w-10 h-10 bg-white/90 dark:bg-white/90 text-black flex items-center justify-center shadow"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                className="swiper-button-next rounded-full w-10 h-10 bg-white/90 dark:bg-white/90 text-black flex items-center justify-center shadow"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* KPI Section */}
          <div
            ref={kpiRef}
            className="grid md:grid-cols-3 gap-12 text-center mt-20 px-4 sm:px-0"
          >
            {kpis.map((kpi, index) => (
              <div key={index} className="space-y-4">
                <div className="text-5xl font-bold text-foreground">
                  {animatedCounts[index]}
                  {kpi.isPercent ? '%' : '+'}
                </div>
                <p className="text-muted-foreground text-lg">{kpi.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;