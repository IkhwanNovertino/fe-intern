import React from 'react'
import TempalateDashboardUmpeg from '../template'
import UmpegTableSubmission from '@/components/organisms/umpeg-table-submission'

export default function UmpegSubmissionListPage() {
  return (
    <TempalateDashboardUmpeg>
      <section className="content-wrapper min-h-screen bg-ternary pl-4 pr-4 py-4">
        <header className="overview-title">
          <h1 className="text-dark text-4xl font-bold text-left mt-12 mb-5">Data Magang Diskominfo Banjarbaru</h1>
        </header>
        <section className="overview-list-submission">
          <div className="mt-6 w-full lg:max-w-3xl">
            <UmpegTableSubmission />
          </div>
        </section>
      </section>
    </TempalateDashboardUmpeg>
  )
}
