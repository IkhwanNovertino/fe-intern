import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';

export default function ApproveCertifButton({ id, token }) {
  console.log(token);
  
  const router = useRouter();
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const handleApproveCertificate = async () => {
    const response = await axios.put(`${ROOT_API}/${API_VERSION}/certificate/${id}`,
      { id: id },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ).then(response => {
      toast.success('Pengesahan sertifikat berhasil')
      router.refresh();
    }).catch(error => {
      toast.error('Pengesahan sertifikat gagal. Terdapat kesalahan')
    })
  };
  
  return (
    <button
          type="button"
          className='py-2 px-6 mb-3 mr-3 rounded bg-primary/50 text-black font-semibold hover:bg-primary hover:text-white hover:transition hover:duration-300'
          onClick={() => handleApproveCertificate()}
        >
          Pengesahan Sertifikat
        </button>
  )
}
