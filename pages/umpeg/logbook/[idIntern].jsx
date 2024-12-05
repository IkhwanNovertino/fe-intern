import React, { useEffect } from 'react';
import axios from 'axios';
import LogbookPerIntern from '@/components/organisms/logbook-intern';
import TempalateDashboardUmpeg from '../template';
import UmpegLogbookDetail from '@/components/organisms/umpeg-logbook-intern';

export default function UmpegInternLogbookPage({ intern, logbook }) {
  return (
    <TempalateDashboardUmpeg>
      <UmpegLogbookDetail intern={intern} logbook={logbook}/>
    </TempalateDashboardUmpeg>
  )
}

export async function getServerSideProps({req, params}) {
  const {token} = req.cookies;
  const { idIntern } = params;

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

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/logbook?intern=${idIntern}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

  return {
    props: {
      intern: response.data.data.interns,
      logbook: response.data.data.logbook,
    },
  };
}

