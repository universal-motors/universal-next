export interface MoneyAllocation {
  Id: number;
  StockID: number;
  CustomerID: number;
  ReserveDays: number;
  PaidPercent: number;
  BalancePercent: number;
  AssignedRatio: number;
  AllocatedAmount: number;
  BalanceAmount: number;
  TotalCNF: number;
  AfterDue: number;

  ReleaseOk: boolean;
  Release: boolean;
  SureCheck: boolean;
  ShipHold: boolean;
  isActive: boolean;

  CourierAddress: string;
  ShipName: string;
  VoyageNumber: string;
  ReleaseDate: Date;
  ETD: Date;
  ETA: Date;
  CreatedOn: Date;
  ConsigneeID: number;
  CourierID: number;
  BuyingCost: number;
  DomesticCharge: number;
  ExtraTransport: number;
  Inspection: number;
  Repairs: number;
  Insurance: number;
  PortStorage: number;
  PhotoCharges: number;
  ExtraJobs: number;
  Vanning: number;
  Freight: number;
  CourierCharge: number;
  TotalCost: number;
  Profit: number;
  CreatedBy: number;
}
