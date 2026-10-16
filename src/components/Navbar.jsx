import React, { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on Escape, and never leave the menu open once we're back at desktop
  // width (where the panel is hidden but would still be locking body scroll).
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  // Stop the page scrolling behind the open panel.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center gap-4">
        {/* Logo */}
        <a
          href="#hero"
          className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 no-underline whitespace-nowrap"
        >
          MY PORTFOLIO
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 font-medium text-gray-700">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-yellow-500">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden -mr-2 p-2 text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <nav
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-gray-100 bg-white transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-2 font-medium text-gray-700 list-none m-0">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 border-b border-gray-50 last:border-b-0 hover:text-yellow-500 no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
