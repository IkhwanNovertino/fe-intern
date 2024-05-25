import Logo from '@/components/atoms/logo';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-ternary shadow-md sticky left-0 top-0 w-full flex items-center z-10">
      <div className="container mx-auto py-4 px-2 md:w-full lg:max-w-5xl lg:py-6 lg:px-4">
        <div className="relative flex justify-between">
          <div className="py-0.5 sm:py-1 md:py-0">
            <Logo />
          </div>
          <div>
            <Link
              href="/sign-in"
              className="px-3 py-0.5 sm:py-4 text-base sm:text-lg font-medium  text-dark hover:text-light hover:tracking-wide hover:font-semibold hover:transition hover:duration-700 hover:ease-in"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
