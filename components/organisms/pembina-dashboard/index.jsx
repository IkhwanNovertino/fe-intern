import Table from '@/components/atoms/table'
import TableData from '@/components/atoms/table-data'
import TableHead from '@/components/atoms/table-head'
import CardInform from '@/components/molecules/card-info'
import { format } from 'date-fns'
import React from 'react'
import dynamic from 'next/dynamic'

const DataBarBiro = dynamic(() => import('../data-bar-biro-component'), {ssr: false})

export default function PembinaDashboard({ dataBar, dataCard }) {
  console.log(dataCard);
  
  return (
    <section className="content-wrapper bg-ternary pl-4 pr-4 py-4">
      <header className="overview-title">
        <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Data Magang Diskominfo Banjarbaru</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:max-w-fit">
          <CardInform>
            <p className="text-base font-semibold text-dark">
              Jumlah pengajuan magang
              <br />
              tahun ini
            </p>
            <div className="relative flex items-center justify-start mt-3">
              <p className="number-data text-3xl font-extrabold text-dark">{dataCard.submissionInthisYear}</p>
              <p className="title-data text-xs/tight text-light ml-1 pb-px">
                surat
                <br />
                pengajuan magang
              </p>
            </div>
          </CardInform>
          <CardInform>
            <p className="text-base font-semibold text-dark">
              Total pengajuan magang
              <br />
              tahun ke tahun
            </p>
            <div className="relative flex items-center justify-start mt-3">
              <p className="number-data text-3xl font-extrabold text-dark">{dataCard.submissionTotal}</p>
              <p className="title-data text-xs/tight text-light ml-1 pb-px">
                surat
                <br />
                pengajuan magang
              </p>
            </div>
          </CardInform>
          <CardInform>
            <p className="text-base font-semibold text-dark">
              Jumlah peserta magang
              <br />
              status aktif
            </p>
            <div className="relative flex items-center justify-start mt-3">
              <p className="number-data text-3xl font-extrabold text-dark">{dataCard.activeIntern}</p>
              <p className="title-data text-xs/tight text-light ml-1 pb-px">
                peserta
                <br />
                siswa/mahasiswa
              </p>
            </div>
          </CardInform>
          <CardInform>
            <p className="text-base font-semibold text-dark">
              Jumlah peserta magang
              <br />
              tahun ini
            </p>
            <div className="relative flex items-center justify-start mt-3">
              <p className="number-data text-3xl font-extrabold text-dark">{dataCard.total}</p>
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
          {dataBar.map((item, index) => (
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
    </section>
  )
}
