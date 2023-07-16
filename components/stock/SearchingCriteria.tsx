'use client'
import Link from "next/link";
import Image from "next/image";
import {tblMasterCountry} from ".prisma/client";
//import prisma from "@/utils/db";
import {FormSelect} from "react-bootstrap";
import {ChangeEvent, useState} from "react";
import {Country} from "@/models/Master/Country";

interface Props{
   // resultCount:number,
    locations:Country[]// tblMasterCountry[]
}

export default async function SearchingCriteria({locations}:Props){

   // const [sortFilter, setSortFilter] = useState("");
   //  function handleSortingChange(event:ChangeEvent<HTMLSelectElement>){
   //      event.preventDefault()
   //      const value = event.target.value;
   //      setSortFilter( value)
   //      console.log(value);
   //  }

    return(
        <>
            <div className="columns-3">
                {/*<h4>Search Page Result  - <span>{resultCount}</span> Matches Found</h4>*/}
                <h5>
                    View vehicles <strong>shipping from</strong>:
                </h5>
                <ul className="inline-flex items-center">
                    <li className="inline-flex items-center rounded-2xl px-2 py-1 font-medium text-gray-900 ring-1 ring-inset ring-gray-200" >

                            <Link data-toggle="tab" href="#tabs-all" role="tab">ALL</Link>

                    </li>
                    {
                        locations
                            .filter(country=>country.isInventoryLocation)
                            .map(country=>(

                               <Link key={country.countryId}  href={`/global/results?countryID=${country.countryId}`} role="tab">
                                   <li className="inline-flex ml-2 items-center text-center rounded-2xl px-2 py-1 font-medium text-gray-900 ring-1 ring-inset ring-gray-200" key={country.countryId}>
                                    <Image
                                        src={`/assets/images/flags/${country.slug}.svg`}
                                        className="img-fluid mr-2 h-20"
                                        alt={country.slug??""}
                                        width={10}
                                        height={25}
                                    />
                                       {/*{country.countryName}*/}
                                   </li>
                                </Link>

                        ))
                    }
                </ul>
            </div>

            <div className="columns-auto">
                    <p>Sort By: &nbsp;</p>
                    <FormSelect name="sort-by" className="w-250" >
                        {/*onChange={handleSortingChange}  >*/}
                        <option value="">Select</option>
                        <option value="priceLowToHigh">Price Low to high</option>
                        <option value="priceHighToLow">Price high to low</option>
                        <option value="yearOldToNew">Year old to new</option>
                        <option value="yearNewToOld">Year new to old</option>
                        <option value="discountHighToLow">Discount high to low</option>
                        <option value="discountLowToHigh">Discount low to high</option>
                        <option value="engineHighToLow">Engine high to low</option>
                        <option value="engineLowToHigh">Engine low to high</option>
                        <option value="mileageHighToLow">Mileage high to low</option>
                        <option value="mileageLowToHigh">Mileage low to high</option>
                    </FormSelect>
                </div>


        </>
    )
}