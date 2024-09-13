import SidebarSupervisor from '@/components/organisms/sidebar-supervisor';
import React from 'react';

export default function TemplateSupervisor({children}) {
  return (
    <section className="flex xl:max-w-5xl xl:justify-center xl:mx-auto">
      <SidebarSupervisor/>
      <main className="main-wrapper relative w-full max-h-screen overflow-y-auto">
        {children}
      </main>
    </section>
  )
}
