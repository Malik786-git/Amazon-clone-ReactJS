import React from "react";
import { GlobalProvider } from "../context/context";
import SidebarContent from "./SidebarContent";
import { data } from "../data";
import SidebarWrapper from "./SidebarWrapper";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = GlobalProvider();

  const sidebarContent = data.sidebarOptions.map((content) => (
    <SidebarContent key={content.id} {...content} />
  ));

  return (
    <>
      <div className={isSidebarOpen ? "sidebar open-sidebar" : "sidebar"}>
        <button
          className={
            isSidebarOpen
              ? "closeBtn-show sidebar-closeBtn"
              : "sidebar-closeBtn"
          }
          onClick={closeSidebar}
        >
          X
        </button>
        <div className="User">
          <h5 className="py-2 ps-3 text-light fw-bold Sidebar-Signin">
            <i className="fa fa-user-circle" aria-hidden="true"></i> Hello, Sign
            in
          </h5>
          <div className="SidebarContentContainer">{sidebarContent}</div>
        </div>
      </div>
         <SidebarWrapper/>
    </>
  );
};

export default Sidebar;
