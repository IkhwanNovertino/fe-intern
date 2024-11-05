import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CardInform from '@/components/molecules/card-info'
import ItemLogbook from '@/components/molecules/item-logbook'
import DetailData from '@/components/molecules/detail-data'
import { format } from 'date-fns'
import ButtonDownload from '@/components/atoms/button-download'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function DetailIntern({ data }) {
  const router = useRouter();
  
  const [intern, setIntern] = useState({
    _id: '',
    name: '',
    id_num: '',
    email: '',
    phone_num: '',
    major: '',
    institute: '',
    start_an_internship: 0,
    end_an_internship: 0,
    offering_letter: '',
    acceptance_letter: '',
  });
  const [placement, setPlacement] = useState([{
    biro: {
      name: '',
    },
    supervisor: {
      name: ''
    }
  }]);
  const [logbook, setLogbook] = useState([{
    date: 0,
    status: '',
    activity: '',
    description: '',
  }])

  useEffect(() => {
    setIntern(data)
    setPlacement(data.placement)
    setLogbook(data.logbook);
  }, [setIntern])
  return (
    <div className="mb-6">
      <div className="profile-interns flex items-center justify-start gap-4 mb-5">
        <div className="img-id">
          <Image
            src={'/img/profile-pic.png'}
            width={180}
            height={180}
            className="w-40 rounded-full"
          />
        </div>
        <div className="basic-id w-full flex items-start justify-between">
          <div>
            <p className="text-dark text-base font-bold name_interns">{ intern.name}</p>
            <p className="text-light text-sm font-medium num_id_interns">{ intern.id_num }</p>
            <p className="text-light text-sm font-medium mt-3">{ intern.email }</p>
            <p className="text-light text-sm font-medium">{intern.phone_num}</p>
          </div>
        </div>
      </div>
      <div className="body flex flex-col items-start gap-2">
        <div className="h-1.5 w-full bg-secondary/20 mb-2 mt-2" />
        <article className="submission-data w-full mb-5">
        <header className="text-base font-bold text-primary mb-4">Data Pengajuan Peserta</header>
          <section className="">
            <DetailData
              title={'Jurusan'}
              data={intern.major}
            />
            <DetailData
              title={'Sekolah/Kampus/Instansi'}
              data={intern.institute}
            />
            <DetailData
              title={'Mulai Magang'}
              data={format(intern.start_an_internship, 'dd MMMM yyyy')}
            />
            <DetailData
              title={'Selesai Magang'}
              data={format(intern.end_an_internship, 'dd MMMM yyyy')}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-3">
              <p className="text-sm text-light font-medium">File Surat Pengajuan</p>
              <p className="text-sm text-dark font-medium md:justify-self-end">
                <ButtonDownload
                  title={'unduh surat pengajuan'}
                  category={'offering'}
                  filename={intern.offering_letter}
                />
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-3">
              <p className="text-sm text-light font-medium">File Surat Balasan</p>
              <p className="text-sm text-dark font-medium md:justify-self-end">
                <ButtonDownload
                  title={'unduh surat persetujuan'}
                  category={'acceptance'}
                  filename={intern.acceptance_letter}
                />
              </p>
            </div>
          </section>
        </article>
        <article className="submission-data w-full mb-5">
          <header className="text-base font-bold text-primary mb-4">Data Penempatan Peserta</header>
          <section className="w-fit flex flex-wrap gap-4">
            {placement.map((item, index) => (
              <CardInform >
                <div className="pr-4">
                  <p className="text-xs text-light">{format(intern.start_an_internship, 'dd MMMM yyyy')} - {format(intern.end_an_internship, 'dd MMMM yyyy')}</p>
                  <p className="text-base text-dark font-semibold">{item.biro.name}</p>
                  <p className="text-xs text-light mt-3">Pembimbing:</p>
                  <p className="text-sm text-dark font-medium uppercase">{item.supervisor.name}</p>
                </div>
              </CardInform>
            ))}
          </section>
        </article>
        <article className="submission-data w-full mb-5">
        <header className="text-base font-bold text-primary mb-4">Data Kegiatan Peserta</header>
          <section className="">
            {logbook.length > 0 ? (
              <>
                {logbook.map((item, index) => (
                  <ItemLogbook
                    date={format(item.date, 'dd MMMM yyyy')}
                    status={item.status}
                    log_desc={item.description}
                  />
                ))}
                <Link
                  href={`/umpeg/intern/${intern._id}`}
                  className="px-2 py-2 mr-0 mt-3  rounded font-medium text-dark hover:underline hover:decoration-dark hover:decoration-2 hover:underline-offset-4"
                >
                  Daftar Logbook
                </Link>
              </>
            ) : (
                <div>Laporan kegiatan belum diisi...</div>
            )}
          </section>
        </article>
        <article className="submission-data w-full mb-5">
        <header className="text-base font-bold text-primary mb-4">Data Penilaian Peserta</header>
          <section className="w-full">
            SERTIFIKAT BELUM ADA
          </section>
        </article>
      </div>
      <div className="py-4 px-2 mb-4 flex-col md:flex-row md:justify-around">
        <button
          type="button"
          className='py-2 px-6 mb-3 mr-3 rounded bg-slate-200 font-medium hover:bg-slate-700 hover:text-slate-50 hover:transition hover:duration-300'
          onClick={() => router.back()}
        >
          Kembali
        </button>
      </div>
    </div>
  )
}
