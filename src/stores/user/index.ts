import { create } from "zustand";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  avatarUrl: string | null;
  coverUrl: string | null;
  updatedAt: Date;
  createdAt: Date;
}

interface IUseUserStore {
  user: IUser;
  setUser: (user: IUser) => void;
}

export const useUserStore = create<IUseUserStore>((set) => ({
  user: {} as IUser,
  setUser: (user: IUser) => set({ user }),
}));
