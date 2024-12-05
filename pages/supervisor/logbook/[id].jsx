import React from 'react'
import TemplateSupervisor from '../template'
import axios from 'axios';
import SupervisorLogbookListIntern from '@/components/organisms/supervisor-logbook-intern';

export default function SupervisorLogbookListPerInternPage({result}) {
  return (
    <TemplateSupervisor>
      <SupervisorLogbookListIntern data={result}/>
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

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/logbook`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })
  const data = response.data.data.map(item => item.intern.filter(el => el._id === id));
  let result
  data.forEach(element => {
    if (element.length > 0) {
      result = element
    }
  });
  

  return {
    props: {
      result: result, 
    },
  };
}
