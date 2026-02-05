import React from 'react';
import { motion } from 'framer-motion';

interface PixelCardProps {
  children: React.ReactNode;
  title?: string;
  onClick?: () => void;
  className?: string;
}

export const PixelCard: React.FC<PixelCardProps> = ({ children, title, onClick, className = '' }) => {
  return (
    <motion.div 
      className={`bg-white border-4 border-black shadow-pixel p-4 relative ${className}`}
      whileHover={{ y: -4, boxShadow: '8px 8px 0px 0px #000000' }}
      whileTap={{ y: 0, boxShadow: '2px 2px 0px 0px #000000' }}
      onClick={onClick}
    >
      {title && (
        <div className="absolute -top-4 left-2 bg-black text-white px-2 py-1 text-xs font-pixel">
          {title}
        </div>
      )}
      {children}
    </motion.div>
  );
};

export const PixelButton: React.FC<{ children: React.ReactNode; onClick?: () => void; variant?: 'primary' | 'secondary' }> = ({ children, onClick, variant = 'primary' }) => {
  const isPrimary = variant === 'primary';
  return (
    <motion.button
      className={`
        border-2 border-black px-4 py-2 font-pixel text-xs sm:text-sm
        ${isPrimary ? 'bg-black text-white' : 'bg-white text-black'}
        shadow-pixel-sm active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
      `}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export const SpeechBubble: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative bg-white border-2 border-black p-4 mb-8 shadow-pixel">
      <div className="text-xs md:text-sm leading-relaxed font-pixel">
        {children}
      </div>
      {/* Triangle pointer */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-black border-r-[10px] border-r-transparent"></div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-white border-r-[8px] border-r-transparent"></div>
    </div>
  );
};
