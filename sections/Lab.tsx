import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { PixelCard, PixelButton } from '../components/RetroUI';
import { AnimatePresence, motion } from 'framer-motion';

export const Lab: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="relative h-full w-[100vw] flex-shrink-0 bg-white overflow-y-auto overflow-x-hidden no-scrollbar">
      {/* Title Badge - Absolute positioned within the slide */}
      <div className="absolute top-8 right-4 md:right-10 z-20 pointer-events-none">
        <div className="text-sm md:text-xl font-pixel bg-black text-white px-3 py-2 md:px-4 md:py-2 shadow-pixel">
          LEVEL 2: THE LAB
        </div>
      </div>

      {/* Main Content Container - Centered Flex Column */}
      <div className="min-h-full w-full flex flex-col items-center pt-32 pb-32 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <PixelCard 
                title={`PROJECT_0${index + 1}`} 
                onClick={() => setSelectedId(project.id)}
                className="h-full flex flex-col justify-between cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h3 className="font-pixel text-sm md:text-base mb-2">{project.title}</h3>
                  <p className="font-pixel text-[10px] md:text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[8px] border border-black px-1 bg-gray-200 font-pixel">
                      {t}
                    </span>
                  ))}
                </div>
              </PixelCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              className="bg-white border-4 border-black p-6 max-w-lg w-full shadow-pixel-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-2 right-2 text-xl font-pixel hover:text-red-500"
                onClick={() => setSelectedId(null)}
              >
                X
              </button>
              
              {PROJECTS.find(p => p.id === selectedId) && (
                <>
                  <h2 className="text-xl font-pixel mb-4">{PROJECTS.find(p => p.id === selectedId)?.title}</h2>
                  <div className="w-full h-32 bg-gray-200 border-2 border-black mb-4 flex items-center justify-center">
                    <span className="font-pixel text-xs text-gray-500">IMAGE_DATA_MISSING</span>
                  </div>
                  <p className="font-pixel text-xs leading-loose mb-6">
                    {PROJECTS.find(p => p.id === selectedId)?.description}
                  </p>
                  <div className="flex justify-end">
                    <PixelButton onClick={() => window.alert("Demo Link Clicked!")}>
                      VISIT LINK
                    </PixelButton>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};