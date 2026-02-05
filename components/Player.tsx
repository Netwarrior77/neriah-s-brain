import React from 'react';
import { motion } from 'framer-motion';

interface PlayerProps {
  isMoving: boolean;
  direction: 'left' | 'right';
}

export const Player: React.FC<PlayerProps> = ({ isMoving, direction }) => {
  return (
    <div className="relative w-16 h-16 md:w-24 md:h-24">
      {/* Name Tag */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <span className="bg-black text-white text-[8px] md:text-[10px] px-1 py-0.5 font-pixel">
          NERIAH
        </span>
      </div>

      <motion.div
        className="w-full h-full"
        animate={{
          y: isMoving ? [0, -8, 0] : [0, -2, 0],
          scaleX: direction === 'left' ? -1 : 1,
        }}
        transition={{
          y: {
            duration: isMoving ? 0.3 : 1.5,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        {/* Simple CSS Pixel Art Character */}
        <svg viewBox="0 0 24 24" className="w-full h-full text-black fill-current" shapeRendering="crispEdges">
           {/* Head */}
           <rect x="8" y="2" width="8" height="8" />
           {/* Eyes (White) */}
           <rect x="10" y="4" width="1" height="1" fill="white" />
           <rect x="14" y="4" width="1" height="1" fill="white" />
           {/* Body */}
           <rect x="6" y="10" width="12" height="7" />
           {/* Arms */}
           <rect x="4" y="10" width="2" height="6" />
           <rect x="18" y="10" width="2" height="6" />
           {/* Legs */}
           <rect x="7" y="17" width="3" height="5" />
           <rect x="14" y="17" width="3" height="5" />
        </svg>
      </motion.div>
    </div>
  );
};