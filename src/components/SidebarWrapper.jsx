import React from 'react'
import { GlobalProvider } from "../context/context";


const SidebarWrapper = () => {
  const { isSidebarOpen, closeSidebar } = GlobalProvider();

  return (
    <>
      <div
        className={
          isSidebarOpen ? "wrapped-sidebar wrapped-show" : "wrapped-sidebar"
        }
        onClick={closeSidebar}
      ></div>
    </>
  )
}

export default SidebarWrapper
