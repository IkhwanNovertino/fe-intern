import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import loginImage from "@/public/img/signin-image.png";
import SignUpForm from '@/components/organisms/sign-up-form';

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
                <SignUpForm/>
              </section>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
