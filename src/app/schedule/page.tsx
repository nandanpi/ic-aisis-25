import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function ConferenceSchedule() {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white text-black py-20 px-6 sm:px-12 lg:px-24 max-w-screen-xl mx-auto font-serif space-y-24">
      <h2 className="text-5xl font-extrabold text-center mb-16 tracking-wider text-black drop-shadow-md animate__animated animate__fadeInDown">
        Conference Structure
      </h2>

      {/* Day 1 Schedule */}
      <div className="relative bg-white shadow-2xl rounded-3xl border-4 border-black/10 p-10 hover:shadow-3xl transition duration-500">
        <img
          src="day1.jpg"
          alt="Day 1"
          className="absolute inset-0 w-full h-full object-cover opacity-15 rounded-3xl pointer-events-none"
        />
        <div className="relative z-10 space-y-6">
          <h3 className="text-4xl font-bold text-center text-black flex justify-center items-center gap-3">
            <Calendar className="text-indigo-600 w-7 h-7" /> Day 1 Schedule
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-fixed border border-black/20 text-lg shadow-sm rounded-xl overflow-hidden">
              <thead className="bg-indigo-100">
                <tr>
                  <th className="px-6 py-4 border border-black/10 font-semibold">Time</th>
                  <th className="px-6 py-4 border border-black/10 font-semibold">Event</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-center">
                <tr><td className="px-6 py-4">08.00 - 09.00</td><td className="px-6 py-4">Registration & Welcome Reception</td></tr>
                <tr><td className="px-6 py-4">09.00 - 09.30</td><td className="px-6 py-4">Inaugural Ceremony</td></tr>
                <tr><td className="px-6 py-4">09.30 - 10.00</td><td className="px-6 py-4">Keynote Address 1</td></tr>
                <tr><td className="px-6 py-4">10.15 - 10.30</td><td className="px-6 py-4">Networking Tea & Interactive Session</td></tr>
                <tr><td className="px-6 py-4">10.30 - 12.30</td><td className="px-6 py-4">Technical Session 1</td></tr>
                <tr><td className="px-6 py-4">12.30 - 01.30</td><td className="px-6 py-4">Lunch & Informal Discussions</td></tr>
                <tr><td className="px-6 py-4">01.30 - 04.15</td><td className="px-6 py-4">Poster Exhibition & Interactive Presentations</td></tr>
                <tr><td className="px-6 py-4">04.15 - 04.30</td><td className="px-6 py-4">Refreshment Break</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Day 2 Schedule */}
      <div className="relative bg-white shadow-2xl rounded-3xl border-4 border-black/10 p-10 hover:shadow-3xl transition duration-500">
        <img
          src="day2.jpg"
          alt="Day 2"
          className="absolute inset-0 w-full h-full object-cover opacity-15 rounded-3xl pointer-events-none"
        />
        <div className="relative z-10 space-y-6">
          <h3 className="text-4xl font-bold text-center text-black flex justify-center items-center gap-3">
            <Calendar className="text-indigo-600 w-7 h-7" /> Day 2 Schedule
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-fixed border border-black/20 text-lg shadow-sm rounded-xl overflow-hidden">
              <thead className="bg-indigo-100">
                <tr>
                  <th className="px-6 py-4 border border-black/10 font-semibold">Time</th>
                  <th className="px-6 py-4 border border-black/10 font-semibold">Event</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-center">
                <tr><td className="px-6 py-4">09.00 - 10.00</td><td className="px-6 py-4">Keynote Address 2</td></tr>
                <tr><td className="px-6 py-4">10.00 - 12.30</td><td className="px-6 py-4">Technical Session 2</td></tr>
                <tr><td className="px-6 py-4">12.30 - 01.30</td><td className="px-6 py-4">Lunch & Collaborative Discussions</td></tr>
                <tr><td className="px-6 py-4">01.30 - 02.00</td><td className="px-6 py-4">Panel Discussion: Insights from Editors</td></tr>
                <tr><td className="px-6 py-4">02.00 - 03.30</td><td className="px-6 py-4">Technical Session 3</td></tr>
                <tr><td className="px-6 py-4">03.30 - 04.30</td><td className="px-6 py-4">Valedictory Ceremony & Closing Remarks</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
