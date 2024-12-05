import Badge from '@/components/atoms/badge';
import Image from 'next/image'
import React from 'react'

export default function HeadProfileIntern({ data }) {
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
          <p className="text-dark text-base font-bold name_interns">{ data.name }</p>
          <p className="text-light text-sm font-medium num_id_interns">{ data.id_num }</p>
          <p className="text-light text-sm font-medium mb-3">{ data.email }</p>
          <Badge
            title={data.statusIntern}
            status={(data.statusIntern === 'pending' && 'pending') ||
              (data.statusIntern === 'active' && 'confirmed') ||
              (data.statusIntern === 'finish' && 'success')
            }
            size={'normal'}
          />
        </div>
      </div>
    </div>
  )
}
