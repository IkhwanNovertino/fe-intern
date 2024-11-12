import React from 'react'

export default function DataPlacementIntern() {
  return (
    <article className="submission-data w-full mb-5">
      <header className="text-base font-bold text-primary mb-4">
        Data Penempatan Peserta
      </header>
      <section className="w-fit flex flex-wrap gap-4">
        {/* {placement.map((item, index) => (
          <CardInform key={index} >
            <div className="pr-4">
              <p className="text-xs text-light">{format(intern.start_an_internship, 'dd MMMM yyyy')} - {format(intern.end_an_internship, 'dd MMMM yyyy')}</p>
              <p className="text-base text-dark font-semibold">{item.biro.name}</p>
              <p className="text-xs text-light mt-3">Pembimbing:</p>
              <p className="text-sm text-dark font-medium uppercase">{item.supervisor.name}</p>
            </div>
          </CardInform>
        ))} */}
      </section>
    </article>
  )
}
