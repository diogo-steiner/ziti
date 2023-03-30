import { create } from "zustand";

interface IOwner {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl: string;
}

export interface ILike {
  id: string;
  owner: IOwner;
}

export interface IComment {
  id: string;
  text: string;
  owner: IOwner;
}

export interface IFavorite {
  id: string;
  owner: IOwner;
}

export interface IPost {
  id: string;
  text: string;
  updatedAt: Date;
  createdAt: Date;
  owner: IOwner;
  likes: ILike[];
  comments: IComment[];
  favorites: IFavorite[];
}

interface IUsePostsStore {
  posts: IPost[];
  setPosts: (posts: IPost[]) => void;
}

export const usePostsStore = create<IUsePostsStore>((set) => ({
  posts: [] as IPost[],
  setPosts: (posts) => set({ posts }),
}));
