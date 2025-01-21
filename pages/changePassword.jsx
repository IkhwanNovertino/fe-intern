import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import loginImage from "@/public/img/signin-image.png";
import { toast } from 'react-toastify';
import axios from 'axios';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function ChangePasswordPage({token}) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!oldPassword || !newPassword) {
      toast.error('Isi kata sandi dengan benar')
    }
    toast.info('Jika berhasil, halaman akan diarahkan ke login.')
    axios.put(`${ROOT_API}/${API_VERSION}/auth/password`,
      { oldPassword, newPassword },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    ).then((res) => {
      toast.success('Ubah data berhasil')
      deleteCookie('token');
      router.push('/sign-in')
    }).catch((err) => {
      console.log(err);
      
      toast.error('gagal mengubah kata sandi')
    });
  }
  return (
    <section className="bg-primary/5 w-full h-auto flex justify-center items-center">
      <div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 md:justify-items-center lg:content-center">
          <div className="w-full py-16 md:py-24 md:h-screen flex items-center justify-center md:justify-end">
            <Image
              src={loginImage}
              width={400}
              alt="sign-up-illustration"
            />
          </div>
          <div className="w-full md:h-auto flex justify-center md:justify-start md:ms-2 items-center md:py-6 md:pt-10">
            <article>
              <header>
                <h2 className="py-4 text-xl font-semibold text-dark">Ubah Kata Sandi</h2>
                <div className="mb-10">
                  
                </div>
              </header>
              <section className="mt-6 mb-10">
                <form>
                  <div className="mb-4">
                    <label htmlFor="oldPassword" className="block text-base font-medium text-label">
                      Kata Sandi Lama
                      <div className="group/oldPassword  flex w-full px-5 py-4 mt-3 items-center text-base font-light rounded-xl border border-light focus-within:border-primary">
                        <input
                          type="password"
                          name="oldPassword"
                          id="oldPassword"
                          placeholder="Kata sandi lama"
                          className="w-full focus:outline-none text-base font-light bg-white/0"
                          value={oldPassword}
                          onChange={(event) => setOldPassword(event.target.value)}
                        />
                      </div>
                    </label>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="newPassword" className="block text-base font-medium text-label">
                      Kata Sandi Baru
                      <div className="group/newPassword  flex w-full px-5 py-4 mt-3 items-center text-base font-light rounded-xl border border-light focus-within:border-primary">
                        <input
                          type="password"
                          name="newPassword"
                          id="newPassword"
                          placeholder="Kata sandi baru"
                          className="w-full focus:outline-none text-base font-light bg-white/0"
                          value={newPassword}
                          onChange={(event) => setNewPassword(event.target.value)}
                        />
                      </div>
                    </label>
                  </div>
                  <div className="footer-form">
                    <button
                      onClick={(e) => onSubmit(e)}
                      type="button"
                      className="block w-full px-4 py-3 mt-9 font-medium text-xl text-white bg-primary rounded-xl focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                    >
                      Ubah Sandi
                    </button>
                    <p className="mt-1 text-sm text-light hover:underline">
                      <Link href="/">Kembali ke Halaman Utama</Link>
                    </p>
                  </div>
                </form>
              </section>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps({req}) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString('ascii');

  return {
    props: {
      token: jwtToken
    },
  };
}