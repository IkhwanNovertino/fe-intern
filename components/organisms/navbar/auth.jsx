import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const router = useRouter();

  const toggleDropdown = () => isOpenDropdown ? setIsOpenDropdown(false) : setIsOpenDropdown(true);

  const onLogOut = () => {
    setIsLogin(false)
    router.push('/')

  };

  if (isLogin) {
    return (
      <div>
        <div className="dropdown-menu-auth relative">
          <button
            className="relative"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={toggleDropdown}
          >
            <img
              className="w-12 object-cover object-center rounded-full p-0 m-0"
              src="/img/profile-pic.png"
              alt="profile picture"
            />
          </button>
          {isOpenDropdown && (
            <div className="dropdown-menu absolute z-20 w-max -ml-36 mt-4 py-2 px-4 rounded-lg shadow-md backdrop-blur-sm">
              <ul>
                <li className="text-base font-medium text-dark mb-2 hover:font-semibold">Pengajuan Magang</li>
                <li className="text-base font-medium text-dark mb-2 hover:font-semibold">Ubah Profil</li>
                <li className="text-base font-medium text-dark mb-2 hover:font-semibold">
                  <button type="button" onClick={onLogOut}>Log out</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div>
      <Link
        href="/sign-in"
        className="px-3 py-0.5 sm:py-4 text-base sm:text-lg font-medium  text-dark hover:text-light hover:tracking-wide hover:font-semibold hover:transition hover:duration-700 hover:ease-in"
      >
        Log in
      </Link>
    </div>
  )

}
