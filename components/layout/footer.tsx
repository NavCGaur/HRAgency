import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {  Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { 
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">HRAgency</h3>
            <p className="mb-4 text-gray-400">
              We provide expert HR solutions to businesses and professionals, 
              helping you build strong teams, optimize talent management, and achieve long-term success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Useful Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Blog", "Contact Us", "Privacy Policy", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">
                  123 HR Street, Mumbai 40001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">+91 9999999999</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">info@HRAgency.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                placeholder="Email Address" 
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-gray-800" />

        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} HRAgency. All rights reserved. Made by Naveen Gaur</p>
        </div>
      </div>
    </footer>
  );
}