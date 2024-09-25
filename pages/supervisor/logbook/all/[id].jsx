import React, { useEffect } from 'react'
import { getCookie } from 'cookies-next';
import axios from 'axios';
import LogbookPerIntern from '@/components/organisms/logbook-intern';
import TemplateSupervisor from '../../template';

export default function LogbookInternSupervisor() {
  const token = getCookie('token');
  // const jwtToken = atob(token);
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
  useEffect(() => {
    axios.get(`${ROOT_API}/${API_VERSION}/logbook`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(res => {
      console.log(res);
      
    }).catch (err => {
      console.log(err);
      
    })
  }, [])
  return (
    <TemplateSupervisor>
      <LogbookPerIntern />
    </TemplateSupervisor>
  )
}
