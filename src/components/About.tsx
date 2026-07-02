import React, { useState } from 'react';
import { User, Code, Heart, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const techStack = [
    {
      name: 'Python',
      category: 'Languages',
      logo: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <path d="M50,15 C30,15 28,26 28,32 L28,42 L50,42 L50,45 L20,45 C14,45 10,50 10,65 C10,80 18,85 28,85 L36,85 L36,76 C36,68 42,62 50,62 L70,62 C76,62 82,56 82,45 C82,32 76,15 50,15 Z" fill="#387EB8" />
          <path d="M50,85 C70,85 72,74 72,68 L72,58 L50,58 L50,55 L80,55 C86,55 90,50 90,35 C90,20 82,15 72,15 L64,15 L64,24 C64,32 58,38 50,38 L30,38 C24,38 18,44 18,55 C18,68 24,85 50,85 Z" fill="#FFE052" />
          <circle cx="36" cy="28" r="3.5" fill="#FFF" />
          <circle cx="64" cy="72" r="3.5" fill="#FFF" />
        </svg>
      )
    },
    {
      name: 'C',
      category: 'Languages',
      logo: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <circle cx="50" cy="50" r="40" fill="#A8B9CC" opacity="0.15" />
          <path d="M72,32 C62,22 42,22 32,32 C22,42 22,58 32,68 C42,78 62,78 72,68" stroke="#00599C" strokeWidth="12" fill="none" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Java',
      category: 'Languages',
      logo: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <circle cx="50" cy="50" r="40" fill="#E76F51" opacity="0.15" />
          <path d="M32,54 C32,66 58,66 58,54 C58,46 32,46 32,54 Z" stroke="#E76F51" strokeWidth="5" fill="none" />
          <path d="M58,50 C65,50 68,56 65,60 C62,64 58,62 58,59" stroke="#E76F51" strokeWidth="4" fill="none" />
          <path d="M26,68 L64,68" stroke="#E76F51" strokeWidth="5" strokeLinecap="round" />
          <path d="M38,40 C38,30 44,32 44,24" stroke="#0073B7" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M48,40 C48,28 54,30 54,20" stroke="#0073B7" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'HTML',
      category: 'Web',
      logo: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <circle cx="50" cy="50" r="40" fill="#E34F26" opacity="0.15" />
          <path d="M25,20 L30,75 L50,85 L70,75 L75,20 Z" fill="#E34F26" />
          <path d="M50,25 L50,78.5 L65.5,70 L69,25 Z" fill="#F16529" />
          <path d="M50,38 L38,38 L39,48 L50,48 L50,56 L40,56 L40.5,66 L50,70 L50,38 Z" fill="#FFF" />
          <path d="M50,38 L62,38 L61,48 L50,48 L50,56 L59,56 L58,66 L50,70 L50,38 Z" fill="#EBEBEB" />
        </svg>
      )
    },
    {
      name: 'CSS',
      category: 'Web',
      logo: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <circle cx="50" cy="50" r="40" fill="#1572B6" opacity="0.15" />
          <path d="M25,20 L30,75 L50,85 L70,75 L75,20 Z" fill="#1572B6" />
          <path d="M50,25 L50,78.5 L65.5,70 L69,25 Z" fill="#33A9DC" />
          <path d="M50,38 L38,38 L39,48 L50,48 L50,56 L40,56 L40.5,66 L50,70 L50,38 Z" fill="#FFF" />
          <path d="M50,38 L62,38 L61,48 L50,48 L50,56 L59,56 L58,66 L50,70 L50,38 Z" fill="#EBEBEB" />
        </svg>
      )
    }
  ];


  const interests = [
    'Machine Learning',
    'Deep Learning',
    'Artificial Intelligence',
    'Data Analytics',
    'Responsive Web Design'
  ];

  return (
    <section id="about" className="py-16 relative select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Three Column Glassmorphic Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Column 1: About Me */}
          <div className="glassmorphism-card p-6 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-[#2D231E]/10 dark:border-white/10 pb-3">
                <User size={20} className="text-primary" />
                <h3 className="text-md font-bold tracking-wider text-[#2D231E] dark:text-[#FAF5F0] uppercase font-sans">
                  About Me
                </h3>
              </div>
              
              <p className="text-[#2D231E]/80 dark:text-[#FAF5F0]/80 text-sm leading-relaxed mb-4">
                I am GOGINENI JAASMITHA, a passionate and dedicated B.Tech student at Vignan’s Institute of Information Technology, pursuing my degree in Artificial Intelligence and Data Science. I have a strong interest in exploring the rapidly evolving fields of AI, Machine Learning, and Deep Learning.
              </p>
            </div>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 w-fit px-5 py-2.5 bg-[#C38B70]/10 hover:bg-[#C38B70]/20 text-[#C38B70] dark:text-[#E5A587] font-bold text-xs rounded-full flex items-center gap-2 transition-all duration-200"
            >
              <span>Read More About Me</span>
              <User size={13} />
            </button>
          </div>

          {/* Column 2: Technical Skills */}
          <div id="skills" className="glassmorphism-card p-6 text-left flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-[#2D231E]/10 dark:border-white/10 pb-3">
                <Code size={20} className="text-primary" />
                <h3 className="text-md font-bold tracking-wider text-[#2D231E] dark:text-[#FAF5F0] uppercase font-sans">
                  Technical Skills
                </h3>
              </div>

              {/* Programming Languages */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#2D231E]/60 dark:text-[#FAF5F0]/60 uppercase tracking-wider mb-3 font-sans">
                  Programming Languages
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {techStack.filter(t => t.category === 'Languages').map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center p-2 bg-white dark:bg-[#221815]/40 rounded-2xl border border-[#2D231E]/5 dark:border-white/5 shadow-sm hover:border-[#C38B70]/30 transition-all duration-200 group"
                      title={tech.name}
                    >
                      <div className="w-9 h-9 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                        {tech.logo}
                      </div>
                      <span className="text-[9px] text-[#2D231E]/60 dark:text-[#FAF5F0]/60 font-bold mt-1.5 truncate w-full text-center">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Web Technologies */}
              <div>
                <h4 className="text-xs font-bold text-[#2D231E]/60 dark:text-[#FAF5F0]/60 uppercase tracking-wider mb-3 font-sans">
                  Web Technologies
                </h4>
                <div className="grid grid-cols-2 gap-3 max-w-[200px]">
                  {techStack.filter(t => t.category === 'Web').map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center p-2 bg-white dark:bg-[#221815]/40 rounded-2xl border border-[#2D231E]/5 dark:border-white/5 shadow-sm hover:border-[#C38B70]/30 transition-all duration-200 group"
                      title={tech.name}
                    >
                      <div className="w-9 h-9 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                        {tech.logo}
                      </div>
                      <span className="text-[9px] text-[#2D231E]/60 dark:text-[#FAF5F0]/60 font-bold mt-1.5 truncate w-full text-center">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Core Focus & Soft Skills */}
          <div className="glassmorphism-card p-6 text-left flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-[#2D231E]/10 dark:border-white/10 pb-3">
                <Heart size={20} className="text-primary" />
                <h3 className="text-md font-bold tracking-wider text-[#2D231E] dark:text-[#FAF5F0] uppercase font-sans">
                  Core Focus & Soft Skills
                </h3>
              </div>

              {/* Core Concepts */}
              <div className="mb-6 z-10 relative">
                <h4 className="text-xs font-bold text-[#2D231E]/60 dark:text-[#FAF5F0]/60 uppercase tracking-wider mb-3 font-sans">
                  Core Concepts
                </h4>
                <ul className="space-y-2.5 pl-1">
                  {interests.map((concept) => (
                    <li key={concept} className="flex items-center gap-2.5 text-[#2D231E]/80 dark:text-[#FAF5F0]/80 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Soft Skills */}
              <div className="z-10 relative">
                <h4 className="text-xs font-bold text-[#2D231E]/60 dark:text-[#FAF5F0]/60 uppercase tracking-wider mb-3 font-sans">
                  Soft Skills
                </h4>
                <ul className="space-y-2.5 pl-1">
                  {['Communication', 'Continuous Learning', 'Analytical Thinking', 'Time Management'].map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-[#2D231E]/80 dark:text-[#FAF5F0]/80 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C38B70]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Laptop Girl Vector SVG illustration */}
            <div className="absolute bottom-2 right-2 w-24 h-24 opacity-15 dark:opacity-5 pointer-events-none z-0">
              <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                <line x1="10" y1="85" x2="90" y2="85" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                <rect x="12" y="73" width="8" height="12" rx="1" fill="#C38B70" opacity="0.4" />
                <path d="M11,73 L21,73 L18,65 L14,65 Z" fill="#C38B70" />
                <path d="M16,65 C13,55 10,60 12,50 C15,48 18,53 16,65 Z" fill="#6A7B5F" />
                {/* Laptop */}
                <path d="M50,85 L75,85 L72,70 L55,70 Z" fill="#E4E4E7" />
                <line x1="55" y1="70" x2="72" y2="70" stroke="currentColor" strokeWidth="1" />
                <path d="M58,70 L48,53 L38,58 L48,70 Z" fill="#D4D4D8" opacity="0.5" />
                {/* Girl typing */}
                <circle cx="78" cy="45" r="7" fill="#FDBA74" opacity="0.7" />
                <path d="M78,38 C72,38 72,48 78,48 Z" fill="#4A346C" />
                <path d="M70,55 C70,55 85,55 88,78 L68,78 Z" fill="#C38B70" />
                <path d="M68,66 C60,66 58,74 52,72" stroke="#FDBA74" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>


        </div>

      </div>

      {/* Read More Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#2D231E]/40 dark:bg-black/75 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-white dark:bg-[#16110E] border border-[#2D231E]/10 dark:border-white/10 rounded-[24px] shadow-2xl p-6 md:p-8 relative z-10 backdrop-blur-md max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-[#2D231E]/50 hover:text-[#2D231E] dark:text-[#FAF5F0]/50 dark:hover:text-[#FAF5F0] transition-colors"
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#C38B70]/10 text-[#C38B70] flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-[#2D231E] dark:text-[#FAF5F0] font-serif-heading">
                    Gogineni Jaasmitha
                  </h3>
                  <p className="text-xs text-[#C38B70] dark:text-[#E5A587] font-bold uppercase tracking-wider mt-0.5">
                    Academic Background & Objectives
                  </p>
                </div>
              </div>
              {/* Modal Content */}
              <div className="space-y-6 text-left">
                <div>
                  <h4 className="text-sm font-bold text-[#2D231E] dark:text-[#FAF5F0] uppercase tracking-wider mb-3">
                    Professional Objective
                  </h4>
                  <p className="text-xs md:text-sm text-[#2D231E]/80 dark:text-[#FAF5F0]/80 leading-relaxed space-y-3">
                    <span>
                      As an aspiring AI and Data Science professional, I am enthusiastic about transforming ideas into innovative technology solutions that can solve real-world problems. I enjoy working on projects that involve data-driven decision-making, intelligent systems, and emerging technologies. Through my academic journey, I have been developing my technical knowledge, problem-solving abilities, and programming skills while continuously exploring new concepts in the field of AI.
                    </span>
                    <br /><br />
                    <span>
                      Apart from academics, I actively participate in technical activities, project development, and learning opportunities that help me enhance my skills and gain valuable experience. My goal is to become a skilled AI professional and contribute to innovative solutions that create a positive impact on society through the power of technology.
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
