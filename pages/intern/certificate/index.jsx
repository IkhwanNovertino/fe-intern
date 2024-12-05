import React from 'react'
import TempalateDashboardIntern from '../template'
import CertificateComponent from '@/components/atoms/certificate'
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export default function CertificateIntern({ data }) {
  console.log(data);
  
  return (
    <TempalateDashboardIntern>
      <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Sertifikat Peserta Magang</h1>
        </header>
        <section className="overview-list-submission">
          <div className="mt-6 w-full lg:max-w-3xl">
            {data ?
              <CertificateComponent isDownload={data?.status === 'success' ? true : false} data={data} />
              : 
              <div>Sertifikat belum tersedia</div>
            }
          </div>
        </section>
      </section>
    </TempalateDashboardIntern>
  )
}

export async function getServerSideProps({req}) {
  const {token} = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, "base64").toString('ascii');
  const payload = jwtDecode(jwtToken);


  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;


  const response = await axios.get(`${ROOT_API}/${API_VERSION}/intern/${payload.user.id}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

  return {
    props: {
      data: response?.data?.data?.certificate,
    },
  };
}
