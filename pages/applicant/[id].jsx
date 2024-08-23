import React, { useEffect, useState } from 'react'
import LadingPageLayout from '@/layouts/landing-page'
import { format } from 'date-fns';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import Badge from '@/components/atoms/badge';
import { useParams, useRouter } from 'next/navigation';
import DetailData from '@/components/molecules/detail-data';

export default function SubmissionDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [submission, setSubmission] = useState({
    doc_number: '',
    doc_date: 0,
    doc_institute: '',
    start_an_internship: 0,
    end_an_internship: 0,
    offering_letter: '',
    acceptance_letter: '',
    status: '',
    createdAt: Date(),
  });
  const [candidates, setCandidates] = useState([{
    name: '',
    id_num: '',
    major: '',
    levels: '',
  }]);


  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  useEffect(() => {
    const token = getCookie('token');
    const jwtToken = atob(token);
    axios.get(`${ROOT_API}/${API_VERSION}/submission/${id}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }).then(res => {
      console.log(res.data?.data);
      const data = res.data.data.submission;
      setSubmission(data);
      setCandidates(data.candidates)
    }).catch(err => {
      console.log(err.response);
    })
  }, [])

  console.log(submission);
  
  return (
    <LadingPageLayout>
      <div className="min-h-screen">
        <div className="bg-white w-full flex items-center">
          <div className="container mx-auto mt-4 py-4 px-2 md:w-full lg:max-w-5xl lg:py-16 lg:px-2">
            <div className="relative flex flex-col justify-center items-center">
              <div className="py-4 px-2 mb-4 text-center">
                <header>
                <h4 className="text-primary text-base sm:text-xl font-semibold">Detail</h4>
                  <h2 className="text-dark text-xl sm:text-4xl font-semibold">Pengajuan Magang</h2>
                </header>
              </div>
              <div className="min-w-fit mb-6 bg-primary/5 rounded-xl">
                <div className="min-h-screen py-4 px-1 md:pt-8 md:px-4">
                  <header className="min-w-fit md:min-w-96 md:flex md:justify-between">
                    <div className='w-fit'>
                      <Badge title={submission.status} status={submission.status} />
                    </div>
                    <div className="text-dark font-medium text-sm px-1 mt-2 mb-2">{format(new Date(submission.createdAt), 'dd MMMM yyyy')}</div>
                  </header>
                  <section className="min-w-fit md:min-w-96 mt-4 md:mt-8 flex-col">
                    <header className="text-base font-bold text-primary mb-4">Data Dokumen Pengajuan Magang</header>
                    <DetailData
                      title={'Nomor Surat'}
                      data={submission.doc_number}
                    />
                    <DetailData
                      title={'Tanggal Surat'}
                      data={format(submission.doc_date, 'dd MMMM yyyy')}
                    />
                    <DetailData
                      title={'Instansi Surat'}
                      data={submission.doc_institute}
                    />
                    <DetailData
                      title={'Tanggal Mulai Magang'}
                      data={format(submission.start_an_internship, 'dd MMMM yyyy')}
                    />
                    <DetailData
                      title={'Tanggal Selesai Magang'}
                      data={format(submission.end_an_internship, 'dd MMMM yyyy')}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-3">
                      <p className="text-sm text-light font-medium">Surat Pengajuan</p>
                      <p className="text-sm text-dark font-medium md:justify-self-end">{submission.offering_letter}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-3">
                      <p className="text-sm text-light font-medium">File Surat Balasan</p>
                      <p className="text-sm text-dark font-medium md:justify-self-end">{submission.acceptance_letter}</p>
                    </div>
                  </section>
                  <section className="min-w-fit md:min-w-96 mt-4 md:mt-10 flex-col">
                    <header className="text-base font-bold text-primary mb-4">Data Kandidat Peserta Magang</header>
                    {candidates.map((el, i) => (
                      <article className="mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-3">
                          <p className="text-sm text-light font-medium">Nama Lengkap</p>
                          <p className="text-sm text-dark font-medium md:justify-self-end">{el.name}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-3">
                          <p className="text-sm text-light font-medium ">NIS/NIM/NIP</p>
                          <p className="text-sm text-dark font-medium md:justify-self-end">{el.id_num}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-3">
                          <p className="text-sm text-light font-medium">Jurusan</p>
                          <p className="text-sm text-dark font-medium md:justify-self-end">{el.major}</p>
                        </div>
                      </article>
                    ))}
                  </section>
                </div>
              </div>
              <div className="py-4 px-2 mb-4">
                <button
                  type="button"
                  className='py-2 px-12 rounded text-dark font-medium bg-light/20'
                  onClick={() => router.back()}
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LadingPageLayout>
  )
}
