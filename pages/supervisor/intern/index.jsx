import React, { useEffect, useState } from 'react'
import TemplateSupervisor from '../template'
import Table from '@/components/atoms/table'
import TableHead from '@/components/atoms/table-head'
import TableData from '@/components/atoms/table-data'
import Link from 'next/link'
import axios from 'axios'
import Badge from '@/components/atoms/badge'
import { format } from 'date-fns'

export default function SupervisorInternListPage({dataIntern}) {
  const [intern, setIntern] = useState([]);
  console.log(dataIntern);

  useEffect(() => {
    setIntern(dataIntern)
  }, [])

  return (
    <TemplateSupervisor>
      <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Daftar Peserta Magang</h1>
        </header>
        <section className="overview-list-submission">
          <div className="mt-6 w-full lg:max-w-3xl">
            <Table>
              <thead>
                <tr>
                  <TableHead title={'Nama Peserta Magang'}/>
                  <TableHead title={'NIS/NIM'}/>
                  <TableHead title={'Mulai Magang'}/>
                  <TableHead title={'Selesai Magang'}/>
                  <TableHead title={'Status'}/>
                  <TableHead title={'Aksi'}/>
                </tr>
              </thead>
              <tbody>
                {dataIntern.map((item, index) => (
                  <tr key={index}>
                    <TableData title={item.name} classname={'uppercase font-semibold'}/>
                    <TableData title={item.id_num}/>
                    <TableData title={`${format(item.start_an_internship, 'dd MMM yyyy')}`}/>
                    <TableData title={`${format(item.end_an_internship, 'dd MMM yyyy')}`}/>
                    <TableData
                      title={item.statusIntern}
                      classname={`font-semibold ${item.statusIntern === 'pending' && 'text-warn' || item.statusIntern === 'active' && 'text-wait' || item.statusIntern === 'finish' && 'text-primary'}`}
                    />
                    <TableData>
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href={`/supervisor/intern/${item._id}`}
                          className="text-sm font-medium text-dark text-center px-2.5 py-1 bg-slate-200 rounded-md"
                        >
                          Detail
                        </Link>
                        <Link
                          href={`/supervisor/logbook/${item._id}`}
                          className="text-sm font-medium text-dark text-center px-2.5 py-1 bg-slate-200 rounded-md"
                        >
                          Logbook
                        </Link>
                        <Link
                          href={`/supervisor/certificate/${item._id}`}
                          className="text-sm font-medium text-dark text-center px-2.5 py-1 bg-slate-200 rounded-md"
                        >
                          Sertifikat
                        </Link>
                      </div>
                    </TableData>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </section>
      </section>
    </TemplateSupervisor>
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

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/intern`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

  return {
    props: {
      dataIntern: response.data.data
    },
  };
}