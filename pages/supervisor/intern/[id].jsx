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
import DetailIntern from '@/components/organisms/detail-intern-component'

export default function SupervisorInternDetailPage({internDetail}) {
  // console.log(internDetail);
  
  // const [intern, setIntern] = useState({
  //   name: '',
  //   id_num: '',
  //   email: '',
  //   phone_num: '',
  //   major: '',
  //   institute: '',
  //   start_an_internship: 0,
  //   end_an_internship: 0,
  //   offering_letter: '',
  //   acceptance_letter: '',
  // });
  // const [placement, setPlacement] = useState([{
  //   biro: {
  //     name: '',
  //   },
  //   supervisor: {
  //     name: ''
  //   }
  // }]);
  // const [logbook, setLogbook] = useState([{
  //   _id: '',
  //   date: 0,
  //   status: '',
  //   activity: '',
  //   description: '',
  // }])

  // const { id } = useParams();
  // console.log(id);

  // const ROOT_API = process.env.NEXT_PUBLIC_API;
  // const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  // useEffect(() => {
  //   const token = getCookie('token');
  //   const jwtToken = atob(token);
  //   axios.get(`${ROOT_API}/${API_VERSION}/intern/${id}`, {
  //     headers: {
  //       Authorization: `Bearer ${jwtToken}`
  //     }
  //   }).then(res => {
  //     const data = res.data.data;
  //     console.log(res);
  //     setIntern(data)
  //     setPlacement(data.placement)
  //     setLogbook(data.logbook);
      
  //   }).catch(err => {
  //     console.log(err.response);
      
  //   })
  // }, [setIntern])

  return (
    <TemplateSupervisor>
      <section className="content-wrapper bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Detail Peserta Magang</h1>
        </header>
        <section className="header-section w-[640px] mt-12">
          <DetailIntern data={internDetail}/>
        </section>
      </section>
    </TemplateSupervisor>
  )
}

export async function getServerSideProps({req, params}) {
  const {token} = req.cookies;
  const { id } = params;

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const jwtToken = Buffer.from(token, "base64").toString('ascii');

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/intern/${id}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

  return {
    props: {
      internDetail: response.data.data,
    },
  };
}
