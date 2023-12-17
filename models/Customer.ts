export interface CustomerSignUp {
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
  customerID: number;
  consigneeName: string;
  consigneeCity: string;
  consigneeAddress: string;
  consigneeCountryId: number;
  consigneeEmail: string;
  consigneePhone: string;
  notifyPartyName: string;
  notifyPartyCity: string;
  notifyPartyAddress: string;
  notifyPartyCountryId: number;
  notifyPartyEmail: string;
  notifyPartyPhone: string;
  isActive: boolean;
  createdOn: string;
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

export interface TransactionInfo {
  VoucherCode: string;
  StockCode: string;
  ListingName: string;
  Reference: string;
  Amount: string;
  RunningBalance: string;

}

export interface SalesOrderDetail {
  PaidPercent: number,
  BalancePercent:number,
  AllocatedAmount:number,
  BalanceAmount: number,
  TotalCnf: number,
  AfterDue: number,
  ReleaseDate: string,
  ReleaseOk: boolean,
  Release: boolean,   
  ListingTitle: string,
  ConsigneeName:  string,
  ConsigneePhone: string,
  CourierPersonName: string,
  CourierPersonPhone: string,
  CourierAddress:string,
  ShipName:string,
  VoyageNumber: string,
  ETD:string,
  ETA:string,
  ShipOk:boolean,
  ShipOkDate: string,
  CreatedOn: string

}