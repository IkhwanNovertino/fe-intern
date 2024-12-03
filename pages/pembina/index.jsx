import React from 'react'
import TemplateSupervisor from './template'
import axios from 'axios'
import PembinaDashboard from '@/components/organisms/pembina-dashboard';

export default function DashboardPembinaPage({dataCard, dataBar}) {
  return (
    <TemplateSupervisor>
      {/* <SupervisorDashboard dataBiro={dataBiro} dataCard={dataCard} dataIntern={dataIntern} /> */}
      <PembinaDashboard dataCard={dataCard} dataBar={dataBar} />
    </TemplateSupervisor>
  )
}

export async function getServerSideProps({req}) {
  const { token } = req.cookies;

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const jwtToken = Buffer.from(token, "base64").toString('ascii');

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/dashboard/pembina`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

  return {
    props: {
      dataCard: response.data.data.card,
      dataBar: response.data.data.bar,
    },
  };
}