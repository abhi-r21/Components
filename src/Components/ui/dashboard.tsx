"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "./sidebar";


export const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
    </div>
  );
}