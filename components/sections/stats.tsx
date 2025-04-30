"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { 
  Users, 
  Briefcase, 
  ShieldCheck,
  UserCheck,
  Clock,
  Globe,
  BarChart2 
} from "lucide-react";

const stats = [

  {
    icon: <Briefcase className="h-8 w-8 text-blue-500" />,
    value: 50,
    label: "Companies Served",
    suffix: "+"
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-500" />,
    value: 98,
    label: "Compliance Success Rate",
    suffix: "%"
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-500" />,
    value: 24,
    label: "Avg. Hiring Time Reduction",
    suffix: "hrs"
  },
  
  {
    icon: <BarChart2 className="h-8 w-8 text-blue-500" />,
    value: 85,
    label: "Employee Retention Improvement",
    suffix: "%"
  }
];

export default function Stats() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const isInViewport = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
      );
    };

    const handleScroll = () => {
      const section = document.getElementById("stats-section");
      if (section && isInViewport(section)) {
        setShouldAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!shouldAnimate || animationComplete) return;

    const duration = 2000; // Animation duration in ms
    const startTime = performance.now();
    let animationFrameId: number;

    const animateCounters = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setCounters(prev => 
        prev.map((_, index) => {
          const stat = stats[index];
          return Math.floor(easedProgress * stat.value);
        })
      );

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCounters);
      } else {
        // Ensure final values are exact
        setCounters(stats.map(stat => stat.value));
        setAnimationComplete(true);
      }
    };

    animationFrameId = requestAnimationFrame(animateCounters);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldAnimate, animationComplete]);

  const easeOutCubic = (x: number): number => {
    return 1 - Math.pow(1 - x, 3);
  };

  return (
    <section id="stats-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 display flex flex-col items-center">
      
        <h2 className="text-3xl font-bold  text-gray-900 mb-8">Impact in Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-blue-50 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2 text-gray-900">
                  {/* @ts-ignore */}
                  {stat.prefix || ""}{counters[index].toLocaleString()}{stat.suffix || ""}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

         <Button className=" hover:bg-yellow-500 text-white font-medium text-lg px-10 py-8 mt-8"                    >
            Empower Your Workforce
        </Button>

      </div>
    </section>
  );
}