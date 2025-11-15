"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Colors } from "@/lib/colors";
import { useSidebarStore } from "@/lib/hooks/useSidebarStore";
import { User, Briefcase, Folder, BookOpen, Star } from "lucide-react";

export const Sidebar = () => {
  const OPTIONS = [
    { label: "Profile", Icon: User },
    { label: "Experience", Icon: Briefcase },
    { label: "Projects", Icon: Folder },
    { label: "Education", Icon: BookOpen },
    { label: "Skills", Icon: Star },
  ];
  const { selected, setSelected } = useSidebarStore();

  const getButtonColor = (option: string) => {
    return selected === option.toLowerCase()
      ? `${Colors.bgAccent} text-white hover:${Colors.bgAccent} hover:text-white`
      : "hover:bg-transparent";
  };

  return (
    <div
      className={`${Colors.sidebar} ${Colors.sidebarShadow} ${Colors.sidebarBorder} fixed left-4 top-4 bottom-4 w-64 p-4 flex flex-col transition-all duration-300 md:left-4 backdrop-blur-md`}
    >
      <div className="text-lg font-bold mb-4">Anirudh Kuppili</div>
      <ScrollArea className="flex-1 space-y-2">
        {OPTIONS.map((option) => (
          <Button
            key={option.label}
            variant="ghost"
            className={`w-full justify-start hover:bg-none ${getButtonColor(option.label)}`}
            onClick={() => setSelected(option.label.toLowerCase())}
          >
            <option.Icon className="mr-2 h-4 w-4" />
            {option.label}
          </Button>
        ))}
      </ScrollArea>
    </div>
  );
};
