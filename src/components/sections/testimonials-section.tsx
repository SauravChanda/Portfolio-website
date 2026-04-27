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
    <section id="testimonials" className="border-t-4 border-white relative py-20">
      <div className="px-6 text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-black mb-4 uppercase tracking-tighter">
          // TESTIMONIALS
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
          Don&apos;t just take my word for it! Here&apos;s what my colleagues and clients have to say about our collaborations.
          Real feedback from real projects!
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