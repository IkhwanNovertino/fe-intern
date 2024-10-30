import ScoreComponent from '@/components/molecules/score-component'
import Link from 'next/link'
import React from 'react'
import ScoreForm from './score-form'
import TableScore from './table-score'

export default function EvaluatePage() {
  return (
    <div className="body flex flex-col items-start gap-2">
      <div className="h-1.5 w-full bg-secondary/20 mb-2 mt-2" />
      <ScoreForm />
      <TableScore />
    </div>
  )
}
