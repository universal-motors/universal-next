import UserStore from "@/store/userStore";
import { createContext } from "react";

interface Store {
  userStore: UserStore;
}

export const store: Store = {
  userStore: new UserStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return store;
}
