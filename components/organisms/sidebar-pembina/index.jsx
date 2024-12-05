import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar'
import ProfileHead from '../sidebar/profile-head'
import Menus from '../sidebar/menus'
import MenuItem from '../sidebar/menu-item'
import { usePathname, useRouter } from 'next/navigation'
import { deleteCookie, getCookie } from 'cookies-next'
import { jwtDecode } from 'jwt-decode'

export default function SidebarPembina() {
  const pathname = usePathname();
  const router = useRouter();
  const logout = () => {
    deleteCookie('token')
    router.push('/sign-in')
  }

  return (
    <Sidebar>
      <ProfileHead />
      <Menus>
        <MenuItem
          href={"/pembina"}
          title={'Dashboard'}
          icon={'ic-dashboard'}
          active={pathname === '/pembina' ? true : false}
        />
        <MenuItem
          href={"/pembina/certificate"}
          title={'Sertifikat'}
          icon={'ic-certificate'}
          active={pathname.includes('/certificate') ? true : false}
        />
        <MenuItem
          href={"/pembina/recap"}
          title={'Rekap Magang'}
          icon={'ic-recap'}
          active={pathname.includes('/recap') ? true : false}
        />
        <MenuItem
          logout={logout}
          title={'Logout'}
          icon={'ic-logout'}
          active={pathname.includes('/logout') ? true : false}
        />
      </Menus>
    </Sidebar>
  )
}
