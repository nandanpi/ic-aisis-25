"use client";
import type React from "react";
import { Calendar, MapPin, Download, Clock, Award } from "lucide-react";
import Image from "next/image";
import Timeline from "@/components/Timeline";
import { useState } from "react";
import PageLoader from "@/components/layout/PageLoader";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <>
      <PageLoader onComplete={handleLoadingComplete} />
      <div className="min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              width={1000}
              height={500}
              src="/nitte-campus.jpeg"
              alt="NMAMIT Campus"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-blue-900/90"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-600/10 to-transparent"></div>
          </div>

          <div className="relative z-10 mx-5 pt-24 pb-16">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 text-white">
                  <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium mb-8 border border-white/20">
                    <Calendar className="w-4 h-4 mr-2" />
                    October 3-4, 2025 • Hybrid Mode
                  </div>

                  <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                    International Conference on{" "}
                    <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                      Artificial Intelligence
                    </span>{" "}
                    for Sustainability and Intelligent Systems
                  </h1>

                  <p className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
                    Join researchers, academicians, and professionals from
                    around the world to explore how AI can shape a sustainable
                    future at NMAM Institute of Technology, Nitte.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-fit cursor-pointer">
                      <Download className="w-5 h-5 mr-2" />
                      Download Brochure
                    </button>
                    {/* <a
                      href="/register"
                      className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center backdrop-blur-sm"
                    >
                      <Users className="w-5 h-5 mr-2" />
                      Register Now
                    </a> */}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="space-y-6">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                          <Calendar className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            Conference Details
                          </h3>
                          <p className="text-gray-600">IC-AISIS 2025</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center text-gray-700">
                          <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                          <div>
                            <p className="font-medium">
                              NMAM Institute of Technology, Nitte
                            </p>
                            <p className="text-sm text-gray-500">
                              Karnataka, India
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Clock className="w-5 h-5 mr-3 text-blue-600" />
                          <div>
                            <p className="font-medium">October 3-4, 2025</p>
                            <p className="text-sm text-gray-500">
                              Two-day conference
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Award className="w-5 h-5 mr-3 text-blue-600" />
                          <div>
                            <p className="font-medium">Scopus Indexed</p>
                            <p className="text-sm text-gray-500">
                              Publication opportunity
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl">
                      <h4 className="font-semibold mb-3">Quick Actions</h4>
                      <div className="space-y-3">
                        <a
                          href="/submission-guidelines"
                          className="block text-sm hover:text-blue-200 transition-colors"
                        >
                          → Submission Guidelines
                        </a>
                        <a
                          href="/schedule"
                          className="block text-sm hover:text-blue-200 transition-colors"
                        >
                          → View Schedule
                        </a>
                        <a
                          href="/topics"
                          className="block text-sm hover:text-blue-200 transition-colors"
                        >
                          → Research Topics
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:block hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2 opacity-75">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/75 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        <Timeline />

        <div className="max-w-6xl mx-auto mb-32 px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Why Attend IC-AISIS 2025?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover cutting-edge research, network with global experts, and
              contribute to a sustainable future through AI innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Keynote Speakers",
                description:
                  "Learn from world-renowned experts in AI and sustainability",
                icon: "🎤",
              },
              {
                title: "Research Presentations",
                description: "Present your work and get feedback from peers",
                icon: "📊",
              },
              {
                title: "Networking Opportunities",
                description:
                  "Connect with researchers and industry professionals",
                icon: "🤝",
              },
              {
                title: "Publication Opportunities",
                description:
                  "Get your research published in Scopus-indexed journals",
                icon: "📚",
              },
              {
                title: "Hybrid Participation",
                description: "Join us in-person or virtually from anywhere",
                icon: "🌐",
              },
              {
                title: "Student Forum",
                description: "Special sessions dedicated to student research",
                icon: "🎓",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
