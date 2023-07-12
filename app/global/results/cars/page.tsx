import SearchingCriteria from "@/components/stock/SearchingCriteria";
import SearchResult from "@/components/stock/SearchResult";
import {StockCars} from "@/models/StockCars";
import agent from "@/api/agent";
import SimpleSearchBox from "@/components/stock/SimpleSearchBox";

interface Props {
    searchParams: {
        makeID: number,
        modelID: number,
        countryID:number,
        steeringID:number,
        bodyTypeID:number,
        price:number,
        fromYear:number,
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

const GetCarModels = async () => {
    return await  agent.LoadData.carModelList();//db.tblCarModels.findMany({where: {isActive:true}} );
}

export default async function ResultPage({searchParams}:Props) {

    const result:StockCars[] = await agent.LoadData.stockList()
    const locations = await GetLocations();
    const bodyTypes = await GetBodyTypes();
    const carMake = await GetCarMakes();
    const carModel = await GetCarModels();
    const cars = await fetchQueryResult(searchParams, result);


  return (

        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 p-0 second-searchform">
            {/*<DetailedSearchBox />*/}
            <SimpleSearchBox bodyTypes={bodyTypes}  makes={carMake} models={carModel} />
            <SearchingCriteria locations={locations} />
            <SearchResult cars={cars} locations={locations} />
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
    steeringID: number;
    bodyTypeID: number;
    price: number;
    fromYear: number;
    toYear: number;
    searchKey: string;
    searchFromBox: string
}, carList: StockCars[]) => {

    //let result:tblCars[] = [];
    let result:StockCars[] = [];

    if (searchParameter.searchFromBox == "true"){
        result = carList;
        console.log("searching from the box")
        if (searchParameter.makeID!= undefined){

            result = result.filter(car => car.makeId == searchParameter.makeID)
        }

        if (searchParameter.modelID!= undefined){

            result = result.filter(car => car.modelId == searchParameter.modelID)
        }

        if (searchParameter.countryID!= undefined){

            result = result.filter(x=> x.locationId == searchParameter.countryID)
        }

        else if (searchParameter.steeringID!= undefined){

            result = result.filter(x=> x.steeringTypeId == searchParameter.steeringID)
        }
        else if (searchParameter.bodyTypeID!= undefined){

            result = result.filter(x=> x.bodyTypeId == searchParameter.bodyTypeID)
        }
        else if (searchParameter.fromYear!= undefined) {

            result = result.filter(x=> x.year >= searchParameter.fromYear)
        }
        else if (searchParameter.toYear!= undefined) {

            result = result.filter(x=> x.year <= searchParameter.toYear)
        }
    }
    else{
        console.log("searching from links")
        if (searchParameter.countryID!= undefined){

            result = carList.filter(x=> x.locationId == searchParameter.countryID)
        }

        else if (searchParameter.steeringID!= undefined){

            result = carList.filter(x=> x.steeringTypeId == searchParameter.steeringID)
        }
        else if (searchParameter.bodyTypeID!= undefined){

            result = carList.filter(x=> x.bodyTypeId == searchParameter.bodyTypeID)
        }
        else if (searchParameter.price!= undefined) {
            if (searchParameter.price == 5000) {

                result = carList.filter(car => car.price >= 0 && car.price <= 5000)

            } else if (searchParameter.price == 10000) {

                result = carList.filter(car => car.price >= 5001 && car.price <= 10000)
            } else if (searchParameter.price == 15000) {

                result = carList.filter(car => car.price >= 10001 && car.price <= 15000)

            } else if (searchParameter.price == 25000) {

                result = carList.filter(car => car.price >= 15001 && car.price <= 25000)

            } else if (searchParameter.price == 40000) {

                result = carList.filter(car => car.price >= 25001 && car.price <= 40000)

            } else if (searchParameter.price == 40001) {

                result = carList.filter(car => car.price >= 40001)

            }
        }

        else if (searchParameter.makeID!= undefined){

            result = carList.filter(car => car.makeId == searchParameter.makeID)
        }
        else{
            const arrayResult = carList.filter(car => car.listingTitle.toLowerCase().includes(searchParameter.searchKey.toLowerCase()));
            arrayResult.push(...carList.filter(car => car.modelCode.toLowerCase().includes(searchParameter.searchKey.toLowerCase())),
                ...carList.filter(car => car.stockCode.toLowerCase().includes(searchParameter.searchKey.toLowerCase()))
            )

            result= arrayResult.filter((obj, index, self) =>
                index === self.findIndex(item => item.stockId === obj.stockId)
            );

        }
    }


    return result;
}