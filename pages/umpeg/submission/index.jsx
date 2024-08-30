import React, { useEffect, useState } from 'react'
import SidebarUmpeg from '../sidebar-umpeg'
import Table from '@/components/atoms/table'
import TableHead from '@/components/atoms/table-head'
import TableData from '@/components/atoms/table-data'
import Link from 'next/link'
import Badge from '@/components/atoms/badge'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import { format } from 'date-fns'
import TableSubmission from '@/components/molecules/table-submission'
import TempalateDashboardUmpeg from '../template'

export default function SubmissionUmpeg() {
  const [submission, setSubmission] = useState([]);


  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  useEffect(() => {
    const token = getCookie('token');
    const jwtToken = atob(token);
    axios.get(`${ROOT_API}/${API_VERSION}/submission`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }).then(res => {
      // console.log(res.data?.data.payload);
      const data = res.data.data.payload;
      setSubmission(data);
      console.log(submission);
      
    }).catch(err => {
      console.log(err.response);
    })
  }, [])
  
  return (
    <TempalateDashboardUmpeg>
      <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Data Magang Diskominfo Banjarbaru</h1>
        </header>
        <section className="overview-list-submission">
          <div className="mt-6 w-full lg:max-w-3xl">
            <TableSubmission />
          </div>
        </section>
      </section>
    </TempalateDashboardUmpeg>
  )
}
