"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  interface NavLinkItem {
    href: string;
    label: string;
    tabId?: string;
  }

  interface NavItemBase {
    label: string;
  }

  interface NavItemWithHref extends NavItemBase {
    href: string;
    dropdown?: undefined;
  }

  interface NavItemWithDropdown extends NavItemBase {
    dropdown: NavLinkItem[];
    href?: undefined;
  }

  type NavItem = NavItemWithHref | NavItemWithDropdown;

  const navLinks: NavItem[] = [
    { href: "/", label: "Home" },
    {
      label: "About",
      dropdown: [
        { href: "/about?tab=scope", label: "Conference Scope", tabId: "scope" },
        {
          href: "/about?tab=objectives",
          label: "Objectives",
          tabId: "objectives",
        },
        { href: "/about?tab=theme", label: "Theme Importance", tabId: "theme" },
        {
          href: "/about?tab=institutions",
          label: "Organizing Institutions",
          tabId: "institutions",
        },
      ],
    },
    {
      label: "Committees",
      dropdown: [
        {
          href: "/committee?tab=leadership",
          label: "Leadership & Advisory",
          tabId: "leadership",
        },
        {
          href: "/committee?tab=chairs",
          label: "Chairs & Executive",
          tabId: "chairs",
        },
        {
          href: "/committee?tab=technical",
          label: "Technical Committee",
          tabId: "technical",
        },
        {
          href: "/committee?tab=students",
          label: "Student Organisers",
          tabId: "students",
        },
      ],
    },
    { href: "/topics", label: "Topics" },
    { href: "/schedule", label: "Schedule" },
    {
      label: "Call for Papers",
      dropdown: [
        { href: "/submission-guidelines", label: "Submission Guidelines" },
      ],
    },
    { href: "/fee", label: "Registration Fee" },
    { href: "/contact", label: "Contact" },
  ];

  const isAboutTabActive = (tabId?: string) => {
    if (pathname !== "/about") return false;
    const currentTab = searchParams.get("tab") || "scope";
    return tabId ? currentTab === tabId : false;
  };

  const isCommitteesTabActive = (tabId?: string) => {
    if (pathname !== "/committees") return false;
    const currentTab = searchParams.get("tab") || "leadership";
    return currentTab === tabId;
  };

  const isAnyAboutTabActive = () => {
    return pathname === "/about";
  };

  const isAnyCommitteesTabActive = () => {
    return pathname === "/committees";
  };

  const isPageActive = (href: string) => {
    return pathname === href;
  };

  const isCallForPapersActive = (dropdown: NavLinkItem[]) => {
    return dropdown.some((item) => pathname === item.href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "glass-effect shadow-lg" : "shadow-none"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <Link href="/" className="flex items-center md:gap-2 gap-1">
          <Image
            src="/nitteLogo.png"
            alt="Nitte Logo"
            width={200}
            height={100}
            className="md:w-56 w-40 h-6 md:h-8"
          />
          <div className="flex items-center border-l-2 md:ml-2 md:pl-4 ml-1 pl-2">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-2">
          {navLinks.map((link, index) =>
            "dropdown" in link ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(link.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button
                  className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-all duration-200 ${
                    (link.label === "About" && isAnyAboutTabActive()) ||
                    (link.label === "Committees" &&
                      isAnyCommitteesTabActive()) ||
                    (link.label === "Call for Papers" &&
                      isCallForPapersActive(link.dropdown ?? []))
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="font-medium">{link.label}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                    dropdownOpen === link.label
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  {"dropdown" in link &&
                    link.dropdown?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-3 text-sm transition-colors ${
                          link.label === "About"
                            ? isAboutTabActive(item.tabId)
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                            : link.label === "Committees"
                              ? isCommitteesTabActive(item.tabId)
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                              : isPageActive(item.href)
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                </div>
              </div>
            ) : (
              <Link
                key={"href" in link ? link.href : index.toString()}
                href={"href" in link ? link.href : "#"}
                className={`py-2 px-3 rounded-lg font-medium transition-all duration-200 ${
                  "href" in link && isPageActive(link.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        <button
          className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="xl:hidden py-4 border-t border-gray-100">
          <div className="space-y-2">
            {navLinks.map((link, index) =>
              "dropdown" in link ? (
                <div key={index}>
                  <button
                    className={`w-full text-left py-3 px-4 font-medium rounded-lg transition-colors ${
                      (link.label === "About" && isAnyAboutTabActive()) ||
                      (link.label === "Committees" &&
                        isAnyCommitteesTabActive()) ||
                      (link.label === "Call for Papers" &&
                        "dropdown" in link &&
                        isCallForPapersActive(link.dropdown || []))
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setDropdownOpen(
                        dropdownOpen === link.label ? null : link.label,
                      );
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${dropdownOpen === link.label ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>
                  {dropdownOpen === link.label && "dropdown" in link && (
                    <div className="ml-4 space-y-1 mt-2">
                      {link.dropdown?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block py-2 px-4 text-sm rounded-lg transition-colors ${
                            link.label === "About"
                              ? isAboutTabActive(item.tabId)
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                              : link.label === "Committees"
                                ? isCommitteesTabActive(item.tabId)
                                  ? "text-blue-600 bg-blue-50"
                                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                                : isPageActive(item.href)
                                  ? "text-blue-600 bg-blue-50"
                                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                          }`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={"href" in link ? link.href : index.toString()}
                  href={"href" in link ? link.href : "#"}
                  className={`block py-3 px-4 font-medium rounded-lg transition-colors ${
                    "href" in link && isPageActive(link.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
