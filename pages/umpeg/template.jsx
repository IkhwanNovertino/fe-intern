import React from 'react'
import SidebarUmpeg from './sidebar-umpeg'

export default function TempalateDashboardUmpeg({children}) {
  return (
    <section className="flex xl:max-w-5xl xl:justify-center xl:mx-auto">
      <SidebarUmpeg/>
      <main className="main-wrapper relative w-full max-h-screen overflow-y-auto">
        {children}
      </main>
  </section>
  )
};
