import React from 'react';
import Image from 'next/image';
import BenefitImage from '@/public/img/benefit-image.png';
import BenefitItem from './benefit-item';

export default function BenefitSection() {
  const listBenefits = [
    {
      'title': 'mendapatkan sertifikat',
      'desc': 'Setelah selesai melaksanakan magang, peserta magang akan mendapatkan sertifikat.'
    },
    {
      'title': 'Meningkatkan Kompetensi',
      'desc': 'Dengan Pembimbing yang kompeten di bidangnya, peserta diharapkan dapat menambah atau meningkatkan keterampilan/kompetensi.'
    },
    {
      'title': 'Menambah Pengalaman Bekerja',
      'desc': 'Magang di bidang pemerintahan dapat menambah pengalaman dan relasi untuk bekal bekerja nantinya.'
    },
  ];

  return (
    <div className="bg-ternary w-full flex items-center">
      <div className="container mx-auto mt-4 py-4 px-2 md:w-full lg:max-w-5xl lg:py-16 lg:px-2">
        <div className="relative flex flex-col lg:flex-row justify-between items-center">
          <div className="py-2 mt-5 ">
            <Image
              src={BenefitImage}
              width={850}
              height={850}
              alt="content-image"
            />
          </div>
          <div className="px-2 flex flex-col">
            <header className="py-3">
              <h2 className="text-dark text-2xl sm:text-4xl/relaxed font-semibold text-left mb-2">Kenapa di Diskominfo?</h2>
            </header>
            <section className="section-body text-left px-1 min-w-full max-w-3xl">
              <ul>
                {listBenefits.map((item, index) => (
                  <BenefitItem
                    index={index+1}
                    title={item.title}
                    description={item.desc}
                  />
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
