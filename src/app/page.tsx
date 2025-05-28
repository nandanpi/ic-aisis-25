"use client";

import type React from "react";

// import { useState } from "react";
import { Calendar, MapPin, Download, Clock, Award } from "lucide-react";
import Timeline from "@/components/Timeline";
// import CountdownTimer from "@/components/CountdownTimer";
// import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="flex w-full justify-center items-center pb-16 pt-32">
        <div className="container mx-5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-8">
              <Calendar className="w-4 h-4 mr-2" />
              October 3-4, 2025 • Hybrid Mode
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              International Conference on{" "}
              <span className="gradient-text">Artificial Intelligence</span> for
              Sustainability
            </h1>

            <p className="md:text-xl text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join researchers, academicians, and professionals from around the
              world to explore how AI can shape a sustainable future at NMAM
              Institute of Technology, Nitte.
            </p>

            <div className="flex justify-center items-center my-8">
              <button className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:scale-105 duration-300 transition-all cursor-pointer hover:shadow-xl inline-flex items-center w-fit">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </button>
            </div>

            <div className="flex justify-center items-center flex-wrap gap-6 mb-12">
              <div className="glass-effect rounded-2xl p-6 text-center">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Venue</h3>
                <p className="text-gray-600">
                  NMAM Institute of Technology
                  <br />
                  Nitte, Karnataka
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Submission Deadline
                </h3>
                <p className="text-gray-600">July 15, 2025</p>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Publication
                </h3>
                <p className="text-gray-600">Scopus Indexed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">
              Important Dates
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CountdownTimer
                title="Registration Ends In"
                targetDate="2025-04-20T23:59:59"
                icon={<Clock className="w-6 h-6" />}
              />
              <CountdownTimer
                title="Conference Begins In"
                targetDate="2025-05-05T09:00:00"
                icon={<Calendar className="w-6 h-6" />}
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* <StatsSection /> */}

      <Timeline />

      <div className="flex flex-col justify-center items-center w-full mb-16">
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
              className="hover:scale-105 duration-300 transition-all hover:shadow-2xl bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
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
  );
}
