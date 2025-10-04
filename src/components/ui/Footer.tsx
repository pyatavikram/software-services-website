"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from './button';
import { Input } from './input';
import { Textarea } from './textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Linkedin, Twitter, Github, Dribbble, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-white/70 mb-8">
              Have a project in mind? We&apos;d love to hear from you. Fill out the form and we&apos;ll get back to you shortly.
            </p>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input placeholder="Name" required className="bg-white/10 border-white/20" />
                <Input type="email" placeholder="Email" required className="bg-white/10 border-white/20" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Input placeholder="Phone (Optional)" className="bg-white/10 border-white/20" />
                <Input placeholder="Company (Optional)" className="bg-white/10 border-white/20" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20">
                    <SelectValue placeholder="Service Interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Apps</SelectItem>
                    <SelectItem value="ai">AI Solutions</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20">
                    <SelectValue placeholder="Project Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<10k">&lt;$10k</SelectItem>
                    <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                    <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                    <SelectItem value="100k+">$100k+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Textarea placeholder="Message" required className="bg-white/10 border-white/20" />
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-white/70">123 Tech Boulevard, Innovation District, San Francisco, CA 94105</p>
              <p className="text-white/70">hello@yourcompany.com | support@yourcompany.com</p>
              <p className="text-white/70">+1 (555) 123-4567</p>
              <p className="text-white/70">Mon-Fri: 9 AM - 6 PM PST</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-white/70 hover:text-white"><Linkedin /></Link>
              <Link href="#" className="text-white/70 hover:text-white"><Twitter /></Link>
              <Link href="#" className="text-white/70 hover:text-white"><Github /></Link>
              <Link href="#" className="text-white/70 hover:text-white"><Dribbble /></Link>
              <Link href="#" className="text-white/70 hover:text-white"><Instagram /></Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              <div>
                <h4 className="font-semibold mb-3">Company</h4>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-white/70 hover:text-white">About</Link></li>
                  <li><Link href="/about" className="text-white/70 hover:text-white">Team</Link></li>
                  <li><Link href="/careers" className="text-white/70 hover:text-white">Careers</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Solutions</h4>
                <ul className="space-y-2">
                  <li><Link href="/solutions" className="text-white/70 hover:text-white">Web Dev</Link></li>
                  <li><Link href="/solutions" className="text-white/70 hover:text-white">Mobile Apps</Link></li>
                  <li><Link href="/solutions" className="text-white/70 hover:text-white">AI Solutions</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-white/70 hover:text-white">Case Studies</Link></li>
                  <li><Link href="#" className="text-white/70 hover:text-white">Support</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Legal</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-white/70 hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="#" className="text-white/70 hover:text-white">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-20 pt-8 border-t border-white/10 text-white/50">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
