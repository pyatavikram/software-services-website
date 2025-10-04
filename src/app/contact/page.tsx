import React from 'react';
import { Badge } from '@/components/ui/badge';
import { TestimonialsMarquee } from '@/components/ui/TestimonialsMarquee';
import { Footer } from '@/components/ui/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <section className="relative z-10 pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              Get in Touch
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Let&apos;s Turn Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Vision
              </span>
              <br />
              Into Reality
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Get in touch to discuss your project and discover how we can help.
            </p>
          </div>
        </div>
      </section>
      <TestimonialsMarquee />
      <Footer />
    </div>
  );
}