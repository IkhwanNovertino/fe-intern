import React, { useState } from 'react'
import CardInform from '@/components/molecules/card-info'
import UmpegTableSubmission from '../umpeg-table-submission'
import axios from 'axios';
import dynamic from 'next/dynamic';

const DataBarBiro = dynamic(() => import('../data-bar-biro-component'), {ssr: false})

export default function UmpegDashboard({dataBiro, dataCard, dataSubmit}) {
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
            <div className="relative flex items-center justify-start mt-0.5">
              <p className="number-data text-3xl font-extrabold text-dark">{ dataCard.activeIntern ?? 0}</p>
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
            <div className="relative flex items-center justify-start mt-0.5">
              <p className="number-data text-3xl font-extrabold text-dark">{ dataCard.total ?? 0 }</p>
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
        <h1 className="text-dark text-2xl font-medium text-left mt-10">Data peserta di tiap bidang kegiatan</h1>
        <div className="mt-2 w-full lg:max-w-4xl" >
          {dataBiro.map((item, index) => (
            <div key={index} className="mt-5 mb-3">
            <header>
                <h4 className="text-indigo-950 text-base font-semibold  text-left ml-1 my-0">BIDANG {item.name}</h4>
            </header>
            <section>
              <DataBarBiro dataBiro={item} />
              <div className="ml-2 text-xs font-medium text-light">
                <span className="text-dark/60">{item.count[0]} peserta akan magang</span> |
                <span className="text-dark/60"> {item.count[1]} peserta sedang magang</span> |
                <span className="text-dark/60"> {item.count[2]} peserta selesai magang</span>
              </div>
            </section>
          </div>
          ))}
        </div>
      </section>
      {/* daftar submission */}
      <section className="overview-list-submission">
        <h1 className="text-dark text-2xl font-semibold text-left mt-10">Daftar pengajuan magang terbaru</h1>
        <div className="mt-2 w-full lg:max-w-4xl">
          <UmpegTableSubmission dataSubmission={ dataSubmit} />
        </div>
      </section>
    </section>
  )
}


// export async function getServerSideProps({req}) {
//   const { token } = req.cookies;

//   const ROOT_API = process.env.NEXT_PUBLIC_API;
//   const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

//   const jwtToken = Buffer.from(token, "base64").toString('ascii');

//   const response = await axios.get(`${ROOT_API}/${API_VERSION}/dashboard/umpeg`, {
//     headers: {
//       Authorization: `Bearer ${jwtToken}`
//     }
//   })

//   return {
//     props: {
//       token: token,
//       data: response,
//     },
//   };
// }
