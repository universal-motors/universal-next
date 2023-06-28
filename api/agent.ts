import axios, {AxiosResponse} from 'axios';


import {StockCars} from "@/models/StockCars";
import {Country} from "@/models/Master/Country";
import {Machinery} from "@/models/Machinery";
import {FuelType} from "@/models/Master/FuelType";
import {BodyType} from "@/models/Master/BodyType";
import {Make} from "@/models/Master/Make";
import {CarModel} from "@/models/Master/CarModel";
import {DrivetrainType} from "@/models/Master/DrivetrainType";
import {SteeringType} from "@/models/Master/SteeringType";
import {Colors} from "@/models/Master/Colors";
import {Transmission} from "@/models/Master/Transmission";
import {CarCondition} from "@//models/Master/CarCondition";
import {Axle} from "@//models/Master/Axle";
import {Ports} from "@//models/Master/Ports";
import {VehicleCategory} from "@/models/Master/VehicleCategory";
import {CarOptions} from "@/models/Master/CarOptions";
import {InspectionCost} from "@/models/Master/InspectionCost";
import {FreightCost} from "@/models/Master/FreightCost";
import {PortMapping} from "@/models/Master/PortMapping";
import {StockPictures} from "@/models/Master/StockPictures";
import {CarOptionsMapping} from "@/models/Master/CarOptionsMapping";

axios.defaults.baseURL = 'https://universalmotorsapi20230324211515.azurewebsites.net/api/'

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const request = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: object) => axios.post<T>(url,body).then(responseBody),
    put: <T> (url: string, body: object) => axios.put<T>(url,body).then(responseBody),
    delete: <T> (url: string) => axios.delete<T>(url).then(responseBody)
}



const LoadData = {

    //------                                        Main Units
    stockList: ()=> request.get<StockCars[]>('carstock'),
    stock: (stockID : number)=> request.get<StockCars>(`carstock/${stockID}`),
    truckList: ()=> request.get('trucks'),
    machineryList: ()=> request.get<Machinery[]>('machinery'),
    stockSliderList: (stockID: number) => request.get<StockPictures[]>(`carstock/imagestock/${stockID}`),

    //------                                        Master Data
    countryList: ()=> request.get<Country[]>('masterdata/country'),
    carMakeList: ()=> request.get<Make[]>('masterdata/make/1'),
    truckMakeList: ()=> request.get<Make[]>('masterdata/make/2'),
    machineryMakeList: ()=> request.get<Make[]>('masterdata/make/3'),
    bodyTypeList: ()=> request.get<BodyType[]>('masterdata/bodytype'),
    fuelTypeList: ()=> request.get<FuelType[]>('masterdata/fueltype'),
    carModelList: ()=> request.get<CarModel[]>('masterdata/carmodel'),
    drtivetrainList: ()=> request.get<DrivetrainType[]>('masterdata/drivetraintype'),
    steeringList: ()=> request.get<SteeringType[]>('masterdata/steeringtype'),
    colorsList: ()=> request.get<Colors[]>('masterdata/colors'),
    transmissionsList: ()=> request.get<Transmission[]>('masterdata/transmissions'),
    carCondiionList: ()=> request.get<CarCondition[]>('masterdata/carcondition'),
    axleList: ()=> request.get<Axle[]>('masterdata/axle'),
    portsList: ()=> request.get<Ports[]>('masterdata/ports'),
    vehicleCategoryList: ()=> request.get<VehicleCategory[]>('masterdata/vehiclecategory'),
    caroptionsList: ()=> request.get<CarOptions[]>('masterdata/caroptions'),

    // Required Parameter
    caroptionMappingList: (stockID:number)=> request.get<CarOptionsMapping[]>(`/carstock/caroptions/${stockID}`),


    //------                                        Computational
    inspectioncost: ()=> request.get<InspectionCost[]>('compute/inspectioncost/'),
    freightcost: ()=> request.get<FreightCost[]>('compute/freightcost/'),
    portmapping: ()=> request.get<PortMapping[]>('compute/portmapping/'),
    getClientIP: ()=> request.get<string>('compute/getClientIP/'),

}

const agent = {
    LoadData,
}

export default agent;

