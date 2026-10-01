"use client"
import React from "react";
import { useState } from "react";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return ( 
    <section className=" bg-neutral-950 px-10 py-5">
      <h1 className="text-white items-center flex justify-center text-bold mb-2">Hello Everyone</h1>
      <div className="h-screen bg-neutral-900 rounded-[50px] p-10 shadow-input">
        <div className="flex justify-end items-center">
          <div className="px-4 py-2 border text-sm bg-neutral-900 text-white rounded-2xl">
            <button
            onClick={toggleMenu}
            aria-label="Toggle Menu">
            {isOpen? (
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
              />
            )}
            Menu
            </button>
            {isOpen && (
              <div className="absolute h-50 mt-3 w-48 bg-white border border-gray-200 rounded-lg shadow-lg  z-50 right-20 p-2">
              <a
                href="#home"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:rounded-xl hover:text-white "
              >
                Home
              </a>
              <a
                href="#settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:rounded-xl hover:text-white "
              >
                Settings
              </a>
              <a
                href="#logout"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-400 hover:rounded-xl"
              >
                Logout
              </a>
            </div>
            )}
          </div>
        </div>
      </div>
</section>
  )
}