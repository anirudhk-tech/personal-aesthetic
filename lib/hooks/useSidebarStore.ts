import { create } from "zustand";

interface SidebarStore {
  selected: string | null;
  setSelected: (selected: string) => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  selected: null,
  setSelected: (selected: string | null) => set({ selected }),
}));
