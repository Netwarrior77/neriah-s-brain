import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { GameSection } from './types';
import { Intro } from './sections/Intro';
import { Memory } from './sections/Memory';
import { Lab } from './sections/Lab';
import { Link } from './sections/Link';
import { Player } from './components/Player';
import { VirtualController } from './components/VirtualController';

const SECTION_COUNT = 4;

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  
  // Audio ref for simple bleeps (optional enhancement placeholder)
  const interactSound = useRef<HTMLAudioElement | null>(null);

  const handleMove = useCallback((dir: 'left' | 'right') => {
    if (isMoving) return;

    if (dir === 'left' && currentSection > 0) {
      setDirection('left');
      setIsMoving(true);
      setCurrentSection(prev => prev - 1);
    } else if (dir === 'right' && currentSection < SECTION_COUNT - 1) {
      setDirection('right');
      setIsMoving(true);
      setCurrentSection(prev => prev + 1);
    }
  }, [currentSection, isMoving]);

  // Stop moving animation after transition
  useEffect(() => {
    if (isMoving) {
      const timer = setTimeout(() => {
        setIsMoving(false);
      }, 600); // Matches the duration of the slide
      return () => clearTimeout(timer);
    }
  }, [currentSection, isMoving]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handleMove('left');
      if (e.key === 'ArrowRight') handleMove('right');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleMove]);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-white select-none">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
         <Cloud speed={20} delay={0} />
      </div>
      <div className="absolute top-20 right-20 opacity-20 pointer-events-none">
         <Cloud speed={25} delay={5} />
      </div>

      {/* Main Game Camera / World */}
      <motion.div
        className="flex h-full w-[400vw]"
        animate={{ x: `-${currentSection * 100}vw` }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
      >
        <Intro />
        <Memory />
        <Lab />
        <Link />
      </motion.div>

      {/* Ground Line */}
      <div className="fixed bottom-0 left-0 w-full h-16 bg-white border-t-4 border-black z-10 flex items-center overflow-hidden">
         {/* Animated Grass/Pattern on Ground */}
         <motion.div 
            className="flex w-[200vw]"
            animate={{ x: isMoving ? (direction === 'left' ? 0 : '-50%') : 0 }}
            transition={{ duration: 1, ease: "linear", repeat: isMoving ? Infinity : 0 }}
         >
            {Array.from({ length: 40 }).map((_, i) => (
               <div key={i} className="w-[5vw] h-2 border-r-2 border-black transform skew-x-12 opacity-30"></div>
            ))}
         </motion.div>
      </div>

      {/* Player Character - Centered in Viewport, but conceptually moving */}
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <Player isMoving={isMoving} direction={direction} />
      </div>

      {/* HUD: Section Indicator */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
         {Array.from({ length: SECTION_COUNT }).map((_, i) => (
            <div 
               key={i} 
               className={`w-3 h-3 border-2 border-black transition-colors duration-300 ${i === currentSection ? 'bg-black' : 'bg-white'}`}
            />
         ))}
      </div>

      {/* Mobile Controls */}
      <VirtualController 
        onMoveLeft={() => handleMove('left')}
        onMoveRight={() => handleMove('right')}
        onInteract={() => {
           // Interaction logic could go here (e.g., opening the current active element)
           // For now, it just triggers a small jump
           setIsMoving(true);
           setTimeout(() => setIsMoving(false), 300);
        }}
      />
    </div>
  );
};

const Cloud: React.FC<{ speed: number, delay: number }> = ({ speed, delay }) => (
  <motion.div
    animate={{ x: [0, 100, 0] }}
    transition={{ duration: speed, repeat: Infinity, delay: delay, ease: "linear" }}
  >
     <svg width="64" height="32" viewBox="0 0 64 32" className="text-gray-300 fill-current">
        <rect x="16" y="8" width="32" height="16" />
        <rect x="8" y="16" width="16" height="8" />
        <rect x="40" y="16" width="16" height="8" />
     </svg>
  </motion.div>
);

export default App;
