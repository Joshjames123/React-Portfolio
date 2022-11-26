import React, { Children } from "react";
import "../App.css";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

function SidebarLayout({ children }) {
  return (
    <div className="grid-container">
      <div className="grid-item1">
        <Sidebar />
      </div>
      <div className="grid-item2">
        <motion.div
          className="page"
          intial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default SidebarLayout;
