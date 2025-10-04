"use client";

import { HoverSlider, HoverSliderImage, HoverSliderImageWrap, TextStaggerHover } from "@/components/ui/animated-slideshow";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Features } from "@/components/ui/features-8";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Button } from "@/components/ui/button";
import { Code, Palette, Cloud, Search, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SVGProps } from "react";

// Services data for the slideshow
const SLIDES = [
  {
    id: "slide-1",
    title: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-2",
    title: "Mobile Apps",
    imageUrl: "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-3",
    title: "UI UX Design",
    imageUrl: "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-4",
    title: "Desktop Apps",
    imageUrl: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-5",
    title: "AI Solutions",
    imageUrl: "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-6",
    title: "Cloud DevOps",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-7",
    title: "SEO Marketing",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-8",
    title: "Consulting",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Process timeline data
const timelineData = [
  {
    id: 1,
    title: "Discovery & Planning",
    date: "Week 1",
    content: "Understanding your vision and defining project scope with detailed requirements analysis.",
    category: "Planning",
    icon: Search,
    relatedIds: [2],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Design & Prototyping",
    date: "Week 2-3",
    content: "Creating intuitive interfaces and user experiences with interactive prototypes.",
    category: "Design",
    icon: Palette,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Development",
    date: "Week 4-8",
    content: "Building robust, scalable software solutions using cutting-edge technologies.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Testing & QA",
    date: "Week 9",
    content: "Comprehensive testing and quality assurance to ensure flawless performance.",
    category: "Testing",
    icon: CheckCircle,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 75,
  },
  {
    id: 5,
    title: "Deployment",
    date: "Week 10",
    content: "Seamless deployment and go-live with monitoring and optimization.",
    category: "Deployment",
    icon: Cloud,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 70,
  },
  {
    id: 6,
    title: "Support & Maintenance",
    date: "Ongoing",
    content: "Continuous support, updates, and maintenance for optimal performance.",
    category: "Support",
    icon: Users,
    relatedIds: [5],
    status: "pending" as const,
    energy: 80,
  },
];

// Team testimonials
const teamTestimonials = [
  {
    quote: "We believe in building software that not only meets today's needs but anticipates tomorrow's challenges. Our vision is to empower businesses through intelligent technology solutions.",
    name: "Alex Johnson",
    designation: "CEO & Founder",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Technology is our canvas, and innovation is our brush. We craft digital experiences that transform how businesses operate and grow in the modern world.",
    name: "Sarah Chen",
    designation: "Chief Technology Officer",
    src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Great design is invisible. It&apos;s about creating intuitive experiences that feel natural and effortless, allowing users to focus on what matters most to them.",
    name: "Michael Rodriguez",
    designation: "Lead Designer",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Clean code is not just about functionality—it&apos;s about creating sustainable, scalable solutions that stand the test of time and evolving requirements.",
    name: "Emily Watson",
    designation: "Senior Developer",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Success is measured not just by project completion, but by the lasting impact our solutions have on our clients' business growth and efficiency.",
    name: "David Kim",
    designation: "Project Manager",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Digital marketing is about connecting the right message with the right audience at the right time, creating meaningful relationships that drive sustainable growth.",
    name: "Lisa Thompson",
    designation: "Marketing Head",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Logo components for client carousel
function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="209" height="256" viewBox="0 0 814 1000" {...props}>
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" fill="currentColor" />
    </svg>
  );
}

function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" {...props}>
      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h240z" fill="currentColor"/>
    </svg>
  );
}

function MicrosoftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
      <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" fill="currentColor"/>
    </svg>
  );
}

function NetflixIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
      <path d="M400.5 32C426.8 32 448 53.2 448 79.5v353C448 458.8 426.8 480 400.5 480H47.5C21.2 480 0 458.8 0 432.5v-353C0 53.2 21.2 32 47.5 32H400.5zM143.5 128v256l80-128-80-128zm161 0v256l80-128-80-128z" fill="currentColor"/>
    </svg>
  );
}

function AmazonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
      <path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z" fill="currentColor"/>
    </svg>
  );
}

function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" {...props}>
      <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" fill="currentColor"/>
    </svg>
  );
}

const allLogos = [
  { name: "Apple", id: 1, img: AppleIcon },
  { name: "Google", id: 2, img: GoogleIcon },
  { name: "Microsoft", id: 3, img: MicrosoftIcon },
  { name: "Netflix", id: 4, img: NetflixIcon },
  { name: "Amazon", id: 5, img: AmazonIcon },
  { name: "Spotify", id: 6, img: SpotifyIcon },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent leading-tight">
              We Build Intelligent Software Solutions
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-400 mb-12 flex items-center justify-center gap-4 flex-wrap"
          >
            <span>Web</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span>Mobile</span>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span>Windows</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>AI</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
              <Link href="/solutions">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Services That Drive Digital Transformation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From concept to deployment, we deliver end-to-end software solutions
            </p>
          </div>
          
          <HoverSlider className="min-h-[600px] place-content-center p-6 md:px-12 bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl">
            <h3 className="mb-6 text-blue-400 text-xs font-medium capitalize tracking-wide">
              / our services
            </h3>
            <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12">
              <div className="flex flex-col space-y-2 md:space-y-4">
                {SLIDES.map((slide, index) => (
                  <TextStaggerHover
                    key={slide.title}
                    index={index}
                    className="cursor-pointer text-4xl font-bold uppercase tracking-tighter hover:text-blue-400 transition-colors"
                    text={slide.title}
                  />
                ))}
              </div>
              <HoverSliderImageWrap className="w-96 h-96">
                {SLIDES.map((slide, index) => (
                  <div key={slide.id}>
                    <HoverSliderImage
                      index={index}
                      imageUrl={slide.imageUrl}
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="size-full object-cover rounded-lg"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                ))}
              </HoverSliderImageWrap>
            </div>
          </HoverSlider>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Proven Development Process
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A systematic approach to building exceptional software
          </p>
        </div>
        <RadialOrbitalTimeline timelineData={timelineData} />
      </section>

      {/* Statistics Section */}
      <section className="py-32 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-400">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-400">200+</div>
              <div className="text-gray-400">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-green-400">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-400">42</div>
              <div className="text-gray-400">Team Members</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <Features />

      {/* Our Brands/Clients Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <GradientHeading variant="secondary" size="sm">
              Trusted by Industry Leaders
            </GradientHeading>
            <GradientHeading size="xl">
              Partnering with innovative companies worldwide
            </GradientHeading>
          </div>
          <div className="flex justify-center">
            <LogoCarousel columnCount={3} logos={allLogos} />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Meet the Minds Behind the Magic
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A diverse team of experts united by passion for innovation
            </p>
          </div>
          <AnimatedTestimonials testimonials={teamTestimonials} autoplay={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-16 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and discover how we can help you achieve your goals with cutting-edge technology solutions.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
