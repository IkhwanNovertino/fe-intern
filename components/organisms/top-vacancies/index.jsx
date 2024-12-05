import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import CardVacancy from '@/components/molecules/card-vacancy';
import axios from 'axios';
import { format } from 'date-fns';

export default function TopVacancies() {
  
  const [dataVacant, setDataVacant] = useState([]);

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  useEffect(() => {
    axios.get(`${ROOT_API}/${API_VERSION}/vacancy/topvacancy`)
      .then(res => {
        const data = res.data.data;
        setDataVacant(data);
      })
  },[])

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
              {dataVacant.map(item => (
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
