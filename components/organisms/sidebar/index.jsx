import React from 'react';
import Link from 'next/link';


import ProfileHead from './profile-head';
import ListItem from './menu-item';

export default function Sidebar({children}) {
  return (
    <aside className="sidebar h-screen me-1 fixed z-20 overflow-y-auto">
      <div className="bg-white min-w-0">
        {children}
      </div>
    </aside>
  )
}
