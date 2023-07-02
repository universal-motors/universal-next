
import Link from "next/link";
import Image from 'next/image'
import {tblCars, tblMasterCountry} from ".prisma/client";
import LikeComponent from "@/components/stock/LikeComponent";
import PriceFormat from "@/components/stock/PriceFormat";
import StockPopupDetails from "@/components/stock/StockPopupDetails";
import {useState} from "react";
interface Props{
    cars: tblCars[]
    locations: tblMasterCountry[]
}

export default function SearchResult({cars,locations}:Props){
    const isOpen=false;
    return(
        <>
            {
                cars.map(car=>(
                    <div key={car.StockId} className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row my-5">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
                                <div className="searched-carimage">
                                    <Link href={`/global/results/${car.StockId}`}>
                                        <Image src={car.ImageUrl??""} className="mb-4" alt=""  height={150}
                                               width={150} /></Link>
                                    {/*<p>In Stock</p>*/}
                                    <h4 className="ml-5">STOCK ID : <span className="inline-flex items-center gap-x-1.5 rounded-full bg-yellow-400 px-2 py-1 text-l font-medium text-blue-950">{car.StockCode}</span></h4>
                                    {/*<h5 className="inline-flex font-bold fav-text">Auction grade: <span>{car.AuctionGrade}</span></h5>*/}
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 d-md-block d-none">
                                <div className="car-details">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <Link href={`/global/results/${car.StockId}`}><h6 className="listname font-bold uppercase">{car.ListingTitle}</h6></Link>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="car-country">
                                                <h6 className="text-right">
                                                    <span className="font-bold inline-flex">
                                                        <Image
                                                            src={`/assets/images/flags/${locations.find(x=>x.CountryId==car.LocationId)?.Slug}.svg`}
                                                            className="img-fluid mr-2"
                                                            height={20}
                                                            width={20}
                                                            alt={`${locations.find(x=>x.CountryId==car.LocationId)?.CountryName} flag`} />
                                                        {locations.find(x=>x.CountryId==car.LocationId)?.CountryName}
                                                    </span>
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
                                                    {/*<Link href="#" scroll={false}>*/}
                                                        <LikeComponent/>
                                                    {/*</Link>*/}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-8 col-7">
                                <div className="car-inquiry">
                                    {/*<Link href={`/global/results/${car.StockId}`}><h6 className="listname">{car.ListingTitle}</h6></Link>*/}
                                    <div className="fprice">
                                        <h6 className="font-bold">
                                            FOB Price:
                                            <span className="mb-5 text-[20px] ">
                                                <PriceFormat carPrice={car.Price} />
                                            </span>
                                        </h6>
                                    </div>
                                    <hr />
                                    <div className="notice">
                                        <h6>
                                            <span className="inline-flex items-center">
                                               <div
                                                   className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                                                   role="alert">
                                                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3"
                                                     fill="currentColor" viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                          clip-rule="evenodd"></path>
                                                </svg>
                                                <span className="sr-only">Info</span>
                                                <div className="font-bold">
                                                    Select your Destination Country and Port
                                                </div>
                                            </div>
                                            </span>

                                            </h6>
                                    </div>
                                    <div className="askprice">
                                        <h6>
                                            TOTAL Price:
                                            <span>ASK</span>
                                        </h6>
                                    </div>
                                    <h4 />

                                    <Link href={`/global/results/${car.StockId}`}>
                                        <button className="offerbtn">
                                        <span className="font-bold">    Send Offer</span>
                                        </button>
                                    </Link>

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