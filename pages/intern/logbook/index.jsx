import React, { useEffect, useState } from 'react'
import TempalateDashboardIntern from '../template'
import Link from 'next/link'
import { getCookie } from 'cookies-next';
import axios from 'axios';
import ItemLogbook from '@/components/molecules/item-logbook';
import { format } from 'date-fns';

export default function LogbookIntern() {
  const [logbook, setlogbook] = useState([{
    _id: '',
    status: '',
    date: 0,
    activity: '',
  }]);
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  useEffect(() => {
    const token = getCookie('token');
    const jwtToken = atob(token);

    axios.get(`${ROOT_API}/${API_VERSION}/logbook`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }).then(res => {
      console.log(res.data.data);
      const data = res.data.data;
      setlogbook(data);
    }).catch(err => {
      console.log(err.response);
      
    })
  }, [setlogbook])
  return (
    <TempalateDashboardIntern>
      <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Laporan Kegiatan Peserta Magang</h1>
        </header>
        <section className="overview-list-submission">
          <div className="mt-6 w-full lg:max-w-3xl">
            <button
              type="button"
              className='py-2 px-4 bg-wait/20 text-dark font-medium rounded hover:text-white hover:bg-wait/90 hover:transition hover:duration-300'
            >
              <Link
                href={'/intern/logbook/create'}
              >
                + Tambah Logbook
              </Link>
            </button>
          </div>
          <div className="mt-6 w-full lg:max-w-3xl">
            {logbook.length > 0  ? (
              <>
                {logbook.map((item, index) => (
                  <ItemLogbook
                    key={index}
                    status={item.status}
                    date={format(item.date, 'dd/MM/yyyy')}
                    log_desc={item.activity}
                  >
                    <Link
                      href={`/intern/logbook/${item._id}`}
                      className="text-sm text-dark font-medium underline decoration-2"
                    >
                      Detail&gt;
                    </Link>
                  </ItemLogbook>
                ))}
              </>
            ) : (
              <div>Laporan kegiatan belum diisi...</div>
            )}
          </div>
        </section>
      </section>
    </TempalateDashboardIntern>
  )
}
