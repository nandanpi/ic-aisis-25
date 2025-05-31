"use client";

import dynamic from "next/dynamic";

const SubGuidelinesClient = dynamic(
  () => import("@/components/SubGuidelinesClient"),
  {
    ssr: false,
  }
);

export default function ClientWrapper() {
  return <SubGuidelinesClient />;
}
