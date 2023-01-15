import { create } from "zustand";
import { Currency } from "./types";

interface AppState {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
  username: string;
  setUsername: (username: string) => void;
  currencies: Currency[];
  setCurrencies: (currencies: Currency[]) => void;
}

const useAppStore = create<AppState>((set) => ({
  loggedIn: true,
  login: () => set(() => ({ loggedIn: true })),
  logout: () => set(() => ({ loggedIn: false })),
  username: "Aaron",
  setUsername: (username: string) => set(() => ({ username })),
  currencies: [],
  setCurrencies: (currencies: Currency[]) => set(() => ({ currencies })),
}));

export default useAppStore;
