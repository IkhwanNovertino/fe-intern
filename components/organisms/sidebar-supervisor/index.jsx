import React from 'react'
import Sidebar from '../sidebar'
import ProfileHead from '../sidebar/profile-head'
import Menus from '../sidebar/menus'
import MenuItem from '../sidebar/menu-item'
import { usePathname, useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next'

export default function SidebarSupervisor() {
  const pathname = usePathname();
  const router = useRouter();
  const logout = () => {
    deleteCookie('token')
    router.push('/sign-in')
  }
  return (
    <Sidebar>
      <ProfileHead
        name={'Seneca, M.Kom'}
        role={'Pembimbing'}
        avatar={''}
      />
      <Menus>
        <MenuItem
          href={"/supervisor"}
          title={'Dashboard'}
          icon={'ic-dashboard'}
          active={pathname === '/supervisor' ? true : false}
        />
        <MenuItem
          href={"/supervisor/intern"}
          title={'Peserta Magang'}
          icon={'ic-intern'}
          active={pathname.includes('/intern') ? true : false}
        />
        <MenuItem
          href={"/supervisor/logbook"}
          title={'logbook'}
          icon={'ic-logbook'}
          active={pathname.includes('/logbook') ? true : false}
        />
        <MenuItem
          href={"/supervisor/intern"}
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
