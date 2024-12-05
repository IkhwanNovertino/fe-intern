import React, { useState } from 'react';
import SubmissionSection from '@/components/organisms/submission-section';
import VacancyDescription from '@/components/organisms/vacancy-desc';
import LadingPageLayout from '@/layouts/landing-page';

export default function VacancyDetailMandiriPage() {
  const [vacant, setVacant] = useState({
    _id: '1',
    position: 'Pengajuan Mandiri',
    job_desc: 'Deskripsi pekerjaan tidak tersedia, karena pengajuan mandiri',
    requirement: ['Persyaratan peserta tidak tersedia'],
    duration: 'Tidak ada',
    start_an_intern: Date.now(),
    createdAt: new Date(),
  });
  return (
    <LadingPageLayout>
      <main className="min-h-screen">
        <div className="bg-ternary w-full flex items-center">
          <div className="container mx-auto py-0 px-2 md:w-full lg:max-w-5xl lg:px-2">
            <div className="relative flex flex-col lg:flex-row justify-start">
              <div className="lg:w-1/2 py-10 lg:py-14 px-2">
                <VacancyDescription data={vacant}/>
              </div>
              <div className="lg:w-1/2 py-2 px-2 lg:pt-28 lg:px-6">
                <SubmissionSection id={vacant._id} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LadingPageLayout>
  )
}