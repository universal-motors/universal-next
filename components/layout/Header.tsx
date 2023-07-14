
import {tblBodyTypes, tblMakes, tblMasterCountry} from ".prisma/client";
import Link from "next/link";

import SearchBar from "@/components/stock/SearchBar";
import {FcBusinessman, FcCurrencyExchange, FcCustomerSupport, FcGlobe, FcLike, FcOnlineSupport} from "react-icons/fc";
import TopCountryTimeBar from "@/components/layout/TopCountryTimeBar";
import Navigation from "@/components/layout/Navigation";
import Image from "next/image";

import {Country} from "@/models/Master/Country";
import {BodyType} from "@/models/Master/BodyType";
import {Make} from "@/models/Master/Make";
import {StockCars} from "@/models/StockCars";

interface Props{
    locations : Country[]
    bodyTypes : BodyType[]
    makes : Make[]
    stock: StockCars[]
   // stockCount : number
}

const currentYear = new Date().getFullYear()


async function Header({locations, bodyTypes,makes,  stock}:Props) {

      return (
        <>

         <header className="headerbg">

                <div className="container-fluid">

                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <div className="row">
                        <TopCountryTimeBar stockCount={stock.length}/>
                        {/*<div className="col-lg-2 col-md-6 col-12 text-center">*/}
                        {/*    <div className="currencydropdown">*/}
                        {/*        <button className="currencydropbtn">*/}
                        {/*           <span className="inline-flex mt-1 "><h5><FcCurrencyExchange className='mr-2'/></h5> Select Your Currency</span>*/}
                        {/*        </button>*/}
                        {/*        <div className="currencydropdown-content currencdd">*/}
                        {/*            <Link href="#"><b>$</b><span>&nbsp;</span>USD</Link>*/}
                        {/*            <Link href="#"><b>¥</b><span>&nbsp;</span>JPY</Link>*/}
                        {/*            <Link href="#"><b>د.إ</b><span>&nbsp;</span>AED</Link>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-2 col-md-6 col-12">*/}
                        {/*    <div className="currencydropdown countrydrop">*/}
                        {/*        <button className="currencydropbtn" style={{width: 'inherit'}}>*/}
                        {/*            /!*<i className="fa fa-globe" style={{position: 'relative', left: '-10px', fontSize: '20px'}} />*!/*/}
                        {/*            <span className="inline-flex mt-1 "><h5><FcGlobe className='mr-2'/></h5>Select Your Country</span>*/}
                        {/*        </button>*/}
                        {/*        <div className="currencydropdown-content">*/}
                        {/*            <ul className="countdrop ">*/}
                        {/*            {*/}
                        {/*                locations*/}
                        {/*                    .filter(location=> location.isHotLocation)*/}
                        {/*                    .map(location=> (*/}
                        {/*                        <li key={location.countryId}>*/}
                        {/*                            <Link    href={{*/}
                        {/*                                pathname : "/global/results/cars",*/}
                        {/*                                query: {*/}
                        {/*                                    countryID: location.countryId*/}
                        {/*                                }*/}
                        {/*                            }}>*/}
                        {/*                              <span className=" inline-flex items-center rounded-md">*/}
                        {/*                                   <img*/}
                        {/*                                       src={"/assets/images/flags/"+location.slug+".svg"}*/}
                        {/*                                       className="flagimg-fluid mr-3"*/}
                        {/*                                       alt={location.slug??""}*/}
                        {/*                                   />{location.countryName}*/}
                        {/*                              </span>*/}

                        {/*                            </Link>*/}
                        {/*                        </li>*/}
                        {/*                    ))*/}
                        {/*            }*/}
                        {/*            </ul>`*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </header>
            <section className="menuhead sticky-header" id="sheader">
                <div className="container-fluid">
                    <div className="row" style={{justifyContent: 'end'}}>
                        <div className="col-xl-1 col-lg-2 col-md-2">
                            <Link href="/"><img src="/assets/images/um.svg"  alt="logo" className="header-logo" /></Link>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5">
                          <SearchBar/>

                        </div>

                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12" style={{paddingRight: '0 !important', paddingLeft: 0}}>
                                    <div className="support">
                                        {/*<i className="fa fa-headphones" />*/}
                                        <h2><FcCustomerSupport className='m-2'/></h2>
                                        <div className="currencydropdown">
                                            <button className="currencydropbtn supportbtn">
                                                Support<br />+49 471 9731 9003

                                            </button>
                                            <div className="currencydropdown-content supportcontent">
                                                <div className="row bg-white">
                                                    <div className="col-md-6 px-1">
                                                        <p className="m-0" style={{fontSize: '12px'}}><strong>Call Us</strong></p>
                                                        <p className="m-0" style={{fontSize: '12px'}}>Call our award-winning sales &amp; support team</p>
                                                        <i className="fa fa-phone mb-1" style={{fontSize: '12px'}}>+49 471 9731 9003</i>
                                                        <i className="fa fa-phone mb-1" style={{fontSize: '12px'}}>+81 50 5050 8550</i>

                                                        <p className="m-0" style={{fontSize: '12px'}}><strong>Email</strong></p>
                                                        <p>
                                                            <Link className="p-0" href="mailto:info@universalmotorsltd.com" style={{color: 'blue', fontSize: '12px'}}>info@universalmotorsltd.com</Link>
                                                        </p>
                                                        <p className="m-0" style={{fontSize: '12px'}}><strong>Business Hours</strong></p>
                                                        <p style={{fontSize: '12px'}} className="m-0">
                                                            Mon - Fri: 9:00 AM - 6:00 PM<br />
                                                            Saturday: 9:00 AM - 1:00 PM
                                                        </p>
                                                    </div>
                                                    <div className="col-md-6 px-1">
                                                        <p className="m-0" style={{fontSize: '12px'}}><strong>Chat Now</strong></p>
                                                        <p className="mb-1" style={{fontSize: '12px'}}>
                                                            Chat with our sales team &amp; support team for quick answers on product
                                                            features, pricing and more.
                                                        </p>
                                                        <button className="chatbtn" style={{fontSize: '12px'}}>Chat Now</button>
                                                        <p style={{fontSize: '12px'}} className="m-0">24/7</p>
                                                        <p className="m-0" style={{fontSize: '12px'}}><strong>Whatsapp</strong></p>
                                                        <p>
                                                            <Link className="p-0 m-0" href="https://wa.link/5g81p6" style={{color: 'blue', fontSize: '12px'}}>+49 471 9731 9003</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12">
                                    <div className="support">
                                        {/*<i className="fa fa-heart" />*/}
                                        <h2><FcLike className='m-2'/></h2>
                                        <div className="currencydropdown">
                                            <button className="currencydropbtn supportbtn">
                                              Check<br />Favourites
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="registerbox">
                                        {/*<i className="fa fa-user" />*/}
                                        <h2><FcBusinessman className='m-2'/></h2>
                                        <div className="currencydropdown">
                                            <button className="currencydropbtn supportbtn">
                                                Hello, Sign in<br />My Account
                                            </button>

                                            <div className="currencydropdown-content regiscontent">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <p className="m-0" style={{fontSize: '14px'}}><strong>My Account</strong></p>
                                                       {/*<LoginModal/>*/}
                                                        <div className="regisfooter">
                                                            <p style={{fontSize: '14px'}} className="m-0">New Customer?</p>
                                                            <p>
                                                                <Link className="p-0 m-0" href="#" style={{color: 'blue', fontSize: '14px'}}>
                                                                    <span>&nbsp;</span>Sign Up
                                                                </Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                <Navigation/>

</div>
</section>
            {/* ........MOBILE HEADER....... */}
            <section className="mobile-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <input type="checkbox" id="check" />
                            <div className="mobile-container">
                                <label htmlFor="check">
                                    <span className="fa fa-times" id="times" />
                                    <span className="fa fa-bars" id="bars" />
                                </label>
                                <div className="sidemenu">
                                    <Link href="/"><img src="/assets/images/um.svg" className="side-logo" alt="hamburger icon" /></Link>
                                    <ul className="sidelist">
                                        <li className="highlighted"><i className="fa fa-gear" />Site Setting</li>
                                        <li className="last">Currency</li>
                                        <li className="highlighted"><i className="fa fa-search" />Search</li>
                                        <li> <Link href="/global/results/cars?makeID=5"> Seach by Make</Link></li>
                                        <li><Link href="/global/results/cars?bodyTypeID=3">Seach by Type</Link></li>
                                        <li><Link href="/global/results/cars?price=25000">Seach by Price</Link></li>
                                        <li><Link href={`/global/results/cars?year=${new Date().getFullYear()}`}>Seach by Year</Link></li>
                                        <li className="last">Seach by Inventory Location</li>
                                        <li className="highlighted"><i className="fa fa-globe" />Local Service</li>
                                        {


                                                locations
                                                    .filter(location=> location.isInventoryLocation)
                                                    .map(location=> (
                                                        <li key={location.countryId}>
                                                            <Link href={{
                                                                pathname : "/global/results/cars",
                                                                query: {
                                                                    countryID: location.countryId
                                                                }
                                                            }}>

                                           <span className=" inline-flex items-center rounded-md">
                                        <Image
                                            src={`/assets/images/flags/${location.slug}.svg`}
                                            className="flagimg-fluid mr-5"
                                            alt={location.slug??""}
                                            width={16}
                                            height={16}
                                        />
                                               {location.countryName}</span>
                                                            </Link>
                                                        </li>
                                                    ))



                                            }
                                        <li className="highlighted"><i className="fa fa-phone" />Contact Us</li>
                                        <li>+49 471 9731 9003</li>
                                        <li className="last">+81 50 5050 8550</li>
                                        <li>info@universalmotorsltd.com</li>

                                        <li className="highlighted"><i className="fa fa-question" />Need Help</li>
                                        <li><Link href="/global/information?page=why-choose-universal-motors">Why Choose UM?</Link></li>
                                        <li><Link href="/global/information?page=how-to-buy">How To Buy</Link></li>
                                        <li><Link href="/global/information?page=how-to-pay">How to Pay?</Link></li>
                                        <li><Link href="/global/information?page=faqs">FAQs</Link></li>
                                        <li className="last"><Link href="/global/information?page=export-information">Exports Information</Link></li>
                                        <li className="highlighted"><i className="fa fa-info" /><Link href="/global/information?page=about-universal-motors">About UM</Link></li>
                                        <li><Link href="/global/about-universal-motors?page=company-profile">Company Profile</Link></li>
                                        <li><Link href="/global/about-universal-motors?page=global-offices">Global Offices</Link></li>
                                        <li><Link href="/global/about-universal-motors?page=terms-of-service">Terms Of Services</Link></li>
                                        <li><Link href="/global/about-universal-motors?page=privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/global/about-universal-motors?page=security-export-control">Secutiy Export Control</Link></li>
                                        <li className="last"><Link href="/global/about-universal-motors?page=policy-against-anti-social">Basic Policy Against Anti-Social Forces</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <Link href="/"><img src="/assets/images/um.svg" alt="logo" className="mobile-logo" width={50}/></Link>
                        </div>
                        <div className="col-7">
                            <div className="featuresection flex inline-flex">

                                {/*<Link href="#search"><img src="https://img.icons8.com/ios-glyphs/2x/search.png" alt="" width={25} /></Link>*/}
                                <Link href="#support">
                                   <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/2x/external-headphone-music-icongeek26-outline-icongeek26.png" alt="" width={25} />
                                </Link>
                                <Link href="#customer"><img src="https://img.icons8.com/ios/2x/hearts.png" alt="" width={25} /></Link>
                                <Link href="#">
                                   <img src="https://img.icons8.com/fluency-systems-regular/2x/user.png" alt="" width={25} />
                                </Link>
                                {/* <Link href="#support"><i class="fa fa-headphones"></i></Link>
                    <Link href="#"><i class="fa fa-heart-o"></i></Link>
                    <Link href="#customer"><i class="fa fa-user-o"></i></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Header