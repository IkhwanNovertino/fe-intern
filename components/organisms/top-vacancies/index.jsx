import React from 'react';
import Link from 'next/link';
import CardVacancy from '@/components/molecules/card-vacancy';

export default function TopVacancies() {

  const dataVacancies = [
    {
      'id': 'vacant1',
      'position': 'desain grafis',
      'create_date': new Date(1709424000),
      'duration': '2 bulan',
      'start_internship': new Date(1717372800)
    },
    {
      'id': 'vacant2',
      'position': 'programmer',
      'create_date': new Date(1709424000),
      'duration': '2 bulan',
      'start_internship': new Date(1717372800)
    },
    { 
      'id': 'vacant3',
      'position': 'statistik',
      'create_date': new Date(1709424000),
      'duration': '2 bulan',
      'start_internship': new Date(1717372800)
    },
  ]

  return (
    <div className="bg-white w-full flex items-center">
      <div className="container mx-auto mt-4 py-4 px-2 md:w-full lg:max-w-5xl lg:py-16 lg:px-2">
        <div className="relative flex flex-col justify-center items-center">
          <div className="py-4 px-2 mb-12 text-center">
            <header>
              <h4 className="text-primary text-base sm:text-xl font-semibold">Daftar</h4>
              <h2 className="text-dark text-xl sm:text-4xl font-semibold">Lowongan Magang Baru</h2>
            </header>
          </div>
          <div className="w-fit mb-6">
            <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-3 lg:grid-cols-3">
              {dataVacancies.map(item => (
                <CardVacancy
                  key={item.id}
                  id={item.id}
                  position={item.position}
                  create_date={`${item.create_date.getDate()} ${item.create_date.getMonth()} ${item.create_date.getFullYear()}`}
                  duration={item.duration}
                  start_internship={`${item.start_internship.getDate()} ${item.start_internship.getMonth()} ${item.start_internship.getFullYear()}`}
                />
              ))}
            </div>
          </div>
          <div className="py-4 px-2">
            <div className="flex flex-col md:flex-row">
              <button
                type="button"
                className="px-6 py-4 mb-2 md:ms-2 border-2 border-dark rounded-xl text-base font-semibold text-dark tracking-wide hover:border-dark/70 hover:text-dark/70"
              >
                <Link href="/vacancy">
                  Lihat Daftar Lowongan
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
