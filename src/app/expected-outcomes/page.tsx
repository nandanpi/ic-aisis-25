'use client';

import React from 'react';

const ExpectedOutcomes = () => {
  return (
    <main className="bg-[#f6f1e7] min-h-screen py-12 px-6 md:px-24 font-serif text-[#3e3a36]">
      <section className="max-w-4xl mx-auto bg-[#fdfaf4] shadow-lg border border-[#d4cfc4] rounded-xl p-8 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#3b322d]">
          Expected Outcomes
        </h1>

        <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
          <li>
            <span className="font-semibold">High-impact research publications</span> and meaningful knowledge exchange among academia and industry.
          </li>
          <li>
            Creation of <span className="italic">new collaborations</span> and promotion of <span className="font-semibold">interdisciplinary research</span> opportunities.
          </li>
          <li>
            <span className="font-semibold">Real-world AI applications</span> designed to tackle sustainable development challenges.
          </li>
          <li>
            Development of <span className="font-medium">policy recommendations</span> and <span className="italic">industry roadmaps</span> for implementing AI in sustainability.
          </li>
          <li>
            <span className="font-semibold">Increased global awareness</span> and networking opportunities for all stakeholders involved.
          </li>
        </ul>

      </section>
    </main>
  );
};

export default ExpectedOutcomes;
