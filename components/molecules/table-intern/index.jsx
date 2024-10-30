import Table from '@/components/atoms/table'
import TableData from '@/components/atoms/table-data'
import TableHead from '@/components/atoms/table-head'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import { format } from 'date-fns'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function TableIntern() {
  const [intern, setIntern] = useState([])

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
      const data = res.data.data;
      setIntern(data);
      console.log(data);
      
    }).catch(err => {
      console.log(err.response);
    })
  }, [setIntern])
  return (
    <Table>
      <thead>
        <tr>
          <TableHead title={'Nama Peserta Magang'} />
          <TableHead title={'NIM/NIS'} />
          <TableHead title={'Mulai Magang'}/>
          <TableHead title={'Selesai Magang'}/>
          <TableHead title={'Status Peserta'}/>
          <TableHead title={'Aksi'}/>
        </tr>
      </thead>
      <tbody>
        {intern.map((item, index) => (
          <tr key={index}>
            <TableData title={item.name} classname={'uppercase font-semibold'}/>
            <TableData title={item.id_num} />
            <TableData title={format(item.start_an_internship, 'dd MMMM yyyy')} />
            <TableData title={format(item.end_an_internship, 'dd MMMM yyyy')} />
            <TableData title={item.statusIntern}
              classname={`font-semibold ${item.statusIntern === 'pending' && 'text-warn' || item.statusIntern === 'active' && 'text-wait' || item.statusIntern === 'finish' && 'text-primary'}`}
            />
            <TableData>
              <Link
                href={`/umpeg/intern/${item._id}`}
                className="text-sm font-medium text-dark text-center px-2.5 py-1 bg-slate-200 rounded-md"
              >
                Detail
              </Link>
            </TableData>
          </tr>

        ))}
        
      </tbody>
    </Table>
  )
}
