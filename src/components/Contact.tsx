import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all details.');
      return;
    }
    
    // Simple email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Simulate sending email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 relative select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 border-b border-[#2D231E]/10 dark:border-white/10 pb-4">
          <h2 className="text-2xl md:text-3xl font-serif-heading font-extrabold text-[#2D231E] dark:text-[#FAF5F0] uppercase inline-block">
            Get in Touch
          </h2>
        </div>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Inspiration Quote */}
          <div className="lg:col-span-4 flex flex-col relative">
            <div className="glassmorphism-card p-8 flex-1 flex flex-col justify-center text-left relative overflow-hidden bg-gradient-to-br from-[#C38B70]/5 to-[#E5B7A1]/10 border-white/50 dark:border-zinc-900/40">
              
              <span className="text-[#C38B70]/30 dark:text-[#E5A587]/15 text-6xl font-serif leading-none absolute top-6 left-6 font-bold">“</span>
              
              <div className="space-y-4 py-8 px-2 relative z-10">
                <p className="text-[#2D231E] dark:text-[#FAF5F0] font-serif-heading italic text-lg leading-relaxed">
                  Transforming ideas<br />
                  into innovative systems,<br />
                  solving real-world challenges.
                </p>
              </div>

              <span className="text-[#C38B70]/30 dark:text-[#E5A587]/15 text-6xl font-serif leading-none absolute bottom-12 right-6 font-bold">”</span>

              {/* Decorative Leaf Branches on bottom left of card */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 text-[#C38B70]/40 dark:text-[#E5A587]/20 pointer-events-none transform rotate-12">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                  <path d="M70,80 C60,65, 45,45, 30,20" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M30,20 C25,25 22,35 30,42 C38,42 35,28 30,20 Z" />
                  <path d="M42,32 C38,38 38,48 45,54 C52,54 48,42 42,32 Z" />
                  <path d="M53,46 C50,52 50,60 56,66 C62,66 59,54 53,46 Z" />
                  <path d="M30,20 C35,18 45,22 46,30 Z" opacity="0.8" />
                  <path d="M42,32 C48,30 56,35 58,42 Z" opacity="0.8" />
                </svg>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="glassmorphism-card p-6 flex-1 flex flex-col justify-between text-left border-white/40 dark:border-zinc-900/40">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#2D231E] dark:text-[#FAF5F0] border-b border-[#2D231E]/10 dark:border-white/10 pb-3 mb-6 font-sans">
                  Contact Info
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <a
                    href="mailto:jaasmithagogineni2006@gmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#221815]/85 border border-[#2D231E]/5 dark:border-white/5 shadow-sm text-[#C38B70] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#2D231E]/50 dark:text-[#FAF5F0]/50 uppercase font-bold tracking-wider">
                        Email
                      </p>
                      <p className="text-xs font-bold text-[#2D231E] dark:text-[#FAF5F0] mt-0.5 break-all">
                        jaasmithagogineni2006@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+918309898405"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#221815]/85 border border-[#2D231E]/5 dark:border-white/5 shadow-sm text-[#C38B70] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#2D231E]/50 dark:text-[#FAF5F0]/50 uppercase font-bold tracking-wider">
                        Phone
                      </p>
                      <p className="text-xs font-bold text-[#2D231E] dark:text-[#FAF5F0] mt-0.5">
                        +91 83098 98405
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#221815]/85 border border-[#2D231E]/5 dark:border-white/5 shadow-sm text-[#C38B70] flex items-center justify-center shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#2D231E]/50 dark:text-[#FAF5F0]/50 uppercase font-bold tracking-wider">
                        Location
                      </p>
                      <p className="text-xs font-bold text-[#2D231E] dark:text-[#FAF5F0] mt-0.5">
                        Chodavaram, Anakapalli, Andhra Pradesh, India
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/jaasmitha-gogineni"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#221815]/85 border border-[#2D231E]/5 dark:border-white/5 shadow-sm text-[#C38B70] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <Linkedin size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#2D231E]/50 dark:text-[#FAF5F0]/50 uppercase font-bold tracking-wider">
                        LinkedIn
                      </p>
                      <p className="text-xs font-bold text-[#2D231E] dark:text-[#FAF5F0] mt-0.5">
                        linkedin.com/in/jaasmitha-gogineni
                      </p>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Jaasmitha2004"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#221815]/85 border border-[#2D231E]/5 dark:border-white/5 shadow-sm text-[#C38B70] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <Github size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#2D231E]/50 dark:text-[#FAF5F0]/50 uppercase font-bold tracking-wider">
                        GitHub
                      </p>
                      <p className="text-xs font-bold text-[#2D231E] dark:text-[#FAF5F0] mt-0.5">
                        github.com/Jaasmitha2004
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Form */}
          <div className="lg:col-span-4 flex flex-col relative overflow-hidden">
            <div className="glassmorphism-card p-6 flex-1 flex flex-col justify-between text-left border-white/40 dark:border-zinc-900/40 relative">
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#2D231E] dark:text-[#FAF5F0] border-b border-[#2D231E]/10 dark:border-white/10 pb-3 mb-5 font-sans">
                    Send a Message
                  </h3>

                  {error && (
                    <div className="p-2.5 bg-[#D45F45]/10 text-[#D45F45] text-xs rounded-xl border border-[#D45F45]/15 mb-4 font-bold">
                      {error}
                    </div>
                  )}

                  <AnimatePresence mode="wait">
                    {isSent ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-5 bg-[#6A7B5F]/10 border border-[#6A7B5F]/15 rounded-2xl flex flex-col items-center justify-center text-center gap-3 py-6"
                      >
                        <CheckCircle size={32} className="text-[#6A7B5F] dark:text-[#90A383]" />
                        <div>
                          <h4 className="text-xs font-bold text-[#2D231E] dark:text-white">
                            Message Transmitted!
                          </h4>
                          <p className="text-[11px] text-[#2D231E]/70 dark:text-[#FAF5F0]/70 mt-1">
                            Thank you for your message. I will respond to your email shortly.
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="space-y-4 z-10 relative">
                        {/* Name Input */}
                        <div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full px-4 py-3 bg-white/70 dark:bg-[#221815]/60 border border-[#2D231E]/10 dark:border-white/10 rounded-xl text-xs text-[#2D231E] dark:text-zinc-150 placeholder-[#2D231E]/45 dark:placeholder-zinc-500 focus:outline-none focus:border-[#C38B70] transition-colors"
                          />
                        </div>

                        {/* Email Input */}
                        <div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full px-4 py-3 bg-white/70 dark:bg-[#221815]/60 border border-[#2D231E]/10 dark:border-white/10 rounded-xl text-xs text-[#2D231E] dark:text-zinc-150 placeholder-[#2D231E]/45 dark:placeholder-zinc-500 focus:outline-none focus:border-[#C38B70] transition-colors"
                          />
                        </div>

                        {/* Message Input */}
                        <div>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Your Message"
                            className="w-full px-4 py-3 bg-white/70 dark:bg-[#221815]/60 border border-[#2D231E]/10 dark:border-white/10 rounded-xl text-xs text-[#2D231E] dark:text-zinc-150 placeholder-[#2D231E]/45 dark:placeholder-zinc-500 focus:outline-none focus:border-[#C38B70] transition-colors resize-none"
                          />
                        </div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>

                {!isSent && (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 w-fit px-6 py-2.5 bg-[#2D231E] hover:bg-[#2D231E]/90 dark:bg-[#FAF5F0] dark:text-[#2D231E] text-[#FAF5F0] font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 hover:shadow-md disabled:opacity-70 z-10"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={12} />
                      </>
                    )}
                  </button>
                )}
              </form>

              {/* Floating chip decoration */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 opacity-10 pointer-events-none z-0">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#C38B70] fill-none stroke-current stroke-1">
                  <rect x="25" y="25" width="50" height="50" rx="8" fill="currentColor" fillOpacity="0.05" />
                  <rect x="35" y="35" width="30" height="30" rx="4" fill="currentColor" fillOpacity="0.1" />
                  <text x="50" y="54" fontFamily="sans-serif" fontWeight="bold" fontSize="12" fill="currentColor" textAnchor="middle">AI</text>
                  <line x1="50" y1="10" x2="50" y2="25" />
                  <line x1="50" y1="75" x2="50" y2="90" />
                  <line x1="10" y1="50" x2="25" y2="50" />
                  <line x1="75" y1="50" x2="90" y2="50" />
                </svg>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
