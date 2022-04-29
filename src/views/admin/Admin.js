import React from 'react'
import { Outlet } from 'react-router-dom'

import SideMenu from '../../components/admin/SideMenu'
import TopHeader from '../../components/admin/TopHeader'

import { Layout } from 'antd'
import './Admin.css'

const { Content } = Layout

export default function Admin() {
  return (
    <Layout>
      <SideMenu></SideMenu>
      <Layout className="site-layout">
        <TopHeader></TopHeader>
        <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  )
}
