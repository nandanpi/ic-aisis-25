import React from 'react';

export default function About() {
  return (
    <div className="bg-white text-black p-8 space-y-12">
      {/* Header */}
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6 animate__animated animate__fadeIn animate__delay-1s">
        Conference Overview
      </h2>

      {/* Paragraph 1 */}
      <p className="text-xl font-serif leading-relaxed text-gray-800 animate__animated animate__fadeIn animate__delay-2s">
        The <span className="font-bold text-black">International Conference on Artificial Intelligence for Sustainability and Intelligent Systems (IC-AISIS’25)</span> is an exciting hybrid event scheduled for May 5th and 6th, 2025, at NMAM Institute of Technology, Nitte. Organized by the Association of Digital Engineering (ADE), Centre for Intelligent Devices &amp; Systems (CIDS), and the Department of MCA, this conference serves as a vibrant platform for students, researchers, and academicians to showcase their work and engage with leading experts in the field.
      </p>

      {/* Paragraph 2 */}
      <p className="text-xl font-serif leading-relaxed text-gray-800 animate__animated animate__fadeIn animate__delay-3s">
        With a strong emphasis on academic research and student innovation, IC-AISIS’25 aims to foster new ideas, interdisciplinary collaborations, and groundbreaking solutions at the intersection of AI and sustainability. The conference will feature keynote talks, research paper presentations, interactive technical sessions, and industry-led workshops, providing students and young researchers with valuable exposure, mentorship, and networking opportunities.
      </p>

      {/* Paragraph 3 */}
      <p className="text-xl font-serif leading-relaxed text-gray-800 animate__animated animate__fadeIn animate__delay-4s">
        By encouraging hands-on learning and discussions on real-world AI applications, IC-AISIS’25 aspires to empower the next generation of innovators while contributing to global advancements in AI-driven sustainability. Selected high-impact student and faculty research papers will be published in Scopus-indexed proceedings, ensuring that academic contributions reach a global audience and inspire future technological advancements.
      </p>
    </div>
  );
}
