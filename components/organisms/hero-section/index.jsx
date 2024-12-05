import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '@/public/img/hero-image.png';

export default function HeroSection() {
  return (
    <div className="bg-white w-full flex items-center">
      <div className="container mx-auto mt-4 py-4 px-2 md:w-full lg:max-w-5xl lg:py-16 lg:px-2">
        <div className="relative flex flex-col lg:flex-row justify-around items-center">
          <div className="py-12 px-2 flex flex-col">
            <div className="mb-8">
              <h1 className="text-dark text-2xl sm:text-4xl/relaxed font-semibold text-center">Belajar. Bekerja</h1>
              <h1 className="text-dark text-2xl sm:text-4xl/relaxed font-semibold text-center">Magang di Diskominfo</h1>
              <h1 className="text-dark text-2xl sm:text-4xl/relaxed font-semibold text-center">Kota Banjarbaru</h1>
            </div>
            <div className="flex flex-col md:flex-row">
              <button
                type="button"
                className="px-6 py-4 mb-2 md:me-2 bg-primary rounded-xl text-base font-semibold text-white tracking-wide hover:bg-primary/70"
              >
                <Link
                  href="/vacancy/mandiri"
                >
                  Daftar Magang
                </Link>
              </button>
              <button
                type="button"
                className="px-6 py-4 mb-2 md:ms-2 border-2 border-dark rounded-xl text-base font-semibold text-dark tracking-wide hover:border-dark/70 hover:text-dark/70"
              >
                <Link
                  href="/vacancy"
                >
                  Lihat Daftar Lowongan
                </Link>
              </button>
            </div>
          </div>
          <div className="py-12 px-2">
            <div>
              <Image
                src={HeroImage}
                width={500}
                height="auto"
                alt="header-image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
