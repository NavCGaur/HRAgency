"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";

const navLinks = [
  { href: "#", label: "Home", active: true },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-around " style={{ width: "90%", marginLeft:"5%" }}>
          {/* Logo - aligned with container padding */}
          <div className="ml-4 md:ml-10 lg:ml-20">
            <Link href="/" className="flex items-center">
              <span className="text-4xl sm:text-5xl font-bold">
                <span className="text-gray-900">HR</span>
                <span className="text-blue-500">Agency</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - centered and larger font */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-medium text-lg mx-5 transition-colors hover:text-blue-500 ${
                  link.active 
                    ? "text-blue-500" 
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side elements */}
          <div className="hidden md:flex items-center mr-4 md:mr-6 lg:mr-8">
           {/* <button className="p-2 mx-4 hover:text-blue-500 transition-colors">
              <Search className="h-6 w-6" />
            </button>*/}
            
            <Button 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium text-lg px-8 py-8"
            >
              Talk to HR Experts
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden mr-4">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-lg font-medium py-2 transition-colors hover:text-blue-500 ${
                      link.active ? "text-blue-500" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button 
                  className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg py-6"
                >
                  Start a Project
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}