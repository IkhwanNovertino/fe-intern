import React from 'react'

export default function Menus({children}) {
  return (
    <section className="menus ps-8 pb-16">
      <ul className="menu-items">
        {children}
      </ul>
    </section>
  )
}
