import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function SupervisorProfile({token}) {

  const [name, setName] = useState('');
  const [nip, setNip] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);

  const router = useRouter();
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
  
  const handleSubmitProfile = async (event) => {
    event.preventDefault();
    axios.put(`${ROOT_API}/${API_VERSION}/auth/profile`, 
      { email, phone_num: phone },
      { headers: {
        Authorization: `Bearer ${token}`
      }}
    ).then((res) => {
      setEmail(res.data.data.email);
      setPhone(res.data.data.phone_num);
      toast.success('Data telah berhasil di ubah')
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    axios.get(`${ROOT_API}/${API_VERSION}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res);
      setName(res.data.data.name)
      setPosition(res.data.data.job_title)
      setNip(res.data.data.nip)
      setEmail(res.data.data.email)
      setPhone(res.data.data.phone_num)
      
    }).catch((err) => {
      console.log(err);
      
    });
  }, [])

  return (
    <form onSubmit={(event) => handleSubmitProfile(event)}>
      <div className="mb-2 md:mb-3">
        <label htmlFor="name" className="block text-sm md:text-base font-medium">
          Nama Lengkap
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          readOnly
          className="w-3/4 focus:outline-none text-base font-normal uppercase text-gray-800 bg-primary/0 px-5 py-3 md:py-3 mt-2 rounded-xl border border-gray-500"
        />
      </div>
      <div className="mb-2 md:mb-3">
        <label htmlFor="nip" className="block text-sm md:text-base font-medium">
          No. Induk Pegawai
        </label>
        <input
          type="text"
          name="nip"
          id="nip"
          value={nip}
          readOnly
          className="w-3/4 focus:outline-none text-base font-normal text-gray-800 bg-primary/0 px-5 py-3 md:py-3 mt-2 rounded-xl border border-gray-500"
        />
      </div>
      <div className="mb-2 md:mb-3">
        <label htmlFor="job_title" className="block text-sm md:text-base font-medium">
          Jabatan
        </label>
        <input
          type="text"
          name="job_title"
          id="job_title"
          value={position}
          readOnly
          className="w-3/4 focus:outline-none text-base font-normal uppercase text-gray-800 bg-primary/0 px-5 py-3 md:py-3 mt-2 rounded-xl border border-gray-500"
        />
      </div>
      <div className="mb-2 md:mb-3">
        <label htmlFor="email" className="block text-sm md:text-base font-medium">
          Alamat Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-3/4 focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-primary"
        />
      </div>
      <div className="mb-2 md:mb-3">
        <label htmlFor="phone_num" className="block text-sm md:text-base font-medium">
          No. Telepon
        </label>
        +62
        <input
          type="tel"
          name="phone_num"
          id="phone_num"
          minLength={11}
          maxLength={14}
          pattern='[0-9]{10,14}'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='081311112222'
          className="w-1/3 focus:outline-none text-base font-normal bg-primary/0 px-3 py-2 md:py-3 mt-2 ml-1 rounded-xl border border-primary"
        />
      </div>
      <div className='mt-10 mb-10'>
        
        <button
          type="submit"
          className='w-1/4 py-3 px-6 bg-primary/20 rounded-xl font-medium text-primary hover:bg-primary hover:text-white hover:transition hover:duration-300 focus-within:border-primary'
        >
          Simpan
        </button>
        <button
          type="button"
          className='w-1/4 py-3 px-6 ml-2 bg-wait/20 rounded-xl font-medium text-wait hover:bg-wait hover:text-white hover:transition hover:duration-300 focus-within:border-primary'
          
        >
          <Link
            href={'/changePassword'}
          >
            Ubah Kata Kunci
          </Link>
        </button>
      </div>
    </form>
  )
}
