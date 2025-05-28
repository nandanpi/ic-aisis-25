"use client";

import { colorClasses2 } from "@/lib/colorClasses";
import {
  CreditCard,
  Users,
  GraduationCap,
  Building,
  Globe,
  AlertCircle,
  User,
} from "lucide-react";

export default function RegistrationFees() {
  const feeCategories = [
    {
      category: "Student Author (UG/PG)",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "blue",
      description:
        "Undergraduate and Postgraduate student authors with valid ID",
      fees: {
        earlyBird: "₹2,000",
        regular: "₹2,500",
      },
      includes: [
        "Conference kit and materials",
        "Access to all technical sessions",
        "Lunch and refreshments",
        "Certificate of participation",
        "Student networking sessions",
        "Paper presentation opportunity",
      ],
    },
    {
      category: "PhD Student",
      icon: <Users className="w-6 h-6" />,
      color: "green",
      description: "PhD scholars and research fellows",
      fees: {
        earlyBird: "₹3,000",
        regular: "₹3,500",
      },
    },
    {
      category: "Student International Author (UG/PG)",
      icon: <Globe className="w-6 h-6" />,
      color: "purple",
      description:
        "International undergraduate and postgraduate student authors",
      fees: {
        earlyBird: "$85",
        regular: "$95",
      },
    },
    {
      category: "Faculty Author",
      icon: <Building className="w-6 h-6" />,
      color: "orange",
      description: "Faculty members and academic professionals (authors)",
      fees: {
        earlyBird: "₹6,000",
        regular: "₹6,500",
      },
    },
    {
      category: "Faculty International Author",
      icon: <Globe className="w-6 h-6" />,
      color: "red",
      description: "International faculty members and academic professionals",
      fees: {
        earlyBird: "$120",
        regular: "$130",
      },
    },
    {
      category: "Corporate/Industry Professional",
      icon: <Building className="w-6 h-6" />,
      color: "gray",
      description: "Industry experts and corporate professionals",
      fees: {
        earlyBird: "₹8,000",
        regular: "₹8,500",
      },
    },
    {
      category: "Attendee",
      icon: <User className="w-6 h-6" />,
      color: "indigo",
      description: "Conference attendees (non-presenting participants)",
      fees: {
        earlyBird: "₹500",
        regular: "₹1,000",
      },
    },
  ];

  const importantDates = [
    {
      date: "31 August 2025",
      title: "Early Bird Registration Opens",
      status: "upcmoming",
    },
    {
      date: "September 10, 2025",
      title: "Early Bird Registration Ends",
      status: "upcoming",
    },
    {
      date: "September 15, 2025",
      title: "Final Registration Deadline",
      status: "upcoming",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="relative py-16 overflow-hidden px-5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800"></div>
          <div className="absolute inset-0 opacity-20">
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

        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium mb-8 border border-white/20">
              <CreditCard className="w-4 h-4 mr-2" />
              Registration Opening soon • Early Bird Rates Available
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Registration <span className="text-blue-200">Fees</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose your registration category and secure your spot at IC-AISIS
              2025. Early bird rates available until September 10, 2025.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 inline-block">
              <p className="text-blue-100 text-sm">
                <AlertCircle className="w-4 h-4 inline mr-2" />
                Final registration fees as approved by the organizing committee
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Registration Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the category that best describes you and view the
              corresponding registration fees
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {feeCategories.map((category, index) => {
              const colors =
                colorClasses2[category.color as keyof typeof colorClasses2];
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`bg-gradient-to-r h-32 ${colors.gradient} p-6`}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center mr-4`}
                      >
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {category.category}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                        <span className="text-sm font-medium text-gray-700">
                          Early Bird
                        </span>
                        <span className="text-xl font-bold text-green-700">
                          {category.fees.earlyBird}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <span className="text-sm font-medium text-gray-700">
                          Regular
                        </span>
                        <span className="text-xl font-bold text-blue-700">
                          {category.fees.regular}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Important Registration Dates
            </h2>
            <p className="text-xl text-gray-600">
              Mark your calendar and register early to save on fees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {importantDates.map((date, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${
                  date.status === "completed"
                    ? "bg-green-50 border-green-200"
                    : "bg-blue-50 border-blue-200"
                } transition-all duration-200`}
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {date.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{date.date}</p>
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      date.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {date.status === "completed" ? "Completed" : "Upcoming"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Payment Information
              </h2>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">
                    Important Notes
                  </h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>
                      • Registration fees are non-refundable after payment
                      confirmation
                    </li>
                    <li>
                      • Student registrations require valid student ID
                      verification
                    </li>
                    <li>
                      • Author registration is mandatory for paper presentation
                    </li>
                    <li>
                      • International participants can pay in USD as mentioned
                    </li>
                    <li>
                      • Registration form will be available soon on our website
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-bg py-16 px-5">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
            Ready to Register?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don&apos;t miss out on early bird rates. Register now and join us
            for this premier conference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="text-blue-600 outline px-8 py-4 rounded-xl font-semibold "
              disabled
            >
              Register Now (Coming Soon)
            </button>
            <a
              href="/contact"
              className="text-white bg-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 hover:outline transition-colors"
            >
              Contact for Queries
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
