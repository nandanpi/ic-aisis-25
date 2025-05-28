"use client";
import { Globe, Lightbulb, Users, Award, Target } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Engagement",
      description:
        "Researchers and experts from across the world participate in this premier conference.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovative Research",
      description:
        "Cutting-edge AI research focused on sustainability and intelligent systems.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Academic Excellence",
      description:
        "Top research papers published in Scopus-indexed journals and proceedings.",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="hero-pattern section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              About <span className="gradient-text">IC-AISIS 2025</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how artificial intelligence intersects with
              sustainability to transform our world and create innovative
              solutions for tomorrow{"'"}s challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
                Why IC-AISIS 2025?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join a premier international conference that brings together the
                brightest minds in AI and sustainability research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-2xl text-white mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100 mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Conference Overview
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    The{" "}
                    <strong>
                      International Conference on Artificial Intelligence for
                      Sustainability and Intelligent Systems (IC-AISIS&apos;25)
                    </strong>{" "}
                    is set to take place on May 5th and 6th, 2025, at NMAM
                    Institute of Technology, Nitte. This hybrid event represents
                    a convergence of visionaries, researchers, and enthusiasts
                    eager to explore AI&apos;s transformative role in creating a
                    sustainable future.
                  </p>
                  <p>
                    Organized by the Association of Digital Engineering (ADE),
                    the Centre for Intelligent Devices & Systems (CIDS), and the
                    Department of MCA, IC-AISIS&apos;25 fosters innovation and
                    academic collaboration. The conference welcomes
                    professionals, students, and scholars to present their
                    groundbreaking work and build lasting connections.
                  </p>
                  <p>
                    Our comprehensive program includes keynote addresses from
                    industry leaders, technical sessions featuring cutting-edge
                    research, student research showcases, and expert-led
                    workshops. With a strong emphasis on practical applications
                    and interdisciplinary research, IC-AISIS&apos;25 aims to be
                    a transformative academic experience.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-blue-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    To create a global platform where AI researchers and
                    sustainability experts collaborate to develop innovative
                    solutions for environmental and social challenges.
                  </p>
                </div>

                <div className="bg-green-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Our Community
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    A diverse community of researchers, industry professionals,
                    policymakers, and students working together to shape the
                    future of AI and sustainability.
                  </p>
                </div>
              </div>

              <div className="gradient-bg rounded-2xl p-8 lg:p-12 text-center text-white mb-12">
                <blockquote className="text-2xl lg:text-3xl font-display italic mb-6">
                  {'"'}AI for sustainability is not just a theme — it&apos;s a
                  commitment to future generations and our responsibility to
                  create a better world through technology.{'"'}
                </blockquote>
                <cite className="text-blue-100 font-medium">
                  IC-AISIS 2025 Vision Statement
                </cite>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Expected Impact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Research Excellence
                    </h4>
                    <p className="text-gray-700 mb-4">
                      High-impact research publications and meaningful knowledge
                      exchange between academia and industry professionals.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Global Collaboration
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Creation of new international collaborations and promotion
                      of interdisciplinary research opportunities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Practical Applications
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Real-world AI applications designed to tackle sustainable
                      development challenges across various sectors.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Policy Development
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Development of policy recommendations and industry
                      roadmaps for implementing AI in sustainability
                      initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
