import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar'
import ProfileHead from '../sidebar/profile-head'
import Menus from '../sidebar/menus'
import MenuItem from '../sidebar/menu-item'
import { usePathname, useRouter } from 'next/navigation'
import { deleteCookie, getCookie } from 'cookies-next'
import { jwtDecode } from 'jwt-decode'

export default function SidebarIntern() {
  const [users, setUsers] = useState({
    name: '',
    role: '',
    avatar: '',
  });
  const pathname = usePathname();
  const router = useRouter();
  const logout = () => {
    deleteCookie('token')
    router.push('/sign-in')
  }

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
    <Sidebar>
      <ProfileHead
        name={users.name}
        role={'Peserta Magang'}
        avatar={users.avatar}
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
