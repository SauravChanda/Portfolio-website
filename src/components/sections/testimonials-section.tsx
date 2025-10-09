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
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Conversational Headers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p 
            className="text-lg text-muted-foreground mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            💬 Don't just take my word for it...
          </motion.p>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            What People Say
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Here's some <em>testimonial</em> evidence that I don't just talk the talk - I walk the walk (and code the code)! 🚶‍♂️💻
          </motion.p>
        </motion.div>
        
        {/* Animated Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </motion.div>
      </div>
    </section>
  );
}