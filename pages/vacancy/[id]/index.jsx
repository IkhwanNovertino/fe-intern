import React from 'react';
import SubmissionSection from '@/components/organisms/submission-section';
import VacancyDescription from '@/components/organisms/vacancy-desc';
import LadingPageLayout from '@/layouts/landing-page';
import axios from 'axios';

export default function VacancyDetailPage({id, dataVacant}) {
  return (
    <LadingPageLayout>
      <main className="min-h-screen">
        <div className="bg-ternary w-full flex items-center">
          <div className="container mx-auto py-0 px-2 md:w-full lg:max-w-5xl lg:px-2">
            <div className="relative flex flex-col lg:flex-row justify-start">
              <div className="lg:w-1/2 py-10 lg:py-14 px-2">
                <VacancyDescription data={dataVacant}/>
              </div>
              <div className="lg:w-1/2 py-2 px-2 lg:pt-28 lg:px-6">
                <SubmissionSection id={id} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LadingPageLayout>
  )
}

export async function getStaticPaths() {
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
  const response = await axios.get(`${ROOT_API}/api/v1/vacancy`);
  const data = await response.data.data;

  const paths = data.map((item) => ({
    params: { id: item._id}
  }))

  return {paths, fallback: false}
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
  const response = await axios.get(`${ROOT_API}/api/v1/vacancy/${id}`)
  const data = await response.data.data

  return {
    props: {
      id: data._id,
      dataVacant: data
    }
  }
}