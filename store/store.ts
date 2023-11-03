// import UserStore from "@/store/userStore";
// import { createContext } from "react";

// interface Store {
//   userStore: UserStore;
// }

// export const store: Store = {
//   userStore: new UserStore(),
// };

// export const StoreContext = createContext(store);

// export function useStore() {
//   return store;
// }
import { Customer } from "@/models/Customer";
import { create } from "zustand";

const initialUserData = {
  customerId: 0,
  customerCode: "",
  titleId: 0,
  name: "",
  lastName: "",
  companyName: "",
  address: "",
  countryId: 0,
  preferredPortId: 0,
  email: "",
  email2: "",
  email3: "",
  phone: "",
  phone2: "",
  phone3: "",
  isAssigned: false,
  assignedAgentId: 0,
  isTrxAccActive: false,
  isActive: false,
  createdOn: "",
};

interface userData {
  user: Customer;
  update: (newUserData: Customer) => void;
  deleteData: () => void;
}
// export const useUserStore = create<userData>((set) => ({
//   user: initialUserData,
//   update: (newUserData: Customer) => set((state) => ({ user: { ...state.user, ...newUserData } })),
//   deleteData: () => set((state) => ({ user: { ...initialUserData } })),
// }))

const persistedUserData =
  JSON.parse(
    typeof window !== "undefined" &&
      window.localStorage &&
      (localStorage?.getItem("user_data") as any)
  ) || initialUserData;

// interface userData {
//   user: Customer;
// }

export const useUserStore = create<userData>((set) => ({
  user: persistedUserData,
  update: (newUserData: Customer) =>
    set((state) => {
      const updatedUser = { ...state.user, ...newUserData };
      localStorage.setItem("user_data", JSON.stringify(updatedUser));
      return { user: updatedUser };
    }),
  deleteData: () =>
    set(() => {
      localStorage.removeItem("user_data");
      return { user: initialUserData };
    }),
}));
