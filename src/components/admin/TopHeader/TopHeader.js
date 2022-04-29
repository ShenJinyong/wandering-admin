import React ,{ useState } from 'react'

import { Layout, Menu, Dropdown,Avatar } from 'antd';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SmileOutlined,
  UserOutlined
} from '@ant-design/icons';

const { Header } = Layout;

export default function TopHeader() {

  const [collapsed,setCollapsed] = useState(false)
  
  const changeCollapsed = ()=>{
    setCollapsed(!collapsed)
  }

  const menu = (
    <Menu
      items={[
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              超级管理员
            </a>
          ),
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              禁用
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          danger: true,
          label: '退出',
        },
      ]}
    />
  )

  return (
    <Header className='site-layout-background' style={{ padding: '0 16px' }}>
            {
              collapsed?<MenuUnfoldOutlined onClick={changeCollapsed}/> : <MenuFoldOutlined onClick={changeCollapsed}/>
            }
            <div style={{float:'right'}}>
              <span>欢迎admin回来</span>
              <Dropdown overlay={menu}>
                <Avatar size="large" icon={<UserOutlined />} />
              </Dropdown>
            </div>
    </Header>
  )
}
