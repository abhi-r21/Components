import React, { useState } from "react";
import { motion } from "motion/react";
import { BiHome } from "react-icons/bi";
import { HiOutlineChartBar } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  const links = [
    {
      name: "Home",
      href: "/",
      icon: <BiHome  className="w-5 h-5 mr-3" />
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: <HiOutlineChartBar className="w-5 h-5 mr-3"/>
    },
    {
      name: "Users",
      href: "/users",
      icon: <FaUsers className="w-5 h-5 mr-3"/>
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <IoSettingsOutline className="w-5 h-5 mr-3" />
    }
  ];

  const sidebarVariant = {
    open: {
      width: "16rem",
    },
    closed: {
      width: "4.5rem",
    },
  };

  const parentVariants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const childVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    }
  };

  return (
    <motion.div 
      initial={false}
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      transition={{
        duration: 0.3,
      }}
      className="border-r border-neutral-100 h-full">
      <motion.nav 
        variants={sidebarVariant}
        className={`bg-white shadow-md h-full`}>
        <div className="p-4 flex justify-between items-center">
          <h2 className={`text-xl text-black font-semibold ${!isOpen && "sr-only"}`}>
            Dashboard
          </h2>
          <button
            onClick={toggleSidebar}
            className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label={isOpen ? "Close sidebar": "Open sidebar"}
          >
            {isOpen ? <TbChevronLeft className="text-black"/>: <TbChevronRight className="text-black"/>}
          </button>
        </div>
        <div className="relative">
          <nav className="p-4">
            <motion.ul variants={parentVariants} className="space-y-2">
              {links.map((link) => (
                <motion.li variants={childVariants} key={link.name}>
                  <a
                  href={link.href}
                  className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
                  title={!isOpen ? link.name : ""}
                  >
                    {link.icon}
                    {isOpen && link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </motion.nav>
    </motion.div>
  );
};

