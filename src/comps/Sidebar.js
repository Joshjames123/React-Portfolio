import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

function Sidebar() {
  return (
    <IconContext.Provider value={{ color: "white", size: "25px" }}>
      <div>
        {SidebarData.map((val, key) => {
          return (
            <li key={key} className="list">
              <Link to={val.path}>{val.icon}</Link>
            </li>
          );
        })}
      </div>
    </IconContext.Provider>
  );
}

export default Sidebar;

//next is to do layout grid
