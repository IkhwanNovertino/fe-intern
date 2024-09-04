import React, { useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import TempalateDashboardIntern from '../template';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function CreateLogbook() {
  const router = useRouter();

  const [date, setDate] = useState('');
  const [activity, setActivity] = useState('');
  const [description, setDescription] = useState('');

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const token = getCookie('token');
  const jwtToken = atob(token);

  const handleCreateLogbook = (event) => {
    event.preventDefault();
    if (!date || !activity || !description) return toast.error('Field tidak boleh kosong');

    axios.post(`${ROOT_API}/${API_VERSION}/logbook`,
      { date, activity, description },
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        }
      }).then(res => {
        console.log(res.data);
        router.push('/intern/logbook')
      }).catch(err => {
        console.log(err.response);
      })
  }

  return (
    <TempalateDashboardIntern>
      <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Tambah Laporan Kegiatan</h1>
        </header>
        <section className="overview-list-submission">
          <div className="mt-6 w-full lg:max-w-3xl">
            <form onSubmit={(event) => handleCreateLogbook(event)} autoComplete="false">
              <div className="mb-2 md:mb-3">
                <label htmlFor="date" className="block text-sm md:text-base font-medium">
                  Tanggal Selesai Magang
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                    required
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
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                    required
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
                  className="resize-none w-full h-36 focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                  placeholder="Deskripsi kegiatan magang"
                  required
                ></textarea>
                
              </div>
              <div>
                <button
                  type="button"
                  className='py-2 px-4 mr-3 bg-light/20 text-dark font-medium rounded'
                >
                  Kembali
                </button>
                <button
                  type="submit"
                  className='py-2 px-6 mb-3 mr-3 bg-primary/20 rounded font-medium text-primary hover:bg-primary hover:text-white hover:transition hover:duration-300'
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </TempalateDashboardIntern>
  )
}
