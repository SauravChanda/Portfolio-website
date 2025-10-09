"use client";

import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "Working with Saurav was an absolute pleasure. His attention to detail and innovative approach to problem-solving made our project a huge success. The quality of code and user experience he delivered exceeded our expectations.",
    name: "Sarah Johnson",
    designation: "Product Manager at TechCorp",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Saurav's expertise in modern web technologies is impressive. He delivered a scalable, performant application that perfectly matched our requirements. His communication throughout the project was excellent.",
    name: "Michael Chen",
    designation: "CTO at StartupXYZ",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "The landing page Saurav created for us not only looks stunning but also converts incredibly well. His understanding of both design and development is rare and valuable. Highly recommended!",
    name: "Emily Rodriguez",
    designation: "Marketing Director at GrowthCo",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Saurav transformed our outdated website into a modern, responsive platform that our users love. His technical skills combined with his design sensibility make him an exceptional developer.",
    name: "David Thompson",
    designation: "Founder at InnovateLab",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "The e-commerce platform Saurav built for us handles thousands of transactions seamlessly. His focus on performance optimization and user experience is outstanding. A true professional!",
    name: "Lisa Park",
    designation: "CEO at RetailPlus",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function TestimonialsSection() {
  return (
    <section>
        {/* Animated Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </motion.div>
    </section>
  );
}