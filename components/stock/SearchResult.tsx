'use client'
import Link from "next/link";
import Image from 'next/image'
import {tblCars, tblMasterCountry} from ".prisma/client";
import LikeComponent from "@/components/stock/LikeComponent";
import PriceFormat from "@/components/stock/PriceFormat";


import {StockCars} from "@/models/StockCars";
import {FaGasPump} from "react-icons/fa";
import {PiEngineFill, PiGearFineBold } from "react-icons/pi";
import {GiCarDoor} from "react-icons/gi";
import {BiSolidColorFill} from "react-icons/bi";
import {MdAirlineSeatReclineExtra} from "react-icons/md";
import {Country} from "@/models/Master/Country";
import agent from "@/api/agent";
import CarOptionList from "@/components/stock/StockDetailed/CarOptionsList";
import {useState} from "react";
import PaginationComponent from "@/components/stock/PaginationComponent";
interface Props{
 //   cars: tblCars[]
   cars: StockCars[]
    locations:tblMasterCountry[]
}

export default async function SearchResult({cars,locations}:Props){
    const searchData:StockCars[] = cars;
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(20);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = searchData.slice(firstPostIndex,lastPostIndex);
    //const optionsMaster = await agent.LoadData.caroptionsList()//db.tblCarOptions.findMany({where: {isActive:true}});

    return(
        <>
            <PaginationComponent currentPage={currentPage} totalPost={cars.length} postPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
          {

                currentPosts.map(car=>(
                    <div key={car.stockId} className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row my-5 ">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
                                <div className="searched-carimage ">
                                    <Link href={`/global/results/${car.stockId}`}>
                                        <Image src={car.imageUrl??""} className="mb-4" alt=""  height={150}
                                               width={150} /></Link>
                                    {/*<p>In Stock</p>*/}
                                    <h4 className="ml-5">STOCK ID : <span className="inline-flex items-center gap-x-1.5 rounded-full bg-yellow-400 px-2 py-1 text-l font-medium text-blue-950">{car.stockCode}</span></h4>
                                    {/*<h5 className="inline-flex font-bold fav-text">Auction grade: <span>{car.AuctionGrade}</span></h5>*/}
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 d-md-block d-none">
                                <div className="car-details">
                                    <div className="row ">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <Link href={`/global/results/${car.stockId}`}>
                                                <h6 className="listname font-bold uppercase">{car.listingTitle}</h6></Link>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="car-country">
                                                <h6 className="text-right">
                                                    <span className="font-bold inline-flex">
                                                        <Image
                                                            src={`/assets/images/flags/${locations.find(x=>x.CountryId==car.locationId)?.Slug}.svg`}
                                                            className="img-fluid mr-2"
                                                            height={20}
                                                            width={20}
                                                            alt={`${car.locationName} flag`} />
                                                        {car.locationName}
                                                    </span>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tabrow row pt-2">
                                        <div className="row specsrow ">
                                            <div className="col-sm specs">
                                                <h4>Mileage</h4>
                                                <span className="label-text  p-1  flex items-center rounded-md ml-5">
                                                     <img decoding="async" src="/assets/images/kmsDriven.svg" loading="eager"className="h-6 mr-2"/>
                                                    {car.mileage}
                                                 </span>
                                            </div>
                                            <div className="col-sm specs">
                                                <h4>YEAR</h4>
                                                <span className="label-text  p-1  flex items-center rounded-md ml-5">
                                                    <img decoding="async" src="/assets/images/registrationYear.svg" loading="eager" className="h-6 mr-2"/>
                                                    {car.year} </span>
                                            </div>
                                            <div className="col-sm specs">
                                                <h4>Engine</h4>
                                                <span className="label-text  p-1 flex items-center rounded-md ml-5">
                                                     {/*<img decoding="async" src="/assets/images/engineDisplacement.svg" loading="eager"className="h-6 mr-2"/>*/}
                                                    <span className="h-auto mr-2"><PiEngineFill /></span>
                                                    {car.engineSize}</span>
                                            </div>
                                            <div className="col-sm specs">
                                                <h4>Transmision</h4>
                                                <span className="label-text  p-1 flex items-center rounded-md ml-5">
                                                    <img decoding="async" src="/assets/images/transmission.svg" loading="eager"className="h-6"/>
                                                    {car.transmissionName} </span>
                                            </div>
                                            {/*<div className="col-sm specs">*/}
                                            {/*    <h4>Country</h4>*/}
                                            {/*    <span className="label-text p-1 flex items-center rounded-md ml-5">*/}
                                            {/*    /!*<img decoding="async" src={`/assets/images/flags/${location.slug}.svg`} loading="eager"className="h-4 mr-2"/>*!/*/}
                                            {/*        {car.locationName} </span>*/}
                                            {/*</div>*/}
                                            <div className="col-sm specs">
                                                <h4>Fuel</h4>
                                                <span className="label-text  p-1 flex items-center rounded-md ml-5">
                                                    <span className="h-auto mr-2"><FaGasPump /></span>
                                                    {car.typeOfFuel}
                                                 </span>
                                            </div>

                                        </div>
                                        <div className="row specsrow ">

                                            <div className="col-sm specs">
                                                <h4>Drivetrain</h4>
                                                <span className="label-text  p-1 flex items-center rounded-md ml-5">
                                                      <span className="h-auto mr-2"><PiGearFineBold /></span>
                                                    {car.drivetrainType}
                                                 </span>
                                            </div>
                                            <div className="col-sm specs">
                                                <h4>Doors</h4>
                                                <span className="label-text  p-1 flex items-center rounded-md ml-5">
                                                  <span className="h-auto mr-2"><GiCarDoor /></span>
                                                    {car.noOfDoors}</span>
                                            </div>
                                            <div className="col-sm specs">
                                                <h4>Seats</h4>
                                                <span className="label-text  p-1 flex items-center rounded-md ml-5">
                                                     <span className="h-auto mr-2"><MdAirlineSeatReclineExtra /></span>
                                                    {car.noOfSeats} </span>
                                            </div>
                                            <div className="col-sm specs">
                                                <h4>Color</h4>
                                                <span className="label-text  p-1 flex items-center rounded-md ml-5">
                                                  <span className="h-auto mr-2"><BiSolidColorFill /></span>
                                                    {car.colorName}</span>

                                            </div>
                                            <div className="col-sm specs">
                                                <h4>Model Code</h4>
                                                <span className="label-text p-1 flex items-center rounded-md ml-5">
                                                  {/*<span className="h-6 mr-2"><AiOutlineBarcode /></span>*/}
                                                    {car.modelCode}</span>

                                            </div>
                                            {/*<div className="col-sm specs">*/}
                                            {/*    <h4>Engine Number</h4>*/}
                                            {/*    <span className="label-text  p-1 flex items-center rounded-md ml-5">*/}
                                            {/*      /!*<span className="h-6 mr-2"><PiEngineFill /></span>*!/*/}
                                            {/*        {car.engineNumber}</span>*/}

                                            {/*</div>*/}
                                        </div>


                                    </div>
                                    <div className="carlistfeatures row pt-2">
                                        <div className="col-md-8 flist">
                                            {/*<CarOptionList optionsMaster={optionsMaster} stockID={car.stockId}  />*/}
                                            {/*<ul>*/}
                                            {/*    {*/}

                                            {/*    }*/}
                                            {/*    <li>Navigation System</li>*/}
                                            {/*    <li>Rear Camera</li>*/}
                                            {/*    <li>Power Steering</li>*/}
                                            {/*    <li>Air Bags</li>*/}
                                            {/*    <li>Power Windows</li>*/}
                                            {/*    <li>*/}
                                            {/*        <Link href="#">more...</Link>*/}
                                            {/*    </li>*/}
                                            {/*</ul>*/}
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
                                    {/*<Link href={`/global/results/${car.stockId}`}><h6 className="listname">{car.ListingTitle}</h6></Link>*/}
                                    <div className="fprice">
                                        <h6 className="listname font-bold text-[20px]  uppercase">{car.listingTitle}</h6>
                                        <h6 className="font-bold">
                                            FOB Price:
                                            <span className="mb-5 text-[20px] ">
                                               <PriceFormat carPrice={car.price} />
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

                                    <Link href={`/global/results/${car.stockId}`}>
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
            <PaginationComponent currentPage={currentPage} totalPost={cars.length} postPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
        </>
    )
}