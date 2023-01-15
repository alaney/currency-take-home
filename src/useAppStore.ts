import { create } from "zustand";

interface AppState {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
  username: string;
  setUsername: (username: string) => void;
}

const useAppStore = create<AppState>((set) => ({
  loggedIn: true,
  login: () => set(() => ({ loggedIn: true })),
  logout: () => set(() => ({ loggedIn: false })),
  username: "Aaron",
  setUsername: (username: string) => set(() => ({ username })),
}));

export default useAppStore;
