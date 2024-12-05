import React from 'react'
import TempalateDashboardPembina from '../template'
import axios from 'axios';
import { format } from 'date-fns';
import Table from '@/components/atoms/table';
import TableHead from '@/components/atoms/table-head';
import TableData from '@/components/atoms/table-data';
import Link from 'next/link';

export default function PembinaCertificateListPage({ data }) {
  console.log(data);
  
  return (
    <TempalateDashboardPembina>
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
                  <TableHead title={'Jurusan'}/>
                  <TableHead title={'Asal Sekolah/Kampus'}/>
                  <TableHead title={'Status'}/>
                  <TableHead title={''}/>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <TableData title={item.name} classname={'uppercase font-semibold'}/>
                    <TableData title={item.id_num}/>
                    <TableData title={item.major}/>
                    <TableData title={item.institute}/>
                    <TableData
                      title={item.statusIntern}
                      classname={`font-semibold ${item.statusIntern === 'pending' && 'text-warn' || item.statusIntern === 'active' && 'text-wait' || item.statusIntern === 'finish' && 'text-primary'}`}
                    />
                    <TableData title={item.biro}/>
                    <TableData>
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href={`/pembina/certificate/${item._id}`}
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
    </TempalateDashboardPembina>
  )
}

export async function getServerSideProps({req}) {
  const { token } = req.cookies;

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
      data: response.data.data
    },
  };
}
