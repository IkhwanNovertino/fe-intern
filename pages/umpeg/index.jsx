import React from 'react'
import TempalateDashboardUmpeg from './template'
import UmpegDashboard from '@/components/organisms/umpeg-dashboard'
import axios from 'axios';

export default function DashboardUmpegPage({dataCard, dataBiro, dataSubmit}) {
  return (
    <TempalateDashboardUmpeg>
      <UmpegDashboard dataCard={dataCard} dataBiro={dataBiro} dataSubmit={dataSubmit} />
    </TempalateDashboardUmpeg>
  )
}

export async function getServerSideProps({req}) {
  const { token } = req.cookies;

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const jwtToken = Buffer.from(token, "base64").toString('ascii');

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/dashboard/umpeg`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

  return {
    props: {
      dataCard: response.data.data.card,
      dataBiro: response.data.data.bar,
      dataSubmit: response.data.data.submission,
    },
  };
}

