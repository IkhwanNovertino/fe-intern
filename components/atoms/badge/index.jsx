import React from 'react'

export default function Badge({ title, status }) {
  const combineClass = ['py-2 px-4 text-xs font-semibold rounded-full'];
  if (status === 'waiting') combineClass.push('text-wait bg-wait/20');
  if (status === 'pending') combineClass.push('text-warn bg-warn/20');
  if (status === 'success') combineClass.push('text-primary bg-primary/20');
  if (status === 'failed') combineClass.push('text-secondary bg-secondary/20');
  return (
    <div
      className={combineClass.join(' ')}
    >
      {title}
    </div>
  )
}
