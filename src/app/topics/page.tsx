"use client";

import { colorClasses } from "@/lib/colorClasses";
import {
  Leaf,
  Heart,
  Building,
  Shield,
  Cog,
  Zap,
  Globe,
  ChevronRight,
} from "lucide-react";

export default function Topics() {
  const topicCategories = [
    {
      id: "environmental",
      icon: <Leaf className="w-6 h-6" />,
      title: "AI for Environmental and Sustainable Development",
      color: "green",
      items: [
        "AI for climate change prediction and mitigation",
        "Renewable energy forecasting and optimization",
        "Smart grids and energy-efficient systems",
        "AI in biodiversity monitoring and conservation",
        "AI for sustainable agriculture and food systems",
        "Water quality monitoring and management using AI",
        "Waste detection, classification, and smart recycling",
      ],
    },
    {
      id: "healthcare",
      icon: <Heart className="w-6 h-6" />,
      title: "AI in Healthcare and Well-being",
      color: "red",
      items: [
        "AI in disease prediction and outbreak modeling",
        "AI-driven medical imaging and diagnostics",
        "Telemedicine and remote patient monitoring systems",
        "Health informatics and medical data analytics",
        "AI for mental health assessment and therapy",
        "Sustainable and equitable healthcare delivery",
      ],
    },
    {
      id: "smartcities",
      icon: <Building className="w-6 h-6" />,
      title: "AI for Smart Cities and Infrastructure",
      color: "blue",
      items: [
        "AI-based urban planning and traffic optimization",
        "Intelligent waste management and smart utilities",
        "Disaster prediction and response systems",
        "Green building design and energy-efficient architecture",
        "Smart mobility and logistics",
        "IoT and AI integration for sustainable city management",
      ],
    },
    {
      id: "ethics",
      icon: <Shield className="w-6 h-6" />,
      title: "Ethical, Responsible, and Inclusive AI",
      color: "purple",
      items: [
        "AI ethics, bias mitigation, and fairness",
        "AI governance and policy for sustainable innovation",
        "Explainable and transparent AI systems",
        "Responsible AI for social good",
        "AI and data privacy in sustainability contexts",
        "AI in humanitarian and development applications",
      ],
    },
    {
      id: "manufacturing",
      icon: <Cog className="w-6 h-6" />,
      title: "AI in Industry and Manufacturing",
      color: "gray",
      items: [
        "AI for predictive maintenance and process optimization",
        "Smart manufacturing and Industry 4.0 solutions",
        "AI in supply chain sustainability",
        "AI-driven green product design",
        "Industrial energy and resource efficiency using AI",
      ],
    },
    {
      id: "emerging",
      icon: <Zap className="w-6 h-6" />,
      title: "Emerging Technologies for a Sustainable Future",
      color: "yellow",
      items: [
        "AI and blockchain for sustainable supply chains",
        "AI-powered edge and fog computing for energy efficiency",
        "Quantum AI for sustainable systems modeling",
        "AI for 6G and next-gen communication networks",
        "AI-enabled digital twins for environmental modeling",
        "AI in space technologies for Earth observation and sustainability",
      ],
    },
    {
      id: "crosscutting",
      icon: <Globe className="w-6 h-6" />,
      title: "Cross-Cutting Themes",
      color: "indigo",
      items: [
        "Interdisciplinary AI applications in sustainability",
        "AI education and curriculum for sustainable development",
        "Case studies and real-world deployments",
        "AI for achieving the UN Sustainable Development Goals (SDGs)",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden px-5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="8"
                    height="8"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(45)"
                  >
                    <path
                      d="M 0 0 L 0 1 L 8 1"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium mb-8 border border-white/20">
              <Leaf className="w-4 h-4 mr-2" />7 Research Tracks • 40+ Subtopics
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Topics of <span className="text-blue-200">Interest</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Topics are not limited to those listed; other relevant
              contributions aligned with the conference theme are also welcome.
            </p>

            <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
              <a
                href="/submission-guidelines"
                className="bg-white w-fit text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
              >
                Submission Guidelines
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Research Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive research tracks covering the
              intersection of AI and sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topicCategories.map((category) => {
              const colors =
                colorClasses[category.color as keyof typeof colorClasses];

              return (
                <div
                  key={category.id}
                  className=" rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-full transition-all duration-300 hover:shadow-xl flex flex-col"
                >
                  <div
                    className={`bg-gradient-to-br ${colors.gradient} p-6 h-24 flex items-start`}
                  >
                    <div className="flex items-start w-full">
                      <div
                        className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center shadow-sm mr-4 flex-shrink-0`}
                      >
                        {category.icon}
                      </div>
                      <div className="min-w-0 self-center">
                        <h3 className={`text-lg font-bold ${colors.title} `}>
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white flex-1 flex flex-col">
                    <ul className="space-y-3 flex-1">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div
                            className={`w-2 h-2 ${colors.light} rounded-full mt-2 mr-3 flex-shrink-0`}
                          ></div>
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-gray-100 h-16 flex items-center">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm text-gray-500">
                          {category.items.length} research areas
                        </span>
                        <div
                          className={`px-3 py-1 ${colors.bg} ${colors.title} text-xs font-medium rounded-full`}
                        >
                          Track {topicCategories.indexOf(category) + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Open to Innovation
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                While we&apos;ve outlined key research tracks, we welcome
                submissions on any relevant topic that aligns with our
                conference theme of &quot;Harnessing AI to Drive Sustainability
                Across Industries.&quot;
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/submission-guidelines"
                  className="inline-flex items-center"
                >
                  View Submission Guidelines
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
                <a href="/contact" className="inline-flex items-center">
                  Contact for Clarifications
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
