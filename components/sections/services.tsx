import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartPie, BarChart, TrendingUp, Briefcase, Shield, AreaChart } from "lucide-react";

const services = [
  {
    icon: <ChartPie className="h-10 w-10 text-primary" />,
    title: "Financial Planning",
    description: "Comprehensive financial planning to help you achieve your short and long-term goals."
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Investment Management",
    description: "Strategic investment solutions tailored to your risk tolerance and financial objectives."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Wealth Management",
    description: "Holistic wealth management services to grow and protect your assets for generations."
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Business Consulting",
    description: "Expert business consulting to optimize operations and maximize profitability."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Risk Management",
    description: "Comprehensive risk assessment and management strategies to protect your business."
  },
  {
    icon: <AreaChart className="h-10 w-10 text-primary" />,
    title: "Market Analysis",
    description: "In-depth market analysis to identify opportunities and navigate market challenges."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Financial Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of financial services tailored to meet the unique needs of individuals and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:bg-gray-800"
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}