"use client";

import {
  Users,
  BarChart2,
  ShieldCheck,
  Briefcase,
  Target,
  Search
} from "lucide-react";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function WhatWeOffer() {
  const [isBlue, setIsBlue] = useState(false);

  const services = [
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Strategic HR Consulting",
      description:
        "Helping businesses optimize their HR strategies for improved performance and organizational growth.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-white" />,
      title: "Talent Management",
      description:
        "Offering expertise in attracting, retaining, and developing the right talent for your organization.",
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-white" />,
      title: "Employee Engagement",
      description:
        "Helping companies foster a positive workplace culture and improve employee satisfaction.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      title: "Compliance Solutions",
      description:
        "Ensuring your business meets all regulatory requirements with our comprehensive compliance services.",
    },
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: "Performance Management",
      description:
        "Implementing systems to measure and improve employee performance aligned with business goals.",
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Job Search Assistance",
      description:
        "Personalized support to help you find the right opportunities in your field.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlue(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40 bg-[#0B0F19] text-white" id="services">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-[url('/images/what.webp')] bg-cover bg-center opacity-20 z-0"
      ></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our HR Expertise at a Glance
          </h2>
          <h3 className="text-lg md:text-xl text-gray-300 mt-4 font-medium">
            Strategic, Compliant, and People-Centric HR Services Tailored for You
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#f0efe8] border-none rounded-lg shadow-md transition duration-300 hover:scale-105 flex flex-col justify-around h-[450px] sm:h-[420px] "
            >
              <CardContent className="flex flex-col gap-6 px-8 text-left">
                <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#1F1F1F] rounded-full shadow-inner">
                  {service.icon}
                </div>
                <CardTitle className="text-3xl mb-4 font-bold text-black text-left">
                  {service.title}
                </CardTitle>
                <p className="text-black mb-4 text-lg leading-relaxed">
                  {service.description}
                </p>
                <div >
                  <Button
                    variant="outline"
                    className="bg-[#dad7c2] text-black hover:bg-[#c9c6b3] hover:text-black transition rounded-md flex items-center gap-2"
                  >
                    Know More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 md:mt-20 text-center">
          <Button className="bg-[#f0efe8] text-black px-4 py-10 md:px-8 text-2xl font-medium hover:bg-[#c9c6b3] hover:text-black transition rounded-md">
            Empower Your Workforce
          </Button>
        </div>
      </div>
    </section>
  );
}