export default function Register() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Registration Categories & Fees</h2>
      
      <p className="text-center text-gray-600 mb-8">*Approximate Registration Fees (Tentative)*</p>

      <div className="overflow-x-auto">
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
            <tr className="border-t">
              <td className="px-6 py-4">UG/PG Students</td>
              <td className="px-6 py-4">1,500 – 2,000</td>
              <td className="px-6 py-4">2,000 – 2,500</td>
              <td className="px-6 py-4">2,500 – 3,000</td>
            </tr>
            <tr className="border-t">
              <td className="px-6 py-4">Research Scholars</td>
              <td className="px-6 py-4">2,000 – 3,000</td>
              <td className="px-6 py-4">3,000 – 3,500</td>
              <td className="px-6 py-4">3,500 – 4,000</td>
            </tr>
            <tr className="border-t">
              <td className="px-6 py-4">Academicians</td>
              <td className="px-6 py-4">3,000 – 4,000</td>
              <td className="px-6 py-4">4,000 – 5,000</td>
              <td className="px-6 py-4">5,000 – 6,000</td>
            </tr>
            <tr className="border-t">
              <td className="px-6 py-4">Industry Professionals</td>
              <td className="px-6 py-4">5,000 – 6,000</td>
              <td className="px-6 py-4">6,000 – 7,000</td>
              <td className="px-6 py-4">7,000 – 8,000</td>
            </tr>
            <tr className="border-t">
              <td className="px-6 py-4">International Participants (USD)</td>
              <td className="px-6 py-4">100 – 120</td>
              <td className="px-6 py-4">120 – 150</td>
              <td className="px-6 py-4">150 – 180</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-center text-gray-700 text-lg">Registration form will be available soon.</p>
    </div>
  );
}
