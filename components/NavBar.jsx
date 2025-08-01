'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'SERVICES', href: '/services' },
    { label: 'CONTACT US', href: '/contact' },
    { label: 'CAREGIVERS', href: '/caregiver' },
  ];

  function HamburgerToggle({ isOpen, toggle }) {
    return (
      <button
        onClick={toggle}
        className="flex flex-col justify-between w-6 h-6 focus:outline-none z-50"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-full bg-[#083b66] rounded origin-left"
          transition={{ duration: 0.3 }}
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block h-0.5 w-full bg-[#083b66] rounded"
          transition={{ duration: 0.3 }}
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-full bg-[#083b66] rounded origin-left"
          transition={{ duration: 0.3 }}
        />
      </button>
    );
  }

  return (
    <header
      className="bg-white fixed top-10 w-full z-50 shadow-sm"
      role="banner"
      style={{ fontFamily: 'var(--font-sf-pro)' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center" role="navigation" aria-label="Main navigation">
        {/* Logo + Brand Name */}
        <div className="flex items-center space-x-2">
          <Link href="/" aria-label="SRP Homecare homepage" className="flex-shrink-0">
            <Image
              src="/loogo.jfif"
              alt="SRP Homecare Logo"
              width={150}
              height={80}
              className="h-10 w-auto"
            />
          </Link>
          <span className="hidden sm:inline-block text-[#083b66] font-semibold text-lg">
            Peaceful At Home
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#083b66] font-medium hover:text-blue-600 hover:underline underline-offset-4 transition-all duration-200 ease-in-out"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <div className="lg:hidden">
          <HamburgerToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-md px-4 py-6 flex flex-col items-center space-y-4 z-40"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#083b66] font-medium text-lg w-full text-center hover:text-blue-600 hover:underline underline-offset-4 transition-all duration-200"
                onClick={() => setIsOpen(false)}
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
