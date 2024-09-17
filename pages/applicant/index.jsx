
import React, { useEffect, useState } from 'react'
import LadingPageLayout from '@/layouts/landing-page'
import CardSubmission from '@/components/molecules/card-submission';
import { format } from 'date-fns';
import axios from 'axios';
import { getCookie } from 'cookies-next';

export default function ApplicantOverview() {
  const [submission, setSubmission] = useState([]);

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  useEffect(() => {
    const token = getCookie('token');
    const jwtToken = atob(token);
    axios.get(`${ROOT_API}/${API_VERSION}/submission`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }).then(res => {
      console.log(res.data?.data);
      const data = res.data.data;
      setSubmission(data);
    }).catch(err => {
      console.log(err.response);
    })
  }, [])

  return (
    <LadingPageLayout>
      <div className="min-h-screen">
        <div className="bg-white w-full flex items-center">
          <div className="container mx-auto mt-4 py-4 px-2 md:w-full lg:max-w-5xl lg:py-16 lg:px-2">
            <div className="relative flex flex-col justify-center items-center">
              <div className="py-4 px-2 mb-12 text-center">
                <header>
                  <h4 className="text-primary text-base sm:text-xl font-semibold">Daftar</h4>
                  <h2 className="text-dark text-xl sm:text-4xl font-semibold">Pengajuan Magang Pemohon</h2>
                </header>
              </div>
              <div className="w-fit mb-6">
                {submission.length === 0 || submission === null ? (
                <h2 className="text-dark text-lg font-semibold">Belum melakukan pengajuan</h2>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {submission.map((item, index) => (
                      <CardSubmission
                        key={index}
                        id={item.id}
                        createdAt={format(item.createdAt, 'dd MMMM yyyy')}
                        start_an_internship={format(item.start_an_internship, 'dd MMMM yyyy') }
                        end_an_internship={format(item.end_an_internship, 'dd MMMM yyyy')}
                        status={item.status}
                        candidates={item.candidates.length}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LadingPageLayout>
  )
}
