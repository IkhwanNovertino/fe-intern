import ButtonDownload from '@/components/atoms/button-download'
import DetailData from '@/components/molecules/detail-data'
import { format } from 'date-fns'
import React from 'react'

export default function DataSubmissionIntern({data}) {
  return (
    <article className="submission-data w-full mb-5">
      <header className="text-base font-bold text-primary mb-4">
        Data Pengajuan Peserta
      </header>
      <section className="">
        <DetailData
          title={'Jurusan'}
          data={data.major}
        />
        <DetailData
          title={'Sekolah/Kampus/Instansi'}
          data={data.institute}
        />
        <DetailData
          title={'Mulai Magang'}
          data={format(data.start_an_internship, 'dd MMMM yyyy')}
        />
        <DetailData
          title={'Selesai Magang'}
          data={format(data.end_an_internship, 'dd MMMM yyyy')}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-3">
          <p className="text-sm text-light font-medium">File Surat Pengajuan</p>
          <p className="text-sm text-dark font-medium md:justify-self-end">
            <ButtonDownload
              title={'unduh surat pengajuan'}
              category={'offering'}
              filename={data.offering_letter}
            />
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-3">
          <p className="text-sm text-light font-medium">File Surat Balasan</p>
          <p className="text-sm text-dark font-medium md:justify-self-end">
            <ButtonDownload
              title={'unduh surat persetujuan'}
              category={'acceptance'}
              filename={data.acceptance_letter}
            />
          </p>
        </div>
      </section>
    </article>
  )
}
