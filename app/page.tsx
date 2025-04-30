import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import About from '@/components/sections/about';
import Stats from '@/components/sections/stats';
import WhatWeOffer from '@/components/sections/whatWeOffer';
import Testimonials from '@/components/sections/testimonials';
import Team from '@/components/sections/team';
import Blog from '@/components/sections/blog';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import ServicesSection from '@/components/sections/serviceSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <WhatWeOffer />
      <About />
      <Testimonials />    
      <Contact />
      <Footer />
    </main>
  );
}