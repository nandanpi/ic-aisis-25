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
import {
  advisoryCommittee,
  executiveCommittee,
  generalChairs,
  patron,
  steeringCommittee,
  studentOrganizers,
  technicalCommittee,
} from "@/lib/commiitee";

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
