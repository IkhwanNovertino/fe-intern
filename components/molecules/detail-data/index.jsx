import React from 'react'

export default function DetailData({ title, data}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-3">
      <p className="text-sm text-light font-medium">{title}</p>
      <p className="text-sm text-dark font-medium md:justify-self-end">{data}</p>
    </div>
  )
}
