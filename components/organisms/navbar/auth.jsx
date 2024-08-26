import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { deleteCookie, getCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [user, setUser] = useState({
    id: '',
    name: '',
    role: '',
    avatar: '',
  });
  const router = useRouter();

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const dataUserFromPayload = payload.user;
      console.log(dataUserFromPayload);
      

      dataUserFromPayload.avatar = `https://be-magang-production.up.railway.app/public/uploads/${dataUserFromPayload.avatar}`
      setUser(dataUserFromPayload)
      setIsLogin(true);
    }
  }, []);

  const toggleDropdown = () => isOpenDropdown ? setIsOpenDropdown(false) : setIsOpenDropdown(true);

  const onLogOut = () => {
    deleteCookie('token');
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
            <Image
              className="object-center rounded-full p-0 m-0"
              width={56}
              height={56}
              src={user.avatar === 'https://be-magang-production.up.railway.app/public/uploads/none' ? "/img/human-resource.png" : avatar}
              alt="profile picture"
            />
          </button>
          {isOpenDropdown && (
            <div className="dropdown-menu absolute z-20 w-max -ml-28 mt-4 py-2 px-4 rounded-lg shadow-md backdrop-blur-sm">
              <ul>
                <li className="text-base font-medium text-dark mb-2 hover:font-semibold">
                  {user.role === 'applicant' ? (
                    <Link href="/applicant">
                      Daftar Pengajuan
                    </Link>
                  ) : (
                    <Link href={`/${user.role}`}>
                      Dashboard
                    </Link>
                  )}
                  
                </li>
                <li className="text-base font-medium text-dark mb-2 hover:font-semibold">
                  <Link href="/">Profil Saya</Link>
                </li>
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
