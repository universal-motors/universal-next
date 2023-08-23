import SearchingCriteria from "@/components/ui/SearchingCriteria";
import CarSearchResult from "@/components/cars/CarSearchResult";
import {StockCars} from "@/models/StockCars";
import agent from "@/api/agent";
import HomeUI from "@/components/ui/HomeUI";

interface Props {
    searchParams: {
        makeID: number,
        modelID: number,
        countryID:number,
        steeringID:number,
        bodyTypeID:number,
        minPrice:number,
        maxPrice:number,
        minMileage:number,
        maxMileage:number,
        fromYear:number,
        toYear:number,
        searchTerm:string,
        //searchFromBox:string
    }
}



const GetLocations = async () => {

    return await agent.LoadData.inventoryLocationList();// db.tblBodyTypes.findMany({where: {isActive:true}});
}
const GetFilteredCars = async (filter:string) => {
    return await agent.LoadData.stockList(filter,1);
    //db.tblMasterCountry.findMany({where: {IsActive:true}} );
}



export default async function ResultPage({searchParams}:Props) {
    const params = new URLSearchParams();
    if (searchParams.bodyTypeID) params.set("BodyTypeID", searchParams.bodyTypeID.toString())
    if (searchParams.makeID) params.set("MakeID", searchParams.makeID.toString())
    if (searchParams.modelID) params.set("ModelID", searchParams.modelID.toString())
    if (searchParams.steeringID) params.set("SteeringID", searchParams.steeringID.toString())
    if (searchParams.minPrice) params.set("MinPrice", searchParams.minPrice.toString())
    if (searchParams.maxPrice) params.set("MaxPrice", searchParams.maxPrice.toString())
    if (searchParams.fromYear) params.set("FromYear", searchParams.fromYear.toString())
    if (searchParams.toYear) params.set("ToYear", searchParams.toYear.toString())
    if (searchParams.minMileage) params.set("MinMileage", searchParams.minMileage.toString())
    if (searchParams.maxMileage) params.set("MaxMileage", searchParams.maxMileage.toString())
    if (searchParams.searchTerm) params.set("SearchTerm", searchParams.searchTerm)

    //
    // const [data, setData] = useState<StockCars[]>([])
    // const [isLoading, setLoading] = useState(true)

    //const result:StockCars[] = await agent.LoadData.stockList()
    const locations = await GetLocations();
    //const cars = await GetFilteredCars(filter);



//console.log(filter)
  return (

        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 p-0 second-searchform">
            {/*<DetailedSearchBox />*/}
            <HomeUI/>
            <CarSearchResult params={params} locations={locations.data} />
        </div>
    )
}


