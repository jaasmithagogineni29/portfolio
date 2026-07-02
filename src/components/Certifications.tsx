import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: 'essentials' | 'internships';
  verifyUrl: string;
  color: string;
}

export const Certifications: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'essentials' | 'internships'>('all');

  const certsData: Certification[] = [
    {
      id: 1,
      title: 'C Essentials',
      issuer: 'Cisco Networking Academy',
      date: 'Oct 2024',
      category: 'essentials',
      verifyUrl: '#',
      color: 'from-[#C38B70]/10 to-[#E5B7A1]/15'
    },
    {
      id: 2,
      title: 'CSS Essentials',
      issuer: 'Cisco Networking Academy',
      date: 'Dec 2024',
      category: 'essentials',
      verifyUrl: '#',
      color: 'from-[#6A7B5F]/10 to-[#90A383]/15'
    },
    {
      id: 3,
      title: 'HTML Essentials',
      issuer: 'Cisco Networking Academy',
      date: 'Nov 2024',
      category: 'essentials',
      verifyUrl: '#',
      color: 'from-[#8D6AA8]/10 to-[#B193C8]/15'
    },
    {
      id: 4,
      title: 'AI-ML Virtual Internship',
      issuer: 'AICTE / EduSkills',
      date: 'Jan 2025',
      category: 'internships',
      verifyUrl: '#',
      color: 'from-[#5F7D95]/10 to-[#7FA4BF]/15'
    },
    {
      id: 5,
      title: 'Android Developer Virtual Internship',
      issuer: 'Google / AICTE',
      date: 'Feb 2025',
      category: 'internships',
      verifyUrl: '#',
      color: 'from-[#C38B70]/10 to-[#E5B7A1]/15'
    }
  ];

  const filteredCerts = certsData.filter((cert) => {
    if (filter === 'all') return true;
    return cert.category === filter;
  });

  return (
    <section id="certifications" className="py-16 relative select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="border-b border-[#2D231E]/10 dark:border-white/10 pb-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-serif-heading font-extrabold text-[#2D231E] dark:text-[#FAF5F0] uppercase inline-block">
              Professional Certifications
            </h2>
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-3">
            {[
              { id: 'all', label: 'All Certifications' },
              { id: 'essentials', label: 'Core Essentials' },
              { id: 'internships', label: 'Virtual Internships' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2.5 text-xs font-bold rounded-xl border transition-all duration-200 ${
                  filter === tab.id
                    ? 'bg-[#2D231E] text-white border-[#2D231E] dark:bg-[#FAF5F0] dark:text-[#2D231E] dark:border-[#FAF5F0] shadow-sm'
                    : 'bg-white/60 dark:bg-[#221815]/60 text-[#2D231E]/75 dark:text-[#FAF5F0]/70 border-[#2D231E]/10 dark:border-white/5 hover:bg-white dark:hover:bg-[#221815]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glassmorphism-card p-5 flex flex-col justify-between items-start text-left h-full border border-white/30 dark:border-zinc-800/40"
              >
                <div className="w-full">
                  {/* Badge Graphic */}
                  <div className={`w-full h-32 rounded-xl mb-4 bg-gradient-to-br ${cert.color} border border-white/10 dark:border-zinc-850/10 flex items-center justify-center relative`}>
                    
                    {/* Badge Icon Overlay */}
                    <div className="w-14 h-14 rounded-full bg-white dark:bg-[#221815] flex items-center justify-center shadow-md border border-white/40 dark:border-white/5 text-[#C38B70]">
                      <Award size={28} />
                    </div>

                    <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded bg-green-500/10 text-green-600 dark:text-green-400 text-[9px] font-bold">
                      <CheckCircle size={8} />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Title and Organization */}
                  <h3 className="text-sm font-bold text-[#2D231E] dark:text-[#FAF5F0] mb-1 leading-snug line-clamp-2 h-10">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-bold text-[#C38B70] dark:text-[#E5A587] mb-3">
                    {cert.issuer}
                  </p>
                </div>

                <div className="w-full mt-2">
                  <div className="flex items-center gap-1.5 text-[#2D231E]/60 dark:text-[#FAF5F0]/60 text-[11px] mb-4">
                    <Calendar size={12} />
                    <span>Issued {cert.date}</span>
                  </div>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 bg-white/60 hover:bg-[#C38B70]/10 dark:bg-[#221815] dark:hover:bg-[#E5A587]/10 text-[#2D231E] dark:text-[#FAF5F0] border border-[#2D231E]/10 dark:border-white/5 text-center font-bold text-[10px] rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
