import React, { useEffect } from 'react'
import TemplateSupervisor from '../template'
import { getCookie } from 'cookies-next';
import axios from 'axios';

export default function LogbookSupervisor() {
  const token = getCookie('token');
  const jwtToken = atob(token);
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
  useEffect(() => {
    axios.get(`${ROOT_API}/${API_VERSION}/logbook`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      }
    }).then(res => {
      console.log(res);
      
    }).catch (err => {
      console.log(err);
      
    })
  }, [])
  return (
    <TemplateSupervisor>
      <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Daftar Laporan Kegiatan</h1>
        </header>
        <section className="overview-list-logbook">
          <div className="mt-6 w-full lg:max-w-3xl">
            
          </div>
        </section>
      </section>
    </TemplateSupervisor>
  )
}
