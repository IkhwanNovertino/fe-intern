import React from 'react'
import TempalateDashboardUmpeg from '../template'
import axios from 'axios'
import UmpegInternDetail from '@/components/organisms/umpeg-intern-detail';

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export default function InternDetailUmpeg({internDetail}) {


  return (
    <TempalateDashboardUmpeg>
      <section className="content-wrapper bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Detail Peserta Magang</h1>
        </header>
        <section className="header-section w-[640px] mt-12">
          <UmpegInternDetail data={internDetail}/>
        </section>
      </section>
    </TempalateDashboardUmpeg>
  )
}

export async function getServerSideProps({req, params}) {
  const {token} = req.cookies;
  const { id } = params;

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
