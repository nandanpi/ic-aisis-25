import React from "react";

const Organizers: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto bg-[#fffdf7] shadow-2xl rounded-xl border border-gray-300 font-serif text-[#2e2b1b] relative overflow-hidden">
      {/* Ghibli-style background watermark */}
      <div className="absolute opacity-10 bottom-0 right-0 pointer-events-none select-none">
        <img src="/ghibli-leaf.png" alt="decor" className="w-40" />
      </div>

      <h2 className="text-4xl font-bold text-center mb-2 text-[#3e3828] tracking-wide">
        Organizing Committee
      </h2>
      <div className="flex justify-center mb-8">
        <div className="w-16 border-t-4 border-[#d4af7f] rounded-full"></div>
      </div>
      <p className="text-center text-lg text-gray-600 mb-10 italic">
        “Meet the minds behind the magic.” 🌿
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Conference Chair */}
        <section className="bg-[#f9f6ee] p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-[#403d2c]">
            Conference Chair
          </h3>
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
        </section>

        {/* Advisory Board */}
        <section className="bg-[#f9f6ee] p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-[#403d2c]">
            Advisory Board
          </h3>
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
        </section>

        {/* Review Panel */}
        <section className="bg-[#f9f6ee] p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-[#403d2c]">
            Review Panel
          </h3>
          <p className="text-lg leading-relaxed">
            Peer-review committee for research paper evaluations.
          </p>
        </section>

        {/* Technical Program Committee */}
        <section className="bg-[#f9f6ee] p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-[#403d2c]">
            Technical Program Committee
          </h3>
          <p className="text-lg leading-relaxed">
            Experts from AI & Sustainability Fields.
          </p>
        </section>

        {/* Logistics & Outreach Team */}
        <section className="bg-[#f9f6ee] p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 md:col-span-2">
          <h3 className="text-2xl font-semibold mb-3 text-[#403d2c]">
            Logistics & Outreach Team
          </h3>
          <p className="text-lg leading-relaxed">
            Handling registrations, promotions, and venue arrangements.
          </p>
        </section>
      </div>

      {/* Footer line */}
      <div className="mt-12 flex justify-center">
        <div className="w-24 border-t-2 border-[#bbb087] rounded-full"></div>
      </div>
    </div>
  );
};

export default Organizers;
