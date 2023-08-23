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
import {CarCondition} from "@/models/Master/CarCondition";
import {Axle} from "@/models/Master/Axle";
import {Ports} from "@/models/Master/Ports";
import {VehicleCategory} from "@/models/Master/VehicleCategory";
import {CarOptions} from "@/models/Master/CarOptions";
import {InspectionCost} from "@/models/Master/InspectionCost";
import {FreightCost} from "@/models/Master/FreightCost";
import {PortMapping} from "@/models/Master/PortMapping";
import {StockPictures} from "@/models/Master/StockPictures";
import {CarOptionsMapping} from "@/models/Master/CarOptionsMapping";
import {Trucks} from "@/models/Trucks";
import {Customer, UserFormValues} from "@/models/Customer";
import {PaginationHeader} from "@/models/Master/Pagination";

//const baseURL = 'https://universalmotorsapi20230324211515.azurewebsites.net/api/';
const baseURL = 'https://api20230805195433.azurewebsites.net/api/';
const parseResponse = async <T>(response: Response): Promise<{ data: T, paginationHeader: PaginationHeader }> => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: T = await response.json();
    const paginationHeaderRaw = response.headers.get("X-Pagination");
    const paginationHeader = paginationHeaderRaw ? JSON.parse(paginationHeaderRaw) : null;

    return {
        data,
        paginationHeader
    };
};
const responseBody = <T> (response: AxiosResponse<T>) => response.data;


