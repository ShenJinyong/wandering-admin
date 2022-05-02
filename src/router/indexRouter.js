import React from 'react'
import { HashRouter, Routes,Route, Navigate } from 'react-router-dom'

import Login from '../views/login/Login'
import Admin from '../views/admin/Admin'

export default function indexRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path='login' element={<Login/>}></Route>
        {/* <Route path='/' element={<Admin/>}></Route> */}
        <Route path='/' element={
          // localStorage.getItem("toekn")?<Admin/>:<Navigate to="/login" replace />
          true?
          <Admin/>:<Navigate to='login' replace />
        }>
          <Route index element = {<Navigate to='home' />}></Route>
          <Route path='home' element={<div>home</div>}></Route>
          <Route path='user' element={<div>user</div>}></Route>
          <Route path='role' element={<div>role</div>}></Route>
        </Route>
        <Route path='*' element={<div>403</div>} />
      </Routes>
    </HashRouter>
  )
}
