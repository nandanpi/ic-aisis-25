"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import {
  Users,
  Award,
  Shield,
  Briefcase,
  GraduationCap,
  Globe,
  Crown,
  UserCheck,
} from "lucide-react";

import Image from "next/image";
import TabInterface from "@/components/TabInterface";

export default function Committees() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("leadership");

  useEffect(() => {
    const tab = searchParams.get("tab") || "leadership";
    setActiveTab(tab);
  }, [searchParams]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/committee?tab=${tabId}`);
  };
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
      name: "Dr. Praveenkumar Shetty",
      title: "Director (R&D), Nitte (Deemed to be University)",
      image: "/committee/praveen.jpg",
    },
    {
      name: "Dr. Sudesh Bekal",
      title: "Professor & Dean, Research & Development",
      image: "https://nitte.edu.in/admin/photo/3/faculty/9/254.jpg",
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

  const executiveCommittee = [
    {
      name: "Dr. Niranjan N Chiplunkar",
      title: "Principal, NMAM Institute of Technology, Nitte",
      image: "/committee/niranjan.jpg",
    },
    {
      name: "Dr. Nagesh Prabhu",
      title: "Vice Principal",
      image: "https://nitte.edu.in/admin/photo/3/faculty/6/2231.jpg",
    },
    {
      name: "Sri. Yogeesh Hegde",
      title: "Director (CM & D)",
      image: "",
    },
    {
      name: "Dr. Rekha Bhandarkar",
      title:
        "Professor & Deputy Registrar of Nitte Off Campus Centre, Nitte(Deemed to be University)",
      image: "https://nitte.edu.in/admin/photo/3/faculty/7/2189.jpg",
    },
    {
      name: "Dr. K Rajesh Shetty",
      title:
        "Director(Curriculum Development) at Nitte(Deemed to be University)",
      image: "https://nitte.edu.in/admin/photo/3/faculty/7/118.jpg",
    },
    {
      name: "Dr. A N Parameswaran",
      title: "Director, Institute Industry Collaboration & Coordinator",
      image: "https://nitte.edu.in/admin/photo/3/faculty/4/26.jpg",
    },
    {
      name: "Dr. Subrahmanya Bhat K",
      title:
        "Professor & CoE of Nitte off Campus Centre,Nitte(Deemed to be University)",
      image: "https://nitte.edu.in/admin/photo/3/faculty/9/253.jpg",
    },
    {
      name: "Dr. Srinath Shetty K",
      title: "Professor & Resident Engineer",
      image: "https://nitte.edu.in/admin/photo/3/faculty/4/27.jpg",
    },
    {
      name: "Dr. Venugopala P S",
      title: "HOD, Dept. of Artificial Intelligence & Data Science Engineering",
      image: "https://nitte.edu.in/admin/photo/3/faculty/176/2658.jpg",
    },
    {
      name: "Dr. Sharada U Shenoy",
      title:
        "HOD, Dept. of Artificial Intelligence & Machine Learning Engineering",
      image: "https://nitte.edu.in/admin/photo/3/faculty/166/2196.jpg",
    },
    {
      name: "Dr. Ujwal P",
      title: "HOD, Dept. of Biotechnology Engineering",
      image: "https://nitte.edu.in/admin/photo/3/faculty/3/4.jpg",
    },
    {
      name: "Dr. Arun Kumar Bhat",
      title: "HOD, Dept. of Civil Engineering",
      image: "https://nitte.edu.in/admin/photo/3/faculty/4/24.jpg",
    },
    {
      name: "Dr. Radhakrishna",
      title: "HOD, Dept. of Computer & Communication Engineering",
      image: "https://nitte.edu.in/admin/photo/3/faculty/167/3024.jpg",
    },
    {
      name: "Dr. Jyothi Shetty",
      title: "HOD, Dept. of Computer Science Engineering",
      image: "https://nitte.edu.in/admin/photo/3/faculty/5/56.jpg",
    },
    {
      name: "Dr. Roshan Fernandes",
      title: "HOD, Dept. of Computer Science Engineering (Cyber Security)",
      image: "https://nitte.edu.in/admin/photo/3/faculty/179/2842.jpg",
    },
    {
      name: "Dr. Suryanarayana K",
      title: "HOD, Dept. of Electrical & Electronics Engineering",
      image: "https://nitte.edu.in/admin/photo/3/faculty/6/99.jpg",
    },
    {
      name: "Dr. K V S S S S Sairam",
      title: "HOD, Dept. of Electronics & Communication Engineering",
      image: "https://nitte.edu.in/admin/photo/3/faculty/7/119.jpg",
    },
    {
      name: "Dr. Ashwini B",
      title: "HOD, Dept. of Information Science Engineering",
      image: "https://nitte.edu.in/admin/photo/3/faculty/8/186.jpg",
    },
    {
      name: "Dr. Srinivasa Pai P",
      title: "HOD, Dept. of Mechanical Engineering",
      image: "https://nitte.edu.in/admin/photo/3/faculty/9/256.jpg",
    },
    {
      name: "Dr. Muralidhara",
      title: "HOD, Dept. of Robotics & Artificial Intelligence Engineering",
      image: "https://nitte.edu.in/admin/photo/3/faculty/168/2225.jpg",
    },
    {
      name: "Dr. Mamatha Balipa",
      title: "HOD, Dept. of MCA",
      image: "https://nitte.edu.in/admin/photo/3/faculty/10/236.jpg",
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

  const tabs = [
    {
      id: "leadership",
      label: "Leadership & Executive",
      icon: <Crown className="w-4 h-4" />,
      content: (
        <div className="space-y-16">
          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Patron
              </h3>
              <p className="text-gray-600">
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
                  className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
                />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {patron.name}
                </h4>
                <p className="text-purple-700 font-medium leading-relaxed max-w-2xl">
                  {patron.title}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Steering Committee
              </h3>
              <p className="text-gray-600">
                Strategic oversight and governance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
                  />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Executive Committee
              </h3>
              <p className="text-gray-600">
                Program execution and operational oversight
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {executiveCommittee.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow text-center"
                >
                  <Image
                    width={100}
                    height={100}
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
                  />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
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
      ),
    },
    {
      id: "chairs",
      label: "Advisory & Chairs",
      icon: <UserCheck className="w-4 h-4" />,
      content: (
        <div className="space-y-16">
          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Advisory Committee
              </h3>
              <p className="text-gray-600">
                Expert guidance and strategic direction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
                  />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {member.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                General Chairs
              </h3>
              <p className="text-gray-600">
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
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-gray-100"
                  />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {chair.name}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{chair.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "technical",
      label: "Technical Committee",
      icon: <Globe className="w-4 h-4" />,
      content: (
        <div>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
              Technical Committee
            </h3>
            <p className="text-gray-600">
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
      ),
    },
    {
      id: "students",
      label: "Student Organisers",
      icon: <GraduationCap className="w-4 h-4" />,
      content: (
        <div>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
              Student Organizing Committee
            </h3>
            <p className="text-gray-600">Student leadership and support</p>
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
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
                />
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {student.name}
                </h4>
                <p className="text-indigo-600 font-medium">{student.title}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <Suspense>
      <div className="min-h-screen pt-16">
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <TabInterface
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
          </div>
        </section>
      </div>
    </Suspense>
  );
}
