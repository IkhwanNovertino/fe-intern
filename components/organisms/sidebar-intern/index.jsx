import React from 'react'
import Sidebar from '../sidebar'
import ProfileHead from '../sidebar/profile-head'
import Menus from '../sidebar/menus'
import MenuItem from '../sidebar/menu-item'
import { usePathname } from 'next/navigation'
import { deleteCookie } from 'cookies-next'

export default function SidebarIntern() {
  const pathname = usePathname();
  const logout = () => {
    deleteCookie('token')
    router.push('/sign-in')
  }
  return (
    <Sidebar>
      <ProfileHead
        name={'Seneca'}
        role={'Peserta Magang'}
        avatar={''}
      />
      <Menus>
        <MenuItem
          href={"/intern"}
          title={'Dashboard'}
          icon={'ic-dashboard'}
          active={pathname === '/intern' ? true : false}
        />
        <MenuItem
          href={"/intern/logbook"}
          title={'Logbook'}
          icon={'ic-logbook'}
          active={pathname.includes('/logbook') ? true : false}
        />
        <MenuItem
          href={"/intern/certificate"}
          title={'Sertifikat'}
          icon={'ic-certificate'}
          active={pathname.includes('/certificate') ? true : false}
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
