import React from 'react'
import TempalateDashboardIntern from './template'
import CardInform from '@/components/molecules/card-info'
import ItemLogbook from '@/components/molecules/item-logbook'
import Link from 'next/link'
import axios from 'axios'
import { format } from 'date-fns'
import CertificateComponent from '@/components/atoms/certificate'

export default function DashboardIntern({card, logbook, certificate}) {

  return (
    <TempalateDashboardIntern>
      <section className="content-wrapper bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title mt-10">
          <CardInform>
            <div className="greeting">
              <p className="text-lg font-normal text-dark mb-3">Halo, <span className="capitalize font-bold">{ card.name || 'November Ish'} 👋</span></p>
            </div>
            <div className="placement w-full mb-4">
              <p className="biro-name text-sm font-normal text-dark">Bidang <span className="capitalize text-base font-semibold">{card.biro}</span></p>
              <p className="supervisor-name text-xs font-bold text-dark uppercase decoration-primary/50 underline decoration-2 underline-offset-1">
                {card.supervisor}
              </p>
            </div>
            <div className="periode">
              <p className="text-sm font-normal text-dark">Periode magang :</p>
              <p className="text-xs font-bold text-dark">{format(card.start_an_internship, 'dd MMMM yyyy')} - {format(card.end_an_internship, 'dd MMMM yyyy')}</p>
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
                    key={index}
                    date={format(item.date, 'dd/MM/yyyy')}
                    status={item.status}
                    log_desc={item.description}
                  >
                    <Link
                      href={`/intern/logbook/${item._id}`}
                      className="text-sm text-dark font-medium underline decoration-2"
                    >
                      Detail&gt;
                    </Link>
                  </ItemLogbook>
                ))}
                <div
                  className="flex justify-end my-4 mx-2"
                >
                  <button
                    className="py-2 px-6 mb-3 mr-3 rounded bg-light/25 text-dark font-medium hover:bg-dark hover:text-white hover:transition hover:duration-300"
                  >
                    <Link
                      href={`/intern/logbook`}
                    >
                      Daftar Logbook
                    </Link>
                  </button>
                </div>
              </>
            ) : (
                <div>Laporan kegiatan belum diisi...</div>
            )}
          </div>
        </section>
        {/* daftar submission */}
        <section className="overview-list-submission">
          <h1 className="text-dark text-2xl font-semibold text-left mt-10">Data sertifikat magang</h1>
          <div className="mt-2 w-full lg:max-w-4xl">
            {certificate === null || certificate === undefined ? (
              <div>Data penilaian untuk sertifikat belum tersedia...</div>
            ) : (
                <div
                  className="cursor-pointer"
                >
                  <Link
                    
                    href={`/intern/certificate`}
                  >
                    <CertificateComponent data={certificate} />    
                  </Link>
              </div>
            )}
          </div>
        </section>
      </section>
    </TempalateDashboardIntern>
  )
}

export async function getServerSideProps({req}) {
  const { token } = req.cookies;

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

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/dashboard/intern`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  });

  return {
    props: {
      card: response.data.data.card,
      logbook: response.data.data.logbooks,
      certificate: response.data.data.certificate,
    },
  };
};
