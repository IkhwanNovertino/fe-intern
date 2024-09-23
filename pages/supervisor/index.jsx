import React, { useEffect, useState } from 'react'
import TemplateSupervisor from './template'
import CardInform from '@/components/molecules/card-info'
import Table from '@/components/atoms/table'
import TableHead from '@/components/atoms/table-head'
import TableData from '@/components/atoms/table-data'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import { format } from 'date-fns'

export default function DashboardSupervisor() {
  const [intern, setIntern] = useState([]);

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
  
  useEffect(() => {
    const token = getCookie('token');
    const jwtToken = atob(token);

    axios.get(`${ROOT_API}/${API_VERSION}/intern`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      }
    }).then(res => {
      console.log(res.data.data);
      const data = res.data.data;
      setIntern(data);
      
    }).catch(err => {
      console.log(err.response);
    })
  }, [])
  return (
    <TemplateSupervisor>
      <section className="content-wrapper bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Data Magang Diskominfo Banjarbaru</h1>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <CardInform>
              <p className="text-base font-semibold text-dark">
                Jumlah peserta magang
                <br />
                status aktif
              </p>
              <div className="relative flex items-center justify-start mt-3">
                <p className="number-data text-3xl font-extrabold text-dark">8</p>
                <p className="title-data text-xs/tight text-light ml-1 pb-px">
                  peserta
                  <br />
                  siswa/mahasiswa
                </p>
              </div>
            </CardInform>
            <CardInform>
              <p className="text-base font-semibold text-dark">
                Total peserta magang
                <br />
                tahun ini
              </p>
              <div className="relative flex items-center justify-start mt-3">
                <p className="number-data text-3xl font-extrabold text-dark">28</p>
                <p className="title-data text-xs/tight text-light ml-1 pb-px">
                  peserta
                  <br />
                  siswa/mahasiswa
                </p>
              </div>
            </CardInform>
          </div>
        </header>
        {/* data biro */}
        <section className="overview-data-biro">
          <h1 className="text-dark text-2xl font-semibold text-left mt-10">Data peserta di tiap bidang kegiatan</h1>
          <div className="mt-6" />
        </section>
        {/* daftar submission */}
        <section className="overview-list-submission">
          <h1 className="text-dark text-2xl font-semibold text-left mt-24">Daftar peserta magang terbaru</h1>
          <div className="mt-2 w-full lg:max-w-4xl">
            <Table>
              <thead>
                <tr>
                  <TableHead title={'Nama Peserta Magang'} />
                  <TableHead title={'Asal Instansi'} />
                  <TableHead title={'Mulai'}/>
                  <TableHead title={'Selesai'}/>
                  <TableHead title={'Bidang Kegiatan'}/>
                  <TableHead title={'Status'}/>
                </tr>
              </thead>
              <tbody>
                {intern.map((item, index) => (
                  <tr key={index}>
                    <TableData title={item.name} classname={'uppercase font-semibold'}/>
                    <TableData title={item.institute} />
                    <TableData title={format(item.start_an_internship, 'dd/MM/yyyy')} />
                    <TableData title={format(item.end_an_internship, 'dd/MM/yyyy')} />
                    <TableData title={item.biro} />
                    <TableData
                      title={item.statusIntern}
                      classname={
                        (item.statusIntern === 'pending' && 'text-warn') ||
                        (item.statusIntern === 'active' && 'text-primary') ||
                        (item.statusIntern === 'active' && 'text-wait')
                      }
                    />
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
