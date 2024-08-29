import React from 'react'

export default function TableData({ title, classname, children }) {
  const combineClass = ["text-sm font-normal text-dark text-left", classname]
  return (
    <td className={combineClass.join(" ")}>{title || children}</td>
  )
}
