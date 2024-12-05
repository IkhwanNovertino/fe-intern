import React, { useEffect } from 'react'
import TemplateSupervisor from '../template'
import { getCookie } from 'cookies-next';
import axios from 'axios';
import ItemLogbook from '@/components/molecules/item-logbook';
import Link from 'next/link';
import { format } from 'date-fns';

export default function SupervisorLogbookListPage({ data }) {
  console.log(data);
  
  return (
    <TemplateSupervisor>
      <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">
            Daftar Laporan Kegiatan
          </h1>
        </header>
        <section className="overview-list-logbook">
          <div className="mt-6 w-full lg:max-w-3xl">
            {data.map((item, index) => (
              <ItemLogbook
                key={index}
                date={format(item.date, 'dd/MM/yyyy')}
                log_desc={`${item.description}`}
                status={item.status}
              >
                <Link
                  href={`/supervisor/logbook/detail/${item._id}`}
                  className="text-sm text-dark font-medium underline decoration-2"
                >
                  Detail&gt;
                </Link>
              </ItemLogbook> 
            ))}
          </div>
        </section>
      </section>
    </TemplateSupervisor>
  )
}

export async function getServerSideProps({req}) {
  const {token} = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const jwtToken = Buffer.from(token, "base64").toString('ascii');

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/logbook`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

  let dataLog = [];

  const data = response.data.data.map(item => item.intern.map(el => el.logbook));
  data.forEach(items => {
    items.forEach(element => {
      element.forEach(el => {
        el.status === 'pending' ? dataLog.unshift(el) : dataLog.push(el);
      });
    });
  });
  
  return {
    props: {
      data: dataLog,
    },
  };
}
