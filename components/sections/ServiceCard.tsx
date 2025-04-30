"use client";

import { useState } from "react";
import { User, CircleDollarSign, LineChart, Presentation, Coins, Building } from "lucide-react";


// Icons for each service type
const serviceIcons: Record<string, React.ReactNode> = {
  "consultancy": <User className="w-8 h-8" />,
  "cfo": <CircleDollarSign className="w-8 h-8" />,
  "financial-modeling": <LineChart className="w-8 h-8" />,
  "strategic-planning": <Presentation className="w-8 h-8" />,
  "fundraising": <Coins className="w-8 h-8" />,
  "private-wealth": <Building className="w-8 h-8" />,
};

interface ServiceCardProps {
  title: string;
  description: string;
  imageType: string;
}

export default function ServiceCard({ title, description, imageType }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const icon = serviceIcons[imageType] || <User className="w-8 h-8" />;

  return (
    <div 
    className={`bg-white rounded-none overflow-hidden p-8 transition-all duration-300 ${
        isHovered ? "-translate-y-1 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]" : "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
      }`}
     
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-start mb-6">
        <div className="rounded-full bg-black p-4 text-white">
          {icon}
        </div>
      </div>
      <h3 className={`card-title font-poppins text-2xl font-semibold mb-4 text-left transition-colors duration-300 ${
        isHovered ? "text-primary" : "text-gray-800"
      }`}>
        {title}
      </h3>
      <p className="font-opensans text-gray-700 text-left">
        {description}
      </p>
    </div>
  );
}