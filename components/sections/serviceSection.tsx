import ServiceCard from "./ServiceCard";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Consultancy Services",
    description:
      "Tailored solutions integrating data-driven insights, industry expertise, quantitative analytics, and research for superior business outcomes.",
    imageType: "consultancy",
  },
  {
    id: 2,
    title: "CFO Services",
    description:
      "Comprehensive financial, legal, and regulatory solutions provided by experienced professionals for strategic operational management and guidance.",
    imageType: "cfo",
  },
  {
    id: 3,
    title: "Financial Modeling",
    description:
      "Sophisticated financial models with scenario analysis to streamline decision-making processes and optimize resource allocation for business growth.",
    imageType: "financial-modeling",
  },
  {
    id: 4,
    title: "Strategic Planning",
    description:
      "Long-term strategic planning to align business goals with market dynamics, identifying opportunities and navigating challenges for sustainable success.",
    imageType: "strategic-planning",
  },
  {
    id: 5,
    title: "Fundraising",
    description:
      "Expert guidance through fundraising processes, from investor pitch preparation to deal structuring and negotiation for optimal capital acquisition.",
    imageType: "fundraising",
  },
  {
    id: 6,
    title: "Private Wealth Management",
    description:
      "Personalized wealth management strategies for high-net-worth clients, emphasizing asset protection, growth opportunities, and multi-generational planning.",
    imageType: "private-wealth",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#121a21]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Arrow Circle */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="mb-8 md:mb-0 max-w-xl">
            <h2 className="section-title font-poppins text-4xl md:text-5xl font-bold mb-6 text-white">
              Explore What<br />We are offering.
            </h2>
            <p className="text-white font-opensans text-lg">
              Explore tailored solutions that propel your business from
              fundraising to stake monetization, covering all essential phases
              from financial management to restructuring & legal support.
            </p>
          </div>
          <div className="arrow-circle">
            <ArrowUpRight className="arrow-icon text-black" strokeWidth={3} />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageType={service.imageType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}