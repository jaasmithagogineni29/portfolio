import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-[#2D231E]/10 dark:border-white/10 bg-white/30 dark:bg-[#16110E]/30 backdrop-blur-md relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-bold text-[#2D231E]/60 dark:text-[#FAF5F0]/60">
          &copy; {new Date().getFullYear()} GOGINENI Jaasmitha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
