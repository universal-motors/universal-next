import {tblBodyTypes, tblCars, tblMakes, tblMasterCountry} from ".prisma/client";
import Link from "next/link";
import {Country} from "@/models/Master/Country";
import {Make} from "@/models/Master/Make";
import {StockCars} from "@/models/StockCars";

interface Props{
    locations : tblMasterCountry[]// Country[]
    makes : tblMakes[]//Make[]
    stocks: tblCars[]//StockCars[]
}

function Sidebar({locations, makes, stocks}:Props){
// Calculate the count of stocks for each location
    const locationCounts = locations.map((location) => {
        const count = stocks.filter((stock) => stock.LocationId === location.CountryId).length;
        return { ...location, count };
    });
    const makeCounts = makes.map((make) => {
        const count = stocks.filter((stock) => stock.MakeId === make.MakeId).length;
        return { ...make, count };
    });
    return (
        <>
            <div className="col-xl-2 col-lg-2 col-md-2 d-md-block d-none">
                <div className="showcase-Make">
                    <h5 style={{ fontSize: 18, color: "black" }}>Search By Make</h5>
                        <ul className="countdrop mt-3 mb-3">
                            {
                                makeCounts
                                    .sort((a,b)=> b.count - a.count)
                                    .slice(0, 10) // Get the first 10 records
                                    .map(make=> (
                                        <li key={make.MakeId}>
                                            <Link
                                                href={{
                                                    pathname : "/global/results/cars",
                                                    query: {
                                                        makeID: make.MakeId
                                                    }
                                                }}
                                            >
                                                <span className=" inline-flex items-center rounded-md">
                                                    <img
                                                        src={make.ImageUrl??""}
                                                        className="img-fluid mr-3"
                                                        alt={make.Slug}

                                                    />
                                                    {make.MakeName}


                                                <span className="ml-3  inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                                                <svg className="h-1.5 w-1.5 fill-blue-500" viewBox="0 0 6 6" aria-hidden="true">
                                                  <circle cx={3} cy={3} r={3} />
                                                </svg>
                                                    {make.count}

                                              </span>
                                                     </span>
                                            </Link>
                                        </li>
                                    ))
                            }
                        </ul>
                    <h5>Search By Steering</h5>
                        <ul className="countdrop mt-3 mb-3">
                            <Link className="nav-link"
                                  href={{
                                      pathname : "/global/results/cars",
                                      query: {
                                          steeringID: 1
                                      }
                                  }}>
                                    <span className=" inline-flex items-center rounded-md">
                                <img src="/assets/images/default/Right.png" className="img-fluid mr-3" alt="Right Hand" />
                                Right Hand<span className="ml-3  inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                                                <svg className="h-1.5 w-1.5 fill-yellow-400" viewBox="0 0 6 6" aria-hidden="true">
                                                  <circle cx={3} cy={3} r={3} />
                                                </svg>
                                        {stocks.filter(x=>x.SteeringTypeId==1).length}
                                              </span>
                                </span>
                            </Link>
                            <Link className="nav-link"  href={{
                                pathname : "/global/results/cars",
                                query: {
                                    steeringID: 2
                                }
                            }}>
                                <span className=" inline-flex items-center rounded-md">
                                    <img src="/assets/images/default/Left.png" className="img-fluid mr-3" alt="Left Hand" />
                                Left Hand
                                    <span className="ml-3  inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                                                <svg className="h-1.5 w-1.5 fill-yellow-400" viewBox="0 0 6 6" aria-hidden="true">
                                                  <circle cx={3} cy={3} r={3} />
                                                </svg>
                                        {stocks.filter(x=>x.SteeringTypeId==2).length}
                                              </span>
                                </span>
                            </Link>

                </ul>
                    <h5 style={{ fontSize: 18, color: "black" }}>Inventory Location</h5>
                        <ul className="countdrop mt-3">
                            {
                                locationCounts
                                    .sort((a,b)=> b.count - a.count)
                                    .filter(location=> location.IsInventoryLocation)
                                    .map(location=> (
                                        <li key={location.CountryId}>
                                            <Link    href={{
                                                pathname : "/global/results/cars",
                                                query: {
                                                    countryID: location.CountryId
                                                }
                                            }}>

                                                <span className=" inline-flex items-center rounded-md">
                                                <img
                                                    src={"/assets/images/flags/"+location.Slug+".svg"}
                                                    className="flag img-fluid mr-3"
                                                    alt={location.Slug??""}

                                                />
                                                {location.CountryName}
                                                <span className="ml-3  inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                                                <svg className="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                                                  <circle cx={3} cy={3} r={3} />
                                                </svg>
                                                    {location.count}
                                              </span>
                                            </span>
                                            </Link>
                                        </li>
                                    ))
                            }
                        </ul>
                </div>
            </div>

        </>
    )
}


export default Sidebar

