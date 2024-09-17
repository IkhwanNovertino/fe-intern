import Badge from '@/components/atoms/badge';
import Table from '@/components/atoms/table';
import TableData from '@/components/atoms/table-data';
import TableHead from '@/components/atoms/table-head';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { format } from 'date-fns';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function TableSubmission() {
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
      const data = res.data.data;
      setSubmission(data);
      console.log(submission);
      
    }).catch(err => {
      console.log(err.response);
    })
  }, [])
  
  return (
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
          <tr key={el.id} className="mb-2">
            <TableData classname={"font-semibold"} title={format(new Date(el.createdAt), 'dd MMMM yyyy')} />
            <TableData classname={"uppercase"} title={el.doc_institute} />
            <TableData title={`${el.candidates.length} Peserta`} />
            <TableData title={el.type_of_submission} />
            <TableData>
              <Badge status={el.status} title={el.status === 'confirmed' ? 'waiting' : el.status } size={'small'}/>
            </TableData>
            <TableData>
              <Link
                href={`/umpeg/submission/${el.id}`}
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
