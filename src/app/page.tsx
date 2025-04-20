'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FallingLeaves from './components/FallingLeaves';
import CountdownTimer from './components/CountdownTimer';
import LeafPopEffect from './components/LeafPopEffect';

export default function Home() {
  const [showPop, setShowPop] = useState(false);
  const [popPosition, setPopPosition] = useState({ x: 0, y: 0 });

  const handleBrochureClick = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    setPopPosition({ x, y });
    setShowPop(true);
    setTimeout(() => setShowPop(false), 2000);
  };

  return (
    <div className="overflow-hidden min-h-screen flex flex-col bg-[#fdfdfd] relative">
      <FallingLeaves />
      {showPop && <LeafPopEffect position={popPosition} />}

      <main className="flex-1 flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20">
        <section className="flex flex-col justify-center items-center w-full max-w-6xl">
          <motion.div
            className="relative w-full bg-white/80 backdrop-blur-md border border-gray-300 shadow-xl rounded-2xl p-6 sm:p-12 space-y-8 z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/nmamit.jpg"
              alt="NMAMIT Campus"
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug text-center">
              International Conference on <br />
              <span className="underline decoration-4 decoration-gray-800">
                Artificial Intelligence
              </span>{' '}
              for Sustainability<br />
              and Intelligent Systems
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 italic text-center">
              IC-AISIS’25 | May 5<sup>th</sup> & 6<sup>th</sup>, 2025 | Hybrid Mode
            </p>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
              Hosted by NMAM Institute of Technology, Nitte — uniting researchers, academicians, and professionals to shape a sustainable world through the power of AI.
            </p>

            <div className="w-full flex justify-center pt-6 sm:pt-8">
  <div className="flex flex-col sm:flex-row gap-6">
    <CountdownTimer
      title="⏳ Registration Ends In"
      targetDate="2025-04-20T23:59:59"
    />
    <CountdownTimer
      title="🎉 Conference Begins In"
      targetDate="2025-05-05T09:00:00"
    />
  </div>
</div>


            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-800 text-sm sm:text-base font-medium text-center pt-6">
              <p><strong>📍 Venue:</strong> NMAMIT, Nitte</p>
              <p><strong>🗓️ Registration Deadline:</strong> April 20, 2025</p>
              <p><strong>📅 Conference Dates:</strong> May 5–6, 2025</p>
            </div>

            <div className="mt-6 text-center relative">
              <motion.a
                href="/brochure.pdf"
                download="IC-AISIS_2025_Brochure"
                onClick={handleBrochureClick}
                className="inline-block px-8 py-3 border border-green-700 text-green-800 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-green-700 hover:text-white shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                📄 Download Brochure
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-6 text-center text-gray-600 text-sm border-t border-gray-300 bg-white z-10">
        <p>© 2025 IC-AISIS | NMAM Institute of Technology, Nitte</p>
      </footer>
    </div>
  );
}
