export interface SalesOrder {
  Id: number ,
  SalePrice: number,
  StockId: number
  ConsigneeId: number ,
  CourierId: number ,
  MoneyAllocationID: number ,
  SONumber: string ,
  InsuranceCost: string ,
  FreightCost: string ,
  FOB: string ,
  SoldPrice: string ,
  Remarks: string ,
  DestCountry: string ,
  FreightOptions: string ,
  CountryName: string ,
  PortName: string ,
  BLType: string ,
  ShipmentTermType: string ,
  IncoTerm: string ,
  PaymentMode: string ,
  DepositRatio: string ,
  BankName: string ,
  CreatedByUser: string ,
  CustomerCode: string ,
  Name: string ,
  StockCode: string ,
  CarName: string ,
  ChasisNumber: string ,
  SODate: Date,
  isActive: boolean




}