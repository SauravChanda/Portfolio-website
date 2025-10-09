"use client";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { ScrollToSection } from "@/components/ui/scroll-to-section";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { GlassCard } from "@/components/ui/glass-card";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.p
              className="text-sm text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              👋 Welcome! Let me introduce myself...
            </motion.p>
            <motion.h1
              className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
                Saurav Chanda
              </span>
            </motion.h1>
            <div className="mt-4 max-w-2xl">
              <TextGenerateEffect
                words="I build full-stack apps, wrangle clouds, and ship features faster than you can say 'pnpm install' ☕"
                className="text-base sm:text-lg text-foreground/80"
              />
            </div>
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <ScrollToSection targetId="projects">
                  <Button>
                    View Projects
                  </Button>
                </ScrollToSection>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ScrollToSection targetId="contact">
                  <Button variant="outline">
                    Contact Me
                  </Button>
                </ScrollToSection>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/sauravchanda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" asChild>
                  <a
                    href="https://www.linkedin.com/in/sauravchanda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end hidden md:block">
            <div className="relative">
              {/* Gradient background circle - outside animation to prevent white flash */}

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                    <CardItem
                      translateZ="0"
                      className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 p-4"
                    >
                      <GlassCard/>
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                      <div className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-lg  grid grid-cols-2 grid-rows-2 gap-12">
                        <GlassCard />
                        <GlassCard />
                        <GlassCard />
                        <GlassCard />
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ="110"
                      className="absolute w-full h-full"
                    >
                      <Image
                        src="/Saurav.png"
                        alt="Saurav Chanda - Full-stack Developer"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                        style={{
                          filter: 'drop-shadow(rgba(255, 255, 255, 1) 0px 0px 6px) drop-shadow(rgba(255, 255, 255, 0.8) 0px 0px 40px) '
                        }}
                      />
                      {/* Subtle inner glow to smooth edges */}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }