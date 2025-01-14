import React from 'react'
import TemplateSupervisor from '../template'
import SupervisorProfile from '@/components/organisms/supervisor-profile'

export default function SupervisorProfilePage({ token }) {
  console.log(token);
  
  return (
    <TemplateSupervisor>
      <section className="content-wrapper bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Halaman Profil Pengguna</h1>
        </header>
        <section className="overview-list-submission">
          <div className="mt-6 w-full lg:max-w-3xl">
            <SupervisorProfile token={token} />
          </div>
        </section>
      </section>
    </TemplateSupervisor>
  )
}

export async function getServerSideProps({req}) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString('ascii');

  return {
    props: {
      token: jwtToken
    },
  };
}
