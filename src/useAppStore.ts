import { create } from "zustand";
import { Currency } from "./types";

interface AppState {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
  username: string;
  setUsername: (username: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
}

const useAppStore = create<AppState>((set) => ({
  loggedIn: true,
  login: () => set(() => ({ loggedIn: true })),
  logout: () => set(() => ({ loggedIn: false })),
  username: "Aaron",
  setUsername: (username: string) => set(() => ({ username })),
  filter: "",
  setFilter: (filter: string) => set(() => ({ filter })),
}));

export default useAppStore;
