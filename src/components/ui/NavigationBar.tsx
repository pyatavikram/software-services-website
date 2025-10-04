"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './button';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export function NavigationBar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        hasScrolled ? 'bg-black shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-white">
          YourLogo
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-white hover:text-purple-300 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </header>
  );
}