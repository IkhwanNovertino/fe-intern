import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Error404() {
  const router = useRouter();

  return (
    <section className="bg-primary/5 px-2 mx-auto h-screen flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center mt-16">
        <Image
          src="/img/not-found.png"
          width={360}
          height={300}
          alt="submit complete illustration"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-dark text-center">Opps! Something Missing</h2>
        <p className="text-sm font-light lg:font-normal text-center text-light my-2">
          Halaman tidak dapat ditemukan.
          <br />
          Silakan kembali ke halaman utama.
        </p>
        <button
          type="button"
          className="block my-8 px-6 py-3 bg-primary rounded-xl text-base font-semibold text-white mx-auto"
          onClick={() => router.back()}
        >
          Kembali
        </button>
      </div>
    </section>
  );
}
