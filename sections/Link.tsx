import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';

export const Link: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-screen flex-shrink-0 px-4">
      <div className="mb-12 text-center">
         <div className="text-xl font-pixel bg-black text-white px-4 py-2 inline-block mb-4">
            LEVEL 3: THE LINK
         </div>
         <p className="font-pixel text-xs text-center max-w-md mx-auto">
            COLLECT A POWER-UP TO CONNECT
         </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-2xl">
        {SOCIAL_LINKS.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 group no-underline text-black"
            whileHover={{ y: -10 }}
          >
            <motion.div 
              className="w-16 h-16 md:w-20 md:h-20 bg-white border-4 border-black flex items-center justify-center shadow-pixel group-hover:bg-black group-hover:text-white transition-colors"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            >
              <span className="font-pixel text-2xl">?</span>
            </motion.div>
            <span className="font-pixel text-[10px] md:text-xs bg-white px-2 py-1 border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity">
              {link.label}
            </span>
          </motion.a>
        ))}
      </div>
      
      <div className="mt-20 border-t-4 border-black w-full max-w-md pt-4 text-center">
        <p className="font-pixel text-[8px] uppercase">
          © {new Date().getFullYear()} Neriah's Brain. All pixels reserved.
        </p>
      </div>
    </div>
  );
};
