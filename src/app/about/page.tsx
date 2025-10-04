"use client"

import React from 'react'
import Image from 'next/image'
import StaggeredMenu from '@/components/ui/StaggeredMenu'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart, 
  Lightbulb, 
  Shield, 
  Zap,
  Code,
  Palette,
  Brain,
  Rocket
} from 'lucide-react'

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Solutions', ariaLabel: 'View our solutions', link: '/solutions' },
  { label: 'Careers', ariaLabel: 'View careers', link: '/careers' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
]

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
]

const stats = [
  { number: "500+", label: "Projects Completed", icon: Target, description: "Successfully delivered projects across various industries" },
  { number: "98%", label: "Client Satisfaction", icon: Award, description: "Industry expertise you can trust" },
  { number: "15+", label: "Years Experience", icon: Globe, description: "Proven track record in software development" },
  { number: "42", label: "Team Members", icon: Users, description: "Talented professionals dedicated to your success" }
]

const values = [
  {
    icon: Heart,
    title: "Client-Centric Approach",
    description: "We put our clients at the heart of everything we do, ensuring their success is our success."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and innovative solutions to solve complex challenges."
  },
  {
    icon: Shield,
    title: "Quality & Security",
    description: "We maintain the highest standards of code quality and security in every project we deliver."
  },
  {
    icon: Zap,
    title: "Agile Excellence",
    description: "Our agile methodology ensures rapid delivery without compromising on quality or functionality."
  }
]

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    quote: "Our vision is to empower businesses through innovative technology solutions that drive real growth.",
    icon: Rocket
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    quote: "We believe in building scalable, maintainable solutions using the latest technologies and best practices.",
    icon: Code
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    quote: "Great design is not just about aesthetics—it&apos;s about creating intuitive experiences that users love.",
    icon: Palette
  },
  {
    name: "David Thompson",
    role: "AI/ML Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    quote: "Artificial intelligence isn&apos;t the future—it&apos;s the present, and we&apos;re here to help you harness its power.",
    icon: Brain
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        logoUrl="/logo.svg"
        accentColor="#ff6b6b"
      />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              About Our Company
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Building the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Future
              </span>
              <br />
              Together
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of developers, designers, and innovators dedicated to creating 
              exceptional software solutions that transform businesses and improve lives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                To empower businesses of all sizes with cutting-edge software solutions that drive growth, 
                efficiency, and innovation. We believe technology should be accessible, reliable, and 
                transformative for every organization we work with.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white/80">Deliver exceptional user experiences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white/80">Build scalable, future-proof solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white/80">Foster long-term partnerships</span>
                </div>
              </div>
            </div>
            <div className="relative">
                <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                  width={600}
                  height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-white/70">Trusted by companies worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <stat.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-white/90 mb-2">{stat.label}</div>
                  <div className="text-sm text-white/60">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet the Minds Behind the Magic</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A diverse team of experts united by passion for innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                      <Image
                      src={member.image} 
                      alt={member.name}
                        width={400}
                        height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <member.icon className="h-8 w-8 text-purple-400 mb-2" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-purple-300 mb-3">{member.role}</p>
                      <p className="text-sm text-white/70 italic">&quot;{member.quote}&quot;</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and discover how our team can help bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 rounded-full font-semibold text-lg">
              Start a Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg">
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
    </div>
  )
}
