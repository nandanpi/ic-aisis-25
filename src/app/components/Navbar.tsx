'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // Track which dropdown is open on mobile
  const [hovered, setHovered] = useState<string | null>(null); // Track which menu item is being hovered
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    {
      label: 'About',
      dropdown: [
        { href: '/about', label: 'About' },
        { href: '/objectives', label: 'Objectives' },
      ],
    },
    { href: '/topics', label: 'Topics' },
    { href: '/schedule', label: 'Schedule' },
    {
      label: 'Call for Papers',
      dropdown: [
        { href: '/submission-guidelines', label: 'Submission Guidelines' },
        { href: '/expected-outcomes', label: 'Expected Outcomes' },
      ],
    },
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

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-serif text-lg text-black relative">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHovered(link.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <button
                  className={`hover:underline underline-offset-4 decoration-[1px] transition-all duration-200 ${
                    link.dropdown.some((d) => pathname === d.href) ? 'font-bold' : ''
                  }`}
                >
                  {link.label}
                </button>
                {/* Dropdown */}
                <div
                  className={`absolute left-0 top-full mt-2 bg-white shadow-md rounded-md w-52 py-2 z-40 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto ${
                    hovered === link.label ? 'opacity-100 pointer-events-auto' : ''
                  }`}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 hover:bg-gray-100 text-black ${
                        pathname === item.href ? 'font-bold' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:underline underline-offset-4 decoration-[1px] transition-all duration-200 ${
                  pathname === link.href ? 'font-bold' : ''
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 border-t border-gray-300 bg-[#fdfdfd] space-y-4 font-serif text-black">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <div key={index} className="space-y-2">
                <button
                  className="font-semibold w-full text-left"
                  onClick={() => {
                    setDropdownOpen(dropdownOpen === link.label ? null : link.label);
                  }}
                >
                  {link.label}
                </button>
                {/* Dropdown items for mobile */}
                {dropdownOpen === link.label && (
                  <div className="ml-4 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block py-1 ${
                          pathname === item.href ? 'font-bold' : ''
                        }`}
                        onClick={() => setMenuOpen(false)} // Close the menu on item click
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 ${
                  pathname === link.href ? 'font-bold' : ''
                }`}
                onClick={() => setMenuOpen(false)} // Close the menu on item click
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
