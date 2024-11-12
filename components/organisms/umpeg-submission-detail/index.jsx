import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

import Badge from '@/components/atoms/badge';
import { format } from 'date-fns';
import DetailData from '@/components/molecules/detail-data';
import ButtonDownload from '@/components/atoms/button-download';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function UmpegSubmissionDetail({data}) {
  const router = useRouter();
  const [submission, setSubmission] = useState({
    _id: '',
    doc_institute: '',
    doc_number: '',
    doc_date: 0,
    start_an_internship: 0,
    end_an_internship: 0,
    offering_letter: '',
    acceptance_letter: '',
    status: '',
    type_of_submission: '',
    historyVacancy: {
      id: '',
      position: '',
      duration: '',
    },
    applicant: {
      name: '',
      institute: '',
      email: '',
    },
    candidates: [{
      name: '',
      id_num: '',
      major: '',
      levels: '',
    }],
    createdAt: Date(),
  });
  const [docAcceptance, setDocAcceptance] = useState('');

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
  const token = getCookie('token');
  // console.log(token);
  
  const jwtToken = atob(token);

  const handleRejectSubmission = (id) => { 
    axios.put(`${ROOT_API}/${API_VERSION}/submission/status/${id}?status=failed`, {}, {
      headers: {Authorization: `Bearer ${jwtToken}`}
    }).then(res => {
      console.log(res.data.data.submission);
      toast.success('Pengajuan pemohon telah ditolak')
      router.refresh()
    }).catch(err => {
      console.log(err.response);
    })
  };
  const handlerAcceptSubmission = (id) => {
    axios.put(`${ROOT_API}/${API_VERSION}/submission/status/${id}?status=confirmed`, {}, {
      headers: {Authorization: `Bearer ${jwtToken}`}
    }).then(res => {
      console.log(res.data.data.submission);
      toast.success('Pengajuan pemohon diproses')
      router.refresh()
    }).catch(err => {
      console.log(err.response);
    })
  };
  const handlerSubmitAcceptLetter = (event, id) => {
    event.preventDefault();
    if (!docAcceptance) return toast.error('Surat Balasan tidak ditemukan. Masukkan surat');
    console.log(docAcceptance);

    const data = new FormData();
    data.append('acceptance_letter', docAcceptance)

    axios.put(`${ROOT_API}/${API_VERSION}/submission/${id}`, data, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }).then(res => {
      console.log(res.data.data.submission);
      toast.success('Surat balasan telah dikirim. Pengajuan diterima.')
      router.push('/umpeg/submission');
    })
  };

  useEffect(() => {
    setSubmission(data)
  },[submission._id])
  return (
    <div className="mt-6 w-full lg:max-w-3xl">
      <div className="min-w-fit mb-6 rounded-xl">
        <div className="py-4 px-1 md:pt-8 md:px-4">
          <header className="min-w-fit md:min-w-96 md:flex md:justify-between">
            <div>
              <div className='w-fit'>
                <Badge title={submission.status === 'confirmed' ? 'waiting' : submission.status} status={submission.status} size={'normal'}/>
              </div>
              <p className="py-2 px-1 font-medium text-sm text-light">
                Tipe Pengajuan : <span className="text-dark font-semibold capitalize">{submission.type_of_submission}</span>
              </p>
            </div>
            <div className="text-dark font-medium text-sm px-1 mt-2 mb-2">{format(submission.createdAt, 'dd MMMM yyyy')}</div>
          </header>
          <section className="min-w-fit md:min-w-96 mt-4 md:mt-8 flex-col">
            <header className="text-base font-bold text-primary mb-4">Data Pemohon Pengajuan Magang</header>
            <DetailData
              title={'Nama Lengkap Pemohon'}
              data={submission.applicant.name}
            />
            <DetailData
              title={'Sekolah/Kampus/Instansi'}
              data={submission.applicant.institute}
            />
            <DetailData
              title={'Email'}
              data={submission.applicant.email}
            />
          </section>
          {submission.type_of_submission === 'mandiri' ? (
            <></>
          ) : (
            <section className="min-w-fit md:min-w-96 mt-4 md:mt-8 flex-col">
              <header className="text-base font-bold text-primary mb-4">Data Lowongan Yang Diikuti</header>
              <DetailData
                title={'Posisi Magang'}
                data={submission.historyVacancy.position}
              />
              <DetailData
                title={'Durasi Magang'}
                data={submission.historyVacancy.duration}
              />
            </section>
          )}
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
              <p className="text-sm text-dark font-medium md:justify-self-end">
                <ButtonDownload
                  title={'unduh surat pengajuan'}
                  category={'offering'}
                  filename={submission.offering_letter}
                />
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-3">
              <p className="text-sm text-light font-medium">File Surat Balasan</p>
              <p className="text-sm text-dark font-medium md:justify-self-end">
                {submission.status === 'pending' && (
                  `Proses pengajuan`
                ) || submission.status === 'confirmed' && (
                  <input
                    type="file"
                    accept='application/pdf'
                    onChange={(event) => setDocAcceptance(event.target.files[0])}
                    name="acceptance_letter"
                    id="acceptance_letter"
                    className="w-full text-sm md:text-base text-light file:py-2 file:px-4 file:border-0 file:rounded-full file:bg-light/40 file:text-black file:font-medium hover:file:bg-primary/50 disabled:file:bg-light/40"
                  />
                  ) || submission.status === 'success' && (
                    <ButtonDownload
                      title={'unduh surat persetujuan'}
                      category={'acceptance'}
                      filename={submission.acceptance_letter}
                    />
                )}
              </p>
            </div>
          </section>
          <section className="min-w-fit md:min-w-96 mt-4 md:mt-10 flex-col">
            <header className="text-base font-bold text-primary mb-4">Data Kandidat Peserta Magang</header>
            {submission.candidates.map((el, i) => (
              <article className="mb-10" key={i}>
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
      <div className="py-4 px-2 mb-4 flex-col md:flex-row md:justify-around">
        <button
          type="button"
          className='py-2 px-6 mb-3 mr-3 rounded bg-slate-200 font-medium hover:bg-slate-700 hover:text-slate-50 hover:transition hover:duration-300'
          onClick={() => router.back()}
        >
          Kembali
        </button>
        {submission.status === 'pending' ? (
          <button
            type="button"
            className='py-2 px-6 mb-3 mr-3 bg-secondary/20 rounded font-medium text-secondary hover:bg-secondary/100 hover:text-white hover:transition hover:duration-300'
            onClick={handleRejectSubmission(submission._id)}
          >
            Tolak Pengajuan
          </button>
        ) : (
          <button
            type="button"
            className='py-2 px-6 mb-3 mr-3 bg-secondary/20 rounded font-medium text-secondary disabled:cursor-not-allowed'
            disabled
          >
            Tolak Pengajuan
          </button>
        )}
        {submission.status === 'failed' || submission.status === 'success' ? (
          <button
            type="button"
            className='py-2 px-6 mb-3 mr-3 bg-primary/20 rounded font-medium text-primary disabled:cursor-not-allowed'
            disabled
          >
            Proses Pengajuan
          </button>
        ) : (
            <>
              {submission.status === 'pending' ? (
                <button
                  type="button"
                  className='py-2 px-6 mb-3 mr-3 bg-primary/20 rounded font-medium text-primary hover:bg-primary hover:text-white hover:transition hover:duration-300'
                  onClick={handlerAcceptSubmission(submission._id)}
                >
                  Proses Pengajuan
                </button>
              ) : (
                <button
                  type="button"
                  className='py-2 px-6 mb-3 mr-3 bg-primary/20 rounded font-medium text-primary hover:bg-primary hover:text-white hover:transition hover:duration-300'
                  onClick={e => handlerSubmitAcceptLetter(e, submission._id)}
                >
                  Kirim Surat Balasan
                </button>
              )}
            
          </>
        )}
      </div>
    </div>
  )
}
