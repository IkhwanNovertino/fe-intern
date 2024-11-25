import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import TableData from '@/components/atoms/table-data'
import TableHead from '@/components/atoms/table-head'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const Table = dynamic(() => import('@/components/atoms/table'), {ssr: false})

export default function TableScore({ data, token, id }) {
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
  const router = useRouter();

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const handlerDeleteScore = (idScore) => {
    const score = idScore
    
    axios.put(`${ROOT_API}/${API_VERSION}/evaluation/${idEvaluate}`,
      {score}, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(res => {
      toast.success('Nilai berhasil dihapus')
      router.refresh();
    }).catch(err => {
      console.log(err);
    })
    
  };
  ;

  useEffect(() => {
    data ? setScore(data.score) : setScore(score);
    data ? setIdEvaluate(data._id) : setIdEvaluate(idEvaluate);
  }, [])

  return (
    <div className="flex flex-col items-start gap-2">
      {/* <div className="h-1.5 w-full bg-secondary/20 mb-2 mt-2" /> */}
      <article className="submission-data w-full mb-5">
        <header className="text-base font-bold text-primary mb-4">Nilai Peserta Magang</header>
        <section className="mt-6">
          <table className="table-fixed min-w-96 max-w-lg border-separate border-spacing-y-5 border-spacing-x-3.5">
            <thead>
              <TableHead title={'Komponen Nilai'} />
              <TableHead title={'Kategori'} />
              <TableHead title={'Nilai'} />
              <TableHead title={'Aksi'} />
            </thead>
            <tbody>
              {score.map((item, index) => (
                <tr key={index}>
                  <TableData title={item.title.title} />
                  <TableData title={(item.title.category === 'T' ? 'Teknis' : 'Non-Teknis')} />
                  <TableData title={item.number} />
                  <TableData>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type='button'
                        onClick={e => handlerDeleteScore(item._id)}
                        className="text-sm font-medium text-dark text-center px-2.5 py-1 bg-secondary/50 rounded-md disabled:bg-secondary/10 disabled:text-dark/50"
                        // disabled={(data.status === 'pending' ? false : true)}
                        disabled={true}
                      >
                        Hapus
                      </button>
                    </div>
                  </TableData>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </article>
    </div>
  )
}
