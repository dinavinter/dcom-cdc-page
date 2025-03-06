import React from 'react';
import { motion } from 'framer-motion';

export function Banner() {
  // Fallback image URL in case local image fails
  const fallbackImageUrl =
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=2074';

  return (
    <motion.div
      className="relative w-full h-[500px] overflow-visible "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Main banner image */}
      <motion.div
        className="absolute inset-0 absolute top-0 left-0 right-0 h-[450px] aspect-auto pb-32 "
        initial={{ scale: 1.1, opacity: 1 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="/images/banner.png"
          alt="Super Bowl Banner"
          className="sm:invisible md:visible lg:visible invisible w-full object-cover object-left-bottom  h-full "
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src !== fallbackImageUrl) {
              target.src = fallbackImageUrl;
            }
          }}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute bg-gradient-to-b from-gray-900/50 via-gray-900/30 to-gray-900/80  " />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 inset-y-1/2 bottom-[100px] ">
        <motion.div
          className="inline-block backdrop-blur-sm bg-black/30 px-8 py-6 rounded-2xl border border-white/10 shadow-2xl "
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-6xl lg:text-7xl font-bold  text-white  text-center mb-6 shadow-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            CDC Powered SuperBowl <br /> LIX
          </motion.h1>
          <motion.p
            className="text-2l md:text-xl text-gray-300  text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            SAP CDC manages identity for 64M NFL Fans across all digital
            platforms
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <motion.div
        className="absolute bottom-[100px] left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      />
    </motion.div>
  );
}
