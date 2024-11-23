import ItemLogbook from '@/components/molecules/item-logbook';
import { format } from 'date-fns';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

export default function DataLogbookIntern({data, id}) {

  const pathname = usePathname();
  const pathLink = pathname.split('/');
  
  return (
    <div>
      <article className="submission-data w-full mb-5">
        <header className="text-base font-bold text-primary mb-4">
          Data Kegiatan Peserta
        </header>
        <section className="">
          {data.length > 0 ? (
            <>
              {data.map((item, index) => (
                <ItemLogbook
                  key={index}
                  date={format(item.date, 'dd MMMM yyyy')}
                  status={item.status}
                  log_desc={item.description}
                />
              ))}
              <button
                className="px-0.5 py-2 mr-0 mt-3 rounded font-medium text-dark hover:underline hover:decoration-dark hover:decoration-2 hover:underline-offset-4"
              >
                <Link
                  href={`/${pathLink[1]}/logbook/${id}`}
                >
                  Daftar Logbook
                </Link>
              </button>
            </>
          ) : (
              <div>Laporan kegiatan belum diisi...</div>
          )}
        </section>
      </article>
    </div>
  )
}
