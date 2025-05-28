"use client";

import { Users, Globe, Award, BookOpen } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Expected Participants",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "25+",
      label: "Countries Represented",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "100+",
      label: "Research Papers",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      number: "6",
      label: "Key Topics",
    },
  ];

  return (
    <section className="gradient-bg section-padding">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Conference by the Numbers
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join a global community of researchers and innovators working
              towards a sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
