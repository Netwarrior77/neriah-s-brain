import React from 'react';
import { SpeechBubble } from '../components/RetroUI';

export const Memory: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-screen flex-shrink-0 px-8 relative">
      <div className="absolute top-10 left-10 md:left-20 text-xl font-pixel bg-black text-white px-4 py-2">
        LEVEL 1: THE MEMORY
      </div>

      <div className="max-w-2xl w-full mt-20">
        <SpeechBubble>
          <p className="mb-4">
            Initializing system... <br/>
            Loading personality modules...
          </p>
          <p className="mb-4">
            Hi! I'm Neriah. I am a Full Stack Developer with a passion for building interactive digital experiences.
          </p>
          <p>
            When I'm not coding, you can find me exploring virtual worlds or designing pixel art. I believe the web should be fun, fast, and accessible.
          </p>
        </SpeechBubble>

        <div className="grid grid-cols-2 gap-4">
           <div className="border-2 border-black p-4 bg-gray-100">
             <h3 className="font-pixel text-xs mb-2 underline">STATS</h3>
             <ul className="text-[10px] md:text-xs font-pixel space-y-2">
               <li>INT: 99</li>
               <li>CRE: 85</li>
               <li>STA: 100</li>
             </ul>
           </div>
           <div className="border-2 border-black p-4 bg-gray-100">
             <h3 className="font-pixel text-xs mb-2 underline">SKILLS</h3>
             <ul className="text-[10px] md:text-xs font-pixel space-y-2">
               <li>React.js</li>
               <li>TypeScript</li>
               <li>Node.js</li>
             </ul>
           </div>
        </div>
      </div>
    </div>
  );
};
