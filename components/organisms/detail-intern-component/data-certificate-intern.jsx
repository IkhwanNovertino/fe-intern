import CertificateComponent from '@/components/atoms/certificate'
import React, { useEffect, useState } from 'react'

export default function DataCertificateIntern({ data }) {
  console.log(data);

  return (
    <article className="submission-data w-full mb-5">
      <header className="text-base font-bold text-primary mb-4">
        Data Penilaian Peserta
      </header>
      <section className="w-full">
        {data === null ? 
          <div>Penilaian belum tersedia</div> :
          <div>
            <CertificateComponent isDownload={false} data={data} />
          </div>
        }
      </section>
    </article>
  )
}
