import axios from 'axios';
import { getCookie } from 'cookies-next';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function SupervisorLogbookDetail({ data }) {

  const router = useRouter();
  const [id, setId] = useState('');
  const [activity, setActivity] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [comment, setComment] = useState('laporan disetujui');
  const [commentHistory, setCommentHistory] = useState([]);

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const token = getCookie('token');
  const jwtToken = atob(token);

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
    setActivity(data.activity);
    setDate(format(data.date, 'dd/MM/yyyy'));
    setDescription(data.description);
    setCommentHistory(data.comment);
    setId(data._id);
  }, []);
  return (
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
          className='py-2 px-6 mb-3 mr-3 rounded bg-slate-200 font-medium hover:bg-slate-700 hover:text-slate-50 hover:transition hover:duration-300'
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
  )
}
