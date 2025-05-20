'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SubmissionGuidelines = () => {
  return (
    <main className="relative min-h-screen bg-[#ffffff] font-serif text-[#3e3a36] overflow-hidden">
      {/* Background image */}
      

      {/* Overlay content */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto mt-16 bg-[#ffffff] shadow-2xl border border-[#d4cfc4] rounded-2xl p-10 md:p-12 space-y-6 transform hover:scale-[1.01] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.2)] transition duration-500"
      >
        <div className="absolute inset-0 z-0">
        
      </div>
        <motion.h1
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#3b322d]"
        >
          Submission Guidelines
        </motion.h1>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="list-disc list-inside space-y-5 text-lg md:text-xl leading-relaxed tracking-wide"
        >
          <li>
            <span className="font-semibold">Original and unpublished research papers</span> related to{' '}
            <span className="italic">Artificial Intelligence and Sustainability</span> are invited.
          </li>
          <li>
            Papers must follow the specified format:{' '}
            <span className="font-medium">IEEE / Elsevier / Springer / AIP</span>
          </li>
          <li>
            <span className="font-semibold">Submission Deadline:</span>{' '}
            <span className="text-[#924d2e] font-bold">31st March 2025</span>
          </li>
          <li>
            All accepted papers will be published in{' '}
            <span className="font-medium italic">Scopus Indexed</span> conference proceedings or journals.
          </li>
        </motion.ul>
      </motion.section>
    </main>
  );
};

export default SubmissionGuidelines;
