import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <h2>Header</h2>
    <Outlet />
    <h1>Footer</h1>
    </>
  )
}

export default Layout