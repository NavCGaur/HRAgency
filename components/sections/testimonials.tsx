"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "HRAgency completely transformed our talent acquisition strategy. They helped us reduce hiring time by 40% while improving candidate quality significantly.",
    author: "John Smith",
    position: "CEO, TechStart Inc.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    initials: "JS"
  },
  {
    quote: "Their HR compliance expertise saved us from potential legal pitfalls during our international expansion. Truly invaluable guidance for any growing business!",
    author: "Sarah Johnson",
    position: "Director of Operations",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    initials: "SJ"
  },
  {
    quote: "After implementing HRAgency's employee engagement programs, our retention rates improved by 35% in just one year. Their strategies actually work!",
    author: "Robert Chen",
    position: "HR Director, Retail Corp",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    initials: "RC"
  },
  {
    quote: "We struggled with performance management for years. HRAgency designed a custom system that aligned perfectly with our company culture and goals.",
    author: "Emily Williams",
    position: "VP People & Culture",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    initials: "EW"
  },
  {
    quote: "Their leadership development program transformed our mid-level managers into confident, effective leaders who drive real business results.",
    author: "Michael Brown",
    position: "COO, Manufacturing Ltd",
    avatar: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150",
    initials: "MB"
  },
  {
    quote: "HRAgency's diversity and inclusion framework helped us build a more innovative and productive workforce while meeting our ESG commitments.",
    author: "Priya Patel",
    position: "Head of Talent",
    avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
    initials: "PP"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with center card active
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Always show 3 testimonials with active one in the middle
  const visibleTestimonials = [
    testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length],
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length]
  ];

  return (
    <section className=" pb-10 pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 sm:text-2xl">
            <span className="block sm:inline">When</span>
            <span className="text-primary text-5xl sm:text-4xl block sm:inline"> You</span>
            <span className="block sm:inline"> succeed</span>
            <span className="text-primary text-5xl sm:text-4xl block sm:inline"> We</span>
            <span className="block sm:inline"> succeed</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 sm:w-16"></div>
          <p className="text-gray-900 max-w-2xl mx-auto sm:text-sm sm:max-w-md">
            Hear what our clients have to say about our services.
          </p>
      </div>


        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {visibleTestimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className={`bg-white dark:bg-gray-800 transition-all duration-300 ${
                    index === 1 
                      ? "scale-105 shadow-lg z-10" 
                      : "scale-95 opacity-90 hover:opacity-100"
                  }`}
                >
                  <CardContent className="p-8">
                    <QuoteIcon className="h-10 w-10 text-primary/20 mb-4" />
                    <p className="mb-6 text-gray-900">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handlePrev}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              {testimonials.map((_, index) => (
                <span 
                  key={index}
                  className={`block h-2 w-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-primary w-6" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  role="button"
                  tabIndex={0}
                ></span>
              ))}
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleNext}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}