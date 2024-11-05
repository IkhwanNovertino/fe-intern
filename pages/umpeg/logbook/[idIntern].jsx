import React, { useEffect } from 'react';
import axios from 'axios';
import LogbookPerIntern from '@/components/organisms/logbook-intern';
import TempalateDashboardUmpeg from '../template';
import { jwtDecode } from 'jwt-decode';
import UmpegLogbookDetail from '@/components/organisms/umpeg-logbook-intern';

export default function UmpegInternLogbookPage({ intern, logbook, user }) {
  console.log(intern);
  console.log(logbook);
  console.log(user);
  
  return (
    <TempalateDashboardUmpeg>
      <UmpegLogbookDetail intern={intern} logbook={logbook} url={user.role} />
    </TempalateDashboardUmpeg>
  )
}

export async function getServerSideProps({req, params}) {
  const {token} = req.cookies;
  const { idIntern } = params;

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const jwtToken = Buffer.from(token, "base64").toString('ascii');
  const payload = jwtDecode(jwtToken);

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/logbook?intern=${idIntern}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

  return {
    props: {
      intern: response.data.data.interns,
      logbook: response.data.data.logbook,
      user: payload.user,
    },
  };
}

