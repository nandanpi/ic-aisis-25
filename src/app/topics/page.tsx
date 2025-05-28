"use client";
import { Leaf, Heart, Shield, Building, Cog, Zap } from "lucide-react";

export default function Topics() {
  const topics = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "AI for Environmental and Sustainable Development",
      color: "green",
      items: [
        "AI-driven climate change mitigation and adaptation",
        "AI in smart energy management and renewable energy optimization",
        "AI for sustainable agriculture, biodiversity conservation, and ecosystem monitoring",
        "AI-powered water resource management and waste reduction",
      ],
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "AI in Healthcare and Well-being",
      color: "red",
      items: [
        "AI-powered predictive analytics in disease prevention",
        "AI for sustainable healthcare systems and medical resource optimization",
        "AI in medical imaging, diagnostics, and remote patient monitoring",
        "Ethical AI in health data management and decision-making",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI for Ethical and Responsible Innovation",
      color: "purple",
      items: [
        "AI governance, ethics, and policy frameworks for sustainability",
        "AI for social good, humanitarian applications, and inclusive technology",
        "Bias, fairness, and transparency in AI-driven decision-making",
      ],
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "AI for Smart Cities and Infrastructure",
      color: "blue",
      items: [
        "AI-driven urban planning and sustainable city management",
        "AI for disaster prediction, response, and resilience",
        "AI-powered green construction, smart buildings, and energy-efficient architecture",
        "AI-driven sustainable transportation, logistics, and mobility",
      ],
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "AI in Advanced Manufacturing and Industrial Sustainability",
      color: "gray",
      items: [
        "AI for smart factories, energy-efficient production, and predictive maintenance",
        "AI in sustainable material science and eco-friendly product design",
        "AI-driven automation for green manufacturing and waste reduction",
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI & Emerging Technologies for a Sustainable Future",
      color: "yellow",
      items: [
        "AI in quantum computing for sustainability solutions",
        "AI-driven IoT and edge computing for energy efficiency",
        "AI-powered blockchain for transparent and sustainable practices",
        "AI for next-generation communication networks and 6G",
      ],
    },
  ];

  const colorClasses = {
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "text-green-600",
      title: "text-green-800",
      hover: "hover:bg-green-100",
    },
    red: {
      bg: "bg-red-50",
      border: "border-red-200",
      icon: "text-red-600",
      title: "text-red-800",
      hover: "hover:bg-red-100",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: "text-purple-600",
      title: "text-purple-800",
      hover: "hover:bg-purple-100",
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "text-blue-600",
      title: "text-blue-800",
      hover: "hover:bg-blue-100",
    },
    gray: {
      bg: "bg-gray-50",
      border: "border-gray-200",
      icon: "text-gray-600",
      title: "text-gray-800",
      hover: "hover:bg-gray-100",
    },
    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      icon: "text-yellow-600",
      title: "text-yellow-800",
      hover: "hover:bg-yellow-100",
    },
  };

  return (
    <div className="pt-24">
      <section className="hero-pattern section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Conference <span className="gradient-text">Topics</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore cutting-edge research areas where artificial intelligence
              meets sustainability to create innovative solutions for global
              challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {topics.map((topic, index) => {
                const colors =
                  colorClasses[topic.color as keyof typeof colorClasses];
                return (
                  <div
                    key={index}
                    className={`card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ${colors.hover} transition-all duration-300`}
                  >
                    <div className="flex items-start mb-6">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 ${colors.bg} ${colors.border} border-2 rounded-2xl mr-4`}
                      >
                        <div className={colors.icon}>{topic.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-xl font-semibold ${colors.title} mb-2 leading-tight`}
                        >
                          {topic.title}
                        </h3>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {topic.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div
                            className={`w-2 h-2 ${colors.bg} rounded-full mt-2 mr-3 flex-shrink-0`}
                          ></div>
                          <span className="text-gray-700 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-bg section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Ready to Present Your Research?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Submit your original research in any of these exciting areas and
              contribute to the future of AI and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/submission-guidelines"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Submission Guidelines
              </a>
              <a
                href="/register"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
