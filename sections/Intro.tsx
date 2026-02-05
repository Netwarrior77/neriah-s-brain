import React from 'react';
import { motion } from 'framer-motion';

export const Intro: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-screen flex-shrink-0 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-pixel mb-6 leading-tight">
          neriah's<br/>brain
        </h1>
        <p className="text-xs md:text-sm font-pixel mb-12 animate-pulse">
          PRESS START TO BEGIN
        </p>
        
        <div className="text-[10px] md:text-xs font-pixel text-gray-500 max-w-md mx-auto leading-loose border-2 border-black p-4 border-dashed">
          INSTRUCTIONS:<br/>
          [←] [→] TO MOVE<br/>
          CLICK OBJECTS TO INTERACT
        </div>
      </motion.div>
    </div>
  );
};