const request = {
    get: async <T>(url: string) => {

        const response = await fetch(baseURL + url);
        return parseResponse<T>(response);

    },
    post: async <T>(url: string, body: object) => {
        const response = await fetch(baseURL + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        return parseResponse<T>(response);
    },
    put: async <T>(url: string, body: object) => {
        const response = await fetch(baseURL + url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        return parseResponse<T>(response);
    },
    delete: async <T>(url: string) => {
        const response = await fetch(baseURL + url, {
            method: 'DELETE',
        });
        return parseResponse<T>(response);
    },
};

const LoadData = {
    //------ Main Units
   //stockList: (filter:string) => request.get<{StockList:StockCars[], Header:PaginationHeader}>(`carstock?PageSize=25&pageNumber=1&${filter}`),
    stockList: (filter:string, currentPage: number) => request.get<StockCars[]>(`carstock?PageSize=25&pageNumber=${currentPage}&${filter}`),

    //stockList: ()=>   axios.get<StockCars[]>(baseURL+'carstock?pageNumber=1&pageSize=50')
      //  .then(responseBody),
    //     .catch(error => {
    //         console.error('There was an error fetching the data:', error);
    // }),
    homepageStockList: () => request.get<StockCars[]>('carstock/homepage_cars'),
    stock: (stockID: number) => request.get<StockCars>(`carstock/${stockID}`),
    truck: (stockID: number) => request.get<Trucks>(`trucks/${stockID}`),
    truckList: () => request.get<Trucks[]>('trucks'),

    // truckList: () => axios.get<Trucks[]>(baseURL+'trucks?pageNumber=1&pageSize=50')
    //     .then(responseBody)
    //     .catch(error => {
    //     console.error('There was an error fetching the data:', error);
    // }),

    machineryList: () => request.get<Machinery[]>('machinery?pageNumber=1&pageSize=50'),
    stockSliderList: (stockID: number) => request.get<StockPictures[]>(`carstock/imagestock/${stockID}`),

    //------ Master Data
    countryList: () => request.get<Country[]>('masterdata/country'),
    inventoryLocationList: () => request.get<Country[]>('masterdata/inventory'),
    carMakeList: () => request.get<Make[]>('masterdata/make'),
    truckMakeList: () => request.get<Make[]>('masterdata/make/2'),
    machineryMakeList: () => request.get<Make[]>('masterdata/make/3'),
    bodyTypeList: () => request.get<BodyType[]>('masterdata/bodytype'),
    fuelTypeList: () => request.get<FuelType[]>('masterdata/fueltype'),
    carModelList: () => request.get<CarModel[]>('masterdata/carmodel'),
    carModelByMakeList: (makeID: string) => request.get<CarModel[]>(`masterdata/carmodel/${makeID}`),
    drtivetrainList: () => request.get<DrivetrainType[]>('masterdata/drivetraintype'),
    steeringList: () => request.get<SteeringType[]>('masterdata/steeringtype'),
    colorsList: () => request.get<Colors[]>('masterdata/colors'),
    transmissionsList: () => request.get<Transmission[]>('masterdata/transmissions'),
    carCondiionList: () => request.get<CarCondition[]>('masterdata/carcondition'),
    axleList: () => request.get<Axle[]>('masterdata/axle'),
    portsList: () => request.get<Ports[]>('masterdata/ports'),
    vehicleCategoryList: () => request.get<VehicleCategory[]>('masterdata/vehiclecategory'),
    caroptionsList: () => request.get<CarOptions[]>('masterdata/caroptions'),

    // Required Parameter
    caroptionMappingList: (stockID: number) => request.get<CarOptionsMapping[]>(`carstock/caroptions/${stockID}`),

    //------ Computational
    inspectioncost: () => request.get<InspectionCost[]>('compute/inspectioncost/'),
    freightcost: () => request.get<FreightCost[]>('compute/freightcost/'),
    portmapping: () => request.get<PortMapping[]>('compute/portmapping/'),
    getClientIP: () => request.get<string>('compute/getClientIP/'),
    stockCount: () => request.get<number>('carstock/count'),
    carmodelCount: (modelID: number) => request.get<number>(`compute/carmodel/count/${modelID}`),
    makeCount: (makeID: number) => request.get<number>(`compute/make/count/${makeID}`),
    bodytypeCount: (bodytypeID: number) => request.get<number>(`compute/bodytype/count/${bodytypeID}`),
    steeringTypeCount: (steeringID: number) => request.get<number>(`compute/steeringType/count/${steeringID}`),



};

const Account = {
    //   -------Accounts
    currentUser : () => request.get<Customer>('authentication'),
    register: (user: UserFormValues) => request.post<Customer>('authentication', user),
    login: (user: UserFormValues) => request.post<Customer>('authentication/login', user),

}

const agent = {
    LoadData,
    Account
};


export default agent;














//axios.defaults.baseURL = 'https://universalmotorsapi20230324211515.azurewebsites.net/api/'
// const responseBody = <T> (response: AxiosResponse<T>) => response.data;
//
// const request = {
//     get: <T> (url: string) => axios.get<T>(url).then(responseBody),
//     post: <T> (url: string, body: object) => axios.post<T>(url,body).then(responseBody),
//     put: <T> (url: string, body: object) => axios.put<T>(url,body).then(responseBody),
//     delete: <T> (url: string) => axios.delete<T>(url).then(responseBody)
// }


//
// const LoadData = {
//
//     //------                                        Main Units
//     stockList: ()=> request.get<StockCars[]>('carstock'),
//     stock: (stockID : number)=> request.get<StockCars>(`carstock/${stockID}`),
//     truckList: ()=> request.get('trucks'),
//     machineryList: ()=> request.get<Machinery[]>('machinery'),
//     stockSliderList: (stockID: number) => request.get<StockPictures[]>(`carstock/imagestock/${stockID}`),
//
//     //------                                        Master Data
//     countryList: ()=> request.get<Country[]>('masterdata/country'),
//     carMakeList: ()=> request.get<Make[]>('masterdata/make/1'),
//     truckMakeList: ()=> request.get<Make[]>('masterdata/make/2'),
//     machineryMakeList: ()=> request.get<Make[]>('masterdata/make/3'),
//     bodyTypeList: ()=> request.get<BodyType[]>('masterdata/bodytype'),
//     fuelTypeList: ()=> request.get<FuelType[]>('masterdata/fueltype'),
//     carModelList: ()=> request.get<CarModel[]>('masterdata/carmodel'),
//     drtivetrainList: ()=> request.get<DrivetrainType[]>('masterdata/drivetraintype'),
//     steeringList: ()=> request.get<SteeringType[]>('masterdata/steeringtype'),
//     colorsList: ()=> request.get<Colors[]>('masterdata/colors'),
//     transmissionsList: ()=> request.get<Transmission[]>('masterdata/transmissions'),
//     carCondiionList: ()=> request.get<CarCondition[]>('masterdata/carcondition'),
//     axleList: ()=> request.get<Axle[]>('masterdata/axle'),
//     portsList: ()=> request.get<Ports[]>('masterdata/ports'),
//     vehicleCategoryList: ()=> request.get<VehicleCategory[]>('masterdata/vehiclecategory'),
//     caroptionsList: ()=> request.get<CarOptions[]>('masterdata/caroptions'),
//
//     // Required Parameter
//     caroptionMappingList: (stockID:number)=> request.get<CarOptionsMapping[]>(`/carstock/caroptions/${stockID}`),
//
//
//     //------                                        Computational
//     inspectioncost: ()=> request.get<InspectionCost[]>('compute/inspectioncost/'),
//     freightcost: ()=> request.get<FreightCost[]>('compute/freightcost/'),
//     portmapping: ()=> request.get<PortMapping[]>('compute/portmapping/'),
//     getClientIP: ()=> request.get<string>('compute/getClientIP/'),
//     stockCount: ()=> request.get<number>('compute/stock/count'),
//     carmodelCount: (modelID:number)=> request.get<number>(`compute/carmodel/count/${modelID}`),
//     makeCount: (makeID:number)=> request.get<number>(`compute/make/count/${makeID}`),
//     bodytypeCount: (bodytypeID:number)=> request.get<number>(`compute/bodytype/count/${bodytypeID}`),
//     steeringTypeCount: (steeringID:number)=> request.get<number>(`compute/steeringType/count/${steeringID}`),
// }
