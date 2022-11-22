import React from "react";
import * as SiIcons from "react-icons/si";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "About",
    path: "/about",
    icon: <SiIcons.SiAboutdotme />,
    cName: "nav-text",
  },

  {
    title: "What I do",
    path: "/whatIDo",
    icon: <CgIcons.CgBrowser />,
    cName: "nav-text",
  },

  {
    title: "Work",
    path: "/work",
    icon: <MdIcons.MdWork />,
    cName: "nav-text",
  },

  {
    title: "Education",
    path: "/education",
    icon: <MdIcons.MdSchool />,
    cName: "nav-text",
  },

  {
    title: "Project",
    path: "/project",
    icon: <AiIcons.AiFillProject />,
    cName: "nav-text",
  },

  {
    title: "Contact",
    path: "/contact",
    icon: <BsIcons.BsFillTelephoneInboundFill />,
    cName: "nav-text",
  },
];
