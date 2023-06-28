import {tblBodyTypes, tblMakes, tblMasterCountry} from ".prisma/client";

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
                                            <a href="/Cars/?id=@(obj.CountryId)&type=Country">
                                                <img
                                                    src={make.ImageUrl}
                                                    className="flagimg-fluid"
                                                    alt={make.Slug}

                                                />
                                                <span>{make.MakeName}</span>
                                            </a>
                                        </li>
                                    ))
                            }
                        </ul>
                    <h5>Search By Steering</h5>
                        <ul className="countdrop">
                            <a className="nav-link" href="1"> <img src="/assets/images/default/Right.png" className="img-fluid" alt="Right Hand" /> <span>Right Hand</span></a>
                            <a className="nav-link" href="2"> <img src="/assets/images/default/Left.png" className="img-fluid" alt="Left Hand" /> <span>Left Hand</span></a>

                </ul>
                    <h5 style={{ fontSize: 18, color: "black" }}>Inventory Location</h5>
                        <ul className="countdrop">
                            {
                                locations
                                    .filter(location=> location.IsInventoryLocation)
                                    .map(location=> (
                                        <li key={location.CountryId}>
                                            <a href="/Cars/?id=@(obj.CountryId)&type=Country">
                                                <img
                                                    src={"/assets/images/flags/"+location.Slug+".svg"}
                                                    className="flagimg-fluid"
                                                    alt={location.Slug}

                                                />
                                                <span>{location.CountryName}</span>
                                            </a>
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

