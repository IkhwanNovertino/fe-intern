import React from 'react'
import CertificateTemplate from './certif-template'

export default function CertificateComponent({ isDownload, data }) {
  console.log(data);
  
  if (isDownload) {
    return (
      <button
        className='group px-px py-px flex justify-center text-center rounded-md hover:bg-slate-500 hover:brightness-75 transition duration-500'
      >
        <span className='absolute mt-4 font-medium text-lg text-white bg-wait rounded px-4 py-2  w-fit h-fit hidden group-hover:inline transition duration-500'>Klik untuk mengunduh sertifikat</span>
        <CertificateTemplate data={data} />
      </button>
    )
  }

  return (
    <button
      className='cursor-default'
    >
      <CertificateTemplate data={data} />
    </button>
  )
}
