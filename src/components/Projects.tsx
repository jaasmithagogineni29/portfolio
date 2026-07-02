import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  categoryTag: string;
  tags: string[];
  shortDesc: string;
  longDesc: string;
  problem: string;
  architecture: string[];
  results: string[];
  colorTheme: string;
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsData: Project[] = [
    {
      id: 1,
      title: 'Tumor Detection from MRI Images Using Vision Transformer (ViT)',
      categoryTag: 'Deep Learning & Computer Vision',
      tags: ['Python', 'PyTorch', 'Vision Transformer', 'OpenCV', 'Image Preprocessing'],
      shortDesc: 'AI-powered medical image analysis system utilizing Vision Transformer (ViT) to detect tumor patterns from MRI scans.',
      longDesc: 'Developed an AI-powered medical image analysis system for detecting tumors from MRI scan images using a Vision Transformer (ViT) deep learning model. The project focuses on leveraging advanced computer vision and transformer-based architectures to automatically analyze MRI images and identify tumor patterns with improved efficiency. The system includes MRI image preprocessing, feature extraction, model training, and performance evaluation to enhance classification accuracy. By applying deep learning techniques, this project aims to support faster and more reliable medical image analysis, reducing manual effort and assisting healthcare professionals in early tumor detection.',
      problem: 'Early and precise tumor detection in MRI scans is critical for medical diagnosis, yet manual analysis by radiologist teams is time-consuming and subjective, demanding high-accuracy automated assistants.',
      architecture: [
        'MRI image preprocessing: Resizing, intensity normalization, and data augmentation to ensure consistent input formats.',
        'Feature extraction: Segmenting the 2D scan slice into a grid of 16x16 pixel patches and flattening them into 1D vectors.',
        'Linear projection: Embedding patch vectors into a continuous latent space and adding learnable 1D position embeddings.',
        'Transformer Encoder: Passing embeddings through multi-head self-attention blocks to capture long-range contextual relationships.',
        'MLP Head classification: Utilizing a multi-layer perceptron head to output final tumor vs. non-tumor classification logits.'
      ],
      results: [
        'High classification accuracy and recall metrics on test datasets.',
        'Attention maps accurately highlight tumor boundaries, offering interpretability to clinicians.',
        'Significant reduction in scan review latency compared to traditional manual analysis.'
      ],
      colorTheme: 'from-[#F8FAFC] to-[#F1F5F9]'
    },
    {
      id: 2,
      title: 'AI-Powered Job and Internship Scam Detection System',
      categoryTag: 'Generative AI & Cybersecurity',
      tags: ['Google Gemini AI', 'Generative AI', 'NLP', 'Cybersecurity', 'React'],
      shortDesc: 'Intelligent AI-based platform to help students and job seekers identify fraudulent job offers and internship opportunities.',
      longDesc: 'Developed an intelligent AI-based platform to help students and job seekers identify fraudulent job offers and internship opportunities. The system uses Generative AI (Google Gemini AI) to analyze job descriptions, offer letters, screenshots, messages, and website links to detect potential scams. It evaluates suspicious patterns such as fake recruiter details, unrealistic promises, misleading information, and payment requests, then generates a detailed risk assessment report with fraud probability, warning signs, and safety recommendations. This project aims to create a safer online recruitment environment by preventing employment scams and improving awareness among users.',
      problem: 'With the rise of online job boards, employment scams have surged. Students and job seekers are frequently targeted by fake recruiters, phishing links, and fraudulent payment requests, leading to financial loss and data privacy breaches.',
      architecture: [
        'Multi-Format Ingestion: Processing job descriptions (text), recruiter chats (screenshots via OCR), and company links (URLs).',
        'Gemini AI Integration: Querying Gemini Pro models to perform contextual threat modeling on the ingested communication files.',
        'Suspicious Pattern Matching: Scanning for key red flags like domain-mismatches, fast hiring promises, and financial requests.',
        'Risk Scoring Pipeline: Evaluating features like unrealistic salary structures, non-standard email domains, immediate cash requests, or mismatching contact details.',
        'Detailed Assessment Report: Exporting visual breakdown of risk metrics, warning highlights, and educational safety tips for the user.'
      ],
      results: [
        'Accurate identification of common recruitment scam patterns and realistic false flags.',
        'Fast analysis turnaround using lightweight API endpoints for instant risk checks.',
        'User-friendly reporting interface that translates complex technical flags into clear, actionable advice.'
      ],
      colorTheme: 'from-[#EAEFE9] to-[#DCE4D9]'
    }
  ];

  return (
    <section id="projects" className="py-16 relative select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 border-b border-[#2D231E]/10 dark:border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl md:text-3xl font-serif-heading font-extrabold text-[#2D231E] dark:text-[#FAF5F0] uppercase">
              Featured Projects
            </h2>
          </div>

          <a
            href="#projects"
            className="flex items-center gap-1 px-4 py-2 border border-[#2D231E]/20 dark:border-white/20 text-[#2D231E] dark:text-[#FAF5F0] hover:bg-primary/5 text-xs font-semibold rounded-full transition-all duration-200"
          >
            <span>View All Projects</span>
            <ChevronRight size={13} />
          </a>
        </div>

        {/* Project Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto w-full">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glassmorphism-card p-4 flex flex-col justify-between text-left h-full border border-white/40 dark:border-zinc-900/40 cursor-pointer group"
            >
              <div>
                {/* SVG Graphics representation of project header */}
                <div className={`w-full h-48 rounded-2xl mb-4 bg-gradient-to-tr ${project.colorTheme} border border-[#2D231E]/5 dark:border-white/5 flex items-center justify-center overflow-hidden relative shadow-inner`}>
                  
                  {/* Category Pill Tag in Top-Left */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 dark:bg-[#221815]/90 border border-zinc-250/20 rounded-full flex items-center gap-1 text-[9px] font-bold text-[#2D231E] dark:text-[#FAF5F0] shadow-sm z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{project.categoryTag}</span>
                  </div>

                  {/* Project 1 Graphic (Tumor Scan) */}
                  {project.id === 1 && (
                    <svg viewBox="0 0 100 100" className="w-32 h-32 text-[#2D231E] dark:text-[#FAF5F0]">
                      <rect x="5" y="5" width="90" height="90" rx="10" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" fill="none" opacity="0.2" />
                      <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
                      <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
                      <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.8" />
                      <path d="M50,18 C32,18 24,35 24,50 C24,65 38,78 50,82 C62,78 76,65 76,50 C76,35 68,18 50,18 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <rect x="56" y="38" width="14" height="14" stroke="#D45F45" strokeWidth="1.5" strokeDasharray="2 1" fill="none" />
                      <circle cx="63" cy="45" r="5" fill="#D45F45" opacity="0.3" />
                      <circle cx="63" cy="45" r="2.5" fill="#D45F45" />
                    </svg>
                  )}

                  {/* Project 2 Graphic (Spam Network Flow) */}
                  {project.id === 2 && (
                    <svg viewBox="0 0 100 100" className="w-32 h-32 text-[#2D231E] dark:text-[#FAF5F0]">
                      <rect x="25" y="35" width="50" height="30" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <path d="M25,35 L50,52 L75,35" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <path d="M25,50 C10,50 15,70 12,80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                      <path d="M75,50 C90,50 85,70 88,80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                      <rect x="2" y="78" width="22" height="10" rx="3" fill="#D45F45" opacity="0.8" />
                      <text x="13" y="85" fontFamily="sans-serif" fontSize="6" fontWeight="bold" fill="#FFF" textAnchor="middle">Spam</text>
                      
                      <rect x="76" y="78" width="22" height="10" rx="3" fill="#6A7B5F" opacity="0.8" />
                      <text x="87" y="85" fontFamily="sans-serif" fontSize="5" fontWeight="bold" fill="#FFF" textAnchor="middle">Clean</text>
                    </svg>
                  )}

                  {/* Project 3 Graphic (Analytics Charts Dashboard) */}
                  {project.id === 3 && (
                    <svg viewBox="0 0 100 100" className="w-32 h-32 text-[#2D231E] dark:text-[#FAF5F0]">
                      <path d="M10,75 L28,52 L45,64 L65,30 L85,45" stroke="#C38B70" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                      <circle cx="65" cy="30" r="3.5" fill="#C38B70" />
                      <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" fill="none" opacity="0.3" />
                      <path d="M78,78 A20,20 0 1,1 82,60" stroke="#6A7B5F" strokeWidth="5" fill="none" opacity="0.8" />
                      <path d="M82,60 A20,20 0 0,1 78,78" stroke="#8D6AA8" strokeWidth="6" fill="none" />
                    </svg>
                  )}

                  {/* AI overlay circle at the bottom-left of card image */}
                  {(project.id === 1 || project.id === 2) && (
                    <div className="absolute bottom-3 left-3 w-8 h-8 rounded-xl bg-white/40 text-primary flex items-center justify-center shadow-md">
                      <Cpu size={14} />
                    </div>
                  )}

                  {/* Glassmorphic hover backdrop */}
                  <div className="absolute inset-0 bg-[#C38B70]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Project Title */}
                <h3 className="text-sm font-bold text-[#2D231E] dark:text-[#FAF5F0] mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2 h-10 leading-snug">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#2D231E]/75 dark:text-[#FAF5F0]/70 text-xs leading-relaxed mb-5 line-clamp-3">
                  {project.shortDesc}
                </p>
              </div>

              {/* Tags list */}
              <div>
                <div className="flex flex-wrap gap-1.5 border-t border-[#2D231E]/10 dark:border-white/10 pt-3">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/70 dark:bg-[#221815]/80 border border-[#2D231E]/5 dark:border-white/5 text-[#2D231E]/60 dark:text-[#FAF5F0]/60 rounded-lg text-[9px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#2D231E]/40 dark:bg-black/75 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-white dark:bg-[#16110E] border border-[#2D231E]/10 dark:border-white/10 rounded-[24px] shadow-2xl p-6 md:p-8 relative z-10 backdrop-blur-md max-h-[85vh] overflow-y-auto animate-fade-in"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-[#2D231E]/50 hover:text-[#2D231E] dark:text-[#FAF5F0]/50 dark:hover:text-[#FAF5F0] transition-colors"
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2.5 mb-5 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#C38B70]/10 text-[#C38B70] flex items-center justify-center">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#2D231E] dark:text-[#FAF5F0] font-serif-heading leading-tight">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1.5">
                    {selectedProject.tags.map(t => (
                      <span key={t} className="text-[9px] text-[#C38B70] dark:text-[#E5A587] font-bold uppercase tracking-wider">
                        #{t.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Content Grid */}
              <div className="space-y-6 text-left">
                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold text-[#2D231E]/50 dark:text-[#FAF5F0]/50 uppercase tracking-wider mb-2">
                    Project Overview
                  </h4>
                  <p className="text-xs md:text-sm text-[#2D231E]/80 dark:text-[#FAF5F0]/80 leading-relaxed">
                    {selectedProject.longDesc}
                  </p>
                </div>

                {/* Problem Statement */}
                <div className="p-4 bg-[#D45F45]/5 dark:bg-[#D45F45]/10 border border-[#D45F45]/15 dark:border-[#D45F45]/25 rounded-2xl">
                  <h4 className="text-xs font-bold text-[#D45F45] dark:text-[#E27C65] uppercase tracking-wider mb-1.5">
                    The Problem
                  </h4>
                  <p className="text-xs text-[#2D231E]/80 dark:text-[#FAF5F0]/85 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Architecture Steps */}
                <div>
                  <h4 className="text-xs font-bold text-[#2D231E]/50 dark:text-[#FAF5F0]/50 uppercase tracking-wider mb-3">
                    Technical Implementation & Pipeline
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.architecture.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs text-[#2D231E]/80 dark:text-[#FAF5F0]/80">
                        <div className="w-5 h-5 rounded bg-[#C38B70]/10 text-[#C38B70] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements / Results */}
                <div>
                  <h4 className="text-xs font-bold text-[#2D231E]/50 dark:text-[#FAF5F0]/50 uppercase tracking-wider mb-3">
                    Key Outcomes & Achievements
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.results.map((res, idx) => (
                      <div key={idx} className="p-3 bg-[#6A7B5F]/5 dark:bg-[#6A7B5F]/10 border border-[#6A7B5F]/15 dark:border-[#6A7B5F]/25 rounded-xl flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-[#6A7B5F] dark:text-[#90A383] shrink-0 mt-0.5" />
                        <span className="text-[11px] text-[#2D231E]/85 dark:text-[#FAF5F0]/85 leading-relaxed">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
