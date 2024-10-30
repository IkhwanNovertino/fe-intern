import React from 'react'

export default function Table({children}) {
  return (
    <table className="table-auto w-full border-separate border-spacing-y-5 border-spacing-x-3.5">
      {children}
    </table>
  )
}
