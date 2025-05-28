"use client";

import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Coffee,
  Award,
  Presentation,
  MessageSquare,
} from "lucide-react";

export default function Schedule() {
  const scheduleData = {
    day1: {
      date: "May 5, 2025",
      title: "Day 1 - Opening & Technical Sessions",
      events: [
        {
          time: "08:00 - 09:00",
          title: "Registration & Welcome Reception",
          type: "registration",
          description:
            "Check-in, welcome kit distribution, and networking breakfast",
          location: "Main Lobby",
          icon: <Users className="w-5 h-5" />,
        },
        {
          time: "09:00 - 09:30",
          title: "Inaugural Ceremony",
          type: "ceremony",
          description:
            "Welcome address, conference overview, and opening remarks",
          location: "Main Auditorium",
          icon: <Award className="w-5 h-5" />,
          speakers: ["Dr. Praveenkumar Shetty", "Conference Chairs"],
        },
        {
          time: "09:30 - 10:30",
          title: "Keynote Address 1",
          type: "keynote",
          description: "AI for Climate Change: Opportunities and Challenges",
          location: "Main Auditorium",
          icon: <Presentation className="w-5 h-5" />,
          speaker: "Distinguished Speaker (TBA)",
        },
        {
          time: "10:30 - 11:00",
          title: "Networking Tea & Interactive Session",
          type: "break",
          description: "Refreshments and networking opportunities",
          location: "Conference Hall Foyer",
          icon: <Coffee className="w-5 h-5" />,
        },
        {
          time: "11:00 - 12:30",
          title: "Technical Session 1A",
          type: "technical",
          description: "AI for Environmental and Sustainable Development",
          location: "Hall A",
          icon: <Presentation className="w-5 h-5" />,
          papers: 6,
        },
        {
          time: "11:00 - 12:30",
          title: "Technical Session 1B",
          type: "technical",
          description: "AI in Healthcare and Well-being",
          location: "Hall B",
          icon: <Presentation className="w-5 h-5" />,
          papers: 6,
        },
        {
          time: "12:30 - 13:30",
          title: "Lunch & Informal Discussions",
          type: "break",
          description: "Networking lunch and informal discussions",
          location: "Dining Hall",
          icon: <Coffee className="w-5 h-5" />,
        },
        {
          time: "13:30 - 15:00",
          title: "Technical Session 2A",
          type: "technical",
          description: "AI for Smart Cities and Infrastructure",
          location: "Hall A",
          icon: <Presentation className="w-5 h-5" />,
          papers: 6,
        },
        {
          time: "13:30 - 15:00",
          title: "Technical Session 2B",
          type: "technical",
          description: "Ethical, Responsible, and Inclusive AI",
          location: "Hall B",
          icon: <Presentation className="w-5 h-5" />,
          papers: 6,
        },
        {
          time: "15:00 - 16:15",
          title: "Poster Exhibition & Interactive Presentations",
          type: "poster",
          description: "Poster presentations and interactive demonstrations",
          location: "Exhibition Area",
          icon: <MessageSquare className="w-5 h-5" />,
          posters: 25,
        },
        {
          time: "16:15 - 16:30",
          title: "Refreshment Break",
          type: "break",
          description: "Tea/coffee break",
          location: "Conference Hall Foyer",
          icon: <Coffee className="w-5 h-5" />,
        },
        {
          time: "16:30 - 17:30",
          title: "Panel Discussion",
          type: "panel",
          description: "Future of AI in Sustainability: Industry Perspectives",
          location: "Main Auditorium",
          icon: <MessageSquare className="w-5 h-5" />,
          panelists: 4,
        },
      ],
    },
    day2: {
      date: "May 6, 2025",
      title: "Day 2 - Advanced Sessions & Closing",
      events: [
        {
          time: "09:00 - 10:00",
          title: "Keynote Address 2",
          type: "keynote",
          description: "Emerging Technologies for Sustainable Future",
          location: "Main Auditorium",
          icon: <Presentation className="w-5 h-5" />,
          speaker: "Distinguished Speaker (TBA)",
        },
        {
          time: "10:00 - 10:30",
          title: "Coffee Break & Networking",
          type: "break",
          description: "Refreshments and networking",
          location: "Conference Hall Foyer",
          icon: <Coffee className="w-5 h-5" />,
        },
        {
          time: "10:30 - 12:00",
          title: "Technical Session 3A",
          type: "technical",
          description: "AI in Industry and Manufacturing",
          location: "Hall A",
          icon: <Presentation className="w-5 h-5" />,
          papers: 6,
        },
        {
          time: "10:30 - 12:00",
          title: "Technical Session 3B",
          type: "technical",
          description: "Emerging Technologies for Sustainable Future",
          location: "Hall B",
          icon: <Presentation className="w-5 h-5" />,
          papers: 6,
        },
        {
          time: "12:00 - 13:00",
          title: "Lunch & Collaborative Discussions",
          type: "break",
          description: "Networking lunch and collaborative discussions",
          location: "Dining Hall",
          icon: <Coffee className="w-5 h-5" />,
        },
        {
          time: "13:00 - 14:00",
          title: "Panel Discussion: Insights from Editors",
          type: "panel",
          description: "Publishing in Top-tier Journals: Tips from Editors",
          location: "Main Auditorium",
          icon: <MessageSquare className="w-5 h-5" />,
          panelists: 3,
        },
        {
          time: "14:00 - 15:30",
          title: "Technical Session 4A",
          type: "technical",
          description: "Cross-Cutting Themes and Applications",
          location: "Hall A",
          icon: <Presentation className="w-5 h-5" />,
          papers: 6,
        },
        {
          time: "14:00 - 15:30",
          title: "Student Forum",
          type: "student",
          description: "Student Research Presentations and Discussions",
          location: "Hall B",
          icon: <Users className="w-5 h-5" />,
          presentations: 8,
        },
        {
          time: "15:30 - 16:00",
          title: "Best Paper Awards & Recognition",
          type: "ceremony",
          description: "Award ceremony for outstanding contributions",
          location: "Main Auditorium",
          icon: <Award className="w-5 h-5" />,
        },
        {
          time: "16:00 - 16:30",
          title: "Valedictory Ceremony & Closing Remarks",
          type: "ceremony",
          description: "Conference summary, future directions, and closing",
          location: "Main Auditorium",
          icon: <Award className="w-5 h-5" />,
        },
      ],
    },
  };

  const getEventTypeStyles = (type: string) => {
    const styles = {
      registration: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "bg-blue-100 text-blue-600",
        badge: "bg-blue-100 text-blue-700",
      },
      ceremony: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        icon: "bg-purple-100 text-purple-600",
        badge: "bg-purple-100 text-purple-700",
      },
      keynote: {
        bg: "bg-red-50",
        border: "border-red-200",
        icon: "bg-red-100 text-red-600",
        badge: "bg-red-100 text-red-700",
      },
      technical: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "bg-green-100 text-green-600",
        badge: "bg-green-100 text-green-700",
      },
      panel: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        icon: "bg-orange-100 text-orange-600",
        badge: "bg-orange-100 text-orange-700",
      },
      poster: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        icon: "bg-indigo-100 text-indigo-600",
        badge: "bg-indigo-100 text-indigo-700",
      },
      student: {
        bg: "bg-teal-50",
        border: "border-teal-200",
        icon: "bg-teal-100 text-teal-600",
        badge: "bg-teal-100 text-teal-700",
      },
      break: {
        bg: "bg-gray-50",
        border: "border-gray-200",
        icon: "bg-gray-100 text-gray-600",
        badge: "bg-gray-100 text-gray-700",
      },
    };
    return styles[type as keyof typeof styles] || styles.technical;
  };

  const getEventTypeName = (type: string) => {
    const names = {
      registration: "Registration",
      ceremony: "Ceremony",
      keynote: "Keynote",
      technical: "Technical Session",
      panel: "Panel Discussion",
      poster: "Poster Session",
      student: "Student Forum",
      break: "Break",
    };
    return names[type as keyof typeof names] || "Event";
  };

  return (
    <div className="min-h-screen pt-16">
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
              <Calendar className="w-4 h-4 mr-2" />
              May 5-6, 2025 • 2 Days • Hybrid Mode
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Conference <span className="text-blue-200">Schedule</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us for two days of cutting-edge research presentations,
              keynote speeches, and networking opportunities in AI and
              sustainability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        {scheduleData.day1.title}
                      </h2>
                      <p className="text-blue-100">{scheduleData.day1.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">Day 1</div>
                      <div className="text-sm text-blue-200">Opening Day</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    {scheduleData.day1.events.map((event, index) => {
                      const styles = getEventTypeStyles(event.type);
                      return (
                        <div
                          key={index}
                          className={`rounded-xl p-4 border ${styles.border} ${styles.bg} transition-all duration-200 hover:shadow-md`}
                        >
                          <div className="flex items-start">
                            <div
                              className={`w-10 h-10 rounded-lg ${styles.icon} flex items-center justify-center mr-4 flex-shrink-0`}
                            >
                              {event.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold text-gray-900 text-sm">
                                  {event.title}
                                </h3>
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${styles.badge} ml-2 flex-shrink-0`}
                                >
                                  {getEventTypeName(event.type)}
                                </span>
                              </div>
                              <p className="text-gray-700 text-sm mb-2">
                                {event.description}
                              </p>
                              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                                <div className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {event.time}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {event.location}
                                </div>
                                {event.papers && (
                                  <div className="flex items-center">
                                    <Presentation className="w-3 h-3 mr-1" />
                                    {event.papers} papers
                                  </div>
                                )}
                                {event.posters && (
                                  <div className="flex items-center">
                                    <MessageSquare className="w-3 h-3 mr-1" />
                                    {event.posters} posters
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        {scheduleData.day2.title}
                      </h2>
                      <p className="text-green-100">{scheduleData.day2.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">Day 2</div>
                      <div className="text-sm text-green-200">Closing Day</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    {scheduleData.day2.events.map((event, index) => {
                      const styles = getEventTypeStyles(event.type);
                      return (
                        <div
                          key={index}
                          className={`rounded-xl p-4 border ${styles.border} ${styles.bg} transition-all duration-200 hover:shadow-md`}
                        >
                          <div className="flex items-start">
                            <div
                              className={`w-10 h-10 rounded-lg ${styles.icon} flex items-center justify-center mr-4 flex-shrink-0`}
                            >
                              {event.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold text-gray-900 text-sm">
                                  {event.title}
                                </h3>
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${styles.badge} ml-2 flex-shrink-0`}
                                >
                                  {getEventTypeName(event.type)}
                                </span>
                              </div>
                              <p className="text-gray-700 text-sm mb-2">
                                {event.description}
                              </p>
                              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                                <div className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {event.time}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {event.location}
                                </div>
                                {event.papers && (
                                  <div className="flex items-center">
                                    <Presentation className="w-3 h-3 mr-1" />
                                    {event.papers} papers
                                  </div>
                                )}
                                {event.presentations && (
                                  <div className="flex items-center">
                                    <Users className="w-3 h-3 mr-1" />
                                    {event.presentations} presentations
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Venue Information
              </h3>
              <p className="text-gray-600 text-sm">
                NMAM Institute of Technology, Nitte, Karnataka, India. All
                sessions will be held in the main conference complex with hybrid
                participation options.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Networking Opportunities
              </h3>
              <p className="text-gray-600 text-sm">
                Multiple networking sessions, coffee breaks, and informal
                discussions are scheduled throughout both days to facilitate
                collaboration.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Awards & Recognition
              </h3>
              <p className="text-gray-600 text-sm">
                Best paper awards, outstanding poster presentations, and student
                research excellence will be recognized during the closing
                ceremony.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-bg py-16 px-5">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
            Don&apos;t Miss Out!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Register now to secure your spot at this premier conference on AI
            and sustainability.
          </p>
          <div className="flex flex-col items-center sm:flex-row gap-4 justify-center w-full">
            <a
              href="/fee"
              className="text-white bg-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 hover:outline transition-colors"
            >
              View Registration Fees
            </a>
            <a
              href="/contact"
              className="outline text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
