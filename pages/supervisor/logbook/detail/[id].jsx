import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { format } from 'date-fns';
import axios from 'axios';
import TemplateSupervisor from '../../template';
import HeadProfileIntern from '@/components/organisms/header-profile-intern';
import SupervisorLogbookDetail from '@/components/organisms/supervisor-logbook-detail';

export default function DetailLogbookSupervisor({ dataIntern, dataLog }) {
  return (
    <TemplateSupervisor>
      <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Detail Laporan Kegiatan</h1>
        </header>
        <section className="detail-logbook">
          <HeadProfileIntern data={dataIntern}/>
          <div className="h-1.5 w-full bg-secondary/20 mb-2 mt-2" />
          <div className="mt-6 w-full lg:max-w-3xl">
            <SupervisorLogbookDetail data={dataLog}/>
          </div>
        </section>
      </section>
    </TemplateSupervisor>
  )
}


export async function getServerSideProps({req, params}) {
  const {token} = req.cookies;
  const { id } = params;

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

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/logbook/${id}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

  return {
    props: {
      dataIntern: response.data.data.intern,
      dataLog: response.data.data,
    },
  };
}