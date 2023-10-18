export interface FreightCost {
  id: number;
  sourceCountryId: number;
  destinationCountryId: number;
  portId: number;
  freigthAmount: number;
  isActive: boolean;
}
