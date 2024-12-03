import SidebarIntern from '@/components/organisms/sidebar-intern';
import SidebarPembina from '@/components/organisms/sidebar-pembina';
import React from 'react';

export default function TempalateDashboardPembina({ children }) {
  return (
    <section className="flex xl:max-w-5xl xl:justify-center xl:mx-auto">
      <SidebarPembina />
      <main className="main-wrapper relative w-full max-h-screen overflow-y-auto">
        {children}
      </main>
    </section>
  )
};