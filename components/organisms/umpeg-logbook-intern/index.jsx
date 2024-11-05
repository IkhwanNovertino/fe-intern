import ItemLogbook from '@/components/molecules/item-logbook'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function UmpegLogbookDetail({ intern, logbook, url }) {
  const router = useRouter();
  return (
    <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
      <header className="overview-title">
        <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Daftar Laporan Kegiatan</h1>
      </header>
      <section className="overview-list-logbook">
        <div className="mt-6 w-full lg:max-w-3xl">
        <div className="profile-interns flex items-center justify-start gap-4 mb-5">
            <div className="img-id">
              <Image
                src={'/img/profile-pic.png'}
                width={180}
                height={180}
                className="w-40 rounded-full"
              />
            </div>
            <div className="basic-id w-full flex items-start justify-between">
              <div>
                <p className="text-dark text-base font-bold name_interns">{ intern.name }</p>
                <p className="text-light text-sm font-medium num_id_interns">{ intern.id_num }</p>
                <p className="text-light text-sm font-medium mt-3">{ intern.email }</p>
                <p className="text-light text-sm font-medium">{intern.phone_num}</p>
              </div>
            </div>
          </div>
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
