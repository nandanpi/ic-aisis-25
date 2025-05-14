'use client';
import React from 'react';
import { FaGlobe, FaLightbulb, FaMicroscope } from 'react-icons/fa';
import 'animate.css';

export default function About() {
  const highlights = [
    {
      icon: <FaGlobe className="text-white text-4xl mb-4 relative z-10" />,
      title: 'Global Engagement',
      desc: 'Researchers and experts from across the world participate.',
      bgImage: '/global.jpg',
    },
    {
      icon: <FaLightbulb className="text-white text-4xl mb-4 relative z-10" />,
      title: 'Innovative Ideas',
      desc: 'Revolutionizing sustainability through cutting-edge AI research.',
      bgImage: '/innovation.jpg',
    },
    {
      icon: <FaMicroscope className="text-white text-4xl mb-4 relative z-10" />,
      title: 'Academic Recognition',
      desc: 'Top research papers published in Scopus-indexed journals.',
      bgImage: '/research.jpg',
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-28 px-6 sm:px-12 lg:px-40 max-w-screen-xl mx-auto relative overflow-hidden font-sans">
      {/* Background grid pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-0"></div>

      {/* Header */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-5xl font-extrabold tracking-tight animate__animated animate__fadeInDown">
          Conference Overview
        </h2>
        <div className="mt-4 w-28 h-1 bg-gray-800 mx-auto rounded-full"></div>
        <p className="mt-4 text-lg text-gray-500 font-light animate__animated animate__fadeIn animate__delay-1s">
          Discover how AI intersects with sustainability and transforms the world.
        </p>
      </div>

      {/* Highlights Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-24 relative z-10">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="relative group rounded-2xl overflow-hidden text-center shadow-xl transform transition hover:scale-105 animate__animated animate__fadeInUp animate__delay-2s"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
              style={{
                backgroundImage: `url(${item.bgImage})`,
              }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300"></div>

            {/* Content */}
            <div className="relative p-8 z-10 text-white">
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="space-y-12 text-lg sm:text-xl leading-relaxed font-serif text-justify animate__animated animate__fadeIn animate__delay-3s relative z-10">
  <p>
    The <strong>International Conference on Artificial Intelligence for Sustainability and Intelligent Systems (IC-AISIS&rsquo;25)</strong> is set to take place on May 5th and 6th, 2025, at NMAM Institute of Technology, Nitte. This hybrid event is a convergence of visionaries, researchers, and enthusiasts eager to explore AIs role in a sustainable future.
  </p>
  <p>
    Organized by the Association of Digital Engineering (ADE), the Centre for Intelligent Devices & Systems (CIDS), and the Department of MCA, IC-AISIS&rsquo;25 fosters innovation and academic collaboration. The conference welcomes professionals, students, and scholars to present their work and build lasting connections.
  </p>
  <p>
    Events include keynote addresses, technical sessions, student research showcases, and expert-led workshops. With a strong emphasis on practical applications and interdisciplinary research, IC-AISIS&rsquo;25 aims to be a transformative academic experience.
  </p>
</div>


      {/* Quote Callout */}
      <div className="mt-20 bg-gray-100 p-10 rounded-xl text-center shadow-inner animate__animated animate__fadeInUp animate__delay-4s relative z-10">
        <blockquote className="text-xl italic text-gray-700 max-w-3xl mx-auto">
          “AI for sustainability is not just a theme  its a commitment to future generations.”
        </blockquote>
      </div>

      {/* Divider */}
      <div className="mt-24 border-t border-gray-300 w-full relative z-10"></div>
    </section>
  );
}
