import { createContext, useContext } from "react";
import { BodyType } from "@/models/Master/BodyType";
import { Make } from "@/models/Master/Make";
import { Country } from "@/models/Master/Country";
import { StockCars } from "@/models/StockCars";

interface IMasterDataContext {
  bodyList: BodyType[];
  setBodyList: () => void;
  makeList: Make[];
  setMakeList: () => void;
  countryList: Country[];
  setCountryList: () => void;
  homepageStock: StockCars[];
  setHomePageStock: () => void;
}

export const MasterDataContext = createContext<IMasterDataContext>({
  bodyList: [],
  countryList: [],
  homepageStock: [],
  makeList: [],
  setBodyList(): void {},
  setCountryList(): void {},
  setHomePageStock(): void {},
  setMakeList(): void {},
});

export const useMasterDataContext = () => useContext(MasterDataContext);
