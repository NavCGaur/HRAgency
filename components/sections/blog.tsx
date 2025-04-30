import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  {
    title: "How to Build a Retirement Portfolio That Lasts",
    excerpt: "Learn the essential strategies for creating a retirement portfolio that provides lasting income throughout your retirement years.",
    image: "https://images.pexels.com/photos/7689076/pexels-photo-7689076.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "May 15, 2025",
    author: "Michael Thompson",
    category: "Retirement"
  },
  {
    title: "Market Volatility: How to Protect Your Investments",
    excerpt: "Discover practical approaches to protecting your investment portfolio during periods of market volatility and uncertainty.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "May 8, 2025",
    author: "Jennifer Wilson",
    category: "Investments"
  },
  {
    title: "Tax Strategies for Business Owners in 2025",
    excerpt: "Explore effective tax planning strategies for small business owners to minimize tax liability and maximize profitability.",
    image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "April 29, 2025",
    author: "David Martinez",
    category: "Taxation"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Financial Insights</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest articles on financial planning, investment strategies, and market trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:bg-gray-800"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 text-sm rounded">
                  {post.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="font-bold text-xl mb-3 line-clamp-2 hover:text-primary transition-colors">
                  <Link href="#">{post.title}</Link>
                </h3>
                
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
              </CardContent>
              
              <CardFooter className="px-6 pb-6 pt-0">
                <Link href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}