export default function SearchResult(){
    return(
        <>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="row my-5">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
                        <div className="searched-carimage">
                            <a href="/Cars/CarsDetailed/@obj.StockId"><img src="@obj.ImageUrl" className="mb-4" alt="" /></a>
                            <p>In Stock</p>
                            <h4><span>Stock ID:</span>@obj.StockCode</h4>
                            <h5>Auction grade: <span>@obj.AuctionGrade</span></h5>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 d-md-block d-none">
                        <div className="car-details">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <a href="/Cars/CarsDetailed/@obj.StockId"><h6 className="listname">@obj.ListingTitle</h6></a>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="car-country">
                                        <h6 className="text-right">
                                            <img src="images/flags/@(Helpers.MasterData.Locations.Find(x => x.CountryId == obj.LocationId).Slug).svg" className="img-fluid" alt="@(Helpers.MasterData.Locations.Find(x => x.CountryId == obj.LocationId).CountryName) flag" /> @(Helpers.MasterData.Locations.Find(x =&gt; x.CountryId == obj.LocationId).CountryName)
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="tabrow row pt-2">
                                <div className="col-md-5 rcolumn">
                                    <div className="row">
                                        <div className="col-6">
                                            <h6>@obj.Mileage KMs</h6>
                                            <p>Mileage</p>
                                        </div>
                                        <div className="col-6">
                                            <h6>@obj.EngineSize CC</h6>
                                            <p>Engine</p>
                                        </div>
                                        <div className="col-6">
                                            <h6>@obj.TransmissionName</h6>
                                            <p>Transmission</p>
                                        </div>
                                        <div className="col-6">
                                            <h6>@obj.Year</h6>
                                            <p>Year</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 scolumn">
                                    <div className="row">
                                        <div className="col-3">
                                            <h6>Fuel</h6>
                                            <p>@obj.TypeOfFuel</p>
                                        </div>
                                        <div className="col-3">
                                            <h6>Steering</h6>
                                            <p>@obj.TypeOfSteering</p>
                                        </div>
                                        <div className="col-3">
                                            <h6>Drivetrain</h6>
                                            <p>@obj.DrivetrainType</p>
                                        </div>
                                        <div className="col-3">
                                            <h6>Doors</h6>
                                            <p>@obj.NoOfDoors</p>
                                        </div>
                                        <div className="col-3">
                                            <h6>Seats</h6>
                                            <p>@obj.NoOfSeats</p>
                                        </div>
                                        <div className="col-3">
                                            <h6>Color</h6>
                                            <p>@obj.ColorName</p>
                                        </div>
                                        <div className="col-3">
                                            <h6>Model Code</h6>
                                            <p>@obj.ModelCode</p>
                                        </div>
                                        <div className="col-3">
                                            <h6>Engine Number</h6>
                                            <p>@obj.EngineNumber</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carlistfeatures row pt-2">
                                <div className="col-md-8 flist">
                                    <ul>
                                        <li>Navigation System</li>
                                        <li>Rear Camera</li>
                                        <li>Power Steering</li>
                                        <li>Air Bags</li>
                                        <li>Power Windows</li>
                                        <li>
                                            <a href="#">more...</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 atf">
                                    <div className="addfav">
                                        <h5>
                                            <a href="#">
                                                <i className="fa fa-heart-o" />
                                                <span className="fav-text">Add to Favorites</span>
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-8 col-7">
                        <div className="car-inquiry">
                            <a href="/Cars/CarsDetailed/@obj.StockId"><h6 className="listname">@obj.ListingTitle</h6></a>
                            <div className="fprice">
                                <h6>
                                    FOB Price:
                                    <span>@obj.Price</span>
                                </h6>
                            </div>
                            <hr />
                            <div className="notice">
                                <h6>*Select your Destination Country and Port.</h6>
                            </div>
                            <div className="askprice">
                                <h6>
                                    TOTAL Price:
                                    <span>ASK</span>
                                </h6>
                            </div>
                            <h4 />
                            <a href="/Cars/CarsDetailed/@obj.StockId"><button className="offerbtn">Send Offer</button></a>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

        </>
    )
}