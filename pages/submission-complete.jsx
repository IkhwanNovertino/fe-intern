import React from 'react'
import illustration from '@/public/img/complete-submission.png'
import Image from 'next/image'
import Link from 'next/link'

export default function SubmissionComplete() {
  return (
    <section className="bg-primary/5 px-2 mx-auto h-screen flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center mt-16">
        <Image
          src={illustration}
          width={360}
          alt="submit complete illustration"
          priority='true'
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-dark text-center">Pengajuan Telah dibuat</h2>
        <p className="text-sm font-light lg:font-normal text-center text-light my-2">
          Data pengajuan telah dibuat
          <br />
          Mohon menunggu konfirmasi selanjutnya
        </p>
        <button
          type="button"
          className="block my-8 px-6 py-3 bg-primary rounded-xl text-base font-semibold text-white mx-auto"
        >
          <Link href="/">Lihat Status Pengajuan</Link>
        </button>
      </div>

    </section>
  )
}
