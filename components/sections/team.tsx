import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const team = [
  {
    name: "Michael Thompson",
    position: "Chief Executive Officer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "With over 20 years of experience in financial services, Michael leads our team with vision and expertise."
  },
  {
    name: "Jennifer Wilson",
    position: "Chief Financial Officer",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Jennifer brings 15 years of financial management experience to ensure our clients receive the best advice."
  },
  {
    name: "David Martinez",
    position: "Investment Director",
    image: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "David's strategic approach to investment has helped our clients achieve consistent returns even in volatile markets."
  },
  {
    name: "Sophia Chen",
    position: "Risk Management Specialist",
    image: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Sophia's analytical skills and attention to detail ensure our clients' portfolios are protected from unnecessary risks."
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of certified financial experts is committed to helping you achieve your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group transition-all duration-300 hover:shadow-lg dark:bg-gray-800"
            >
              <div className="relative overflow-hidden h-72">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-center space-x-3">
                    <a 
                      href="#" 
                      className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Facebook size={16} />
                    </a>
                    <a 
                      href="#" 
                      className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Twitter size={16} />
                    </a>
                    <a 
                      href="#" 
                      className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
              
              <CardContent className="text-center p-6">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}