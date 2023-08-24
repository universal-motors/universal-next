import {BodyType} from "@/models/Master/BodyType";
import {Make} from "@/models/Master/Make";
import {Country} from "@/models/Master/Country";
import {StockCars} from "@/models/StockCars";
export interface MasterData{
    bodyList: BodyType[]
    makeList: Make[]
    countryList: Country[],
    homepageStock: StockCars[]
}