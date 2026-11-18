"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { RxCross2 as IconX } from "react-icons/rx";
import { Ri24HoursLine } from "react-icons/ri";
import { TbMessage, TbView360Number, TbCube3dSphere, TbPlus } from "react-icons/tb";
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react";

export const Card =() => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className={cn(
            "w-72 min-h-104 h-108 rounded-xl",
            "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
            "p-6 flex flex-col"
          )}
          >
            <h2 className="font-bold text-[10px] text-black">StrawBerry UI Components</h2>
            <p className="text-neutral-600 mt-1 text-[10px]">A collection of beautiful UI components, let's get on with it.</p>
            <div className="flex items-center justify-center">
              <button 
              onClick={() => setOpen(false)}
              className="flex items-center gap-1 text-[10px] mt-2 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
              rounded-md px-2 py-1 text-black">
                <Image
                  src="/images/stawberry.jpg"
                  alt="StrawBerry UI"
                  width={50}
                  height={50}
                  className="h-4 w-4"
                />
                StrawBerry UI
                <IconX className="h-3 w-3 text-neutral-400"/>
              </button>
            </div> 
            <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
              <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
                filter: 'blur(10px)',
              }} 
              whileHover={{
                opacity: 1,
                scale: 1.05,
                filter: "blur(0px)",
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="absolute inset-0 h-full w-full border border-netural-200 bg-white rounded-lg divide-y divide-neutral-200">
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <TbMessage className="h-4 w-4 text-neutral-600"/>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      StrawBerry UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">A collection of UI components</p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Ri24HoursLine className="h-4 w-4 text-neutral-600"/>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      24 hours turnaround
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">Super fast delivery at warp speed</p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <TbView360Number className="h-4 w-4 text-neutral-600"/>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      360 days all around
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">We're here to help you 24/7</p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <TbCube3dSphere className="h-4 w-4 text-neutral-600"/>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Some other Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">Here goes the another subtitle</p>
                  </div>
                </div>

                <div className="flex gap-2 p-4 items-center justify-center">
                  <div className="h-4 w-4 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <TbPlus className="h-3 w-3 text-neutral-600"/>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Create Project
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}