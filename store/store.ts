import { create } from 'zustand'

type Store = {
    bears: number;

}

type Actions = {
    increasePopulation : ()=>void;
    removeAllBears : ()=>void;
}

export const useStore = create<Store & Actions>((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))