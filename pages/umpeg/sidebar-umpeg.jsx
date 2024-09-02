import React from 'react';
import MenuItem from '@/components/organisms/sidebar/menu-item';
import ProfileHead from '@/components/organisms/sidebar/profile-head';
import Sidebar from '@/components/organisms/sidebar';
import Menus from '@/components/organisms/sidebar/menus';
import { usePathname, useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next'

export default function SidebarUmpeg() {
  const pathname = usePathname()
  const router = useRouter();
  const logout = () => {
    deleteCookie('token')
    router.push('/sign-in')
  }
  return (
    <Sidebar>
      <ProfileHead
        name={'Seneca'}
        role={'Pegawai Umpeg'}
        avatar={''}
      />
      <Menus>
        <MenuItem
          href={"/umpeg"}
          title={'Dashboard'}
          icon={'ic-dashboard'}
          active={pathname === '/umpeg' ? true : false}
        />
        <MenuItem
          href={"/umpeg/submission"}
          title={'Pengajuan'}
          icon={'ic-submission'}
          active={pathname.includes('/submission') ? true : false}
        />
        <MenuItem
          href={"/umpeg/employee"}
          title={'Pembimbing'}
          icon={'ic-employee'}
          active={pathname === '/umpeg/employee' ? true : false}
        />
        <MenuItem
          href={"/umpeg/intern"}
          title={'Peserta'}
          icon={'ic-intern'}
          active={pathname.includes('/intern') ? true : false}
        />
        <MenuItem
          href={"/umpeg/recap"}
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
