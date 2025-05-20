import React from "react";

const Organizers: React.FC = () => {
  return (
    <div className="relative px-6 py-12 max-w-6xl mx-auto shadow-2xl rounded-xl border border-gray-300 font-serif text-[#2e2b1b] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        
        {/* Overlay for dimming background */}
        <div className="absolute inset-0 bg-white/40  rounded-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-2 text-[#3e3828] tracking-wide">
          Organizing Committee
        </h2>
        <div className="flex justify-center mb-8">
          <div className="w-16 border-t-4 border-[#d4af7f] rounded-full"></div>
        </div>
        <p className="text-center text-lg text-gray-700 mb-10 italic">
          “Meet the minds behind the magic.” 🌿
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Conference Chair",
              content: (
                <ul className="space-y-2 text-lg leading-relaxed">
                  <li>
                    <span className="font-medium">Dr. Mangala Shetty</span>, Associate
                    Professor, Dept. of MCA, NMAMIT, Nitte
                  </li>
                  <li>
                    <span className="font-medium">Dr. Shashank Shetty</span>, Assistant
                    Professor GD-III, Dept. of CSE, NMAMIT, Nitte
                  </li>
                </ul>
              ),
            },
            {
              title: "Advisory Board",
              content: (
                <ul className="space-y-2 text-lg leading-relaxed">
                  <li>
                    <span className="font-medium">Dr. Praveenkumar Shetty</span>, Director
                    (R & D), Nitte DU
                  </li>
                  <li>
                    <span className="font-medium">Dr. Vijeesh V</span>, Associate Director
                    (R&D), NITTE Off-Campus Centre
                  </li>
                </ul>
              ),
            },
            {
              title: "Review Panel",
              content: (
                <p className="text-lg leading-relaxed">
                  Peer-review committee for research paper evaluations.
                </p>
              ),
            },
            {
              title: "Technical Program Committee",
              content: (
                <p className="text-lg leading-relaxed">
                  Experts from AI & Sustainability Fields.
                </p>
              ),
            },
            {
              title: "Logistics & Outreach Team",
              content: (
                <p className="text-lg leading-relaxed">
                  Handling registrations, promotions, and venue arrangements.
                </p>
              ),
              colSpan: true,
            },
          ].map((item, index) => (
            <section
              key={index}
              className={`relative overflow-hidden p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 min-h-[220px] bg-cover bg-center ${
                item.colSpan ? "md:col-span-2" : ""
              }`}
              style={{
                backgroundImage: "url('/card-bg.jpg')",
              }}
            >
              {/* Card Overlay */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0 rounded-lg"></div>

              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-3 text-[#403d2c]">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </section>
          ))}
        </div>

        {/* Footer line */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 border-t-2 border-[#bbb087] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
