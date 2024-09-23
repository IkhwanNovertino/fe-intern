import React, { useEffect, useState } from 'react'
import TemplateSupervisor from '../template'
import { useParams, useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { format } from 'date-fns';
import axios from 'axios';
import Image from 'next/image';

export default function DetailLogbookSupervisor() {
  const [activity, setActivity] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [comment, setComment] = useState('laporan disetujui');
  const [commentHistory, setCommentHistory] = useState([]);
  const [intern, setIntern] = useState({
    name: '',
    id_num: '',
    email: '',
    phone_num: '',
  });

  // setDate(format(new Date(), 'dd MMMM yyyy'))
  const token = getCookie('token');
  const jwtToken = atob(token);
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
  
  const { id } = useParams();
  const router = useRouter();

  const handlePendingLogbook = (event) => {
    event.preventDefault();
    const data = {
      comment: comment,
      status: 'pending',
    }
    axios.put(`${ROOT_API}/${API_VERSION}/logbook/${id}`, 
      data, 
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        }
      }
    ).then(res => {
      console.log(res);
      router.back()
    }).catch(err => {
      console.log(err);
      
    })
    
  };
  const handleAcceptLogbook = (event) => {
    event.preventDefault();
    const data = {
      comment: comment,
      status: 'success',
    }
    axios.put(`${ROOT_API}/${API_VERSION}/logbook/${id}`, 
      data, 
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        }
      }
    ).then(res => {
      console.log(res);
      router.back()
    }).catch(err => {
      console.log(err);
    })
  };

  useEffect(() => {
    axios.get(`${ROOT_API}/${API_VERSION}/logbook/${id}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      }
    }).then(res => {
      console.log(res);
      const data = res.data.data;
      setActivity(data.activity);
      setDescription(data.description);
      setCommentHistory(data.comment);
      setDate(format(data.date, 'dd/MM/yyyy'))
      setIntern(data.intern)
    }).catch(err => {
      console.log(err);
    }); 
  }, [])
  
  return (
    <TemplateSupervisor>
      <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Detail Laporan Kegiatan</h1>
        </header>
        <section className="overview-list-submission">
          <div className="profile-interns flex items-center justify-start gap-4 mb-5">
            <div className="img-id">
              <Image
                src={'/img/profile-pic.png'}
                width={180}
                height={180}
                className="w-40 rounded-full"
              />
            </div>
            <div className="basic-id w-full flex items-start justify-between">
              <div>
                <p className="text-dark text-base font-bold name_interns">{ intern.name}</p>
                <p className="text-light text-sm font-medium num_id_interns">{ intern.id_num }</p>
                <p className="text-light text-sm font-medium mt-3">{ intern.email }</p>
                <p className="text-light text-sm font-medium">{intern.phone_num}</p>
              </div>
            </div>
          </div>
          <div className="h-1.5 w-full bg-secondary/20 mb-2 mt-2" />
          <div className="mt-6 w-full lg:max-w-3xl">
            <form autoComplete="false">
              <div className="mb-2 md:mb-3">
                <label htmlFor="date" className="block text-sm md:text-base font-medium">
                  Tanggal Selesai Magang
                  <input
                    type="text"
                    name="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary disabled:text-light"
                    required
                    readOnly={true}
                  />
                </label>
              </div>
              <div className="mb-2 md:mb-3">
                <label htmlFor="activity" className="block text-sm md:text-base font-medium">
                  Nama Kegiatan
                  <input
                    type="text"
                    name="activity"
                    id="activity"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    placeholder="Nama kegiatan"
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary disabled:text-light"
                    required
                    readOnly={true}
                  />
                </label>
              </div>
              <div className="mb-2 md:mb-3">
                <label htmlFor="description" className="block text-sm md:text-base font-medium">
                  Deskripsi Kegiatan
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="resize-none w-full h-28 focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary disabled:text-light"
                  placeholder="Deskripsi kegiatan magang"
                  required
                  readOnly={true}
                ></textarea>
              </div>
              <div className="mb-2 md:mb-3">
                <label htmlFor="description" className="block text-sm md:text-base font-medium">
                  Tanggapan Pembimbing
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  className="resize-none w-full h-20 focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary disabled:text-light"
                  required
                ></textarea>
              </div>
              <div className="mb-2 md:mb-12">
                <label htmlFor="description" className="block text-sm md:text-base font-medium">
                  Tanggapan Sebelumnya untuk laporan ini :
                </label>
                <ul className="list-disc ml-4">
                  {commentHistory.map((item, index) => (
                    <li className="py-2" key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <button
                  type="button"
                  className='py-2 px-4 mr-3 bg-light/20 text-dark font-medium rounded'
                  onClick={() => router.back()}
                >
                  Kembali
                </button>
                <button
                  type={'button'}
                  className='py-2 px-6 mb-3 mr-3 bg-warn/20 rounded font-medium text-warn hover:bg-warn   hover:text-white hover:transition hover:duration-300'
                  onClick={(event) => handlePendingLogbook(event)}
                >
                  Kirim tanggapan
                </button>
                <button
                  type={'button'}
                  className='py-2 px-6 mb-3 mr-3 bg-primary/20 rounded font-medium text-primary hover:bg-primary hover:text-white hover:transition hover:duration-300'
                  onClick={(event) => handleAcceptLogbook(event)}
                >
                  Setuju laporan
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </TemplateSupervisor>
  )
}
