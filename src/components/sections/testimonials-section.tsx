"use client";

import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "Saurav's work on our no-code API integration platform was exceptional. His technical leadership and innovative approach to problem-solving helped us create a scalable solution that serves thousands of users. His expertise in React and PHP made the difference.",
    name: "Alex Johnson",
    designation: "Product Manager at Ymir",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Working with Saurav on the DrDropin healthcare platform was incredible. He reduced our server costs by 75% through smart cloud migration and built robust React applications. His DevOps skills with Docker and GCP are outstanding.",
    name: "Dr. Sarah Mitchell",
    designation: "CTO at Healthcare Solutions",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Saurav's expertise in autonomous vehicle software development is remarkable. His trip booking system and map editor using React and HTML Canvas were game-changers for our operations. A true full-stack developer.",
    name: "Rajesh Kumar",
    designation: "Engineering Lead at Ati Motors",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Saurav's implementation of Google Gemini AI in our platform accelerated user interactions significantly. His ability to integrate cutting-edge AI with practical business solutions is impressive. Highly recommend his technical leadership.",
    name: "Maria Rodriguez",
    designation: "AI Product Manager",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "The CI/CD pipelines Saurav set up with GitHub Actions transformed our deployment process. His expertise in DevOps, combined with his full-stack development skills, makes him an invaluable team member.",
    name: "David Chen",
    designation: "DevOps Engineer",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function TestimonialsSection() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          <span className="text-amber-600 dark:text-amber-400">💬 What People Say About Working With Me</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Don&apos;t just take my word for it! Here&apos;s what my colleagues and clients have to say about our collaborations. 
          Real feedback from real projects! 🌟
        </p>
      </div>
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