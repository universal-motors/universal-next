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
  customerId: number;
  img?: string;
  customerCode: string;
  titleId: number;
  name: string;
  lastName: string;
  companyName: string;
  address: string;
  countryId: number;
  preferredPortId: number;
  email: string;
  email2: string;
  email3: string;
  phone: string;
  phone2: string;
  phone3: string;
  isAssigned: boolean;
  assignedAgentId: number;
  isTrxAccActive: boolean;
  isActive: boolean;
  createdOn: string;
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
