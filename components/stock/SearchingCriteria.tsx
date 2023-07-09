'use client'
import Link from "next/link";
import {tblMasterCountry} from ".prisma/client";
//import prisma from "@/utils/db";
import {FormSelect} from "react-bootstrap";
import {ChangeEvent, useState} from "react";
import {Country} from "@/models/Master/Country";

interface Props{
    resultCount:number,
    locations:Country[]// tblMasterCountry[]
}

export default async function SearchingCriteria({resultCount,locations}:Props){

   // const [sortFilter, setSortFilter] = useState("");
   //  function handleSortingChange(event:ChangeEvent<HTMLSelectElement>){
   //      event.preventDefault()
   //      const value = event.target.value;
   //      setSortFilter( value)
   //      console.log(value);
   //  }

    return(
        <>
            <div className="results">
                <h4>Search Page Result  - <span>{resultCount}</span> Matches Found</h4>
                <h5>
                    View vehicles <strong>shipping from</strong>:
                </h5>
                <ul className="nav nav-tab mt-2" role="tablist">
                    <li className="nav-item all">
                        <Link className="nav-link2 active" data-toggle="tab" href="#tabs-all" role="tab">ALL</Link>
                    </li>
                    {
                        locations
                            .filter(country=>country.isInventoryLocation)
                            .map(country=>(
                            <li key={country.countryId} className="nav-item">
                                <Link className="nav-link2 " data-toggle="tab" href={`/global/results?countryID=${country.countryId}`} role="tab">
                                    <span className="inline-flex"><img src={`/assets/images/flags/${country.slug}.svg`} className="img-fluid mr-2" alt={country.slug??""} /> {country.countryName}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                   <div className="filt">
                        <p>Sort By: &nbsp;</p>
                        <FormSelect name="sort-by" className="sort-by-select" >
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


            </div>

        </>
    )
}