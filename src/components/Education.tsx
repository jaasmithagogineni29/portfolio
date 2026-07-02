import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  gradeLabel: string;
  gradeValue: string;
  details?: string;
  color: string;
}

export const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      id: 1,
      degree: "B.Tech (Bachelor of Technology) - Artificial Intelligence & Data Science",
      institution: "Vignan's Institute of Information Technology",
      period: "2024 - 2028",
      gradeLabel: "CGPA",
      gradeValue: "7.6",
      details: "Pursuing specialized studies in Artificial Intelligence, Machine Learning, Deep Learning, and Data Science. Actively participating in project developments and technical seminars.",
      color: "border-[#C38B70] dark:border-[#E5A587]"
    },
    {
      id: 2,
      degree: "Intermediate Education",
      institution: "Ushodaya Junior College",
      period: "2022 - 2024",
      gradeLabel: "Percentage",
      gradeValue: "88.5%",
      details: "Completed senior secondary education focusing on Mathematics, Physics, and Chemistry (MPC).",
      color: "border-[#6A7B5F] dark:border-[#90A383]"
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "Vivekananda EM High School",
      period: "2021 - 2022",
      gradeLabel: "Percentage",
      gradeValue: "89%",
      details: "Foundation schooling with excellent academic performance across science and mathematical subjects.",
      color: "border-[#8D6AA8] dark:border-[#B193C8]"
    }
  ];

  return (
    <section id="education" className="py-16 relative select-none">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 border-b border-[#2D231E]/10 dark:border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl md:text-3xl font-serif-heading font-extrabold text-[#2D231E] dark:text-[#FAF5F0] uppercase">
              Educational Journey
            </h2>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#2D231E]/15 dark:border-white/15 ml-4 md:ml-6 space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-[#16110E] border-4 border-primary flex items-center justify-center shadow-sm z-10" />

              {/* Education Card */}
              <div className={`glassmorphism-card p-6 text-left border-l-4 ${item.color} hover:translate-y-[-2px] transition-transform duration-250`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#2D231E] dark:text-[#FAF5F0] leading-snug">
                      {item.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2D231E]/60 dark:text-[#FAF5F0]/60 flex items-center gap-1.5 mt-1 font-semibold">
                      <MapPin size={13} className="text-[#C38B70]" />
                      <span>{item.institution}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[#C38B70]/10 text-[#C38B70] dark:text-[#E5A587] text-xs font-bold rounded-lg shrink-0">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-[#2D231E]/75 dark:text-[#FAF5F0]/70 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.details}
                </p>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary">
                  <Award size={15} />
                  <span>{item.gradeLabel}: {item.gradeValue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
