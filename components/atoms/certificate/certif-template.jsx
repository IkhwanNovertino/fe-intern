import Image from 'next/image'
import React from 'react'

export default function CertificateTemplate() {
  return (
    <section id='certificate'>
      <section
        id='certificate-first-page'
        className='w-max px-28 py-4 flex flex-col rounded bg-cover'
      >
        <div className='certificate-header flex flex-col justify-center text-center mb-10'>
          <div className='flex justify-center mb-1'>
            <img src="/img/logo.png" alt="" width={40} />
          </div>
          <p className='font-medium text-base leading-none'>PEMERINTAH KOTA BANJARBARU</p>
          <p className='font-semibold text-lg leading-none'>DINAS KOMUNIKASI DAN INFORMATIKA BANJARBARU</p>
        </div>
        <div className='certificate-number mb-5'>
          <p className='font-bold text-xl leading-none'>SERTIFIKAT</p>
          <p className='font-normal text-sm leading-none'>Nomor: 13/008/INFO/SRT/2024</p>
        </div>
        <div className='certificate-name mb-3'>
          <p className='font-normal text-lg leading-none'>DIBERIKAN KEPADA</p>
          <p className='font-extrabold text-xl leading-none'>Omirassby Rummi</p>
        </div>
        <div className='certificate-detail mb-10'>
          <p className='text-sm leading-tight'>
            Telah Telah mengikuti Praktik Kerja Lapangan (PKL) selama <span id='certifcate-detail-duration'>sebulan</span>
            <br />
            Dari tanggal <span id='certificate-detail-start-intern'>21 November 2024</span> sampai dengan <span id='certificate-detail-end-intern'>22 November 2024</span>
            <br />
            Di <strong>Dinas Komunikasi dan Informatika Kota Banjarbaru</strong>
            <br />
            dengan hasil <span id='certificate-detail-evaluate'><strong>Sangat Baik</strong></span>
          </p>
        </div>
        <div className='certificate-sign mb-6'>
          <div id='certificate-sign-top' className='mb-5'>
            <p className='text-xs font-medium leading-none'>Banjarbaru, 1 Desember 2024</p>
            <p className='text-xs font-medium leading-none'>Kepala Dinas Komunikasi dan Informatika</p>
            <p className='text-xs font-medium leading-none'>Kota Banjarbaru</p>
          </div>
          <div id='certificate-sign-bottom'>
            <p className='text-xs font-medium leading-none'>NOVEMBER ISH, M.KOM</p>
            <p className='text-xs font-medium leading-none'>Pembina Tk.I</p>
            <p className='text-xs font-medium leading-none'>NIP. 19990207 202207 2 059</p>
          </div>
        </div>
      </section>
      <section
        id='certificate-second-page'
        className='w-max mt-6 px-28 py-4 flex flex-col rounded bg-cover'
      >
        <div className='certificate-second-header flex justify-center mb-4 mt-8'>
          <table className='text-left'>
            <tbody>
              <tr>
                <td className='text-xs pr-20'>Nama</td>
                <td className='text-xs px-1'>:</td>
                <td className='text-xs px-2'>Omirassby Rummi</td>
              </tr>
              <tr>
                <td className='text-xs pr-20'>Jurusan</td>
                <td className='text-xs px-1'>:</td>
                <td className='text-xs px-2'>Sistem Informasi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='certificate-table-evaluate mb-5'>
          <table className='border-collapse border border-slate-500 text-left'>
            <thead>
              <tr>
                <th rowSpan={2} className='border border-slate-600 text-xs text-center px-2 py-2'>No</th>
                <th rowSpan={2} className='border border-slate-600 text-xs text-center px-16 py-2'>Komponen Yang Dinilai</th>
                <th colSpan={2} className='border border-slate-600 text-xs text-center'>Nilai</th>
              </tr>
              <tr>
                <th className='border border-slate-600 text-xs text-center px-6'>
                  Angka
                </th>
                <th className='border border-slate-600 text-xs text-center px-6'>
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
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>1</td>
                <td className='border-r border-slate-600 text-xs px-2 text-left'>Kedisiplinan</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>89</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>A</td>
              </tr>
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>2</td>
                <td className='border-r border-slate-600 text-xs px-2 text-left'>Kerjasama</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>89</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>A</td>
              </tr>
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>3</td>
                <td className='border-r border-slate-600 text-xs px-2 text-left'>Daya Kreasi</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>89</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>A</td>
              </tr>
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>4</td>
                <td className='border-r border-slate-600 text-xs px-2 text-left'>Etos Kerja</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>89</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>A</td>
              </tr>
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>5</td>
                <td className='border-r border-slate-600 text-xs px-2 text-left'>Kinerja</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>89</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>A</td>
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
                <th className='border border-slate-600 text-xs px-2 pb-2 text-center'>89</th>
                <th className='border border-slate-600 text-xs px-2 pb-2 text-center'>A</th>
              </tr>
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
                <td className='border-r border-slate-600 text-xs px-2 py-0.5 text-center'></td>
              </tr>
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>1</td>
                <td className='border-r border-slate-600 text-xs px-2 text-left'>Kedisiplinan</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>89</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>A</td>
              </tr>
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>2</td>
                <td className='border-r border-slate-600 text-xs px-2 text-left'>Kerjasama</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>89</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>A</td>
              </tr>
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>3</td>
                <td className='border-r border-slate-600 text-xs px-2 text-left'>Daya Kreasi</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>89</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>A</td>
              </tr>
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>4</td>
                <td className='border-r border-slate-600 text-xs px-2 text-left'>Etos Kerja</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>89</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>A</td>
              </tr>
              <tr>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>5</td>
                <td className='border-r border-slate-600 text-xs px-2 text-left'>Kinerja</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>89</td>
                <td className='border-r border-slate-600 text-xs px-2 text-center'>A</td>
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
                <th className='border border-slate-600 text-xs px-2 pb-2 text-center'>89</th>
                <th className='border border-slate-600 text-xs px-2 pb-2 text-center'>A</th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  )
}
