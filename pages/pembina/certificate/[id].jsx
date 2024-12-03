import React from 'react'
import TempalateDashboardPembina from '../template'
import axios from 'axios';
import DetailIntern from '@/components/organisms/detail-intern-component';

export default function PembinaCertificateDetailPage({ data, token }) {
  console.log(data);
  
  return (
    <TempalateDashboardPembina>
      <DetailIntern data={data} token={ token } />
    </TempalateDashboardPembina>
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

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/intern/${id}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

  return {
    props: {
      data: response.data.data,
      token: jwtToken,
    },
  };
}
