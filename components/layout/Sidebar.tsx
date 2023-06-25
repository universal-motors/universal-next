
function Sidebar(){

    return (
        <>
            <div className="col-xl-2 col-lg-2 col-md-2 d-md-block d-none">
                <div className="showcase-Make">
                    <h5 style={{ fontSize: 18, color: "black" }}>Search By Make</h5>
                        <ul className="countdrop">
                            {
                                // masterDataStore.makes
                                //     .slice(0, 10) // Get the first 10 records
                                //     .map(make=> (
                                //         <li key={make.makeId}>
                                //             <a href="/Cars/?id=@(obj.CountryId)&type=Country">
                                //                 <img
                                //                     src={make.imageURL}
                                //                     className="flagimg-fluid"
                                //                     alt={make.slug}
                                //
                                //                 />
                                //                 <span>{make.makeName}</span>
                                //             </a>
                                //         </li>
                                //     ))
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
                                // masterDataStore.locations
                                //     .filter(location=> location.isInventoryLocation)
                                //     .map(location=> (
                                //         <li key={location.countryId}>
                                //             <a href="/Cars/?id=@(obj.CountryId)&type=Country">
                                //                 <img
                                //                     src={"/assets/images/flags/"+location.slug+".svg"}
                                //                     className="flagimg-fluid"
                                //                     alt={location.slug}
                                //
                                //                 />
                                //                 <span>{location.countryName}</span>
                                //             </a>
                                //         </li>
                                //     ))
                            }
                        </ul>
                </div>
            </div>

        </>
    )
}


export default Sidebar

