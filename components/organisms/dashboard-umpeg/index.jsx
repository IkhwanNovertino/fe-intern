import React from 'react'
import CardInform from '@/components/molecules/card-info'
import TableSubmission from '@/components/molecules/table-submission'
// import { cookies } from 'next/headers';

export async function getServerSideProps({ req }) {
  const {token} = req.cookies;

  return {props: {token}}
  
}

export default function DashboardUmpeg() {
  return (
    <section className="content-wrapper bg-ternary pl-4 pr-4 py-4">
      <header className="overview-title">
        <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Data Magang Diskominfo Banjarbaru</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <CardInform>
            <p className="text-base font-semibold text-dark">
              Jumlah peserta magang
              <br />
              status aktif
            </p>
            <div className="relative flex items-center justify-start mt-3">
              <p className="number-data text-3xl font-extrabold text-dark">8</p>
              <p className="title-data text-xs/tight text-light ml-1 pb-px">
                peserta
                <br />
                siswa/mahasiswa
              </p>
            </div>
          </CardInform>
          <CardInform>
            <p className="text-base font-semibold text-dark">
              Total peserta magang
              <br />
              tahun ini
            </p>
            <div className="relative flex items-center justify-start mt-3">
              <p className="number-data text-3xl font-extrabold text-dark">28</p>
              <p className="title-data text-xs/tight text-light ml-1 pb-px">
                peserta
                <br />
                siswa/mahasiswa
              </p>
            </div>
          </CardInform>
        </div>
      </header>
      {/* data biro */}
      <section className="overview-data-biro">
        <h1 className="text-dark text-2xl font-semibold text-left mt-24">Data peserta di tiap bidang kegiatan</h1>
        <div className="mt-6" />
      </section>
      {/* daftar submission */}
      <section className="overview-list-submission">
        <h1 className="text-dark text-2xl font-semibold text-left mt-24">Daftar pengajuan magang terbaru</h1>
        <div className="mt-2 w-full lg:max-w-4xl">
          <TableSubmission />
        </div>
      </section>
    </section>
  )
}

