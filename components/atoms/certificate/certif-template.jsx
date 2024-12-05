import { format, formatDistance, formatDistanceStrict, formatDuration } from 'date-fns';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function CertificateTemplate({ data }) {
  console.log(data);
  const [duration, setDuration] = useState('');
  
  return (
    <section id='certificate'>
      <section
        id='certificate-first-page'
        className='w-full h-max px-28 py-4 flex flex-col rounded bg-cover'
      >
        <div className='certificate-header flex flex-col justify-center text-center mb-10'>
          <div className='flex justify-center mb-1'>
            <img src="/img/logo.png" alt="" width={40} />
          </div>
          <p className='font-medium text-base leading-none'>PEMERINTAH KOTA BANJARBARU</p>
          <p className='font-semibold text-lg leading-none'>DINAS KOMUNIKASI DAN INFORMATIKA BANJARBARU</p>
        </div>
        <div className='certificate-number mb-5'>
          <p className='font-bold text-xl leading-none text-blue-800'>SERTIFIKAT</p>
          <p className='font-normal text-sm leading-none'>Nomor: {data?.certif_num || '13/001/SRT/INFO/KOMINFO'}</p>
        </div>
        <div className='certificate-name mb-3'>
          <p className='font-normal text-lg leading-none'>DIBERIKAN KEPADA</p>
          <p className='font-extrabold text-xl leading-none text-blue-800 uppercase'>{data?.historyIntern?.name || 'Nama Peserta Magang'}</p>
        </div>
        <div className='certificate-detail mb-10'>
          <p className='text-sm leading-tight'>
            Telah Telah mengikuti Praktik Kerja Lapangan (PKL) selama <span id='certifcate-detail-duration'>
              {data?.historyIntern?.duration_internship || '1 hari'}
            </span>
            <br />
            Dari tanggal <span id='certificate-detail-start-intern'>{format(data?.historyIntern.start_an_internship, 'dd MMMM yyyy') || '1 Januari 2000'}</span> sampai dengan <span id='certificate-detail-end-intern'>{format(data?.historyIntern.end_an_internship, 'dd MMMM yyyy') || '1 Januari 2000'}</span>
            <br />
            Di <strong>Dinas Komunikasi dan Informatika Kota Banjarbaru</strong>
            <br />
            dengan hasil <span id='certificate-detail-evaluate'><strong>{data?.result || 'Cukup Baik'}</strong></span>
          </p>
        </div>
        <div className='certificate-sign mb-6'>
          <div id='certificate-sign-top' className='mb-5'>
            <p className='text-xs font-medium leading-none'>Banjarbaru, {format(data?.publish_date, 'dd MMMM yyyy') || '1 Desember 2000'}</p>
            <p className='text-xs font-medium leading-none'>{data?.historyPembina?.position || 'Kepala Dinas Komunikasi dan Informatika'}</p>
            <p className='text-xs font-medium leading-none'>Kota Banjarbaru</p>
          </div>
          <div id='certificate-sign-bottom'>
            <p className='text-xs font-medium leading-none'>{data?.historyPembina?.name || 'Nama Pembina'}</p>
            <p className='text-xs font-medium leading-none capitalize'>{data?.historyPembina?.pangkat || 'pembina tingkat I'}</p>
            <p className='text-xs font-medium leading-none'>NIP. {data?.historyPembina?.nip || '199901012000111005'}</p>
          </div>
        </div>
      </section>
      <section
        id='certificate-second-page'
        className='w-full mt-6 px-28 py-4 min-h-96 flex flex-col rounded bg-cover'
      >
        <div className='certificate-second-header flex justify-center mb-4 mt-8'>
          <table className='text-left'>
            <tbody>
              <tr>
                <td className='text-xs pr-20'>Nama</td>
                <td className='text-xs px-2'>:</td>
                <td className='text-xs px-2 uppercase'>{data?.historyIntern?.name || 'nama peserta magang'}</td>
              </tr>
              <tr>
                <td className='text-xs pr-20'>Jurusan</td>
                <td className='text-xs px-2'>:</td>
                <td className='text-xs px-2'>{data?.historyIntern?.major || 'jurusan peserta magang'}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='certificate-table-evaluate mb-5'>
          <table className='border-collapse border border-slate-500 text-left'>
            <thead>
              <tr>
                <th rowSpan={2} className='border border-slate-600 text-xs text-center px-1 py-2'>No</th>
                <th rowSpan={2} className='border border-slate-600 text-xs text-center w-80 py-2'>Komponen Yang Dinilai</th>
                <th colSpan={2} className='border border-slate-600 text-xs text-center'>Nilai</th>
              </tr>
              <tr>
                <th className='border border-slate-600 text-xs text-center w-16'>
                  Angka
                </th>
                <th className='border border-slate-600 text-xs text-center w-16'>
                  Huruf
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
              </tr>
              
              {data?.historyEvaluation?.category_score[1]?.score.length > 0 && 
                <>
                  <tr>
                    <td className='border-r border-slate-600 text-xs px-2 text-center'></td>
                    <td className='border-r border-slate-600 text-xs px-2 text-left font-medium'>Keahlian Teknis</td>
                    <td className='border-r border-slate-600 text-xs px-2 text-center'></td>
                    <td className='border-r border-slate-600 text-xs px-2 text-center'></td>
                  </tr>
                  {data?.historyEvaluation?.category_score[1]?.score.map((items, index) => (
                    <>
                      <tr key={index}>
                        <td className='border-r border-slate-600 text-xs px-2 text-center'>{index + 1}</td>
                        <td className='border-r border-slate-600 text-xs px-2 text-left'>{items.title}</td>
                        <td className='border-r border-slate-600 text-xs px-2 text-center'>{items.grade_number}</td>
                        <td className='border-r border-slate-600 text-xs px-2 text-center'>{items.grade_string}</td>
                      </tr>
                    </>
                  ))}
                </>
              }
              
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
              </tr>
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
              </tr>
              
              {data?.historyEvaluation?.category_score[0]?.score.length > 0 &&
                <>
                  <tr>
                    <td className='border-r border-slate-600 text-xs px-2 text-center'></td>
                    <td className='border-r border-slate-600 text-xs px-2 text-left font-medium'>Keahlian Non Teknis</td>
                    <td className='border-r border-slate-600 text-xs px-2 text-center'></td>
                    <td className='border-r border-slate-600 text-xs px-2 text-center'></td>
                  </tr>
                  {data?.historyEvaluation?.category_score[0]?.score.map((items, index) => (
                  <>
                    <tr key={index}>
                      <td className='border-r border-slate-600 text-xs px-2 text-center'>{index + 1}</td>
                      <td className='border-r border-slate-600 text-xs px-2 text-left'>{items.title}</td>
                      <td className='border-r border-slate-600 text-xs px-2 text-center'>{items.grade_number}</td>
                      <td className='border-r border-slate-600 text-xs px-2 text-center'>{items.grade_string}</td>
                    </tr>
                  </>
                  ))}
                </>
              }
              
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
              </tr>
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
              </tr>
              <tr>
                <th className='border border-slate-600 text-xs px-2 pb-2 text-center'></th>
                <th className='border border-slate-600 text-xs px-2 pb-2 text-left'>Jumlah</th>
                <th className='border border-slate-600 text-xs px-2 pb-2 text-center'>{data?.historyEvaluation?.total?.total_number || 604}</th>
                <th className='border border-slate-600 text-xs px-2 pb-2 text-center'>{ data?.historyEvaluation?.total?.total_string || 'A'}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  )
}
