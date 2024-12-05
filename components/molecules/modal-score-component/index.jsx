
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function ModalScoreComponent({token}) {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const router = useRouter();

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const handlerAddScoreComponent = () => {
    if (!title || !category) {
      toast.error('komponen nilai dan kategori harus diisi');
      setShowModal(false)
    } else {
      axios.post(`${ROOT_API}/${API_VERSION}/score-component`, { title, category }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then(res => {
        console.log(res);
        setTitle('');
        setCategory('');
        setShowModal(false);
        toast.success('Komponen nilai berhasil ditambahkan')
        router.refresh();
      }).catch(err => {
        console.log(err);
      })
    }
  }
  
  return (
    <>
      <button
        className='ml-3 py-2 px-3 bg-gray-100 text-dark font-medium rounded'
        type="button"
        onClick={(e) => setShowModal(true)}
      >
        Tambahkan Komponen Nilai
      </button>

      {showModal ? (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-title">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-xl font-medium text-gray-900" id="modal-title">
                      Tambah komponen nilai
                    </h3>
                    <div className="mt-5">
                      <form>
                        <div className="mb-2 md:mb-3">
                          <label
                            className="block text-sm md:text-base font-medium"
                            htmlFor="title"
                          >
                            Komponen nilai :
                            <input
                              type="text"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              name="title"
                              id="title"
                              className="w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-2 mt-2 rounded-md border border-gray-300 focus-within:border-primary"
                              placeholder={'Isi komponen nilai'}
                            />
                          </label>
                        </div>
                        <div className="mb-2 md:mb-3">
                          <label htmlFor="category" className="block text-sm md:text-base font-medium">
                            Kategori nilai :
                            <select
                              name="category"
                              id="category"
                              value={category}
                              onChange={(e) => setCategory(e.target.value)}
                              className="appearance-auto w-full focus:outline-none text-base font-normal bg-primary/0 px-5 py-2 md:py-2 mt-2 rounded-md border border-gray-300 focus-within:border-primary"
                            >
                              <option selected>-- Pilih kategoty nilai</option> 
                              <option value="T">Teknis</option> 
                              <option value="NT">Non Teknis</option> 
                            </select>
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={handlerAddScoreComponent}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-wait text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"> 
                    Tambahkan
                </button>
                <button
                  type="button"
                  onClick={(e) => setShowModal(false)}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"> 
                    Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}