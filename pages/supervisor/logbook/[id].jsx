import React, { useEffect, useState } from 'react'
import TemplateSupervisor from '../template'
import { useParams, useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { format } from 'date-fns';

export default function DetailLogbookSupervisor() {
  const [activity, setActivity] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [comment, setComment] = useState([]);
  const [disable, setDisable] = useState(true)

  setDate(format(new Date(), 'dd MMMM yyyy'))

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
  
  const { id } = useParams();
  const router = useRouter();

  const token = getCookie('token');
  const jwtToken = atob(token);
  
  return (
    <TemplateSupervisor>
      <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Detail Laporan Kegiatan</h1>
        </header>
        <section className="overview-list-submission">
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
                  className="resize-none w-full h-36 focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary disabled:text-light"
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
                  id="description"
                  name="description"
                  className="resize-none w-full h-36 focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary disabled:text-light"
                  required
                  disabled={true}
                >
                  {comment.length > 0 ? comment.join(' ;') : 'Tidak ada tanggapan dari pembimbing'}
                </textarea>
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
                  className='py-2 px-6 mb-3 mr-3 bg-primary/20 rounded font-medium text-primary hover:bg-primary hover:text-white hover:transition hover:duration-300'
                  onClick={(event) => handleUpdateLogbook(event)}
                >
                  {disable ? 'Ubah' : 'Simpan'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </TemplateSupervisor>
  )
}
