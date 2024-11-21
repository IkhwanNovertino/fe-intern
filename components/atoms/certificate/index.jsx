import React from 'react'
import CertificateTemplate from './certif-template'

export default function CertificateComponent({ isDownload=false }) {
  if (isDownload) {
    return (
      <button
        className='px-2 py-2 text-center rounded-md hover:bg-slate-500 hover:brightness-50 transition duration-500'
      >
        <div className='absolute inset-0 font-medium text-lg text-white outline outline-slate-950 outline-1'>Klik untuk mengunduh sertifikat</div>
        <CertificateTemplate />
      </button>
    )
  }

  return (
    <button
      className='cursor-default'
    >
      <CertificateTemplate />
    </button>
  )
}
