export interface CustomerSignUp {
  customerCode: string;
  name: string;
  lastname: string;
  companyName: string;
  address: string;
  countryID: number;
  preferredPortId: number;
  email: string;
  phone: string;
  // roles: string[];
}

// export interface UserFormValues {
//   username: string;
//   email: string;
//   password: string;
// }

export interface Customer {
  CustomerId: number;
  CustomerCode: string;
  TitleId: number;
  Name: string;
  LastName: string;
  CompanyName: string;
  Address: string;
  CountryId: number;
  PreferredPortId: number;
  Email: string;
  Email2: string;
  Email3: string;
  Phone: string;
  Phone2: string;
  Phone3: string;
  IsAssigned: boolean;
  AssignedAgentId: number;
  IsTrxAccActive: boolean;
  isActive: boolean;
  CreatedOn: string;
}

export interface ConsigneeCourier {
  id: number;
  CustomerID: number;
  ConsigneeName: string;
  ConsigneeCity: string;
  ConsigneeAddress: string;
  ConsigneeCountryId: number;
  ConsigneeEmail: string;
  ConsigneePhone: string;
  NotifyPartyName: string;
  NotifyPartyCity: string;
  NotifyPartyAddress: string;
  NotifyPartyCountryId: number;
  NotifyPartyEmail: string;
  NotifyPartyPhone: string;
  isActive: boolean;
  CreatedOn: string;
}

export interface CourierDispatch {
  Id: number;
  CustomerID: number;
  PersonName: string;
  CourierPersonCity: string;
  CourierPersonAddress: string;
  CourierPersonCountryId: number;
  CourierPersonEmail: string;
  CourierPersonPhone: string;
  ShippingNote: string;
  isActive: boolean;
  CreatedOn: string;
}
