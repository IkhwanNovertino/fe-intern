import React, { useEffect, useState } from 'react'
import TemplateSupervisor from '../template'
import Image from 'next/image'
import CardInform from '@/components/molecules/card-info'
import ItemLogbook from '@/components/molecules/item-logbook'
import DetailData from '@/components/molecules/detail-data'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { getCookie } from 'cookies-next'
import { format } from 'date-fns'
import Link from 'next/link'
import Table from '@/components/atoms/table'
import TableHead from '@/components/atoms/table-head'
import TableData from '@/components/atoms/table-data'
import EvaluatePage from '@/components/organisms/evaluate'

export default function InternCertificateSupervisor() {
  const [intern, setIntern] = useState({
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
    _id: '',
    date: 0,
    status: '',
    activity: '',
    description: '',
  }])

  const { id } = useParams();
  // console.log(id);

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  useEffect(() => {
    const token = getCookie('token');
    const jwtToken = atob(token);
    axios.get(`${ROOT_API}/${API_VERSION}/intern/${id}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }).then(res => {
      const data = res.data.data;
      // console.log(res);
      setIntern(data)
      setPlacement(data.placement)
      setLogbook(data.logbook);
      
    }).catch(err => {
      console.log(err.response);
      
    })
  }, [setIntern])

  return (
    <TemplateSupervisor>
      <section className="content-wrapper bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Detail Serifikat Peserta Magang</h1>
        </header>
        <section className="header-section w-[640px] mt-12">
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
            <EvaluatePage />
          </div>
        </section>
      </section>
    </TemplateSupervisor>
  )
}
