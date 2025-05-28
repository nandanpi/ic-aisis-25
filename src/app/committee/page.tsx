"use client";

import {
  Users,
  Award,
  Shield,
  Briefcase,
  GraduationCap,
  Globe,
} from "lucide-react";
import Image from "next/image";

export default function Committees() {
  const patron = {
    name: "Sri N. Vinaya Hegde",
    title:
      "Chancellor, Nitte (Deemed to be University) & President, Nitte Education Trust, Mangaluru",
    image: "/committee/vinayaHegde.jpg",
  };

  const steeringCommittee = [
    {
      name: "Sri Vishal Hegde",
      title: "Pro-Chancellor, Nitte (Deemed to be University)",
      image: "/committee/vishalHegde.jpg",
    },
    {
      name: "Prof. (Dr.) M. S. Moodithaya",
      title: "Vice-Chancellor, Nitte (Deemed to be University)",
      image: "/committee/moodithaya.jpg",
    },
    {
      name: "Prof. (Dr.) Gopal Mugeraya",
      title:
        "Vice-President (Technical Education), Nitte (Deemed to be University)",
      image: "/committee/gopalMugeraya.jpg",
    },
    {
      name: "Dr. Harsha Halahalli",
      title: "Registrar, Nitte (Deemed to be University)",
      image: "/committee/harsha.jpg",
    },
  ];

  const advisoryCommittee = [
    {
      name: "Dr. Niranjan N Chiplunkar",
      title: "Principal, NMAM Institute of Technology, Nitte",
      image: "/committee/niranjan.jpg",
    },
    {
      name: "Dr. Praveenkumar Shetty",
      title: "Director (R&D), Nitte (Deemed to be University)",
      image: "/committee/praveen.jpg",
    },
    {
      name: "Dr. Vijeesh V",
      title: "Associate Director (R&D), Nitte Off-Campus Centre",
      image: "/committee/vijeesh.jpg",
    },
  ];

  const generalChairs = [
    {
      name: "Dr. Shashank Shetty",
      title: "Associate Professor, Department of CSE, NMAMIT, Nitte",
      image: "/committee/shashankShetty.jpg",
    },
    {
      name: "Dr. Mangala Shetty",
      title: "Associate Professor, Department of MCA, NMAMIT, Nitte",
      image: "/committee/mangalaShetty.jpg",
    },
  ];

  const technicalCommittee = [
    {
      name: "Dr. Ashwin T S",
      title: "Research Scientist, Vanderbilt University, USA",
    },
    {
      name: "Dr. Rathinaraja Jeyaraj",
      title: "Post-Doctoral Fellow, Stanford University, USA",
    },
    {
      name: "Dr. Shridhar G. Domanal",
      title: "Postdoc (UK), Senior Technical Specialist, Zensar Technologies",
    },
    {
      name: "Dr. Shiva Darshan SL",
      title:
        "Department of Computer Science and Engineering, National Institute of Technology Warangal",
    },
    {
      name: "Dr Sanjay Bankapur",
      title:
        "Assistant Professor, Department of CSE, National Institute of Technology, Puducherry",
    },
    {
      name: "Dr. Prabhu Prasad B M",
      title: "Assistant Professor & Head, Dept. of CSE, IIIT Dharwad",
    },
    {
      name: "Dr. Manjunath K Vanahalli",
      title: "Assistant Professor, Dept. of CSE, IIIT, Dharwad",
    },
    {
      name: "Dr. Natesha B V",
      title:
        "Assistant Professor, Indian Institute of Information Technology Raichur",
    },
    {
      name: "Dr Shrisha H S",
      title:
        "Associate Professor, Dept of CSE, St Joseph Engineering College, Mangalore",
    },
    {
      name: "Dr. Swathi Mummadi",
      title: "Associate Professor, B V Raju Institute of Technology, Narsapur",
    },
    {
      name: "Dr Karthik N",
      title:
        "Assistant Professor, Department of CSE, National Institute of Technology, Puducherry",
    },
    {
      name: "Dr. Ranjit Kolkar",
      title: "Assistant Professor, National Forensic Sciences University, Goa",
    },
    {
      name: "Dr. Sanket Salvi",
      title:
        "Postdoctoral Researcher, Center of Decision Support Systems and Informatics, School of Global Health Management and Informatics, University of Central Florida",
    },
    {
      name: "Dr. Dinesh Naik",
      title:
        "Assistant Professor, Department of Information Technology, NITK, Surathkal",
    },
    {
      name: "Dr. Rashmi M.",
      title:
        "Assistant Professor, Department of Data Science and Computer Applications MIT, Manipal",
    },
    {
      name: "Dr. Elakkiya Rajasekar",
      title:
        "Assistant Professor, Department of Computer Science, BITS Pilani, Dubai",
    },
    {
      name: "Dr. Anand R",
      title: "Professor, Department of MCA, SJEC, Mangalore",
    },
    {
      name: "Dr. Rohini, R Rao",
      title:
        "Associate Professor, Department of Data Science and Computer Applications, MIT, Manipal",
    },
    {
      name: "Dr. Savitha G",
      title:
        "Department of Data Science and Computer Applications, MIT, Manipal",
    },
    {
      name: "Dr. Sunil C K",
      title: "Assistant Professor, Department of CSE, IIIT, Dharwad",
    },
    {
      name: "Dr. Murthy D H R",
      title:
        "Associate Professor, Department of CSE, R. L. Jalappa Institute of Technology, Doddaballapur",
    },
    {
      name: "Ms. Priyanka H L",
      title:
        "Assistant Professor, Department Information Science and Engineering, Malnad College of Engineering, Hassan",
    },
    {
      name: "Mr. Shreekant Jere",
      title:
        "Associate Manager, AI Labs, Accenture Solutions Pvt Ltd, Bangalore",
    },
  ];

  const studentOrganizers = [
    {
      name: "Mr. Nandan R Pai",
      title: "Department of AIML",
      image: "/committee/students/nandan.jpeg",
    },
    {
      name: "Mr. Aarthik K",
      title: "Department of MCA",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Mr. Maneesh Kumar",
      title: "Department of MCA",
      image: "/placeholder.svg?height=120&width=120",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-16 overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center px-5">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium mb-8 border border-white/20">
              <Users className="w-4 h-4 mr-2" />
              Leadership & Organization
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Conference <span className="text-blue-200">Committees</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Meet the distinguished leaders, experts, and organizers who are
              making IC-AISIS 2025 a world-class conference on AI and
              sustainability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Patron
            </h2>
            <p className="text-xl text-gray-600">
              Guiding vision and leadership for the conference
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
            <div className="flex flex-col items-center text-center">
              <Image
                width={100}
                height={100}
                src={patron.image || "/placeholder.svg"}
                alt={patron.name}
                className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {patron.name}
              </h3>
              <p className="text-purple-700 font-medium leading-relaxed max-w-2xl">
                {patron.title}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Steering Committee
            </h2>
            <p className="text-xl text-gray-600">
              Strategic oversight and governance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steeringCommittee.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow text-center"
              >
                <Image
                  width={100}
                  height={100}
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-36 h-36 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Advisory Committee
            </h2>
            <p className="text-xl text-gray-600">
              Expert guidance and strategic direction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisoryCommittee.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow text-center"
              >
                <Image
                  width={100}
                  height={100}
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-36 h-36 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              General Chairs
            </h2>
            <p className="text-xl text-gray-600">
              Conference leadership and coordination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {generalChairs.map((chair, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow text-center"
              >
                <Image
                  width={100}
                  height={100}
                  src={chair.image || "/placeholder.svg"}
                  alt={chair.name}
                  className="w-36 h-36 rounded-full object-cover mx-auto mb-6 border-4 border-gray-100"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {chair.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">{chair.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Technical Committee
            </h2>
            <p className="text-xl text-gray-600">
              Expert reviewers and technical program oversight
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalCommittee.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                >
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Student Organizing Committee
            </h2>
            <p className="text-xl text-gray-600">
              Student leadership and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentOrganizers.map((student, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow text-center"
              >
                <Image
                  width={100}
                  height={100}
                  src={student.image || "/placeholder.svg"}
                  alt={student.name}
                  className="w-36 h-36 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {student.name}
                </h3>
                <p className="text-indigo-600 font-medium">{student.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
