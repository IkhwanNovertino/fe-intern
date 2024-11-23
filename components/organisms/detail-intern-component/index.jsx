import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import HeadProfileIntern from '../header-profile-intern'
import DataSubmissionIntern from './data-submission-intern'
import DataPlacementIntern from './data-placement-intern'
import DataLogbookIntern from './data-logbook-intern'
import CertificateComponent from '@/components/atoms/certificate'

export default function DetailIntern({ data }) {
  const router = useRouter();

  const [profile, setProfile] = useState({
    _id: '',
    name: '',
    id_num: '',
    email: '',
    statusIntern: '',
  })
  
  const [intern, setIntern] = useState({
    _id: '',
    major: '',
    institute: '',
    start_an_internship: 0,
    end_an_internship: 0,
    offering_letter: '',
    acceptance_letter: '',
  });

  const [placement, setPlacement] = useState([{
    biro: {
      name: ''
    },
    supervisor: {
      name: '',
    }
  }]);
  
  const [logbook, setLogbook] = useState([{
    date: 0,
    status: '',
    activity: '',
    description: '',
  }])

  useEffect(() => {
    setIntern(data);
    setProfile(data);
    setPlacement(data.placement);
    setLogbook(data.logbook);
  }, [])
  return (
    <div className="mb-6">
      <HeadProfileIntern data={profile} />
      <div className="body flex flex-col items-start gap-2">
        <div className="h-1.5 w-full bg-secondary/20 mb-2 mt-2" />
        <DataSubmissionIntern data={intern} />
        <DataPlacementIntern data={placement} start_internship={intern.start_an_internship} end_internship={intern.end_an_internship} />
        <DataLogbookIntern data={logbook} id={intern._id} />
        <article className="submission-data w-full mb-5">
          <header className="text-base font-bold text-primary mb-4">
            Data Penilaian Peserta
          </header>
          <section className="w-full">
            {data.evaluate == null ? 
              <div>Penilaian belum tersedia</div> :
              <div>Penilaian sudah tersedia</div>
            }
          </section>
        </article>
      </div>
      <div className="py-4 px-2 mb-4">
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
