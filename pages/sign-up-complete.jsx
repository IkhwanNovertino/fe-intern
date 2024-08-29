import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import illustration from '@/public/img/create-acount.png';

export default function SignUpSuccess() {
  return (
    <section className="bg-primary/5 px-2 mx-auto h-screen flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center mt-16">
        <Image
          src={illustration}
          width={360}
          height={300}
          alt="submit complete illustration"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-dark text-center">Akun Telah dibuat</h2>
        <button
          type="button"
          className="block my-8 px-6 py-3 bg-primary rounded-xl text-base font-semibold text-white mx-auto"
        >
          <Link href="/sign-in">Log in Kembali</Link>
        </button>
      </div>
    </section>
  );
}
