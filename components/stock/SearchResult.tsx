import Link from "next/link";
import {tblCars, tblMasterCountry} from ".prisma/client";
import LikeComponent from "@/components/stock/LikeComponent";
interface Props{
    cars: tblCars[]
    locations: tblMasterCountry[]
}

export default function SearchResult({cars,locations}:Props){
    return(
        <>
            {
                cars.map(car=>(
                    <div key={car.StockId} className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row my-5">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
                                <div className="searched-carimage">
                                    <Link href={`/global/results/${car.StockId}`}>
                                        <img src={car.ImageUrl} className="mb-4" alt="" /></Link>
                                    <p>In Stock</p>
                                    <h4><span>Stock ID:</span>{car.StockCode}</h4>
                                    <h5>Auction grade: <span>{car.AuctionGrade}</span></h5>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 d-md-block d-none">
                                <div className="car-details">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <Link href={`/global/results/${car.StockId}`}><h6 className="listname">{car.ListingTitle}</h6></Link>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="car-country">
                                                <h6 className="text-right">
                                                    <img src={`/assets/images/flags/${locations.find(x=>x.CountryId==car.LocationId)?.Slug}.svg`} className="img-fluid" alt={`${locations.find(x=>x.CountryId==car.LocationId)?.CountryName} flag`} />
                                                    {locations.find(x=>x.CountryId==car.LocationId)?.CountryName}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tabrow row pt-2">
                                        <div className="col-md-5 rcolumn">
                                            <div className="row">
                                                <div className="col-6">
                                                    <h6>{car.Mileage}</h6>
                                                    <p>Mileage</p>
                                                </div>
                                                <div className="col-6">
                                                    <h6>{car.EngineSize} CC</h6>
                                                    <p>Engine</p>
                                                </div>
                                                <div className="col-6">
                                                    <h6>{car.TransmissionId}</h6>
                                                    <p>Transmission</p>
                                                </div>
                                                <div className="col-6">
                                                    <h6>{car.Year}</h6>
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
                                                    <p>{car.NoOfDoors}</p>
                                                </div>
                                                <div className="col-3">
                                                    <h6>Seats</h6>
                                                    <p>{car.NoOfSeats}</p>
                                                </div>
                                                <div className="col-3">
                                                    <h6>Color</h6>
                                                    <p>@obj.ColorName</p>
                                                </div>
                                                <div className="col-3">
                                                    <h6>Model Code</h6>
                                                    <p>{car.ModelCode}</p>
                                                </div>
                                                <div className="col-3">
                                                    <h6>Engine Number</h6>
                                                    <p>{car.EngineNumber}</p>
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
                                                    <Link href="#">more...</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4 atf">
                                            <div className="addfav">
                                                <h5>
                                                    <Link href="#">
                                                        <LikeComponent/>
                                                    </Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-8 col-7">
                                <div className="car-inquiry">
                                    <Link href="/Cars/CarsDetailed/@obj.StockId"><h6 className="listname">{car.ListingTitle}</h6></Link>
                                    <div className="fprice">
                                        <h6>
                                            FOB Price:
                                            <span>{car.Price}</span>
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
                                    <Link href="/Cars/CarsDetailed/@obj.StockId"><button className="offerbtn">Send Offer</button></Link>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))
            }

        </>
    )
}