"use client"

import React from 'react'
import Image from 'next/image'
import StaggeredMenu from '@/components/ui/StaggeredMenu'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Code, 
  Smartphone, 
  Monitor, 
  Palette, 
  Brain, 
  Cloud, 
  TrendingUp, 
  Headphones,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Shield
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

const solutions = [
  {
    icon: <Code className="h-8 w-8 text-blue-500" />,
    title: "Web Development",
    description: "Custom web applications that scale",
    technologies: ["React", "Next.js", "Node.js", "Python", ".NET"],
    useCases: [
      "Enterprise portals",
      "E-commerce platforms", 
      "SaaS applications",
      "Progressive Web Apps (PWA)"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    cta: "Explore Web Solutions"
  },
  {
    icon: <Smartphone className="h-8 w-8 text-green-500" />,
    title: "Mobile App Development", 
    description: "Native and cross-platform mobile experiences",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    useCases: [
      "iOS & Android apps",
      "Cross-platform solutions",
      "Mobile-first experiences", 
      "App modernization"
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    cta: "Build Your App"
  },
  {
    icon: <Monitor className="h-8 w-8 text-purple-500" />,
    title: "Desktop Applications",
    description: "Powerful enterprise desktop software",
    technologies: [".NET", "Electron", "WPF", "C++"],
    useCases: [
      "Business management systems",
      "Data processing tools",
      "Enterprise applications",
      "Legacy system modernization"
    ],
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
    cta: "Develop Desktop Software"
  },
  {
    icon: <Palette className="h-8 w-8 text-pink-500" />,
    title: "UI/UX & Product Design",
    description: "User-centered design that converts",
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    useCases: [
      "User interface design",
      "User experience research",
      "Design systems",
      "Brand identity"
    ],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    cta: "Transform Your Design"
  },
  {
    icon: <Brain className="h-8 w-8 text-orange-500" />,
    title: "AI & Automation Solutions",
    description: "Intelligent systems that work smarter",
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Machine Learning"],
    useCases: [
      "Chatbots & virtual assistants",
      "Predictive analytics",
      "Process automation",
      "Computer vision"
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    cta: "Automate with AI"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-red-500" />,
    title: "SEO & Digital Marketing",
    description: "Data-driven growth strategies",
    technologies: ["Analytics", "SEO tools", "Content marketing"],
    useCases: [
      "Search engine optimization",
      "Content strategy",
      "Performance marketing",
      "Conversion optimization"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    cta: "Grow Your Presence"
  },
  {
    icon: <Cloud className="h-8 w-8 text-teal-500" />,
    title: "Cloud & DevOps Solutions",
    description: "Scalable infrastructure and automation",
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    useCases: [
      "Cloud migration",
      "Infrastructure as Code",
      "CI/CD pipelines",
      "Container orchestration"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    cta: "Scale Your Infrastructure"
  },
  {
    icon: <Headphones className="h-8 w-8 text-indigo-500" />,
    title: "Software Consulting & Support",
    description: "Expert guidance and ongoing maintenance",
    technologies: ["Technical consulting", "Code reviews", "Support"],
    useCases: [
      "Technology strategy",
      "Architecture design",
      "Code audits",
      "24/7 technical support"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    cta: "Get Expert Advice"
  }
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding your vision and defining project scope"
  },
  {
    step: "02", 
    title: "Design & Prototyping",
    description: "Creating intuitive interfaces and user experiences"
  },
  {
    step: "03",
    title: "Development & Testing", 
    description: "Building robust solutions with comprehensive QA"
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Seamless deployment with ongoing maintenance"
  }
]

export default function Solutions() {
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
              Our Solutions
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Comprehensive
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Software Solutions
              </span>
              <br />
              for Every Challenge
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge technology services tailored to your business needs, 
              from web and mobile development to AI automation and cloud solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <Image
                    src={solution.image} 
                    alt={solution.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    {solution.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-white/70 mb-4">{solution.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs border-white/20 text-white/60">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Use Cases:</h4>
                    <ul className="space-y-1">
                      {solution.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-center text-sm text-white/60">
                          <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    {solution.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">How We Deliver Excellence</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our proven 4-step process ensures successful project delivery every time
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Solutions?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Fast Delivery</h3>
                <p className="text-white/70">Agile methodology for rapid time-to-market</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-white/70">Bank-level security in every solution</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Scalable Architecture</h3>
                <p className="text-white/70">Built to grow with your business</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your requirements and create a custom solution that drives your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 rounded-full font-semibold text-lg">
              Request a Proposal
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg">
              Schedule Consultation
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
