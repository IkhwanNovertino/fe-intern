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
    <section className="flex xl:max-w-5xl xl:justify-center xl:mx-auto">
      <SidebarUmpeg/>
      <main className="main-wrapper relative w-full overflow-y-auto">
        <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
          <header className="overview-title">
            <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Data Magang Diskominfo Banjarbaru</h1>
          </header>
          <section className="overview-list-submission">
            <div className="mt-6 w-full lg:max-w-3xl">
              <Table>
                <thead>
                  <tr>
                    <TableHead title={'tanggal pengajuan'}/>
                    <TableHead title={'instansi pengaju'}/>
                    <TableHead title={'jumlah peserta'}/>
                    <TableHead title={'tipe pengajuan'}/>
                    <TableHead title={'status'}/>
                    <TableHead title={'aksi'}/>
                  </tr>
                </thead>
                <tbody>
                  {submission.map(el => (
                    <tr key={el.id}>
                      <TableData title={format(new Date(el.createdAt), 'dd MMMM yyyy')} />
                      <TableData classname={"uppercase"} title={el.doc_institute} />
                      <TableData title={`${el.candidates.length} Peserta`} />
                      <TableData title={el.type_of_submission} />
                      <TableData>
                        <Badge status={el.status} title={el.status === 'confirmed' ? 'waiting' : el.status } size={'small'}/>
                      </TableData>
                      <TableData>
                      <Link
                        href={`/umpeg/submission/${el.id}`}
                        className="text-xs font-medium text-black text-center px-2.5 py-1 bg-slate-200 rounded-md"
                      >
                        Detail
                      </Link>
                      </TableData>
                    </tr>
                  ))}
                  
                </tbody>
              </Table>
            </div>
          </section>
        </section>
      </main>
    </section>
  )
}
