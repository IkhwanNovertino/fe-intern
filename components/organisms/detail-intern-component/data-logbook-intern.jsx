import React, { useState } from 'react'

export default function DataLogbookIntern() {
  const [logbook, setLogbook] = useState([]);
  return (
    <div>
      <article className="submission-data w-full mb-5">
        <header className="text-base font-bold text-primary mb-4">
          Data Kegiatan Peserta
        </header>
        <section className="">
          {logbook.length > 0 ? (
            <>
              {logbook.map((item, index) => (
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
                  href={`/umpeg/logbook/${intern._id}`}
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
