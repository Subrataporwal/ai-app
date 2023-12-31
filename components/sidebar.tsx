"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  Video,
} from "lucide-react";

const inter = Inter({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    herf: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Converstion",
    icon: MessageSquare,
    herf: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    herf: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: Video,
    herf: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    herf: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    herf: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    herf: "/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className=" px-3 py-2 flex-1">
        {" "}
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src={"/icon.png"}></Image>
          </div>
          <h1 className={cn("text-2xl font-bold font-inter", inter.className)}>
            fluxflow
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((routes) => (
            <Link
              href={routes.herf}
              key={routes.herf}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === routes.herf
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <routes.icon className={cn("h-5 w-5 mr-3", routes.color)} />
                {routes.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
