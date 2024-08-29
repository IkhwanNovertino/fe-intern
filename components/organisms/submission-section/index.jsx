import { getCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function SubmissionSection({ id }) {
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const router = useRouter();

  const [user, setUser] = useState({
    id: '',
    name: '',
    role: '',
    avatar: '',
  });
  const [docNumber, setDocNumber] = useState('');
  const [docInstitute, setDocInstitute] = useState('');
  const [docDate, setDocDate] = useState('');
  const [startAnInternship, setStartAnInternship] = useState('');
  const [EndAnInternship, setEndAnInternship] = useState('');
  const [docFile, setDocFile] = useState('');
  const [candidate, setCandidate] = useState(
    [{
      name: '',
      id_num: '',
      major: '',
      levels: '',
    }]
  )

  const handlerCandidateChange = (event, index) => {
    const field = event.target.name;
    
    const newCandidate = [...candidate]
    newCandidate[index][field] = event.target.value;
    setCandidate(newCandidate)
  }

  const addCandidate = () => {
    console.log(candidate);
    setCandidate([...candidate, {name: '', id_num: '', major: '', levels: ''}])
  }

  const handleSubmission = (event) => {
    event.preventDefault();
    // const {}
    const data = new FormData();
    data.append('doc_institute', docInstitute);
    data.append('doc_number', docNumber);
    data.append('doc_date', docDate);
    data.append('start_an_internship', startAnInternship);
    data.append('end_an_internship', EndAnInternship);
    data.append('vacancy', id);
    data.append('offering_letter', docFile);
    data.append('candidates', JSON.stringify(candidate))
    const token = getCookie('token');
    const jwtToken = atob(token);

    axios.post(`${ROOT_API}/${API_VERSION}/submission`,
      data, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": 'multipart/form-data'
        }
      }).then(res => {
      console.log(res);
      router.push('/submission-complete');
    }).catch(err => {
      console.log(err);
    })
    
  };
  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      setUser(payload.user);
    }
  }, []);

  return (
    <section>
      <header className="mb-6">
        <h5 className="text-dark font-semibold text-2xl pb-px">
          Formulir Pengajuan
        </h5>
        <div className="h-1.5 w-full bg-secondary/20 mb-2" />
      </header>
      <div className="my-6 flex flex-col gap-8">
        <form onSubmit={handleSubmission} autoComplete="false">
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
                    value={docNumber}
                    onChange={(e) => setDocNumber(e.target.value)}
                    name="doc_num"
                    id="doc_num"
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                    required
                    disabled={user.role === 'applicant' ? false : true}
                    placeholder={user.role === 'applicant' ? 'Isi nomor surat' : 'Isi sebagai pemohon'}
                  />
                </label>
              </div>
              <div className="mb-2 md:mb-3">
                <label htmlFor="doc_date" className="block text-sm md:text-base font-medium">
                  Tanggal Surat Pengajuan
                  <input
                    type="date"
                    value={docDate}
                    onChange={(e) => setDocDate(e.target.value)}
                    name="doc_date"
                    id="doc_date"
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                    disabled={user.role === 'applicant' ? false : true}
                    placeholder={user.role === 'applicant' ? 'Tanggal surat pengajuan' : 'Isi sebagai pemohon'}
                    required
                  />
                </label>
              </div>
              <div className="mb-2 md:mb-3">
                <label htmlFor="doc_institute" className="block text-sm md:text-base font-medium">
                  Instansi Surat Pemohon
                  <input
                    type="text"
                    value={docInstitute}
                    onChange={(e) => setDocInstitute(e.target.value)}
                    name="doc_institute"
                    id="doc_institute"
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                    disabled={user.role === 'applicant' ? false : true}
                    placeholder={user.role === 'applicant' ? 'Instansi surat' : 'Isi sebagai pemohon'}
                    required
                  />
                </label>
              </div>
              <div className="mb-2 md:mb-3">
                <label htmlFor="start_an_internship" className="block text-sm md:text-base font-medium">
                  Tanggal Mulai Magang
                  <input
                    type="date"
                    value={startAnInternship}
                    onChange={(e) => setStartAnInternship(e.target.value)}
                    name="start_an_internship"
                    id="start_an_internship"
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                    disabled={user.role === 'applicant' ? false : true}
                    placeholder={user.role === 'applicant' ? 'Tanggal mulai magang' : 'Isi sebagai pemohon'}
                    required
                  />
                </label>
              </div>
              <div className="mb-2 md:mb-3">
                <label htmlFor="end_an_internship" className="block text-sm md:text-base font-medium">
                  Tanggal Selesai Magang
                  <input
                    type="date"
                    value={EndAnInternship}
                    onChange={(e) => setEndAnInternship(e.target.value)}
                    name="end_an_internship"
                    id="end_an_internship"
                    className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                    disabled={user.role === 'applicant' ? false : true}
                    placeholder={user.role === 'applicant' ? 'Tanggal selesai magang' : 'Isi sebagai pemohon'}
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
                      accept='application/pdf'
                      onChange={(event) => setDocFile(event.target.files[0])}
                      name="offering_letter"
                      id="offering_letter"
                      className="w-full text-sm md:text-base text-light file:py-2 file:px-4 file:border-0 file:rounded-full file:bg-light/40 file:text-black file:font-medium hover:file:bg-primary/50 disabled:file:bg-light/40 disabled:cursor-not-allowed"
                      disabled={user.role === 'applicant' ? false : true}
                      required
                    />
                  </div>
                </label>
              </div>
            </section>
          </div>
          <div>
            <header className="text-sm font-bold text-primary mb-1">Data Kandidat Peserta Magang</header>
            {candidate.map((data, index) => (
              <section key={index}>
                <div>
                  <h6 className="text-xs font-light mt-6 mb-1">
                    Data kandidat peserta magang {index + 1}
                  </h6>
                  <div className="mb-2 md:mb-3">
                    <label htmlFor="name" className="block text-sm md:text-base font-medium">
                      Nama Lengkap Kandidat
                      <input
                        type="text"
                        value={data.name}
                        onChange={(event) => handlerCandidateChange(event, index)}
                        name="name"
                        id="name"
                        placeholder="Nama lengkap kandidat peserta magang"
                        className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-2 md:mb-3">
                    <label htmlFor="id_num" className="block text-sm md:text-base font-medium">
                      Nomor Induk Kandidat
                      <input
                        type="text"
                        value={data.id_num}
                        onChange={(event) => handlerCandidateChange(event, index)}
                        name="id_num"
                        id="id_num"
                        placeholder="Nomor induk siswa/mahasiswa/pegawai kandidat peserta magang"
                        className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-2 md:mb-3">
                    <label htmlFor="major" className="block text-sm md:text-base font-medium">
                      Jurusan Kandidat
                      <input
                        type="text"
                        value={data.major}
                        onChange={(event) => handlerCandidateChange(event, index)}
                        name="major"
                        id="major"
                        placeholder="Jurusan kandidat peserta magang"
                        className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-2 md:mb-3">
                    <label htmlFor="levels" className="block text-sm md:text-base font-medium">
                      Jenjang Kandidat
                      <select
                        name="levels"
                        id="levels"
                        value={data.levels}
                        onChange={(event) => handlerCandidateChange(event, index)}
                        className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-3 mt-2 rounded-xl border border-gray-300 focus-within:border-primary"
                      >
                        {/* <option>Pilih jenjang kandidat</option>  */}
                        <option value="slta">SMA/SMK</option> 
                        <option value="college">Perguruan Tinggi</option> 
                        <option value="employee">Pegawai</option> 
                      </select>
                    </label>
                  </div>
                </div>
              </section>
            ))}
            {candidate.length === 7 ? (
              <button onClick={addCandidate} className="float-end" hidden>+ Tambah Data Kandidat</button>
            ) : (
              <button onClick={addCandidate} className="float-end mt-8">+ Tambah Data Kandidat</button>
            )}
            {/* {
              candidates.map((el, i) => {
                return (
                  <CandidateFieldset no={el} key={i}/>
                )
              })
            } */}
            {/* {
              candidates.length === 7 ? (
                <button onClick={addCandidate} hidden>+ Tambah Data Kandidat</button>
              ): (
                <button onClick={addCandidate} className="float-end">+ Tambah Data Kandidat</button>
              )
            } */}
            {/* <button onClick={addCandidate}>+ Tambah Data Kandidat</button> */}
          </div>
          <div>
            {
              user.role === 'applicant' ? (
                <button
                  type="submit"
                  className="mt-4 mb-16 py-3 w-full bg-primary text-white text-base font-medium rounded-lg">
                  Daftar Pengajuan
                </button>
              ) : (
                <button className="mt-4 mb-16 py-3 w-full bg-primary text-white text-base font-medium rounded-lg">
                  <a href="/sign-in">Log in</a>
                </button>
              )
            }
          </div>
        </form>
      </div>
    </section>
  );
}
