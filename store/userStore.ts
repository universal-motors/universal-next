import { Customer } from "@/models/Customer";
import { makeAutoObservable } from "mobx";

interface ResponseObject {
  token: string;
}
export default class UserStore {
  user: Customer = {
    CustomerId: 0,
    CustomerCode: "",
    TitleId: 0,
    Name: "",
    LastName: "",
    CompanyName: "",
    Address: "",
    CountryId: 0,
    PreferredPortId: 0,
    Email: "",
    Email2: "",
    Email3: "",
    Phone: "",
    Phone2: "",
    Phone3: "",
    IsAssigned: false,
    AssignedAgentId: 0,
    IsTrxAccActive: false,
    isActive: false,
    CreatedOn: "",
  };
  token: string | null = null;
  apploaded: boolean = false;
  loggedIn: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    //return !!this.user;
    return this.loggedIn;
  }

  login = async () => {
    try {
      // const data = await agent.Account.login(credits);
      // this.setToken(data.data.token);
      // const response = await agent.Account.currentUser(
      //   this.token ? this.token : ""
      // );
      // if (response != null) {
      //   // console.log(response);
      //   this.setLoggedIn(true);
      //   // console.log(this.loggedIn);
      // }
      // this.user = JSON.parse(JSON.stringify(response));
      // console.log(response)
      // console.log(this.user);
    } catch (error) {
      throw error;
    }
  };

  setToken = (token: string | null) => {
    if (token) window.localStorage.setItem("jwt", token);
    else window.localStorage.removeItem("jwt");
    this.token = token;
  };

  setAppLoaded = () => {
    this.apploaded = true;
  };

  setLoggedIn = (log: boolean) => {
    this.loggedIn = log;
  };
}
