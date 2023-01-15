import { create } from "zustand";

interface AppState {
  loggedIn: boolean;
  logIn: () => void;
  username: string;
  setUsername: (username: string) => void;
}

const useAppStore = create<AppState>((set) => ({
  loggedIn: false,
  logIn: () => set(() => ({ loggedIn: true })),
  username: "",
  setUsername: (username: string) => set(() => ({ username })),
}));

export default useAppStore;
