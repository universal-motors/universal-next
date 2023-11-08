export type TFavorite = {
  customerId: number;
  stockId: number;
};
export type GetFavorite = {
  StockId: number;
  StockCode: string;
  MakeName: string;
  ModelName: string;
  year: string;
  price: string;
  ImageUrl: string;
  ListingTitle: string;
  AddedOn: Date;
};
