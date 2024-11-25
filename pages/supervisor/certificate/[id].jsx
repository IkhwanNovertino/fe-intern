import React from 'react'
import TemplateSupervisor from '../template'
import axios from 'axios'
import EvaluatePage from '@/components/organisms/evaluate'
import HeadProfileIntern from '@/components/organisms/header-profile-intern'
import ScoreForm from '@/components/organisms/evaluate/score-form'
import TableScore from '@/components/organisms/evaluate/table-score'

export default function SupervisorCertificateDetailPage({ intern, score, evaluate, token, id }) {
  
  return (
    <TemplateSupervisor>
      <section className="content-wrapper bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">
            Detail Sertifikat Peserta Magang
          </h1>
        </header>
        <section className="header-section w-[640px] mt-12">
          <div className="mb-6">
            <HeadProfileIntern data={intern}/>
            <div className="body flex flex-col items-start gap-2">
              <div className="h-1.5 w-full bg-secondary/20 mb-2 mt-2" />
              <ScoreForm data={score} id={id} token={token}/>
              <TableScore data={evaluate} token={token} id={id} />
            </div>
          </div>
        </section>
      </section>
    </TemplateSupervisor>
  )
}

export async function getServerSideProps({req, params}) {
  const { token } = req.cookies;
  const { id } = params;

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

  const resIntern = await axios.get(`${ROOT_API}/${API_VERSION}/intern/${id}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

  const resScore = await axios.get(`${ROOT_API}/${API_VERSION}/score-component`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

  const resEvaluate = await axios.get(`${ROOT_API}/${API_VERSION}/evaluation/${id}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

  return {
    props: {
      intern: resIntern.data.data,
      score: resScore.data.data,
      evaluate: resEvaluate.data.data,
      token: jwtToken,
      id: id,
    },
  };
}