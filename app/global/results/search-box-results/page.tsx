'use client'
import DetailedSearchBox from "@/components/stock/DetailedSearchBox";
import SearchingCriteria from "@/components/stock/SearchingCriteria";
import SearchResult from "@/components/stock/SearchResult";
import prisma from "@/utils/db";
import {tblCars, tblMasterCountry} from ".prisma/client";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {DateTime} from "asn1js";

interface Props {
    // searchParams: {
    //     searchKey:"string",
    //     type:"string",
    searchParams: {
        makeID: number,
        countryID:number,
        steeringID:number,
        bodyTypeID:number,
        price:number,
        searchKey:string

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

const fetchQueryResult = async (searchParameter:
    {
        makeID: number,
        countryID:number,
        steeringID:number,
        bodyTypeID:number,
        price:number,
        searchKey:string
    }) => {
    //const result = await prisma.$queryRaw<tblCars[]>`SELECT * FROM tblCars WHERE ListingTitle LIKE '%${searchKey}%'`;
    let result:tblCars[] = [];

export default async function ResultPage({searchParams}:Props) {

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
