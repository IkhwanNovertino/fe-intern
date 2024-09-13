import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { setCookie } from 'cookies-next';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const router = useRouter()

  const onSubmit = () => {
    
    if (!username || !password) return toast.error('username dan password wajib diisi');
    
    axios.post(`${ROOT_API}/${ API_VERSION}/auth/signin`, {
      username, password
    }).then(res => {
      const token = res.data?.data?.token;
      const tokenBase64 = btoa(token);
      setCookie('token', tokenBase64, { maxAge: 24 * 60 * 60 });

      const payload = jwtDecode(token);
      const dataRoleUserFromPayload = payload.user.role;
      if (dataRoleUserFromPayload === 'applicant') {
        router.push('/');
      } else if (dataRoleUserFromPayload === 'umpeg') {
        router.push('/umpeg')
      } else if (dataRoleUserFromPayload === 'intern') {
        router.push('/intern')
      } else if (dataRoleUserFromPayload === 'supervisor') {
        router.push('/supervisor')
      } else {
        router.push('/');
      }
    }).catch(error => {
      const errMessage = error.response?.data?.message;
      if (errMessage) {
        errMessage.forEach(element => {
          toast.error(element);
        });
      }
    })
  }

  return (
    <form>
      <div className="mb-4">
        <label htmlFor="username" className="block text-base font-medium text-label">
          Username/Email
          <div className="group/username flex w-full px-5 py-4 mt-3 text-base font-light rounded-xl border border-light focus-within:border-primary">
            <svg
              className="mr-4 fill-light/20 group-focus-within/username:fill-primary"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8C22 6.34315 20.6569 5 19 5H5ZM5.49607 7.13174C5.01655 6.85773 4.40569 7.02433 4.13168 7.50385C3.85767 7.98337 4.02427 8.59422 4.50379 8.86823L11.5038 12.8682C11.8112 13.0439 12.1886 13.0439 12.4961 12.8682L19.4961 8.86823C19.9756 8.59422 20.1422 7.98337 19.8682 7.50385C19.5942 7.02433 18.9833 6.85773 18.5038 7.13174L11.9999 10.8482L5.49607 7.13174Z"
              />
            </svg>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username atau Email"
              className="w-full focus:outline-none text-base font-light bg-white/0"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
        </label>
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="block text-base font-medium text-label">
          Kata Kunci
          <div className="group/password  flex w-full px-5 py-4 mt-3 items-center text-base font-light rounded-xl border border-light focus-within:border-primary">
            <svg
              className="mr-4 fill-light/20 group-focus-within/password:fill-primary"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.81592 4.25974C7.12462 5.48872 7 6.95088 7 8H6C4.34315 8 3 9.34315 3 11V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V11C21 9.34315 19.6569 8 18 8L17 7.99998C17 6.95087 16.8754 5.48871 16.1841 4.25973C15.829 3.62845 15.3194 3.05012 14.6031 2.63486C13.8875 2.22005 13.021 2 12 2C10.979 2 10.1125 2.22005 9.39691 2.63486C8.68058 3.05012 8.17102 3.62845 7.81592 4.25974ZM9.55908 5.24026C9.12538 6.01128 9 7.04912 9 8H15C15 7.04911 14.8746 6.01129 14.4409 5.24027C14.2335 4.87155 13.9618 4.57488 13.6 4.36514C13.2375 4.15495 12.729 4 12 4C11.271 4 10.7625 4.15495 10.4 4.36514C10.0382 4.57488 9.76648 4.87155 9.55908 5.24026ZM14 14C14 14.7403 13.5978 15.3866 13 15.7324V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14Z"
              />
            </svg>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Kata kunci"
              className="w-full focus:outline-none text-base font-light bg-white/0"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </label>
      </div>
      <div className="footer-form">
        <button
          type="button"
          className="block w-full px-4 py-3 mt-9 font-medium text-xl text-white bg-primary rounded-xl focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
          onClick={onSubmit}
        >
          Masuk
        </button>
      </div>
    </form>
  )
}
