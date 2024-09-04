import React, { useEffect, useState } from 'react'
import TempalateDashboardIntern from './template'
import CardInform from '@/components/molecules/card-info'
import LogbookIntern from './logbook'
import ItemLogbook from '@/components/molecules/item-logbook'
import Link from 'next/link'
import { getCookie } from 'cookies-next'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import { format } from 'date-fns'

export default function DashboardIntern() {
  const [user, setUser] = useState({
    name: '',
    supervisor: '',
    biro: '',
    startAnIntern: 0,
    endAnIntern: 0,
  });
  const [logbook, setLogbook] = useState([]);
  const [evaluate, setEvaluate] = useState({});

  // const token = getCookie('token');
  // const jwtToken = atob(token);
  // const dataUser = jwtDecode(jwtToken);
  // const { id } = dataUser.user;
  
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  useEffect(() => {
    const token = getCookie('token');
    const jwtToken = atob(token);

    axios.get(`${ROOT_API}/${API_VERSION}/intern/dashboard`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }).then(res => {
      console.log(res.data.data);
      const data = res.data.data;
      setUser(data);
      setLogbook(data.logbook);
      setEvaluate(data.evaluate);
    }).catch(err => {
      console.log(err.response);
    })
  }, [])
  return (
    <TempalateDashboardIntern>
      <section className="content-wrapper bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title mt-10">
          <CardInform>
            <div className="greeting">
              <p className="text-lg font-normal text-dark mb-3">Halo, <span className="capitalize font-bold">{ user.name || 'November Ish'} 👋</span></p>
            </div>
            <div className="placement w-full mb-4">
              <p className="biro-name text-sm font-normal text-dark">Bidang <span className="capitalize text-base font-semibold">{user.biro}</span></p>
              <p className="supervisor-name text-xs font-bold text-dark uppercase decoration-primary/50 underline decoration-2 underline-offset-1">
                {user.supervisor}
              </p>
            </div>
            <div className="periode">
              <p className="text-sm font-normal text-dark">Periode magang :</p>
              <p className="text-xs font-bold text-dark">{format(user.startAnIntern, 'dd MMMM yyyy')} - {format(user.endAnIntern, 'dd MMMM yyyy')}</p>
            </div>
          </CardInform>
        </header>
        {/* data biro */}
        <section className="overview-data-biro">
          <h1 className="text-dark text-2xl font-semibold text-left mt-14">Laporan kegiatan magang</h1>
          <div className="mt-6">
            {logbook.length > 0 ? (
              <>
                {logbook.map((item, index) => (
                  <ItemLogbook
                    date="02/03/2024"
                    status="pending"
                    log_desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus odio quos velit maiores sequi facilis, tenetur numquam aspernatur veritatis laboriosam. Totam, fugiat. Consequuntur hic libero quaerat! Quis possimus excepturi nam alias a natus facere architecto."
                  >
                    <Link
                      href="/intern/logbook/id"
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
        {/* daftar submission */}
        <section className="overview-list-submission">
          <h1 className="text-dark text-2xl font-semibold text-left mt-14">Data sertifikat magang</h1>
          <div className="mt-2 w-full lg:max-w-4xl">
            {evaluate === null || evaluate === undefined ? (
              <div>Data penilaian untuk sertifikat belum tersedia...</div>
            ) : (
              <div>Data penilaian untuk sertifikat sudah tersedia...</div>
            )}
          </div>
        </section>
      </section>
    </TempalateDashboardIntern>
  )
}
