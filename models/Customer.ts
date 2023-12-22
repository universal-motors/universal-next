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
  voucherCode: string;
  stockCode: string;
  listingName: string;
  runningBalance: string;
  currency: String;
  payerName: String;
  amount: String;
  reference: String;
  TTDocumentPath: String;
  bankName: String;
  transactionDate: String;
  isVoucher: Boolean;
}

export interface SalesOrderDetail {
  paidPercent: number;
  balancePercent: number;
  allocatedAmount: number;
  balanceAmount: number;
  totalCnf: number;
  afterDue: number;
  releaseDate: string;
  releaseOk: boolean;
  release: boolean;
  listingTitle: string;
  consigneeName: string;
  consigneePhone: string;
  courierPersonName: string;
  courierPersonPhone: string;
  courierAddress: string;
  shipName: string;
  voyageNumber: string;
  etd: string;
  eta: string;
  shipOk: boolean;
  shipOkDate: string;
  createdOn: string;
}
