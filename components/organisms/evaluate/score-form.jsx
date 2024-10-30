import React, { useEffect, useState } from 'react'
import ScoreComponent from '@/components/molecules/score-component'
import { getCookie } from 'cookies-next';
import axios from 'axios';
import { useParams } from 'next/navigation';
import ModalScoreComponent from '@/components/molecules/modal-score-component';

export default function ScoreForm() {
  const [title, setTitle] = useState('');
  const [number, setNumber] = useState(0);
  const [scoreComponent, setScoreComponent] = useState([
    {
      _id: '',
      title: ''
    }
  ]);

  const { id } = useParams();
  // console.log(id);
  

  const token = getCookie('token');
  const jwtToken = atob(token);

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const handleInputScore = () => {
    const dataForm = {
      title: title,
      number: number,
    }

    const dataSend = {
      intern: id,
      score: JSON.stringify(dataForm)
    }

    axios.post(`${ROOT_API}/${API_VERSION}/evaluation`, 
      dataSend, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }).then(res => {
      // console.log(res);
    }).catch(err=> {
      console.log(err);
      
    })
  };

  useEffect(() => {
    axios.get(`${ROOT_API}/${API_VERSION}/score-component`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }).then(res => {
      // console.log(res.data.data);
      setScoreComponent(res.data.data);
    }).catch(err => {
      console.log(err);
    })
  }, []);
  return (
    <article className="w-full mb-5">
      <header className="text-base font-bold text-primary mb-4">Form Penilaian Magang</header>
      <section className="mt-6">
        <form autoComplete="false">
          <div className="mb-2 md:mb-3">
            <select
              name="title"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="appearance-none w-full py-2 px-2 items-center text-base font-light rounded-md focus:outline-none border border-gray-300 focus-within:border-primary "
            >
              <option label="--- Pilih salah satu komponen nilai ---"></option>
              {scoreComponent.map(item => (
                <option key={item._id} value={item._id} label={item.title}></option>
              ))}
            </select>
          </div>
          <div className="mb-2 md:mb-3">
            <input
              type="number"
              name="number"
              id="number"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
              className="appearance-none focus:outline-none text-base font-normal bg-primary/0 px-2 py-2 md:py-2 mt-2 rounded-md border border-gray-300 focus-within:border-primary"
            />
          </div>
          <div className="mb-2 mt-3 md:mb-3">
            <button
              className='py-2 px-3 bg-primary/20 text-primary font-medium rounded hover:text-white hover:bg-primary/90 hover:transition hover:duration-300'
              type="button"
              onClick={handleInputScore}
            >
                Simpan Nilai
            </button>
            <ModalScoreComponent />
          </div>
        </form>
      </section>
    </article>
  )
}
