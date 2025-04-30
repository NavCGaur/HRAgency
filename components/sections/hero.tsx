"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: [
      { text: "Building ", highlight: false },
      { text: "teams", highlight: true },
      { text: " that drive Results.", highlight: false },
    ],
    subtitle: "Connecting Top Talent with Leading Organizations.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    title: [
      { text: "Crafting ", highlight: false },
      { text: "People", highlight: true },
      { text: " Strategies for Business Success.", highlight: false },
    ],
    subtitle: "From HR policies to leadership development — empowering every level of your organization",
    image: "https://images.pexels.com/photos/7681094/pexels-photo-7681094.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    title: [
      { text: "Your ", highlight: false },
      { text: "Partner", highlight: true },
      { text: " in Career Growth.", highlight: false },
    ],
    subtitle: "Guiding you from job search to dream career with expert support.",
    image: "https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          {/* Content - Added mobile-specific padding and text sizing */}
          <div className="relative h-full flex items-center ml-10 md:ml-40 my-4 md:my-10">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
              <div className="max-w-4xl">
                <p className="text-yellow-400 text-sm md:text-xl mb-12 md:mb-4 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
                  {slide.subtitle}
                </p>
                <h1 className="text-4xl leading-[1.2] md:text-[70px] md:leading-[84px] font-bold text-white mb-12 md:mb-8 opacity-0 animate-[fadeIn_1s_ease-out_0.7s_forwards]">
                  {slide.title.map((part, idx) => (
                    <span key={idx} className={part.highlight ? "text-blue-600" : ""}>
                      {part.text}
                    </span>
                  ))}
                </h1>
                <div className="opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards] flex gap-4">
                  {/* Get Started button */}
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 md:px-8 md:py-8 text-base md:text-lg"
                  >
                    Get Started
                  </Button>

                  {/* Brochure download button (outlined style) */}
                  <Button
                    className="border-2 border-gray-500 text-white bg-transparent hover:bg-white/10 hover:border-white px-6 py-6 md:px-8 md:py-8 text-base md:text-lg"
                  >
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Made smaller on mobile */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col space-y-2 md:space-y-4 z-20">
        <button
          onClick={prevSlide}
          className="p-2 md:p-3 my-2 md:my-4 bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 md:p-3 my-2 md:my-4 bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-white" />
        </button>
      </div>

      {/* Dots - Made smaller and closer to bottom on mobile */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-1 md:space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-blue-600 md:w-8 w-6" 
                : "bg-white/50 hover:bg-white"
            }`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
}