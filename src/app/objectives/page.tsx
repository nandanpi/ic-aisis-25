'use client';

import React from 'react';

const ObjectivesPage = () => {
  return (
    <section className="min-h-screen bg-[#ffffff] flex items-center justify-center py-16 px-4 md:px-8 font-serif">
      {/* Card container */}
      <div className="relative bg-[#ffffff] shadow-2xl rounded-3xl max-w-4xl w-full p-8 md:p-12 border border-[#e0d6c3] overflow-hidden">
        
        {/* Background image inside card */}
       
        {/* Content above background */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-2 border-[#000000] pb-2 tracking-wide text-[#3b2f1c]">
            Objectives
          </h2>

          <ul className="space-y-5 text-lg md:text-xl leading-relaxed text-[#000000]">
            {[
              "To explore the role of AI in promoting sustainability across various sectors.",
              "To bring together experts from academia, industry, and policy-making for knowledge exchange.",
              "To encourage interdisciplinary research and collaborations.",
              "To discuss challenges, ethics, and policies related to AI-driven sustainability.",
              "To showcase real-world applications and case studies of AI for sustainability.",
              "To educate and inspire students on the role of AI in sustainability.",
              "To create a dynamic student forum for AI-driven sustainability discussions.",
            ].map((objective, idx) => (
              <li
                key={idx}
                className="relative pl-6 before:content-['◆'] before:absolute before:left-0 before:top-1 before:text-[#9a8866]"
              >
                {objective}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesPage;
