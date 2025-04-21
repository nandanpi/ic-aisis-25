'use client';
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

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

export default function Contact() {
  return (
    <section className="bg-[#f7f7f7] font-serif text-[#1c1c1c] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-6 tracking-widest uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>

        <p className="text-center text-lg mb-12 italic text-gray-800">
          For general queries, please email us at:{" "}
          <a
            href="mailto:conference@email.com"
            className="text-black underline hover:text-gray-900"
          >
            conference@email.com
          </a>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contacts.map((person, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-black shadow-[6px_6px_0_rgba(0,0,0,0.25)] rounded-lg p-6 transition-all duration-300 hover:shadow-[10px_10px_0_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * idx }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-2">{person.name}</h3>
              <p className="text-md text-gray-800 mb-4">{person.title}</p>
              <div className="flex items-center space-x-2">
                <HiOutlineMail className="text-black w-5 h-5" />
                <a
                  href={`mailto:${person.email}`}
                  className="text-black underline hover:text-gray-900"
                >
                  {person.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stylized Google Map */}
        <div className="border-[6px] border-black rounded-2xl overflow-hidden shadow-[8px_8px_0_rgba(0,0,0,0.25)]">
          <iframe
            title="NMAMIT Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.2055402434173!2d74.93210097508864!3d13.169881887156353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcba0ed4c3583f%3A0xf6eb78d0d061fc5c!2sNMAM%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1713713871453!5m2!1sen!2sin"
            className="w-full h-[400px] grayscale contrast-125"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
