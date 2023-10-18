import React, { ReactNode, useState } from "react";
import { MasterData } from "@/models/MasterData";

interface IProps {
  children: ReactNode;
}

const MasterDataContextProvider = ({ children }: IProps) => {
  //const [{bodyList, makeList, countryList, homepageStock}]=useState<MasterData>()

  return <div>MasterData Context Provider</div>;
};

export default MasterDataContextProvider;
