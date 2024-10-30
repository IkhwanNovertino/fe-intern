import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [institute, setInstitute] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const onSubmit = () => {
    axios.post(`${ROOT_API}/${API_VERSION}/auth/signup`, {
      name, email, institute, password 
    }).then(res => {
      console.log(res);
      router.push('/sign-up-complete')
    }).catch(err => {
      const errorResponse = err.response.data.message;
      errorResponse.forEach(el => {
        toast.error(el);
      });
    })
  }

  return (
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-base font-medium text-label">
          Nama Lengkap
          <div className="group/name flex w-full px-5 py-4 mt-3 text-base font-light rounded-xl border border-light focus-within:border-primary">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nama Lengkap"
              className="w-full focus:outline-none text-base font-light bg-white/0"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-base font-medium text-label">
          Email
          <div className="group/email flex w-full px-5 py-4 mt-3 text-base font-light rounded-xl border border-light focus-within:border-primary">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full focus:outline-none text-base font-light bg-white/0"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="institute" className="block text-base font-medium text-label">
          Instansi/Sekolah/Perguruan Tinggi
          <div className="group/institute flex w-full px-5 py-4 mt-3 text-base font-light rounded-xl border border-light focus-within:border-primary">
            <input
              type="text"
              name="institute"
              id="institute"
              placeholder="Sekolah/Kampus"
              className="w-full focus:outline-none text-base font-light bg-white/0"
              value={institute}
              onChange={(event) => setInstitute(event.target.value)}
            />
          </div>
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-base font-medium text-label">
          Kata Kunci
          <div className="group/password  flex w-full px-5 py-4 mt-3 items-center text-base font-light rounded-xl border border-light focus-within:border-primary">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Kata kunci"
              className="w-full focus:outline-none text-base font-light bg-white/0"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </label>
      </div>
      <div className="footer-form">
        <button
          onClick={onSubmit}
          type="button"
          className="block w-full px-4 py-3 mt-9 font-medium text-xl text-white bg-primary rounded-xl focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
        >
          Buat Akun
        </button>
      </div>
    </form>
  )
}
