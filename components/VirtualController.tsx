import React from 'react';
import { motion } from 'framer-motion';

interface VirtualControllerProps {
  onMoveLeft: () => void;
  onMoveRight: () => void;
  onInteract: () => void;
}

export const VirtualController: React.FC<VirtualControllerProps> = ({ onMoveLeft, onMoveRight, onInteract }) => {
  return (
    <div className="fixed bottom-6 left-0 w-full px-6 z-50 flex justify-between items-end md:hidden pointer-events-none">
      {/* Simplified Movement Controls: Just two arrows */}
      <div className="pointer-events-auto flex gap-6">
        <ArrowButton onClick={onMoveLeft} icon="←" />
        <ArrowButton onClick={onMoveRight} icon="→" />
      </div>

      {/* Action Button */}
      <div className="pointer-events-auto">
        <motion.button
          className="w-16 h-16 rounded-full bg-red-500 border-4 border-black shadow-pixel flex items-center justify-center active:bg-red-600 active:shadow-none active:translate-y-1 transition-all"
          whileTap={{ scale: 0.9 }}
          onClick={onInteract}
        >
          <span className="text-white font-pixel font-bold text-xl">A</span>
        </motion.button>
      </div>
    </div>
  );
};

const ArrowButton: React.FC<{ onClick: () => void; icon: string }> = ({ onClick, icon }) => (
  <motion.button
    className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center shadow-pixel active:bg-gray-200 active:shadow-none active:translate-y-1 transition-all"
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
  >
    <span className="font-pixel text-3xl font-bold">{icon}</span>
  </motion.button>
);