// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'IC-AISIS 2026',
  description: 'International Conference on AI and Smart Information Systems',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-serif bg-[#fdfdfd] text-black antialiased">
        <Navbar />
        <main className="min-h-screen px-6 md:px-20 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
