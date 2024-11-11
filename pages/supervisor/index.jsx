import React, { useEffect, useState } from 'react'
import TemplateSupervisor from './template'
import CardInform from '@/components/molecules/card-info'
import Table from '@/components/atoms/table'
import TableHead from '@/components/atoms/table-head'
import TableData from '@/components/atoms/table-data'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import { format } from 'date-fns'
import SupervisorDashboard from '@/components/organisms/supervisor-dashboard'

export default function DashboardSupervisorPage({ dataCard, dataBiro, dataIntern }) {
  console.log(dataCard);
  console.log(dataBiro);
  console.log(dataIntern);
  
  // const [intern, setIntern] = useState([]);

  // const ROOT_API = process.env.NEXT_PUBLIC_API;
  // const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
  
  // useEffect(() => {
  //   const token = getCookie('token');
  //   const jwtToken = atob(token);

  //   axios.get(`${ROOT_API}/${API_VERSION}/intern`, {
  //     headers: {
  //       Authorization: `Bearer ${jwtToken}`,
  //     }
  //   }).then(res => {
  //     console.log(res.data.data);
  //     const data = res.data.data;
  //     setIntern(data);
      
  //   }).catch(err => {
  //     console.log(err.response);
  //   })
  // }, [])
  return (
    <TemplateSupervisor>
      <SupervisorDashboard dataBiro={dataBiro} dataCard={dataCard} dataIntern={dataIntern} />
    </TemplateSupervisor>
  )
}

export async function getServerSideProps({req}) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const jwtToken = Buffer.from(token, "base64").toString('ascii');

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/dashboard/supervisor`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

  return {
    props: {
      dataCard: response.data.data.card,
      dataBiro: response.data.data.bar,
      dataIntern: response.data.data.intern,
    },
  };
}