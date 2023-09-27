import { create } from "zustand";

const useUserStore = create<{
  user: User | null;
  setUser: (user:User) => void;
}>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export {
  useUserStore
}