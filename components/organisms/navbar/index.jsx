import Logo from '@/components/atoms/logo';
import React from 'react';
import Auth from './auth';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-ternary shadow-md sticky left-0 top-0 w-full flex items-center z-10">
      <div className="container mx-auto py-4 px-2 md:w-full lg:max-w-5xl lg:py-6 lg:px-4 lg:max-h-24">
        <div className="relative flex justify-between items-center">
          <div className="py-0.5 sm:py-1 md:py-0">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <Auth />
        </div>
      </div>
    </nav>
  );
}
