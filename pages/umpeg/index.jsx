import React from 'react'
import SidebarUmpeg from './sidebar-umpeg'

export default function Umpeg() {
  return (
    <section className="flex xl:max-w-5xl xl:justify-center xl:mx-auto">
      <SidebarUmpeg/>
      <main className="main-wrapper relative w-full max-h-screen overflow-y-auto">
        <section className="content-wrapper">
          OVERVIEW UMPEG
        </section>
      </main>
    </section>
  )
}

