"use client"

import React from 'react'
import StaggeredMenu from '@/components/ui/StaggeredMenu'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  MapPin,
  Clock,
  Users,
  Rocket,
  DollarSign,
  Home,
  BookOpen,
  Heart,
  Coffee,
  Laptop,
  Code,
  Palette,
  Server,
  Brain,
  TrendingUp,
  Headphones,
  ArrowRight
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

const benefits = [
  {
    icon: Rocket,
    title: "Cutting-Edge Projects",
    description: "Work on innovative technologies and challenging problems that push the boundaries of what's possible."
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Industry-leading salaries, performance bonuses, and equity options for all team members."
  },
  {
    icon: Home,
    title: "Remote Flexibility",
    description: "Work from anywhere with flexible hours and a healthy work-life balance."
  },
  {
    icon: BookOpen,
    title: "Learning & Growth",
    description: "Professional development budget, conference attendance, and continuous learning opportunities."
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision insurance for you and your family."
  },
  {
    icon: Coffee,
    title: "Great Culture",
    description: "Collaborative, inclusive environment with regular team events and celebrations."
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible schedules, unlimited PTO, and mental health support programs."
  },
  {
    icon: Laptop,
    title: "Latest Tools",
    description: "Premium equipment, software licenses, and all the tools you need to succeed."
  }
]

const jobs = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote/Hybrid",
    type: "Full-time",
    experience: "5+ years",
    description: "Build scalable web applications with React and Node.js. Lead technical decisions and mentor junior developers.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    icon: Code
  },
  {
    id: 2,
    title: "Mobile App Developer (React Native)",
    department: "Engineering", 
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Create beautiful cross-platform mobile experiences for iOS and Android using React Native.",
    skills: ["React Native", "JavaScript", "iOS", "Android", "Firebase"],
    icon: Rocket
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote/On-site",
    type: "Full-time", 
    experience: "4+ years",
    description: "Design intuitive interfaces that users love. Create design systems and conduct user research.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
    icon: Palette
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years", 
    description: "Build and maintain robust cloud infrastructure. Implement CI/CD pipelines and monitoring systems.",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    icon: Server
  },
  {
    id: 5,
    title: "AI/ML Engineer",
    department: "AI/Data",
    location: "Hybrid",
    type: "Full-time",
    experience: "3+ years",
    description: "Develop intelligent automation solutions and machine learning models for our clients.",
    skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Data Science"],
    icon: Brain
  },
  {
    id: 6,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Drive growth through data-driven marketing strategies. Manage SEO, content, and performance campaigns.",
    skills: ["SEO", "Google Analytics", "Content Marketing", "PPC", "Social Media"],
    icon: TrendingUp
  },
  {
    id: 7,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote/Hybrid",
    type: "Full-time",
    experience: "3+ years",
    description: "Ensure client satisfaction and success. Build relationships and drive account growth.",
    skills: ["Customer Relations", "Project Management", "Communication", "CRM", "Analytics"],
    icon: Headphones
  },
  {
    id: 8,
    title: "Junior Software Developer",
    department: "Engineering",
    location: "Remote/Mentorship",
    type: "Full-time",
    experience: "0-2 years",
    description: "Start your career with us! Learn from senior developers while contributing to real projects.",
    skills: ["JavaScript", "React", "Git", "Problem Solving", "Eagerness to Learn"],
    icon: Code
  }
]

const departmentColors = {
  "Engineering": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Design": "bg-purple-500/20 text-purple-300 border-purple-500/30", 
  "Infrastructure": "bg-green-500/20 text-green-300 border-green-500/30",
  "AI/Data": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  "Marketing": "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "Customer Success": "bg-teal-500/20 text-teal-300 border-teal-500/30"
}

export default function Careers() {
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
              Join Our Team
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Join Our Team of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Innovators
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              We're always looking for talented people to build the future with us. 
              Join a team that values innovation, creativity, and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Join Us?</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We believe in creating an environment where talented people can do their best work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <benefit.icon className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-xl text-white/70">
              Find your next opportunity and grow your career with us
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <Card key={job.id} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <job.icon className="h-8 w-8 text-purple-400" />
                      <div>
                        <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                          {job.title}
                        </CardTitle>
                        <Badge className={departmentColors[job.department as keyof typeof departmentColors] || "bg-gray-500/20 text-gray-300"}>
                          {job.department}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-white/60 mt-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-white/70 mb-4 leading-relaxed">{job.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs border-white/20 text-white/60">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white group-hover:scale-105 transition-transform duration-300">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Culture</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We foster an environment of collaboration, innovation, and continuous learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Collaborative</h3>
                <p className="text-white/70 leading-relaxed">
                  We believe the best solutions come from diverse perspectives working together towards common goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovative</h3>
                <p className="text-white/70 leading-relaxed">
                  We encourage experimentation and creative problem-solving to push the boundaries of technology.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Growth-Focused</h3>
                <p className="text-white/70 leading-relaxed">
                  We invest in our people's development and provide opportunities for career advancement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and let's start a conversation!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 rounded-full font-semibold text-lg">
              General Application
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg">
              careers@company.com
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
