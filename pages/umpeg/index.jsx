import React from 'react'
import SidebarUmpeg from './sidebar-umpeg'
import CardInform from '@/components/molecules/card-info'
import Table from '@/components/atoms/table'
import TableHead from '@/components/atoms/table-head'
import TableData from '@/components/atoms/table-data'
import Badge from '@/components/atoms/badge'
import Link from 'next/link'

export default function Umpeg() {
  return (
    <section className="flex xl:max-w-5xl xl:justify-center xl:mx-auto">
      <SidebarUmpeg/>
      <main className="main-wrapper relative w-full max-h-screen overflow-y-auto">
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
              <Table>
                <thead>
                  <tr>
                    <TableHead title={'tanggal pengajuan'}/>
                    <TableHead title={'instansi pengaju'}/>
                    <TableHead title={'jumlah peserta'}/>
                    <TableHead title={'status'}/>
                    <TableHead title={'aksi'}/>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TableData title={"28 Juli 2024"} />
                    <TableData classname={"uppercase"} title={"STMIK BANJARBARU"} />
                    <TableData title={"2 Peserta"} />
                    <TableData>
                      <Badge status={'pending'} title={'pending'} size={'small'}/>
                    </TableData>
                    <TableData>
                    <Link
                      href="/umpeg/submission/1"
                      className="text-sm font-medium text-dark text-center px-2.5 py-1 bg-slate-200 rounded-md"
                    >
                      Detail
                    </Link>
                    </TableData>
                  </tr>
                </tbody>
              </Table>
            </div>
          </section>
        </section>
      </main>
    </section>
  )
}

