"use client";

import React from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
    { quote: "Exceptional team! They delivered our mobile app ahead of schedule with outstanding quality.", author: "Sarah Johnson, CEO, TechStart Inc." },
    { quote: "The AI solution they built transformed our business operations. ROI exceeded expectations.", author: "Michael Chen, CTO, AutoFlow Systems" },
    { quote: "Professional, responsive, and incredibly talented. Our web platform has never been better.", author: "Emily Rodriguez, Founder, EduConnect" },
    { quote: "They took time to understand our needs and delivered exactly what we envisioned.", author: "David Thompson, Director, RetailPro" },
    { quote: "Best software development partner we've worked with. Highly recommend!", author: "Lisa Wang, VP Product, HealthTech Solutions" },
    { quote: "Their UI/UX design elevated our brand. User engagement increased by 200%.", author: "James Miller, Marketing Director, BrandForward" },
    { quote: "Seamless cloud migration with zero downtime. Impressive technical expertise.", author: "Robert Garcia, IT Manager, Enterprise Corp" },
    { quote: "Transparent communication throughout the project. Felt like an extension of our team.", author: "Amanda Foster, COO, FinanceFlow" },
    { quote: "The desktop application they built revolutionized our workflow efficiency.", author: "Kevin Lee, Operations Lead, LogisticsPro" },
    { quote: "Outstanding post-launch support. They truly care about our success.", author: "Nicole Brown, Founder, StartupHub" },
    { quote: "A team that truly understands the nuances of enterprise software development.", author: "John Davis, CIO, Global Innovations" },
    { quote: "The mobile app is a masterpiece of design and functionality. Our users love it.", author: "Jessica Martinez, Head of Mobile, ConnectApp" },
    { quote: "Their SEO strategies doubled our organic traffic in just six months. Incredible results.", author: "Chris Green, Marketing VP, Growthify" },
    { quote: "The custom CRM they developed has streamlined our entire sales process. A game-changer.", author: "Laura White, Sales Director, ProSellers" },
    { quote: "Reliable, efficient, and always willing to go the extra mile. A true partner.", author: "Mark Robinson, CEO, Synergy Inc." },
];

const MarqueeRow = ({ testimonials, duration = '120s', reverse = false }) => (
    <div className="flex w-full overflow-hidden">
        <div className={cn('flex w-max animate-marquee', { 'animate-marquee-reverse': reverse })} style={{ animationDuration: duration }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="w-[350px] flex-shrink-0 mx-4 p-6 bg-white/10 rounded-lg shadow-lg border border-white/20">
                    <p className="text-white/90 italic">&quot;{testimonial.quote}&quot;</p>
                    <p className="mt-4 text-right font-semibold text-purple-300">- {testimonial.author}</p>
                </div>
            ))}
        </div>
    </div>
);

export function TestimonialsMarquee() {
    const row1 = testimonials.slice(0, 5);
    const row2 = testimonials.slice(5, 10);
    const row3 = testimonials.slice(10, 15);

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-12">What Our Clients Say</h2>
            </div>
            <div className="relative flex flex-col gap-8 -skew-y-3">
                <MarqueeRow testimonials={row1} duration="100s" />
                <MarqueeRow testimonials={row2} duration="150s" reverse={true} />
                <MarqueeRow testimonials={row3} duration="120s" />
            </div>
        </section>
    );
}