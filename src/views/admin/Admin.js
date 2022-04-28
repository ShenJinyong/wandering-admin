import React from 'react'
import { Outlet } from 'react-router-dom'

import SideMenu from '../../components/admin/SideMenu'
import TopHeader from '../../components/admin/TopHeader'
export default function Admin() {
  return (
    <div>
      <SideMenu></SideMenu>
      <TopHeader></TopHeader>
      <Outlet/>
    </div>
  )
}
