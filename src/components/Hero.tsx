import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden relative">
      
      {/* Decorative twig SVG in the bottom-right corner of the section */}
      <div className="absolute bottom-4 right-4 w-48 h-48 opacity-20 dark:opacity-10 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#C38B70]" fill="currentColor">
          <path d="M10,90 C30,70 50,45 80,10 C81,9 82,9 82,10 C82,11 81,12 80,13 C53,46 32,69 10,90 Z" />
          <path d="M35,55 C33,48 25,44 20,48 C16,51 18,59 24,62 C30,65 37,62 35,55 Z" opacity="0.85" />
          <path d="M48,42 C46,35 38,31 33,35 C29,38 31,46 37,49 C43,52 50,49 48,42 Z" opacity="0.85" />
          <path d="M62,28 C60,21 52,17 47,21 C43,24 45,32 51,35 C57,38 64,35 62,28 Z" opacity="0.85" />
          <path d="M72,16 C71,11 65,7 60,10 C56,12 57,19 62,22 C67,25 73,21 72,16 Z" opacity="0.85" />
          <path d="M38,62 C43,60 49,66 52,72 C55,77 49,81 44,78 C39,75 34,68 38,62 Z" opacity="0.75" />
          <path d="M51,49 C56,47 62,53 65,59 C68,64 62,68 57,65 C52,62 47,55 51,49 Z" opacity="0.75" />
          <path d="M63,35 C68,33 74,39 77,45 C80,50 74,54 69,51 C64,48 59,41 63,35 Z" opacity="0.75" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Content */}
        <div className="lg:col-span-5 text-left flex flex-col justify-center select-none z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Heading GOGINENI */}
            <h1 className="font-serif-heading font-bold text-5xl sm:text-6xl lg:text-[70px] text-[#2D231E] dark:text-[#FAF5F0] leading-[1.05] tracking-tight">
              GOGINENI
            </h1>
            
            {/* Signature name Jaasmitha */}
            <div className="relative mt-[-5px] mb-5 flex items-center gap-4">
              <h2 className="font-cursive text-5xl sm:text-6xl lg:text-[72px] text-black dark:text-white font-normal leading-none inline-block">
                Jaasmitha
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#2D231E]/60 dark:text-[#FAF5F0]/60 uppercase mb-6">
              AI & DATA SCIENCE STUDENT
            </p>

            {/* Description */}
            <p className="text-[#2D231E]/80 dark:text-[#FAF5F0]/80 text-sm sm:text-base leading-relaxed mb-8 max-w-[420px]">
              Passionate about leveraging AI and Data Science to solve real-world problems and create innovative solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 bg-[#2D231E] hover:bg-[#2D231E]/90 dark:bg-[#FAF5F0] dark:hover:bg-[#FAF5F0]/90 text-[#FAF5F0] dark:text-[#2D231E] font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all duration-200"
              >
                <span>View Projects</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 border border-[#2D231E] dark:border-[#FAF5F0] text-[#2D231E] dark:text-[#FAF5F0] hover:bg-[#2D231E]/5 dark:hover:bg-[#FAF5F0]/5 font-bold text-xs sm:text-sm rounded-xl transition-all duration-200"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-3">
              {[
                {
                  icon: <Github size={17} />,
                  href: "https://github.com/Jaasmitha2004",
                  label: "GitHub"
                },
                {
                  icon: <Linkedin size={17} />,
                  href: "https://linkedin.com/in/jaasmitha-gogineni",
                  label: "LinkedIn"
                },
                {
                  icon: <Mail size={17} />,
                  href: "mailto:jaasmithagogineni2006@gmail.com",
                  label: "Email"
                },
                {
                  icon: <FileText size={17} />,
                  href: "/Gogineni_Jaasmitha_Resume.txt",
                  label: "Resume"
                }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-white dark:bg-[#221815] border border-[#2D231E]/10 dark:border-[#FAF5F0]/10 rounded-full flex items-center justify-center text-[#2D231E] dark:text-[#FAF5F0] hover:bg-[#C38B70]/10 dark:hover:bg-[#E5A587]/15 hover:scale-105 transition-all duration-200 shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Center Arched Profile Image */}
        <div className="lg:col-span-4 flex items-center justify-center relative select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center p-6"
          >
            {/* The double outline circular container */}
            <div className="relative w-[300px] h-[300px] rounded-full border border-[#2D231E]/20 dark:border-[#FAF5F0]/20 p-2 bg-white/40 dark:bg-[#221815]/30">
              <div className="w-full h-full rounded-full border border-[#2D231E] dark:border-[#FAF5F0] overflow-hidden bg-white dark:bg-[#221815] flex items-center justify-center relative">
                <img
                  src="/passphoto.png"
                  alt="Gogineni Jaasmitha"
                  className="w-full h-full object-cover scale-[1.05]"
                />
              </div>
            </div>

          </motion.div>
        </div>

        {/* Right Side Content (Floating Cards & Handwritten Text) */}
        <div className="lg:col-span-3 text-left lg:pl-4 flex flex-col gap-6 justify-center relative z-10">
          
          {/* Card list */}
          <div className="flex flex-col gap-4 select-none">
            {[
              {
                title: 'Machine Learning',
                bgClass: 'bg-slate-50 dark:bg-[#2A1E1A]',
                iconColor: 'text-[#D45F45] dark:text-[#E27C65]',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                    <circle cx="12" cy="5" r="2.5" />
                    <circle cx="5" cy="12" r="2.5" />
                    <circle cx="19" cy="12" r="2.5" />
                    <circle cx="12" cy="19" r="2.5" />
                    <line x1="12" y1="7.5" x2="12" y2="16.5" />
                    <line x1="7" y1="13.5" x2="17" y2="13.5" />
                    <line x1="6.8" y1="10.2" x2="17.2" y2="13.8" />
                    <line x1="6.8" y1="13.8" x2="17.2" y2="10.2" />
                  </svg>
                )
              },
              {
                title: 'Data Science',
                bgClass: 'bg-slate-50 dark:bg-[#1F241E]',
                iconColor: 'text-[#6A7B5F] dark:text-[#90A383]',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                )
              },
              {
                title: 'Artificial Intelligence',
                bgClass: 'bg-slate-50 dark:bg-[#241E2A]',
                iconColor: 'text-[#8D6AA8] dark:text-[#B193C8]',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <rect x="9" y="9" width="6" height="6" rx="1" />
                    <line x1="9" y1="1" x2="9" y2="3" />
                    <line x1="15" y1="1" x2="15" y2="3" />
                    <line x1="9" y1="21" x2="9" y2="23" />
                    <line x1="15" y1="21" x2="15" y2="23" />
                    <line x1="1" y1="9" x2="3" y2="9" />
                    <line x1="1" y1="15" x2="3" y2="15" />
                    <line x1="21" y1="9" x2="23" y2="9" />
                    <line x1="21" y1="15" x2="23" y2="15" />
                  </svg>
                )
              }
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-2xl shadow-sm border border-[#2D231E]/5 dark:border-white/5 hover:translate-y-[-2px] transition-transform duration-250 ${card.bgClass}`}
              >
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#2D231E]/30 flex items-center justify-center shadow-sm shrink-0">
                  <div className={card.iconColor}>{card.icon}</div>
                </div>
                {/* Title */}
                <span className="text-sm font-bold text-[#2D231E] dark:text-[#FAF5F0] tracking-tight">
                  {card.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Cursive Handwriting quote */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 pl-2 pr-4 text-left select-none relative"
          >
            <p className="font-handwritten text-[28px] md:text-[32px] text-[#2D231E] dark:text-[#FAF5F0] leading-tight flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Turning Ideas</span>
              <span>into Intelligent</span>
              <span>Solutions</span>
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
};
