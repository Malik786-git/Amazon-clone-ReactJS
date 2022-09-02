import React, { useState } from "react";
import SidebarContentList from "./SidebarContentList";

const SidebarContent = ({ title, option }) => {
  const [seeMore, setSeeMore] = useState(false);

  if (option.length > 5) {
    return (
      <div className=" my-1">
        <h6 className="py-2 ps-3 fw-bold">{title}</h6>
        <ul
          className={
            seeMore
              ? "sidebar-content-box-fixed sidebar-content-box-fixed-show"
              : "sidebar-content-box-fixed"
          }
        >
          {option.map((item, i) => (
            <SidebarContentList key={i + 1} items={item} />
          ))}
        </ul>

        <span className="see-all ps-3" onClick={() => setSeeMore(!seeMore)}>
          {seeMore ? (
            <span>
              See less<i className="fa fa-chevron-up" aria-hidden="true"></i>
            </span>
          ) : (
            <span>
              See more<i className="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
          )}
        </span>
        <hr />
      </div>
    );
  } else {
    return (
      <div className=" my-1">
        <h6 className="py-2 ps-3 fw-bold">{title}</h6>
        <ul className="sidebar-content-box">
          {option.map((item, i) => (
            <SidebarContentList key={i + 1} items={item} />
          ))}
        </ul>
        <hr />
      </div>
    );
  }
};

export default SidebarContent;
