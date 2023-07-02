import {tblBodyTypes, tblMakes, tblMasterCountry} from ".prisma/client";
import Link from "next/link";

interface Props{
    locations : tblMasterCountry[]
    makes : tblMakes[]
}

function Sidebar({locations, makes}:Props){

    return (
        <>
            <div className="col-xl-2 col-lg-2 col-md-2 d-md-block d-none">
                <div className="showcase-Make">
                    <h5 style={{ fontSize: 18, color: "black" }}>Search By Make</h5>
                        <ul className="countdrop">
                            {
                                makes
                                    .slice(0, 10) // Get the first 10 records
                                    .map(make=> (
                                        <li key={make.MakeId}>
                                            <Link
                                                href={{
                                                    pathname : "/global/results",
                                                    query: {
                                                        makeID: make.MakeId
                                                    }
                                                }}
                                            >
                                                <span className=" inline-flex items-center rounded-md">
                                                    <img
                                                        src={make.ImageUrl}
                                                        className="img-fluid mr-3"
                                                        alt={make.Slug}

                                                    />
                                                {make.MakeName}</span>
                                            </Link>
                                        </li>
                                    ))
                            }
                        </ul>
                    <h5>Search By Steering</h5>
                        <ul className="countdrop">
                            <Link className="nav-link"
                                  href={{
                                      pathname : "/global/results",
                                      query: {
                                          steeringID: 1
                                      }
                                  }}>
                                    <span className=" inline-flex items-center rounded-md">
                                <img src="/assets/images/default/Right.png" className="img-fluid mr-3" alt="Right Hand" />
                                Right Hand</span>
                            </Link>
                            <Link className="nav-link"  href={{
                                pathname : "/global/results",
                                query: {
                                    steeringID: 2
                                }
                            }}>
                                <span className=" inline-flex items-center rounded-md">
                                    <img src="/assets/images/default/Left.png" className="img-fluid mr-3" alt="Left Hand" />
                                Left Hand</span>
                            </Link>

                </ul>
                    <h5 style={{ fontSize: 18, color: "black" }}>Inventory Location</h5>
                        <ul className="countdrop">
                            {
                                locations
                                    .filter(location=> location.IsInventoryLocation)
                                    .map(location=> (
                                        <li key={location.CountryId}>
                                            <Link    href={{
                                                pathname : "/global/results",
                                                query: {
                                                    countryID: location.CountryId
                                                }
                                            }}>

                                                <span className=" inline-flex items-center rounded-md">
                                                <img
                                                    src={"/assets/images/flags/"+location.Slug+".svg"}
                                                    className="flag img-fluid mr-3"
                                                    alt={location.Slug}

                                                />
                                                {location.CountryName}</span>
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

