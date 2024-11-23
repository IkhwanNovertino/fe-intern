import ItemLogbook from '@/components/molecules/item-logbook'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import HeadProfileIntern from '../header-profile-intern'

export default function UmpegLogbookDetail({ intern, logbook }) {
  const router = useRouter();
  return (
    <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
      <header className="overview-title">
        <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Daftar Laporan Kegiatan</h1>
      </header>
      <section className="overview-list-logbook">
        <div className="mt-6 w-full lg:max-w-3xl">
          <HeadProfileIntern data={intern} />
          <div className="h-1.5 w-full bg-secondary/20 mb-2 mt-2" />
          <div className="mt-6 w-full lg:max-w-3xl">
            {logbook.map((item, index) => (
              <ItemLogbook
                key={index}
                date={format(item.date, 'dd/MM/yyyy')}
                log_desc={`${item.description}`}
                status={item.status}
              />
            ))}
          </div>
          <button
            type="button"
            className='py-2 px-6 mb-3 mr-3 rounded bg-slate-200 font-medium hover:bg-slate-700 hover:text-slate-50 hover:transition hover:duration-300'
            onClick={() => router.back()}
          >
            Kembali
          </button>
        </div>
      </section>
    </section>
  )
}
