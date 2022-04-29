import React from 'react'

import { Layout, Menu } from 'antd'

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'

import './SideMenu.css'

const { Sider } = Layout

export default function SideMenu() {

  const menuList = [
    {
      key: '/home',
      icon: <UserOutlined />,
      label: '首页',
    },
    {
      icon: <UserOutlined />,
      label: '用户管理',
      children:[
        {
          key: '2',
          icon: <UserOutlined />,
          label: '全部用户',
        },
        {
          key: '3',
          icon: <UserOutlined />,
          label: '增加用户',
        }
      ]
    },
    {
      icon: <VideoCameraOutlined />,
      label: '权限管理',
      children:[
        {
          key: '4',
          icon: <VideoCameraOutlined />,
          label: '角色列表',
        },
        {
          key: '5',
          icon: <VideoCameraOutlined />,
          label: '权限列表',
        }
      ]
    },
    {
      key: '/friend',
      icon: <UploadOutlined />,
      label: '友谊外链',
    },

  ]
  return (
    <Sider trigger={null} collapsible >
          <div className="logo">流浪所后台管理系统</div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={menuList}
          />
        </Sider>
  )
}
