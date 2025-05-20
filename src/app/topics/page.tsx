import React from 'react';

export default function Topics() {
  return (
    <div className="bg-gradient-to-b from-white-100 to-blue-50 text-gray-800 min-h-screen p-6">
      <h2 className="text-4xl font-serif font-semibold text-center mb-8 text-gray-900 drop-shadow-md animate-fade-in">
        Key Themes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* AI for Environmental and Sustainable Development */}
        <div className="relative group border border-gray-200 p-6 rounded-xl shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-green-700">AI for Environmental and Sustainable Development</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li className="hover:text-green-500 transition-colors">AI-driven climate change mitigation and adaptation</li>
              <li className="hover:text-green-500 transition-colors">AI in smart energy management and renewable energy optimization</li>
              <li className="hover:text-green-500 transition-colors">AI for sustainable agriculture, biodiversity conservation, and ecosystem monitoring</li>
              <li className="hover:text-green-500 transition-colors">AI-powered water resource management and waste reduction</li>
            </ul>
          </div>
        </div>

        {/* AI in Healthcare and Well-being */}
        <div className="relative group border border-gray-200 p-6 rounded-xl shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">AI in Healthcare and Well-being</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li className="hover:text-blue-500 transition-colors">AI-powered predictive analytics in disease prevention</li>
              <li className="hover:text-blue-500 transition-colors">AI for sustainable healthcare systems and medical resource optimization</li>
              <li className="hover:text-blue-500 transition-colors">AI in medical imaging, diagnostics, and remote patient monitoring</li>
              <li className="hover:text-blue-500 transition-colors">Ethical AI in health data management and decision-making</li>
            </ul>
          </div>
        </div>

        {/* AI for Ethical and Responsible Innovation */}
        <div className="relative group border border-gray-200 p-6 rounded-xl shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-purple-700">AI for Ethical and Responsible Innovation</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li className="hover:text-purple-500 transition-colors">AI governance, ethics, and policy frameworks for sustainability</li>
              <li className="hover:text-purple-500 transition-colors">AI for social good, humanitarian applications, and inclusive technology</li>
              <li className="hover:text-purple-500 transition-colors">Bias, fairness, and transparency in AI-driven decision-making</li>
            </ul>
          </div>
        </div>

        {/* AI for Smart Cities and Infrastructure */}
        <div className="relative group border border-gray-200 p-6 rounded-xl shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-teal-700">AI for Smart Cities and Infrastructure</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li className="hover:text-teal-500 transition-colors">AI-driven urban planning and sustainable city management</li>
              <li className="hover:text-teal-500 transition-colors">AI for disaster prediction, response, and resilience</li>
              <li className="hover:text-teal-500 transition-colors">AI-powered green construction, smart buildings, and energy-efficient architecture</li>
              <li className="hover:text-teal-500 transition-colors">AI-driven sustainable transportation, logistics, and mobility</li>
            </ul>
          </div>
        </div>

        {/* AI in Advanced Manufacturing and Industrial Sustainability */}
        <div className="relative group border border-gray-200 p-6 rounded-xl shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-700">AI in Advanced Manufacturing and Industrial Sustainability</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li className="hover:text-gray-500 transition-colors">AI for smart factories, energy-efficient production, and predictive maintenance</li>
              <li className="hover:text-gray-500 transition-colors">AI in sustainable material science and eco-friendly product design</li>
              <li className="hover:text-gray-500 transition-colors">AI-driven automation for green manufacturing and waste reduction</li>
            </ul>
          </div>
        </div>

        {/* AI & Emerging Technologies for a Sustainable Future */}
        <div className="relative group border border-gray-200 p-6 rounded-xl shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">AI & Emerging Technologies for a Sustainable Future</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li className="hover:text-indigo-500 transition-colors">AI in quantum computing for sustainability solutions</li>
              <li className="hover:text-indigo-500 transition-colors">AI-driven IoT and edge computing for energy efficiency</li>
              <li className="hover:text-indigo-500 transition-colors">AI-powered blockchain for transparent and sustainable practices</li>
              <li className="hover:text-indigo-500 transition-colors">AI for next-generation communication networks and 6G</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
