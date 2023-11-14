"use client";

import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="w-full border-b flex justify-between align-middle py-4 px-8">
      <h1>Logo</h1>
      <div className="">
        <Link href="/" className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}>
          Home
        </Link>
        <Link href="dashboard" className={cn(
            "mx-5 transition-colors hover:text-foreground/80",
            pathname === "/dashboard" ? "text-foreground" : "text-foreground/60"
          )}>
          Dashboard
        </Link>
      </div>
    </header>
  )
}