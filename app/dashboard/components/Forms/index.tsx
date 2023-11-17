import { useState } from "react";
import Tabs from "../Tabs";
import AccountForm from "./accountInfo";
import CosigneeForm from "./cosignee";
import Favorite from "./favorite";
import ProfileForm from "./profile";

export default function Forms() {
  const [currentForm, setCurrentForm] = useState<string>("My Profile");
  const getCurrentForm = () => {
    switch (currentForm) {
      case "My Profile":
        return <ProfileForm />;
      case "My Account Info":
        return <AccountForm />;
      case "My Cosignee Details":
        return <CosigneeForm />;
      case "My Favorites":
        return <Favorite />;
      default:
        break;
    }
  };
  const list = [
    "My Profile",
    // "My Account Info",
    "My Cosignee Details",
    "My Favorites",
    "Inquiry & Bid List",
    "Reserved Vehicles",
    "Purchased Vehicles",
  ];
  return (
    <div className="w-full">
      <div className="w-full flex justify-center flex-col">
        <Tabs
          list={list}
          setCurrentForm={setCurrentForm}
          currentForm={currentForm}
        />
        {getCurrentForm()}
      </div>
    </div>
  );
}
