import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <div>
    <NavBar></NavBar>
    <Outlet></Outlet>
    </div>
    </>
  )
}

export default RootLayout