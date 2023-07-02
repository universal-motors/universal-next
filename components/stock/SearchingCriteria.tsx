import Link from "next/link";
import {tblMasterCountry} from ".prisma/client";
import prisma from "@/utils/db";

interface Props{
    resultCount:number,
    locations:tblMasterCountry[]
}

export default async function SearchingCriteria({resultCount,locations}:Props){


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
                        locations.map(country=>(
                            <li key={country.CountryId} className="nav-item">
                                <Link className="nav-link2 " data-toggle="tab" href={`/global/results?countryID=${country.CountryId}`} role="tab">
                                    <span className="inline-flex"><img src={`/assets/images/flags/${country.Slug}.svg`} className="img-fluid mr-2" alt={country.Slug} /> {country.CountryName}</span>
                                </Link>
                            </li>
                        ))
                    }


                    <div className="filt">
                        <p>Sort By: &nbsp;</p>
                        <select name="sort-by" className="sort-by-select">
                            <option>Select</option>
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
                        </select>
                    </div>
                </ul>
            </div>

        </>
    )
}