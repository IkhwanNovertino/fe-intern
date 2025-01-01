import React, { useState } from 'react'
import axios from 'axios'
import { DateRange, DateRangePicker } from 'react-date-range';
import id from 'date-fns/locale/id';

export default function RecapComponent() {
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };
  
  return (
    <section className="header-section w-[640px] mt-12">
      <div className="mb-6">
        <div className="body flex flex-col items-start gap-2">
          <article className="w-full mb-5">
            <header className="text-base font-bold text-primary mb-4">Form Pilih Tanggal</header>
            <section className="mt-6">
              <DateRange
                onChange={handleSelect}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                ranges={[selectionRange]}
                months={2}
                direction="horizontal"
                locale={id}
              />
              <div className="mb-2 mt-3 md:mb-3">
                <a
                  type="button"
                  className="block w-fit px-4 py-3 mt-9 font-medium text-base text-white bg-primary rounded-xl focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                  href={`${ROOT_API}/${API_VERSION}/report/download/?date=${selectionRange.startDate} - ${selectionRange.endDate}`}
                  target='_blank'
                >
                  Cetak Laporan
                </a>
              </div>
            </section>
          </article>
        </div>
      </div>
    </section>
  )
}