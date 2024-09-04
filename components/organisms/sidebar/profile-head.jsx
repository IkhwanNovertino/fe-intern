import React from 'react';
import Image from 'next/image';
import profilePic from '@/public/img/profile-pic.png'

export default function ProfileHead({name, role, avatar}) {
  return (
    <>
    <header className="flex flex-col items-center justify-center pt-10 pb-5 px-16">
      <div className="img-profile w-44 h-44 bg-blue/20 rounded-full">
        <Image
          src={avatar === "" ? profilePic : avatar}
          className="w-44 h-44 rounded-full"
          alt="profile picture"
        />
      </div>
      <div className="name-role-profile text-center mt-2">
        <h1 className="text-dark font-semibold text-base/none py-1">{name}</h1>
          <h6 className="text-light font-light text-xs/none">{role}</h6>
      </div>
    </header>
      
    </>
  );
};
