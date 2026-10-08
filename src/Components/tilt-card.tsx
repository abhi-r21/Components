"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";
import { motion, spring, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";


export interface TiltCardProps {
  image: string;
  imageAlt: string;
  heading: string;
  subheading: string;
  description: string;
  maxTilt?: number;
  className?: string;
}

const Spring = { stiffness: 220, damping: 20, mass: 0.6 };

export function TiltCard({
  image, 
  imageAlt,
  heading,
  subheading,
  description,
  maxTilt = 14,
  className = "",
}: TiltCardProps) {

  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(py, [-0.5, 0.5], [maxTilt, -maxTilt]),
    Spring
  );

  const rotateY = useSpring(
    useTransform(px, [-0.5, 0.5], [-maxTilt, maxTilt]),
    Spring
  );

  const glareX = useTransform(px, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(py, [-0.5, 0.5], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.55), transparent 60%)`;

  const imgShiftX = useSpring(
    useTransform(px, [-0.5, 0.5], [6, -6]),
    Spring
  );

  const imgShiftY = useSpring(
    useTransform(py, [-0.5, 0.5], [6, -6]),
    Spring
  );

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || e.pointerType === "touch" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left)/rect.width - 0.5);
    py.set((e.clientY - rect.top)/rect.height - 0.5);
  }

  function reset(){
    px.set(0);
    py.set(0);
  }

  return(
    <div className={`perspective:[1100px] ${className}`}>

      <motion.div
      whileHover={reduceMotion ? undefined : {y: -12, scale: 1.02}}
      transition={{ type: "spring", stiffness: 260, damping: 22}}
      className="group">
        <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        onPointerCancel={reset}
        style={
          reduceMotion
          ? undefined
          : { rotateX, rotateY, transformStyle: "preserve-3d"}
        }
        className="relative flex flex-col gap-6 rounded-3xl border-neutral-200 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] dark:border-neutral-800 dark:bg-neutral-900 sm:flex-row sm:items-center sm:gap-8 sm:p-6">
          {!reduceMotion && (
            <motion.div 
            aria-hidden
            style={{backgroundImage: glare}}
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-100"/>
          )}

          <motion.div
          style={
            reduceMotion
            ? undefined
            : {
              x: imgShiftX,
              y: imgShiftY,
              translateZ: 50,
            }
          }
          className="relative aspect-4/5 w-full shrink-0 overflow-hidden rounded-2xl shadow-[0_10px_25px_-8px_rgba(0,0,0,0.35)] sm:w-48"
          >
            <Image 
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width:640px) 192px, 100vw"
            className="object-cover"
            />
          </motion.div>

          <motion.div 
          style={reduceMotion ? undefined : { translateZ: 30}}
          className="flex flex-col gap-2"
          >
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50"> {heading} </h3>
            <p className="text-base font-medium text-neutral-600 dark:text-neutral-300"> {subheading} </p>
            <p className="max-w-prose text-sm leading-relaxed text-neutral-500 dark:text-neutral-400"> {description} </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};