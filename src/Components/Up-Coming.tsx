"use client";
import { cn } from "@/lib/utils";

export function UpComing() {
  return (
    <section id="Upcoming" className="mx-auto h-screen max-w-7xl">
        <div className="flex flex-col items-center justify-center py-50">
          <div className="h-100 w-150 rounded-[60px] border bg-[url('/images/Travel.jpg')] bg-cover bg-center">
            <div className="mx-auto mt-48 flex h-fit w-142.5 flex-col items-center space-y-4 rounded-[40px] bg-white/0.5 px-1 py-5 text-center backdrop-blur-md">
              <h1 className="font-gp text-5xl tracking-normal text-white">
                Roam for personal travel
              </h1>
              <p className="text-white">
                Agent-first travel, for your own trips.
              </p>
              <div className="bg-background mx-auto flex min-h-12 w-112.5 items-center justify-between rounded-[15px] border border-neutral-200 pr-2 pl-2 dark:border-neutral-900 dark:bg-[#101010]">
                <input
                  placeholder="Enter your gmail..."
                  className={cn(
                    "border-none bg-transparent! outline-none! focus:ring-0!",
                    "my-auto resize-none p-0!",
                    "min-h-5 leading-5",
                    "text-white placeholder:text-neutral-500",
                    "rounded-none! caret-blue-500",
                  )}
                />
                <button className="rounded-[10px] border border-neutral-800 bg-[#101010] px-3 py-1.5 text-sm text-white">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
