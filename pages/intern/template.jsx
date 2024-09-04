import SidebarIntern from '@/components/organisms/sidebar-intern';
import React from 'react';

export default function TempalateDashboardIntern({ children }) {
  return (
    <section className="flex xl:max-w-5xl xl:justify-center xl:mx-auto">
      <SidebarIntern/>
      <main className="main-wrapper relative w-full max-h-screen overflow-y-auto">
        {children}
      </main>
  </section>
  )
};