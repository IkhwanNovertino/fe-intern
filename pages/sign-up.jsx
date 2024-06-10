import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import loginImage from "@/public/img/signin-image.png";

export default function SignUpPage() {
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
                <h2 className="py-4 text-xl font-semibold text-dark">Buat Akun Pemohon</h2>
                <div className="mb-10">
                  <p className="text-sm text-light/70">
                    Sudah punya akun?
                    <span className="font-medium hover:underline hover:text-light">
                      <Link href="/sign-in"> Masuk Akun</Link>
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-light hover:underline">
                    <Link href="/">Kembali ke Halaman Utama</Link>
                  </p>
                </div>
              </header>
              <section className="mt-6 mb-10">
                <form action="" method="post">
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
                          required
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
                          required
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
                          required
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
                          required
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
                          required
                        />
                      </div>
                    </label>
                  </div>
                  <div className="footer-form">
                    <button
                      type="submit"
                      className="block w-full px-4 py-3 mt-9 font-medium text-xl text-white bg-primary rounded-xl focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                    >
                      Buat Akun
                    </button>
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
