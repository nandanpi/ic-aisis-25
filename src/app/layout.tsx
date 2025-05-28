import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title:
    "IC-AISIS 2025 | International Conference on AI and Smart Information Systems",
  description:
    "Join us for the International Conference on Artificial Intelligence for Sustainability and Intelligent Systems at NMAM Institute of Technology, Nitte.",
  keywords:
    "AI, Artificial Intelligence, Sustainability, Conference, NMAMIT, Research",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
