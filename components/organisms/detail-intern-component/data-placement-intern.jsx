import CardInform from '@/components/molecules/card-info';
import { format } from 'date-fns';
import React, { useState } from 'react'

export default function DataPlacementIntern({ data, start_internship, end_internship }) {
  return (
    <article className="placement-data w-full mb-5">
      <header className="text-base font-bold text-primary mb-4">
        Data Penempatan Peserta
      </header>
      <section className="w-fit flex flex-wrap gap-4">
        {data.map((item, index) => (
          <CardInform key={index} >
            <div className="pr-4">
              <p className="text-xs text-light">{`${format(start_internship, 'dd MMMM yyyy')} - ${format(end_internship, 'dd MMMM yyyy')}`}</p>
              <p className="text-base text-dark font-semibold">{item.biro.name}</p>
              <p className="text-xs text-light mt-3">Pembimbing:</p>
              <p className="text-sm text-dark font-medium uppercase">{item.supervisor.name}</p>
            </div>
          </CardInform>
        ))}
      </section>
    </article>
  )
}
