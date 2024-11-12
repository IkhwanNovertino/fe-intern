import Image from 'next/image'
import React from 'react'

export default function HeadProfileIntern() {
  return (
    <div className="profile-interns flex items-center justify-start gap-4 mb-5">
      <div className="img-id">
        <Image
          src={'/img/profile-pic.png'}
          width={180}
          height={180}
          className="w-40 rounded-full"
        />
      </div>
      <div className="basic-id w-full flex items-start justify-between">
        <div>
          <p className="text-dark text-base font-bold name_interns">{ `intern.name`}</p>
          <p className="text-light text-sm font-medium num_id_interns">{ `intern.id_num` }</p>
          <p className="text-light text-sm font-medium mt-3">{ `intern.email` }</p>
          <p className="text-light text-sm font-medium">{`intern.phone_num`}</p>
        </div>
      </div>
    </div>
  )
}
