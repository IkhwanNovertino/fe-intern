import React from 'react'
import TempalateDashboardUmpeg from '../template'
import UmpegTableSubmission from '@/components/organisms/umpeg-table-submission'
import axios from 'axios';

export default function UmpegSubmissionListPage({ data }) {
  return (
    <TempalateDashboardUmpeg>
      <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Data Magang Diskominfo Banjarbaru</h1>
        </header>
        <section className="overview-list-submission">
          <div className="mt-6 w-full lg:max-w-3xl">
            <UmpegTableSubmission dataSubmission={data}/>
          </div>
        </section>
      </section>
    </TempalateDashboardUmpeg>
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

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/submission`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

  return {
    props: {
      data: response.data,
    },
  };
}