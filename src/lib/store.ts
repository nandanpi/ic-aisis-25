import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface PageLoadState {
  isPageLoaded: boolean;
  setPageLoaded: () => void;
}

export const usePageLoad = create<PageLoadState>()(
  persist(
    (set) => ({
      isPageLoaded: false,
      setPageLoaded: () => set({ isPageLoaded: true }),
    }),
    {
      name: "page-load-storage",
      storage:
        typeof window !== "undefined"
          ? createJSONStorage(() => sessionStorage)
          : undefined,
    },
  ),
);
