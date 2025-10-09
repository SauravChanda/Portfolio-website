"use client";

import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "Outstanding Full Stack Developer with excellent DevOps and CI/CD skills. Saurav consistently delivers high-quality solutions and goes above and beyond to help teammates. His collaborative nature and quick learning ability make him invaluable to any team.",
    name: "Rahul",
    designation: "Lead Software Engineer at Ymir",
    src: "/Rahul.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/saurav-chanda/"
  },
  {
    quote: "Saurav's dedication and natural curiosity drive successful projects. His proactive problem-solving skills and leadership foster collaborative environments. With his positive attitude and drive for growth, he would excel in any tech leadership role.",
    name: "Renuka", 
    designation: "Founder at Soululu",
    src: "/Renuka.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/saurav-chanda/"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials">
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