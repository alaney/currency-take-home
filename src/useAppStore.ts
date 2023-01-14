import { create } from "zustand";

interface AppState {
  loggedIn: boolean;
  logIn: () => void;
}

const useAppStore = create<AppState>((set) => ({
  loggedIn: false,
  logIn: () => set(() => ({ loggedIn: true })),
}));

export default useAppStore;
