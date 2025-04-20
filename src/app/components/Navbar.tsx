'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/topics', label: 'Topics' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/call-for-papers', label: 'Call for Papers' },
    { href: '/organizers', label: 'Organizers' },
    { href: '/register', label: 'Register' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-[#fdfdfd] border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-serif tracking-widest text-black uppercase">
            IC-AISIS-25
          </h1>
        </Link>

        <div className="hidden md:flex space-x-6 font-serif text-lg text-black">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:underline underline-offset-4 decoration-[1px] transition-all duration-200 ${
                pathname === link.href ? 'font-bold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 py-4 border-t border-gray-300 bg-[#fdfdfd] space-y-2 font-serif">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-black py-2 hover:underline ${
                pathname === link.href ? 'font-bold' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
