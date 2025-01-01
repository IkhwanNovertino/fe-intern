import React from 'react'
import TempalateDashboardUmpeg from '../template'
import UmpegTableIntern from '@/components/organisms/umpeg-table-intern'
// import RecapComponent from '@/components/organisms/recap-component';

import dynamic from 'next/dynamic'
const RecapComponent = dynamic(() => import('@/components/organisms/recap-component'), { ssr: false })

export default function UmpegRecapitulationPage() {
  return (
    <TempalateDashboardUmpeg>
      <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Laporan Rekapitulasi Magang Diskominfo Banjarbaru</h1>
        </header>
        <section className="recapitulation-section">
          <div className="mt-6 w-full lg:max-w-3xl">
            <RecapComponent />
          </div>
        </section>
      </section>
    </TempalateDashboardUmpeg>
  )
}

export async function getServerSideProps({req}) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  }
}