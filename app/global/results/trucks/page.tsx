import SearchingCriteria from "@/components/ui/SearchingCriteria";
import CarSearchResult from "@/components/cars/CarSearchResult";
import {StockCars} from "@/models/StockCars";
import agent from "@/api/agent";
import HomeUI from "@/components/ui/HomeUI";
import {Trucks} from "@/models/Trucks";
import TruckSearchResult from "@/components/trucks/TruckSearchResult";

interface Props {
    searchParams: {
        makeID: number,
        axleID:number,
        modelID: number,
        countryID:number,
        price:number,
        mileage:number,
        toYear:number,
        searchKey:string,
        searchFromBox:string
    }
}
const GetBodyTypes = async () => {

    return await agent.LoadData.bodyTypeList();// db.tblBodyTypes.findMany({where: {isActive:true}});
}
const GetLocations = async () => {
    return await agent.LoadData.countryList();
    //db.tblMasterCountry.findMany({where: {IsActive:true}} );
}

const GetCarMakes = async () => {
    return await  agent.LoadData.carMakeList();//db.tblMakes.findMany({where: {isActive:true}} );
}

export default async function ResultPage({searchParams}:Props) {

    const result:Trucks[] = await agent.LoadData.truckList()
    const locations = await GetLocations();
    const bodyTypes = await GetBodyTypes();
    const carMake = await GetCarMakes();
    const cars : Trucks[] = await fetchQueryResult(searchParams, result);


  return (

        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 p-0 second-searchform">
            {/*<DetailedSearchBox />*/}
            <HomeUI bodyTypes={bodyTypes} makes={carMake}/>
            <SearchingCriteria locations={locations} />
            <TruckSearchResult cars={cars} locations={locations} />
        </div>
    )
}

// const fetchLocations = async () => {
//     const result:tblMasterCountry[] = await prisma.tblMasterCountry.findMany({
//         where: {
//             IsInventoryLocation: true,
//             IsActive : true,
//         },
//     })
//     return result;
// }


const fetchQueryResult = async (searchParameter: {
    makeID: number;
    modelID: number;
    countryID: number;
    axleID: number;
    price: number;
    mileage: number;
    toYear: number;
    searchKey: string;
    searchFromBox: string
}, carList: Trucks[]) => {

    //let result:tblCars[] = [];
    let result:Trucks[] = [];

    if (searchParameter.searchFromBox == "true"){
        result = carList;

        if (searchParameter.makeID!= undefined){

            result = result.filter(car => car.makeId == searchParameter.makeID)
        }

        if (searchParameter.modelID!= undefined){

            result = result.filter(car => car.modelId == searchParameter.modelID)
        }

        if (searchParameter.countryID!= undefined){

            result = result.filter(x=> x.locationId == searchParameter.countryID)
        }

        else if (searchParameter.axleID!= undefined){

            result = result.filter(x=> x.axleTypeId == searchParameter.axleID)
        }
        else if (searchParameter.mileage!= undefined){

            result = result.filter(x=> x.mileage <= searchParameter.mileage)
        }
        else if (searchParameter.toYear!= undefined) {

            result = result.filter(x=> x.year <= searchParameter.toYear)
        }
        else if (searchParameter.price!= undefined) {

            result = result.filter(x=> x.price <= searchParameter.price)
        }
    }
    // else{
    //     console.log("searching from links")
    //     if (searchParameter.countryID!= undefined){
    //
    //         result = carList.filter(x=> x.locationId == searchParameter.countryID)
    //     }
    //
    //     else if (searchParameter.steeringID!= undefined){
    //
    //         result = carList.filter(x=> x.steeringTypeId == searchParameter.steeringID)
    //     }
    //     else if (searchParameter.bodyTypeID!= undefined){
    //
    //         result = carList.filter(x=> x.bodyTypeId == searchParameter.bodyTypeID)
    //     }
    //     else if (searchParameter.price!= undefined) {
    //         if (searchParameter.price == 5000) {
    //
    //             result = carList.filter(car => car.price >= 0 && car.price <= 5000)
    //
    //         } else if (searchParameter.price == 10000) {
    //
    //             result = carList.filter(car => car.price >= 5001 && car.price <= 10000)
    //         } else if (searchParameter.price == 15000) {
    //
    //             result = carList.filter(car => car.price >= 10001 && car.price <= 15000)
    //
    //         } else if (searchParameter.price == 25000) {
    //
    //             result = carList.filter(car => car.price >= 15001 && car.price <= 25000)
    //
    //         } else if (searchParameter.price == 40000) {
    //
    //             result = carList.filter(car => car.price >= 25001 && car.price <= 40000)
    //
    //         } else if (searchParameter.price == 40001) {
    //
    //             result = carList.filter(car => car.price >= 40001)
    //
    //         }
    //     }
    //
    //     else if (searchParameter.makeID!= undefined){
    //
    //         result = carList.filter(car => car.makeId == searchParameter.makeID)
    //     }
    //     else{
    //         const arrayResult = carList.filter(car => car.listingTitle.toLowerCase().includes(searchParameter.searchKey.toLowerCase()));
    //         arrayResult.push(...carList.filter(car => car.modelCode.toLowerCase().includes(searchParameter.searchKey.toLowerCase())),
    //             ...carList.filter(car => car.stockCode.toLowerCase().includes(searchParameter.searchKey.toLowerCase()))
    //         )
    //
    //         result= arrayResult.filter((obj, index, self) =>
    //             index === self.findIndex(item => item.stockId === obj.stockId)
    //         );
    //
    //    }

    return result;


}