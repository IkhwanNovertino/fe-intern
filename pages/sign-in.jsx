import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import loginImage from "@/public/img/signin-image.png";
import SignInForm from '@/components/organisms/sign-in-form';

export default function SignInPage() {
  return (
    <section className="bg-primary/5 w-full h-auto flex justify-center items-center">
      <div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 md:justify-items-center">
          <div className="w-full py-16 md:py-0 md:h-screen flex items-center md:justify-end justify-center">
            <Image
              src={loginImage}
              width={400}
              alt="login-illustrasion"
              priority
            />
          </div>
          <div className="w-full md:h-auto flex justify-center md:justify-start md:ms-2 items-center">
            <article>
              <header>
                <h2 className="py-4 text-xl font-semibold text-dark">Masuk untuk Melanjutkan</h2>
                <p className="text-sm/6 font-normal text-light/70">
                  Masuk menggunakan akun yang telah
                  <br />
                  teregistrasi di website ini.
                </p>
              </header>
              <section className="mt-6">
                <SignInForm />
                <div className="mt-2 mb-10">
                  <p className="mt-2 text-center text-sm text-light/70">
                    Belum punya akun?
                    <span className="font-medium hover:underline hover:text-light">
                      <Link href="/sign-up"> Buat Akun</Link>
                    </span>
                  </p>
                  <p className="mt-1 text-center text-sm text-light hover:underline">
                    <Link href="/">Kembali ke Halaman Utama</Link>
                  </p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
