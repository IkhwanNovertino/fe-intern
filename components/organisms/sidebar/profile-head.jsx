import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import profilePic from '@/public/img/user-avatar.png'
import { getCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';

export default function ProfileHead({ name, role, avatar }) {
  const [users, setUsers] = useState({
    name: '',
    role: '',
    avatar: '',
  });
  useEffect(() => {
    const token = getCookie('token');

    const jwtToken = atob(token);
    const payload = jwtDecode(jwtToken);
    const dataUserFromPayload = payload.user;
    
    dataUserFromPayload.avatar = `https://be-magang-production.up.railway.app/public/uploads/${dataUserFromPayload.avatar}`
    // console.log(dataUserFromPayload);
    setUsers(dataUserFromPayload)
    
  }, [])
  return (
    <>
    <header className="flex flex-col items-center justify-center pt-10 pb-5 px-16">
      <div className="img-profile w-44 h-44 bg-blue/20 rounded-full">
        <Image
            src={profilePic}
            width={176}
            height={176}
            className="w-44 h-44 rounded-full"
            alt="profile picture"
        />
      </div>
      <div className="name-role-profile text-center mt-2">
        <h1 className="text-dark font-semibold text-base/none py-1 capitalize">{users.name}</h1>
          <h6 className="text-light font-light text-xs/none uppercase">{users.role}</h6>
      </div>
    </header>
      
    </>
  );
};
