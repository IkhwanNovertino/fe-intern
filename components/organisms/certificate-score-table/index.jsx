import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import TableData from '@/components/atoms/table-data'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const Table = dynamic(() => import('@/components/atoms/table'), { ssr: false });
const TableHead = dynamic(() => import('@/components/atoms/table-head'), { ssr: false });

export default function TableScore({ data, token }) {
  // data => jika belum ada bernilai null, jika sudah ada nilainya;
  console.log(data);

  const [evaluate, setEvaluate] = useState({
    _id: '',
    evaluateId: '',
    status: '',
    intern: {
      _id: '',
    },
    score: [{
      number: 0,
      title: {
        title: '',
        category: '',
        _id: '',
      },
      _id: '',
    }],
  })

  const router = useRouter();

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const handlerDeleteScore = (idScore) => {
    const score = idScore
    
    axios.put(`${ROOT_API}/${API_VERSION}/evaluation/${evaluate._id}`,
      {score}, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(res => {
      toast.success('Nilai berhasil dihapus')
      console.log(res.data.data);
      
      router.refresh();
    }).catch(err => {
      console.log(err);
    })
    
  };

  const handleCreateCertificate = (event) => {
    if (!evaluate) return toast.error('Data sertifikat tidak ditemukan')
    if (evaluate.score.length <= 0) return toast.error('Masukkan nilai peserta magang')
    
    axios.post(`${ROOT_API}/${API_VERSION}/certificate`, 
      {
        intern: evaluate.intern._id,
        evaluation: evaluate._id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    ).then(res => {
      console.log(res);
      toast.success('Sertifikat berhasil dibuat')
      router.push(`/supervisor/intern/${evaluate.intern._id}`);
    }).catch(err => {
      console.log(err);
      toast.error('Sertifikat gagal dibuat.')
    })
  }

  useEffect(() => {
    setEvaluate(data);
  }, [])

  return (

    <div className='relative flex justify-between w-full'>
      <div className="flex flex-col items-start gap-2">
        <article className="table-data-nilai w-full mb-5">
          <header className="relative flex justify-between mb-4 w-full">
            <h1 className="text-base font-bold text-primary">Nilai Peserta Magang</h1>
            <div className='mt-px'>
              <button
                onClick={e => handleCreateCertificate(e)}
                className='py-2 px-4 bg-wait/20 font-medium text-dark rounded hover:bg-wait hover:text-white hover:transition-all hover:ease-in-out hover:duration-300 disabled:bg-wait/10 disabled:text-dark/50'
                disabled={(evaluate?.status === 'pending' ? false : true)}
              >
                Buat Sertifikat
              </button>
            </div>
          </header>
          <section className="mt-6">
            <table className="table-fixed min-w-96 max-w-lg border-separate border-spacing-y-5 border-spacing-x-3.5">
              <thead>
                <TableHead title={'Komponen Nilai'} />
                <TableHead title={'Kategori'} />
                <TableHead title={'Nilai'} />
                <TableHead title={'Aksi'} />
              </thead>
              <tbody>
                {evaluate && 
                  <>
                    {evaluate.score.map((item, index) => (
                      <tr key={index}>
                        <TableData title={item?.title?.title} />
                        <TableData title={(item?.title?.category === 'T' ? 'Teknis' : 'Non-Teknis')} />
                        <TableData title={item?.number} />
                        <TableData>
                          <div className="flex flex-wrap gap-2">
                            <button
                              type='button'
                              onClick={e => handlerDeleteScore(item?._id)}
                              className="text-sm font-medium text-dark text-center px-2.5 py-1 bg-secondary/50 rounded-md disabled:bg-secondary/10 disabled:text-dark/50"
                              disabled={(evaluate?.status === 'pending' ? false : true)}
                            >
                                Hapus
                            </button>
                          </div>
                        </TableData>
                      </tr>
                    ))}
                  </>
                }
                
              </tbody>
            </table>
          </section>
        </article>
      </div>
    </div>

    
  )
}
