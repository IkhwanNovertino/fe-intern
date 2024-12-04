import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function VacancyDescription({data}) {  
  const [vacant, setVacant] = useState({
    _id: '',
    position: '',
    job_desc: '',
    requirement: [],
    duration: '',
    start_an_intern: 0,
    createdAt: new Date(),
  });

  useEffect(() => {
    setVacant(data);
  }, [data._id])

  return (
    <section id="desc">
      <header className="mb-6">
        <h5 className="text-dark font-semibold text-2xl capitalize pb-px">
          {vacant.position}
        </h5>
        <div className="h-1.5 w-full bg-secondary/20 mb-2" />
        <div className="w-full grid gap-2 sm:grid-rows-2 sm:grid-flow-col">
          <div>
            <p className="flex text-xs font-normal text-light">
              <svg
                className="fill-black/90"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z" />
              </svg>
              <span className="ps-1">
                Mulai magang {format(vacant.start_an_intern, 'dd MMMM yyyy')}
              </span>
            </p>
          </div>
          <div>
            <p className="flex text-xs font-normal text-light">
              <svg
                className="fill-black/90"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 10H13V6C13 5.73478 12.8946 5.48043 12.7071 5.29289C12.5196 5.10536 12.2652 5 12 5C11.7348 5 11.4804 5.10536 11.2929 5.29289C11.1054 5.48043 11 5.73478 11 6V11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12H15C15.2652 12 15.5196 11.8946 15.7071 11.7071C15.8946 11.5196 16 11.2652 16 11C16 10.7348 15.8946 10.4804 15.7071 10.2929C15.5196 10.1054 15.2652 10 15 10ZM12 1C10.0222 1 8.08879 1.58649 6.4443 2.6853C4.79981 3.78412 3.51809 5.3459 2.76121 7.17317C2.00433 9.00043 1.8063 11.0111 2.19215 12.9509C2.578 14.8907 3.53041 16.6725 4.92894 18.0711C6.32746 19.4696 8.10929 20.422 10.0491 20.8079C11.9889 21.1937 13.9996 20.9957 15.8268 20.2388C17.6541 19.4819 19.2159 18.2002 20.3147 16.5557C21.4135 14.9112 22 12.9778 22 11C22 9.68678 21.7413 8.38642 21.2388 7.17317C20.7363 5.95991 19.9997 4.85752 19.0711 3.92893C18.1425 3.00035 17.0401 2.26375 15.8268 1.7612C14.6136 1.25866 13.3132 1 12 1ZM12 19C10.4178 19 8.87104 18.5308 7.55544 17.6518C6.23985 16.7727 5.21447 15.5233 4.60897 14.0615C4.00347 12.5997 3.84504 10.9911 4.15372 9.43928C4.4624 7.88743 5.22433 6.46197 6.34315 5.34315C7.46197 4.22433 8.88743 3.4624 10.4393 3.15372C11.9911 2.84504 13.5997 3.00346 15.0615 3.60896C16.5233 4.21447 17.7727 5.23984 18.6518 6.55544C19.5308 7.87103 20 9.41775 20 11C20 13.1217 19.1572 15.1566 17.6569 16.6569C16.1566 18.1571 14.1217 19 12 19Z" />
              </svg>
              <span
                className="ps-1"
              >
                Durasi magang {vacant.duration}
              </span>
            </p>
          </div>
          <div>
            <p className="flex text-xs font-normal text-light">
              <svg
                className="fill-black/90"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z" />
              </svg>
              <span className="ps-1">
                Dibuat {format(vacant.createdAt, 'dd MMMM yyyy')}
              </span>
            </p>
          </div>
        </div>
      </header>
      <div className="my-6 flex flex-col gap-8">
        <div>
          <header className="text-sm font-bold text-primary mb-1">Deskripsi Pekerjaan</header>
          <p className="text-light text-base/loose">
            {vacant.job_desc}
          </p>
        </div>
        <div>
          <header className="text-sm font-bold text-primary mb-1">Persyaratan Peserta</header>
          <section>
            <ul className="ps-4 list-disc list-outside text-light">
              {vacant.requirement.map((el, i) => (
                <li className="mb-2" key={i}>{el}</li>
              ))}
            </ul>
          </section>
        </div>
        <div>
          <header className="text-sm font-bold text-primary mb-1">Persyaratan Pengajuan</header>
          <section>
            <ul className="ps-4 list-disc list-outside text-light">
              <li className="mb-2">Persiapkan dokumen surat pengajuan magang</li>
              <li className="mb-2">Isi formulir pengajuan di halaman ini</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
