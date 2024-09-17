import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import LadingPageLayout from '@/layouts/landing-page';
import CardVacancy from '@/components/molecules/card-vacancy';
import axios from 'axios';
import { format } from 'date-fns';

export default function VacancyPage() {
  const [vacancy, setVacancy] = useState([]);

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  useEffect(() => {
    axios.get(`${ROOT_API}/${API_VERSION}/vacancy`)
      .then(res => {
        const data = res.data.data;
        // console.log(data);
        setVacancy(data);
      })
  }, [])

  // const dataVacancies = [
  //   {
  //     'id': 'vacant1',
  //     'position': 'desain grafis',
  //     'create_date': new Date(1709424000),
  //     'duration': '2 bulan',
  //     'start_internship': new Date(1717372800)
  //   },
  //   {
  //     'id': 'vacant2',
  //     'position': 'programmer',
  //     'create_date': new Date(1709424000),
  //     'duration': '2 bulan',
  //     'start_internship': new Date(1717372800)
  //   },
  //   { 
  //     'id': 'vacant3',
  //     'position': 'statistik',
  //     'create_date': new Date(1709424000),
  //     'duration': '2 bulan',
  //     'start_internship': new Date(1717372800)
  //   },
  //   { 
  //     'id': 'vacant4',
  //     'position': 'videografer',
  //     'create_date': new Date(1709424000),
  //     'duration': '2 bulan',
  //     'start_internship': new Date(1717372800)
  //   },
  // ]

  return (
    <LadingPageLayout>
      <div className="min-h-screen">
        <div className="bg-white w-full flex items-center">
          <div className="container mx-auto mt-4 py-4 px-2 md:w-full lg:max-w-5xl lg:py-16 lg:px-2">
            <div className="relative flex flex-col justify-center items-center">
              <div className="py-4 px-2 mb-12 text-center">
                <header>
                  <h4 className="text-primary text-base sm:text-xl font-semibold">Daftar</h4>
                  <h2 className="text-dark text-xl sm:text-4xl font-semibold">Lowongan Magang</h2>
                </header>
              </div>
              <div className="w-fit mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <button
                    type="button"
                    className="px-6 py-4 mb-2 md:me-2 bg-primary rounded-xl text-base font-semibold text-white tracking-wide hover:bg-primary/70"
                  >
                    <Link
                      href="/vacancy/1"
                    >
                      + Daftar Magang
                    </Link>
                  </button>
                  {vacancy.map(item => (
                    <CardVacancy
                      key={item._id}
                      id={item._id}
                      position={item.position}
                      create_date={format(item.createdAt, 'dd MMMM yyyy')}
                      duration={item.duration}
                      start_internship={format(item.start_an_intern, 'dd MMMM yyyy')}
                    />
                    ))}
                </div>
                <div className="flex justify-center md:justify-start">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LadingPageLayout>
  );
}
