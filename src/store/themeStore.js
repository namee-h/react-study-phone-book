import { create } from "zustand";

export const useThemeStore = create((set) => ({
  mode: "light",
  toggleMode: () =>
    set((state) => ({
      mode: state.mode === "light" ? "dark" : "light",
    })),
}));
