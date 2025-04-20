export default function Register() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Registration Categories & Fees</h2>
      <p className="text-center text-gray-600 mb-6 italic">*Approximate Registration Fees (Tentative)*</p>

      {/* Table for large screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-black text-white">
            <tr>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Early Bird (₹)</th>
              <th className="px-6 py-3 text-left">Regular (₹)</th>
              <th className="px-6 py-3 text-left">Late/On-Spot (₹)</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-800">
            {[
              ["UG/PG Students", "1,500 – 2,000", "2,000 – 2,500", "2,500 – 3,000"],
              ["Research Scholars", "2,000 – 3,000", "3,000 – 3,500", "3,500 – 4,000"],
              ["Academicians", "3,000 – 4,000", "4,000 – 5,000", "5,000 – 6,000"],
              ["Industry Professionals", "5,000 – 6,000", "6,000 – 7,000", "7,000 – 8,000"],
              ["International Participants (USD)", "100 – 120", "120 – 150", "150 – 180"],
            ].map((row, idx) => (
              <tr key={idx} className="border-t">
                {row.map((col, i) => (
                  <td key={i} className="px-6 py-4">{col}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for small screens */}
      <div className="block md:hidden space-y-6">
        {[
          {
            category: "UG/PG Students",
            early: "1,500 – 2,000",
            regular: "2,000 – 2,500",
            late: "2,500 – 3,000"
          },
          {
            category: "Research Scholars",
            early: "2,000 – 3,000",
            regular: "3,000 – 3,500",
            late: "3,500 – 4,000"
          },
          {
            category: "Academicians",
            early: "3,000 – 4,000",
            regular: "4,000 – 5,000",
            late: "5,000 – 6,000"
          },
          {
            category: "Industry Professionals",
            early: "5,000 – 6,000",
            regular: "6,000 – 7,000",
            late: "7,000 – 8,000"
          },
          {
            category: "International Participants (USD)",
            early: "100 – 120",
            regular: "120 – 150",
            late: "150 – 180"
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-2">{item.category}</h3>
            <p className="text-gray-700"><strong>Early Bird:</strong> {item.early}</p>
            <p className="text-gray-700"><strong>Regular:</strong> {item.regular}</p>
            <p className="text-gray-700"><strong>Late/On-Spot:</strong> {item.late}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-gray-700 text-lg">Registration form will be available soon.</p>
    </div>
  );
}
