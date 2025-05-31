import { Award, Shield } from "lucide-react";
import ClientWrapper from "@/components/ClientWrapper";

export default function SubmissionGuidelines() {
  return (
    <main>
      <div className="min-h-screen pt-16">
        <ClientWrapper />
        <section className="py-12 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Acknowledgement
                  </h3>
                  <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
                </div>
              </div>

              {/* <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <p className="text-gray-800 leading-relaxed text-sm">
                The Microsoft CMT service was used for managing the
                peer-reviewing process for this conference. This service was
                provided for free by Microsoft and they bore all expenses,
                including costs for Azure cloud services as well as for software
                development and support.
              </p>
            </div> */}
              <p>
                <span>
                  The Microsoft CMT service was used for managing the
                  peer-reviewing process for this conference. This service was
                  provided for free by Microsoft and they bore all expenses,
                  including costs for Azure cloud services as well as for
                  software development and support.
                </span>
              </p>

              <div className="mt-4 flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-2" />
                <span>
                  Powered by Microsoft Conference Management Toolkit (CMT)
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
