"use client"
import Link from "next/link";
import React from "react";
import { useState } from "react";

export function Hero() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  }
  return ( 
    <section className=" bg-neutral-950 px-10 py-5">
      <h1 className="text-white items-center flex justify-center text-bold mb-2">Hello Everyone</h1>
      <div className="h-screen bg-neutral-900 rounded-[50px] p-10 shadow-input">
        <div className="flex justify-end">
            <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="font-gp flex items-center justify-center gap-2 rounded-[25px] border bg-neutral-900 px-4 py-3 text-sm text-white">
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
              <div className="absolute h-120 mt-2 w-90 bg-gray-300 border border-gray-200 rounded-[50px] shadow-lg  top-13 z-50 right-12 p-2">
                <div className="flex flex-col items-center justify-center mt-10 space-y-2">
                <button 
                 onClick={closeMenu}
            aria-label="Close Menu"
                className="absolute right-15 border border-rose-100 size-8 justify-center items-center flex rounded-full top-5"><RxCross2/></button>
                    <a
                      href="#home"
                      className="block px-10 py-2 text-2xl text-gray-700 hover:bg-gray-100 hover:rounded-xl hover:text-black "
                    >
                      Home
                    </a>
                    <a
                      href="#settings"
                      className="block px-10 py-2 text-2xl text-gray-700 hover:bg-gray-100 hover:rounded-xl hover:text-black "
                    >
                      Settings
                    </a>
                    <a
                      href="#logout"
                      className="block px-10 py-2 text-2xl text-red-600 hover:bg-gray-100 hover:rounded-xl"
                    >
                      Logout
                    </a>
              </div>
              <div>
              Here is a link to 
                <Link href={"/about"}> Card</Link> Pag
                </div>
           </div>
            )}
          </div>
        </div>
</section>
  )
}