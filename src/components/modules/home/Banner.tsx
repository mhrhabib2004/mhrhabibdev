"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const mainSkills = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "SQL Developer",
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % mainSkills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsTyping(true);
    setDisplayText("");
    let i = 0;
    const currentSkill = mainSkills[index];
    
    const typingInterval = setInterval(() => {
      if (i < currentSkill.length) {
        setDisplayText(currentSkill.substring(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
      setIsTyping(false);
    };
  }, [index]);

  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 gap-8 md:gap-16">
      {/* Profile Picture */}
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl border-4 border-primary/80 dark:border-primary/60 transition-all flex-shrink-0">
        <Image
          src="/profile1.png"
          alt="Md. Habibur Rahman Habib"
          width={300}
          height={300}
          className="object-cover w-full h-full"
          priority
          quality={100}
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 max-w-2xl text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 sm:mb-6 leading-tight">
          Md. Habibur Rahman Habib
        </h1>

        <div className="text-xl sm:text-2xl font-medium text-foreground mb-4 sm:mb-6 h-10 flex items-center justify-center md:justify-start">
          <span className="mr-2">I am a</span>
          <span className="inline-block min-w-[240px] h-[36px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={mainSkills[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute text-primary font-semibold"
              >
                {displayText}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                )}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed sm:leading-loose">
          Passionate Full Stack Developer skilled in MERN stack and SQL databases.
          Experienced in building scalable web applications with React, Next.js, 
          Node.js, Express, MongoDB, and PostgreSQL using Prisma. Proficient in 
          Tailwind CSS and Redux Toolkit. Dedicated to delivering efficient and 
          clean digital solutions.
        </p>

        {/* Resume Download Button */}
        <div className="flex justify-center md:justify-start">
          <Link href="/resume.pdf" download passHref>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-md font-medium transition-all hover:scale-105 hover:shadow-md"
            >
              Download Resume
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}