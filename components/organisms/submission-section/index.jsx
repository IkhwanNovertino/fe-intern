import React from 'react'

export default function SubmissionSection() {
  return (
    <section>
      <header className="mb-6">
        <h5 className="text-dark font-semibold text-2xl pb-px">
          Formulir Pengajuan
        </h5>
        <div className="h-1.5 w-full bg-secondary/20 mb-2" />
      </header>
      <div className="my-6 flex flex-col gap-8">
        <form action="" method="post" autoComplete="false">
          <div>
            <header className="text-sm font-bold text-primary mb-1">Data Pemohon</header>
            <section>
              <div className="mb-2 md:mb-3">
                <label htmlFor="name" className="block text-sm md:text-base font-medium">
                  Nama Lengkap
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                    required
                  />
                </label>
              </div>
              <div className="mb-2 md:mb-3">
                <label
                  className="block text-sm md:text-base font-medium"
                  htmlFor="institute"
                >
                  Instansi Pemohon
                  <input
                    type="text"
                    name="institute"
                    id="institute"
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                    required
                  />
                </label>
              </div>
              <div className="mb-2 md:mb-3">
                <label
                  className="block text-sm md:text-base font-medium"
                  htmlFor="phone_num"
                >
                  No. Telp Pemohon
                  <input
                    type="text"
                    name="phone_num"
                    id="phone_num"
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                    required
                  />
                </label>
              </div>
            </section>
          </div>
          <div>
            <header className="text-sm font-bold text-primary mb-1">Data Dokumen Pengajuan Magang</header>
            <section>
              <div className="mb-2 md:mb-3">
                <label
                  className="block text-sm md:text-base font-medium"
                  htmlFor="doc_num"
                >
                  No. Surat Pengajuan
                  <input
                    type="text"
                    name="doc_num"
                    id="doc_num"
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                    required
                  />
                </label>
              </div>
              <div className="mb-2 md:mb-3">
                <label htmlFor="doc_date" className="block text-sm md:text-base font-medium">
                  Tanggal Surat Pengajuan
                  <input
                    type="text"
                    name="doc_date"
                    id="doc_date"
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                    required
                  />
                </label>
              </div>
              <div className="mb-2 md:mb-3">
                <label htmlFor="doc_institute" className="block text-sm md:text-base font-medium">
                  Instansi Surat Pemohon
                  <input
                    type="text"
                    name="doc_institute"
                    id="doc_institute"
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                    required
                  />
                </label>
              </div>
              <div className="mb-2 md:mb-3">
                <label htmlFor="start_an_internship" className="block text-sm md:text-base font-medium">
                  Tanggal Mulai Magang
                  <input
                    type="text"
                    name="start_an_internship"
                    id="start_an_internship"
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                    required
                  />
                </label>
              </div>
              <div className="mb-2 md:mb-3">
                <label htmlFor="end_an_internship" className="block text-sm md:text-base font-medium">
                  Tanggal Selesai Magang
                  <input
                    type="text"
                    name="end_an_internship"
                    id="end_an_internship"
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                    required
                  />
                </label>
              </div>
              <div className="mb-2 md:mb-3">
                <label htmlFor="offering_letter" className="block text-sm md:text-base font-medium">
                  Surat Pengajuan
                  <div className="flex w-full px-px py-2">
                    <input
                      type="file"
                      name="offering_letter"
                      id="offering_letter"
                      className="w-full text-sm md:text-base text-light file:py-2 file:px-4 file:border-0 file:rounded-full file:bg-light/40 file:text-black file:font-medium hover:file:bg-primary/50"
                      required
                    />
                  </div>
                </label>
              </div>
            </section>
          </div>
          <div>
            <header className="text-sm font-bold text-primary mb-1">Data Kandidat Peserta Magang</header>
            <section>
              <div>
                <h6 className="text-xs font-light mt-6 mb-1">
                  Data kandidat peserta magang
                  {1}
                </h6>
                <div className="mb-2 md:mb-3">
                  <label htmlFor={`name_candidate${1}`} className="block text-sm md:text-base font-medium">
                    Nama Lengkap Kandidat
                    <input
                      type="text"
                      name={`name_candidate${1}`}
                      id={`name_candidate${1}`}
                      placeholder=""
                      className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"

                      required
                    />
                  </label>
                </div>
                <div className="mb-2 md:mb-3">
                  <label htmlFor={`id_num_candidate${1}`} className="block text-sm md:text-base font-medium">
                    No. Induk Kandidat
                    <input
                      type="text"
                      name={`id_num_candidate${1}`}
                      id={`id_num_candidate${1}`}
                      placeholder=""
                      className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"

                      required
                    />
                  </label>
                </div>
                <div className="mb-2 md:mb-3">
                  <label htmlFor={`major_candidate${1}`} className="block text-sm md:text-base font-medium">
                    Jurusan Kandidat
                    <input
                      type="text"
                      name={`major_candidate${1}`}
                      id={`major_candidate${1}`}
                      placeholder=""
                      className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"

                      required
                    />
                  </label>
                </div>
                <div className="mb-2 md:mb-3">
                  <legend className="block text-sm md:text-base font-medium">Jenjang Kandidat</legend>
                  <div className="flex w-full px-1 py-px">
                    <label htmlFor={`slta${1}`}>
                      <input
                        type="radio"
                        name={`level_candidate${1}`}
                        id={`slta${1}`}
                        className="me-2"
                        value="slta"
                        required
                      />
                      SMA/SMK
                    </label>
                  </div>
                  <div className="flex w-full px-1 py-px">
                    <label htmlFor={`college${1}`}>
                      <input
                        type="radio"
                        name={`level_candidate${1}`}
                        id={`college${1}`}
                        className="me-2"
                        value="college"
                        required
                      />
                      Perguruan Tinggi
                    </label>
                  </div>
                  <div className="flex w-full px-1 py-px">
                    <label htmlFor={`employee${1}`}>
                      <input
                        type="radio"
                        name={`level_candidate${1}`}
                        id={`employee${1}`}
                        className="me-2"
                        value="employee"
                        required
                      />
                      Pegawai
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <button type="submit" className="mt-4 mb-16 py-3 w-full bg-primary text-white text-base font-medium rounded-lg">
              Daftar Pengajuan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
