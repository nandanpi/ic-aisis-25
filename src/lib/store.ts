import { create } from "zustand";

interface LoaderState {
  hasVisitedHome: boolean;
  markHomeAsVisited: () => void;
  shouldShowLoader: () => boolean;
}

export const useLoaderStore = create<LoaderState>((set, get) => ({
  hasVisitedHome: false,

  markHomeAsVisited: () => {
    set({ hasVisitedHome: true });
  },

  shouldShowLoader: () => {
    return !get().hasVisitedHome;
  },
}));
