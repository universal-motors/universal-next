import DetailedSearchBox from "@/components/stock/DetailedSearchBox";
import SearchingCriteria from "@/components/stock/SearchingCriteria";
import SearchResult from "@/components/stock/SearchResult";
import prisma from "@/utils/db";
import {tblCars, tblMasterCountry} from ".prisma/client";

interface Props {
    searchParams: {
        searchKey:"string",
        type:"string",

    }
}

const fetchLocations = async () => {
    const result:tblMasterCountry[] = await prisma.tblMasterCountry.findMany({
        where: {
            IsInventoryLocation: true,
            IsActive : true,
        },
    })
    return result;
}

const fetchQueryResult = async (searchParameter:{}) => {
    //const result = await prisma.$queryRaw<tblCars[]>`SELECT * FROM tblCars WHERE ListingTitle LIKE '%${searchKey}%'`;
    let result:tblCars[] = [];

    if (searchParameter.countryID!= undefined){

        result = await prisma.tblCars.findMany({
            where: {
                LocationId :  parseInt(searchParameter.countryID)
            },
        })
    }
    else if (searchParameter.steeringID!= undefined){

        result = await prisma.tblCars.findMany({
            where: {
                MakeId :  parseInt(searchParameter.steeringID)
            },
        })
    }
    else if (searchParameter.bodyTypeID!= undefined){

        result = await prisma.tblCars.findMany({
            where: {
                BodyTypeId :  parseInt(searchParameter.bodyTypeID)
            },
        })
    }
    else if (searchParameter.price!= undefined){
        if (searchParameter.price == 5000){
            result = await prisma.tblCars.findMany({
                where: {
                    AND: [
                        { Price: { gte: 0 } },  // Greater than or equal to 0
                        { Price: { lte: 5000 } } // Less than or equal to 400
                    ]
                },
            })
        }
        else if (searchParameter.price == 10000){
            result = await prisma.tblCars.findMany({
                where: {
                    AND: [
                        { Price: { gte: 5001 } },  // Greater than or equal to 0
                        { Price: { lte: 10000 } } // Less than or equal to 400
                    ]
                },
            })
        }
        else if (searchParameter.price == 15000){
            result = await prisma.tblCars.findMany({
                where: {
                    AND: [
                        { Price: { gte: 10001 } },  // Greater than or equal to 0
                        { Price: { lte: 15000 } } // Less than or equal to 400
                    ]
                },
            })
        }
        else if (searchParameter.price == 25000){
            result = await prisma.tblCars.findMany({
                where: {
                    AND: [
                        { Price: { gte: 15001 } },  // Greater than or equal to 0
                        { Price: { lte: 25000 } } // Less than or equal to 400
                    ]
                },
            })
        }
        else if (searchParameter.price == 40000){
            result = await prisma.tblCars.findMany({
                where: {
                    AND: [
                        { Price: { gte: 25001 } },  // Greater than or equal to 0
                        { Price: { lte: 40000 } } // Less than or equal to 400
                    ]
                },
            })
        }
        else if (searchParameter.price == 40001){
            result = await prisma.tblCars.findMany({
                where: {
                    Price :   { gte: 40001 }
                },
                // orderBy: {
                //     Price: 'desc',
                // },
            })
        }


    }
    else if (searchParameter.makeID!= undefined){

        result = await prisma.tblCars.findMany({
            where: {
                MakeId :  parseInt(searchParameter.makeID)
            },
        })
    }
    else{
        result = await prisma.tblCars.findMany({
            where: {
                ListingTitle : {
                    contains: searchParameter.searchKey
                },
            },
        })
    }

    return result;
}

export default async function ResultPage({
                                            searchParams,
                                         }: {
                                                searchParams: {
                                                    makeID: number,
                                                    countryID:number,
                                                    steeringID:number,
                                                    bodyTypeID:number,
                                                    price:number,
                                                    searchKey:string
                                                }}) {

    const locations = await fetchLocations();
    const cars = await fetchQueryResult(searchParams);

  return (

        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 p-0 second-searchform">
            {/*<DetailedSearchBox />*/}
            <SearchingCriteria locations={locations} resultCount={cars.length} />
            <SearchResult cars={cars} locations={locations} />
        </div>
    )
}
