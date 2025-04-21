'use client';
import { motion } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { HiOutlineMail } from "react-icons/hi";

const contacts = [
  {
    name: "Dr. Mangala Shetty",
    title: "Associate Professor, Dept. of MCA, NMAMIT, Nitte",
    email: "mangala.shetty@nitte.edu.in"
  },
  {
    name: "Dr. Shashank Shetty",
    title: "Assistant Professor GD-III, Dept. of CSE, NMAMIT, Nitte",
    email: "shashank.shetty@nitte.edu.in"
  }
];

function GlowingSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial color="skyblue" emissive="blue" metalness={0.4} roughness={0.2} />
    </mesh>
  );
}

export default function Contact() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-20 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-xl">
      
      {/* 3D Element Background */}
      <div className="absolute top-0 right-0 w-full h-96 z-0 opacity-40 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <GlowingSphere />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>

      {/* Title Section */}
      <motion.h2
        className="text-5xl font-extrabold text-center text-gray-900 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-center text-gray-600 text-lg mb-20 mt-6 font-medium relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        For general queries, please email us at:{" "}
        <span className="text-blue-700 font-semibold underline hover:text-blue-800 cursor-pointer">
          conference@email.com
        </span>
      </motion.p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {contacts.map((person, idx) => (
          <motion.div
            key={idx}
            className="bg-white/80 backdrop-blur-md border border-blue-100 rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * idx }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{person.name}</h3>
            <p className="text-gray-700 mb-4">{person.title}</p>
            <div className="flex items-center space-x-2">
              <HiOutlineMail className="text-blue-600 w-5 h-5" />
              <a
                href={`mailto:${person.email}`}
                className="text-blue-700 font-medium hover:text-blue-900 transition duration-300"
              >
                {person.email}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Google Map Section */}
      <motion.div
        className="mt-20 bg-white/80 border border-blue-100 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          className="w-full h-[400px] md:h-[500px] rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.2055402434173!2d74.93210097508864!3d13.169881887156353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcba0ed4c3583f%3A0xf6eb78d0d061fc5c!2sNMAM%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1713713871453!5m2!1sen!2sin"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
}
