import Badge from '@/components/atoms/badge';
import Link from 'next/link';
import React from 'react';

export default function CardSubmission({id, createdAt, start_an_internship, end_an_internship, status, candidates}) {
  return (
    <div className="w-72 sm:w-80 px-2 pt-9 pb-6 rounded-xl bg-slate-50 drop-shadow-md">
      <div className="flex justify-center items-center">
        <div className="py-14 px-14 bg-secondary opacity-15 rounded-full outline outline-2 outline-secondary outline-offset-4"/>
        <svg className="fill-secondary absolute" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6.5H16V5.5C16 4.70435 15.6839 3.94129 15.1213 3.37868C14.5587 2.81607 13.7956 2.5 13 2.5H11C10.2044 2.5 9.44129 2.81607 8.87868 3.37868C8.31607 3.94129 8 4.70435 8 5.5V6.5H5C4.20435 6.5 3.44129 6.81607 2.87868 7.37868C2.31607 7.94129 2 8.70435 2 9.5V18.5C2 19.2957 2.31607 20.0587 2.87868 20.6213C3.44129 21.1839 4.20435 21.5 5 21.5H19C19.7956 21.5 20.5587 21.1839 21.1213 20.6213C21.6839 20.0587 22 19.2957 22 18.5V9.5C22 8.70435 21.6839 7.94129 21.1213 7.37868C20.5587 6.81607 19.7956 6.5 19 6.5ZM10 5.5C10 5.23478 10.1054 4.98043 10.2929 4.79289C10.4804 4.60536 10.7348 4.5 11 4.5H13C13.2652 4.5 13.5196 4.60536 13.7071 4.79289C13.8946 4.98043 14 5.23478 14 5.5V6.5H10V5.5ZM20 18.5C20 18.7652 19.8946 19.0196 19.7071 19.2071C19.5196 19.3946 19.2652 19.5 19 19.5H5C4.73478 19.5 4.48043 19.3946 4.29289 19.2071C4.10536 19.0196 4 18.7652 4 18.5V13C6.54626 14.0101 9.26069 14.5293 12 14.53C14.7392 14.5283 17.4535 14.0092 20 13V18.5ZM20 10.81C17.4784 11.9178 14.7542 12.4898 12 12.4898C9.24579 12.4898 6.5216 11.9178 4 10.81V9.5C4 9.23478 4.10536 8.98043 4.29289 8.79289C4.48043 8.60536 4.73478 8.5 5 8.5H19C19.2652 8.5 19.5196 8.60536 19.7071 8.79289C19.8946 8.98043 20 9.23478 20 9.5V10.81Z" />
        </svg>
      </div>
        <h6 className="text-light text-sm/tight font-light text-center mt-4 mb-6">Dibuat {createdAt}</h6>
      <div className="text-left ps-1 mb-4">
        <h6 className="text-light text-sm/tight font-light">jumlah peserta magang</h6>
        <h4 className="text-dark text-base/tight font-semibold">{candidates} Peserta</h4>
      </div>
      <div className="text-left ps-1 mb-4">
        <h6 className="text-light text-sm/tight font-light">Mulai magang</h6>
        <h4 className="text-dark text-base/tight font-semibold">{start_an_internship}</h4>
      </div>
      <div className="text-left ps-1 mb-4">
        <h6 className="text-light text-sm/tight font-light">Selesai magang</h6>
        <h4 className="text-dark text-base/tight font-semibold">{end_an_internship}</h4>
      </div>
      <div className="text-left ps-1 mb-4">
        <h6 className="text-light text-sm/tight font-light">Status magang</h6>
        <h4 className=" w-fit mt-px">
          <Badge title={status} status={status}/>
        </h4>
      </div>
      <div className="text-right">
        <button
          type="button"
          className=" me-3 text-base font-semibold text-primary hover:brightness-50"
        >
          <Link
            href={`/vacancy`}
          >
            Detail Pengajuan
          </Link>
        </button>
      </div>
    </div>
  );
}