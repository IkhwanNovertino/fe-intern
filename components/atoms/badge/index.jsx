import React from 'react'

export default function Badge({ title, status, size }) {
  const combineClass = [' w-fit py-2 px-3 font-semibold rounded-full'];
  if (status === 'waiting') combineClass.push('text-wait bg-wait/20');
  if (status === 'confirmed') combineClass.push('text-wait bg-wait/20');
  if (status === 'pending') combineClass.push('text-warn bg-warn/20');
  if (status === 'success') combineClass.push('text-primary bg-primary/20');
  if (status === 'failed') combineClass.push('text-secondary bg-secondary/20');
  if (size === 'small') combineClass.push('text-xs');
  if (size === 'normal') combineClass.push('text-sm');
  if (size === 'large') combineClass.push('text-base');
  return (
    <div
      className={combineClass.join(' ')}
    >
      {title}
    </div>
  )
}
