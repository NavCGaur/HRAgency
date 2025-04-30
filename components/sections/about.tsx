import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function About() {
  const features = [
    "Expert HR consultants with decades of industry experience",
    "Tailored solutions for your unique workforce challenges",
    "Comprehensive services from recruitment to retirement",
    "Continuous monitoring and regular performance reviews",
    "Career coaching to help job seekers stand out"
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Financial experts discussing strategy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary/10 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-gray-200 dark:bg-gray-800 rounded-lg -z-10"></div>
          </div>

          <div>
          <h3  className="flex items-center">
              <span className="text-4xl font-bold">
                <span className="text-gray-900">About HR</span>
                <span className="text-blue-500">Agency</span>
              </span>
            </h3>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-muted-foreground mb-6">
              With 25+ years of HR expertise, we provide comprehensive solutions for both 
              organizations and professionals to thrive in today's competitive landscape.           
            </p>
            <p className="text-lg text-muted-foreground mb-8">
            Our team of certified HR professionals is committed to understanding your unique needs – whether you're optimizing your workforce or advancing your career – and developing personalized strategies that deliver results.


            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="py-6 text-lg">More About Us</Button>
          </div>
        </div>
      </div>


      <div className="relative mt-20 p-16 px-6 md:px-16  overflow-hidden rounded-none">
                {/* Dark overlay background image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1920" // Replace with your professional HR image
                    alt="HR Consulting Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/90 z-10"></div> {/* Dark overlay */}
                </div>
                
                <div className="container mx-auto relative z-20">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Text content - left-aligned in column */}
                    <div className="text-left max-w-2xl ml-8">
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 ">
                        Recruitment, compliance, or culture-building?
                      </h2>
                      <div className="w-20 h-1 bg-primary mb-6"></div> {/* Left-aligned divider */}
                      <p className="text-white/90 text-lg mb-6">
                        Share your needs, and we'll respond within 24 hours.
                      </p>
                    </div>
                    
                    {/* Button - right-aligned */}
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-white px-10 py-8 mr-2 md:mr-16 text-lg font-medium whitespace-nowrap
                                transition-all duration-300 transform hover:scale-105"
                    >
                      Get Expert Consultation
                    </Button>
                  </div>
                </div>
              </div>
      
    </section>
  );
}