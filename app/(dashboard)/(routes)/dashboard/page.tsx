"use client";

import { UserButton } from "@clerk/nextjs";
import { Inter } from "next/font/google";
const inter = Inter({ weight: "600", subsets: ["latin"] });

import { cn } from "@/lib/utils";

import {
  ArrowRight,
  Code,
  Image,
  MessageSquare,
  Music,
  Video,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: Image,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: Video,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/code",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2
          className={cn(
            "text-2xl md:text-4xl font-bold text-center",
            inter.className
          )}
        >
          Explore the power of AI
        </h2>
        <p className="font-light text-center text-sm md:text-lg text-muted-foreground">
          Chat with the smartest AI - Experince the power of AI
        </p>
      </div>
      <div className="px-4 md:px20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
