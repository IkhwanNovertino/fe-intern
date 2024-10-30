import Table from '@/components/atoms/table'
import TableData from '@/components/atoms/table-data'
import TableHead from '@/components/atoms/table-head'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export default function TableScore() {

  const [score, setScore] = useState([
    {
      number: 0,
      title: {
        title: '',
        category: '',
        _id: '',
      },
      _id: ''
    }
  ]);
  const [idEvaluate, setIdEvaluate] = useState('');

  const { id } = useParams();
  const token = getCookie('token');
  const jwtToken = atob(token);

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const handlerDeleteScore = (idScore) => {
    const score = idScore
    console.log(idScore);
    
    axios.put(`${ROOT_API}/${API_VERSION}/evaluation/${idEvaluate}`,
      {score}, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
    
  };
  ;

  useEffect(() => {
    
    axios.get(`${ROOT_API}/${API_VERSION}/evaluation/${id}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      }
    }).then(res => {
      // console.log(res);
      setScore(res.data.data.score)
      setIdEvaluate(res.data.data._id);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className="flex flex-col items-start gap-2">
      {/* <div className="h-1.5 w-full bg-secondary/20 mb-2 mt-2" /> */}
      <article className="submission-data w-full mb-5">
        <header className="text-base font-bold text-primary mb-4">Nilai Peserta Magang</header>
        <section className="mt-6">
          <Table>
            <thead>
              <TableHead title={'Komponen Nilai'} />
              <TableHead title={'Nilai'} />
              <TableHead title={'Aksi'} />
            </thead>
            <tbody>
              {/* <tr>
                <TableData title={'Disiplin waktu'} />
                <TableData title={'80'} />
                <TableData>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/supervisor/logbook/all`}
                      className="text-sm font-medium text-dark text-center px-2.5 py-1 bg-secondary/50 rounded-md"
                    >
                      Hapus
                    </Link>
                  </div>
                </TableData>
              </tr> */}
              {score.map((item, index) => (
                <tr key={index}>
                  <TableData title={item.title.title} />
                  <TableData title={item.number} />
                  <TableData>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type='button'
                        onClick={e => handlerDeleteScore(item._id)}
                        className="text-sm font-medium text-dark text-center px-2.5 py-1 bg-secondary/50 rounded-md"
                      >
                        Hapus
                      </button>
                    </div>
                  </TableData>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </article>
    </div>
  )
}
