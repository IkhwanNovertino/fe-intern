import React from 'react'
import CertificateTemplate from './certif-template'
import { toast } from 'react-toastify';
import axios from 'axios';

export default function CertificateComponent({ isDownload, data }) {

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const handleDownloadCertificate = async () => {

    axios.get(`${ROOT_API}/${API_VERSION}/download/certificate/${data._id}`,
      { responseType: 'blob' }
    ).then((result) => {
      const url = window.URL.createObjectURL(new Blob([result.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${data._id}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    }).catch((err) => {
      console.log(err);
      
      toast.error('Gagal mengunduh sertifikat')
    });
  }

  if (isDownload) {
    return (
      <button
        onClick={handleDownloadCertificate}
        className='group px-px py-px flex justify-center text-center rounded-md hover:brightness-75 transition duration-500'
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
