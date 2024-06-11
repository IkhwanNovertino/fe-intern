import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [institute, setInstitute] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const router = useRouter();

  const onSubmit = () => {
    router.push('/sign-up-complete')
  }

  return (
    <form>
      <div className="mb-4">
        <label htmlFor="fullname" className="block text-base font-medium text-label">
          Nama Lengkap
          <div className="group/fullname flex w-full px-5 py-4 mt-3 text-base font-light rounded-xl border border-light focus-within:border-primary">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Nama Lengkap"
              className="w-full focus:outline-none text-base font-light bg-white/0"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="username" className="block text-base font-medium text-label">
          Username
          <div className="group/username flex w-full px-5 py-4 mt-3 text-base font-light rounded-xl border border-light focus-within:border-primary">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full focus:outline-none text-base font-light bg-white/0"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
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
      <div className="mb-2">
        <label htmlFor="confirmPassword" className="block text-base font-medium text-label">
          Konfirmasi Kata Kunci
          <div className="group/confirmPassword  flex w-full px-5 py-4 mt-3 items-center text-base font-light rounded-xl border border-light focus-within:border-primary">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Tulis Ulang Kata kunci"
              className="w-full focus:outline-none text-base font-light bg-white/0"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
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
