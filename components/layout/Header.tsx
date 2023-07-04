
import {tblBodyTypes, tblMakes, tblMasterCountry} from ".prisma/client";
import Link from "next/link";

import SearchBar from "@/components/stock/SearchBar";
import {FcBusinessman, FcCurrencyExchange, FcCustomerSupport, FcGlobe, FcLike, FcOnlineSupport} from "react-icons/fc";
import TopCountryTimeBar from "@/components/layout/TopCountryTimeBar";
import LoginModal from "@/components/LoginModal";

interface Props{
    locations : tblMasterCountry[]
    bodyTypes : tblBodyTypes[]
    makes : tblMakes[]
}

const currentYear = new Date().getFullYear()


async function Header({locations, bodyTypes,makes}:Props) {

      return (
        <>
         <header className="headerbg">
                <div className="container-fluid">
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <div className="row">
                        <TopCountryTimeBar/>
                        <div className="col-lg-2 col-md-6 col-12 text-center">
                            <div className="currencydropdown">
                                <button className="currencydropbtn">
                                   <span className="inline-flex mt-1 "><h5><FcCurrencyExchange className='mr-2'/></h5> Select Your Currency</span>
                                </button>
                                <div className="currencydropdown-content currencdd">
                                    <Link href="#"><b>$</b><span>&nbsp;</span>USD</Link>
                                    <Link href="#"><b>¥</b><span>&nbsp;</span>JPY</Link>
                                    <Link href="#"><b>د.إ</b><span>&nbsp;</span>AED</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="currencydropdown countrydrop">
                                <button className="currencydropbtn" style={{width: 'inherit'}}>
                                    {/*<i className="fa fa-globe" style={{position: 'relative', left: '-10px', fontSize: '20px'}} />*/}
                                    <span className="inline-flex mt-1 "><h5><FcGlobe className='mr-2'/></h5>Select Your Country</span>
                                </button>
                                <div className="currencydropdown-content">
                                    <ul className="countdrop ">
                                    {
                                        locations
                                            .filter(location=> location.IsHotLocation)
                                            .map(location=> (
                                                <li key={location.CountryId}>
                                                    <Link href="/Cars/?id=@(obj.CountryId)&type=Country">
                                                      <span className=" inline-flex items-center rounded-md">
                                                           <img
                                                               src={"/assets/images/flags/"+location.Slug+".svg"}
                                                               className="flagimg-fluid mr-3"
                                                               alt={location.Slug}
                                                           />{location.CountryName}
                                                      </span>

                                                    </Link>
                                                </li>
                                            ))
                                    }
                                    </ul>`
                                </div>
                            </div>
                        </div>
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
{/*                    <div className="row">*/}
{/*                        <div className="col-xl-2 col-lg-2 col-md-2" />*/}
{/*                        <div className="col-xl-8 col-lg-12 col-md-12">*/}
{/*                            <div className="navbar navbar-expand-lg navbar-light">*/}
{/*                                <div className="collapse navbar-collapse" id="navbarNavDropdown">*/}
{/*                                    <ul className="navbar-nav">*/}
{/*                                        <li className="nav-item dropdown">*/}
{/*                                            <div className="menudropdown currencydropdown">*/}
{/*                                                <button className=" currencydropbtn supportbtn dropdown-toggle">*/}
{/*                                                    Search From Stock*/}
{/*                                                </button>*/}
{/*                                                <div className="currencydropdown-content menucontent">*/}
{/*                                                    <div className="row bg-white">*/}
{/*                                                        <div className="col-sm">*/}
{/*                                                            <p><strong>Seach By Make</strong></p>*/}
{/*                                                            <ul className="countdrop">*/}
{/*                                                                {*/}
{/*                                                                    makes*/}
{/*                                                                        .slice(0, 15) // Get the first 10 records*/}
{/*                                                                        .map(make=> (*/}
{/*                                                                            <li key={make.MakeId}>*/}
{/*                                                                                <Link href="/Cars/?id=@(obj.CountryId)&type=Country">*/}
{/*                                                                                   <img*/}
{/*                                                                                        src={make.ImageUrl}*/}
{/*                                                                                        className="flagimg-fluid"*/}
{/*                                                                                        alt={make.Slug}*/}

{/*                                                                                    />*/}
{/*                                                                                    <span style={{ marginLeft: '10px' }}> {make.MakeName}</span>*/}
{/*                                                                                </Link>*/}
{/*                                                                            </li>*/}
{/*                                                                        ))*/}
{/*                                                                }*/}
{/*                                                            </ul>*/}
{/*                                                        </div>*/}
{/*                                                        <div className="col-sm">*/}
{/*                                                            <p><strong>Seach By Type</strong></p>*/}
{/*                                                            <ul className="countdrop">*/}
{/*                                                                {*/}
{/*                                                                    bodyTypes.map(bodytype=> (*/}
{/*                                                                        <li key={bodytype.BodyTypeId}>*/}
{/*                                                                            <Link href="/Cars/?id=@(obj.CountryId)&type=Country">*/}
{/*                                                                                <span style={{ marginLeft: '10px' }}>{bodytype.TypeOfBody}</span>*/}
{/*                                                                            </Link>*/}
{/*                                                                        </li>*/}
{/*                                                                    ))*/}
{/*                                                                }*/}
{/*                                                            </ul>*/}
{/*                                                        </div>*/}
{/*                                                        <div className="col-sm">*/}
{/*                                                            <p><strong>Seach By Price</strong></p>*/}
{/*                /!*                                            <ul className="countdrop">*!/*/}
{/*                /!*              /!*                                  <li>*!/*!/*/}
{/*                /!*              /!*                                      <Link className="nav-link" href="@nav.ToAbsoluteUri($" cars 5000 price")" match="NavLinkMatch.All">*!/*!/*/}
{/*                /!*              /!*                                      <span>*!/*!/*/}
{/*                /!*              /!*  <span className="lower-price-boundary" data-min={0}>Under</span> <span className="upper-price-boundary" data-max={50000}>$5000</span>*!/*!/*/}
{/*                /!*              /!*</span>*!/*!/*/}
{/*                /!*              /!*                                  </Link>*!/*!/*/}
{/*                /!*                        </li>*!/*/}
{/*                /!*                        <li>*!/*/}
{/*                /!*                            <Link className="nav-link" href="@nav.ToAbsoluteUri($" cars 10000 price")" match="NavLinkMatch.All">*!/*/}
{/*                /!*                            <span>*!/*/}
{/*                /!*                <span className="lower-price-boundary" data-min={50000}>$5000</span> <span className="upper-price-boundary" data-max={100000}> - $10,000</span>*!/*/}
{/*                /!*              </span>*!/*/}
{/*                /!*                        </Link>*!/*/}
{/*                /!*                    </li>*!/*/}
{/*                /!*                    <li>*!/*/}
{/*                /!*                        <Link className="nav-link" href="@nav.ToAbsoluteUri($" cars 15000 price")" match="NavLinkMatch.All">*!/*/}
{/*                /!*                        <span>*!/*/}
{/*                /!*                <span className="lower-price-boundary" data-min={100000}>$10,000</span> <span className="upper-price-boundary" data-max={150000}> - $15,000</span>*!/*/}
{/*                /!*              </span>*!/*/}
{/*                /!*                    </Link>*!/*/}
{/*                /!*                </li>*!/*/}
{/*                /!*                <li>*!/*/}
{/*                /!*                    <Link className="nav-link" href="@nav.ToAbsoluteUri($" cars 25000 price")" match="NavLinkMatch.All">*!/*/}
{/*                /!*                    <span>*!/*/}
{/*                /!*                <span className="lower-price-boundary" data-min={200000}>$20,000</span> <span className="upper-price-boundary" data-max={250000}> - $25,000</span>*!/*/}
{/*                /!*              </span>*!/*/}
{/*                /!*                </Link>*!/*/}
{/*                /!*            </li>*!/*/}
{/*                /!*            <li>*!/*/}
{/*                /!*                <Link className="nav-link" href="@nav.ToAbsoluteUri($" cars 4000 price")" match="NavLinkMatch.All">*!/*/}
{/*                /!*                <span>*!/*/}
{/*                /!*                <span className="lower-price-boundary" data-min={250000}>$25,000</span> <span className="upper-price-boundary" data-max={400000}> - $40,000</span>*!/*/}
{/*                /!*              </span>*!/*/}
{/*                /!*            </Link>*!/*/}
{/*                /!*        </li>*!/*/}
{/*                /!*        <li>*!/*/}
{/*                /!*            <Link className="nav-link" href="@nav.ToAbsoluteUri($" cars 4000 price")" match="NavLinkMatch.All" onclick="showSpinner()">*!/*/}
{/*                /!*            <span>*!/*/}
{/*                /!*                <span className="lower-price-boundary" data-min={250000}>$25,000</span>*!/*/}
{/*                /!*                <span className="upper-price-boundary" data-max={400000}> - $40,000</span>*!/*/}
{/*                /!*              </span>*!/*/}
{/*                /!*            <div className="spinner-border text-primary ml-2" role="status" style={{visibility: 'hidden'}}>*!/*/}
{/*                /!*                <span className="sr-only">Loading...</span>*!/*/}
{/*                /!*            </div>*!/*/}
{/*                /!*        </Link>*!/*/}
{/*                /!*    </li>*!/*/}
{/*                /!*    <li>*!/*/}
{/*                /!*        <Link className="nav-link" href="@nav.ToAbsoluteUri($" cars>4000/Price")" Match="NavLinkMatch.All"&gt;*!/*/}
{/*                /!*            <span>*!/*/}
{/*                /!*                <span className="lower-price-boundary" data-min={400000}>$40,000</span> <span className="upper-price-boundary" data-max={0}>Over</span>*!/*/}
{/*                /!*              </span>*!/*/}
{/*                /!*        </Link>*!/*/}
{/*                /!*    </li>*!/*/}
{/*                /!*</ul>*!/*/}
{/*            </div>*/}
{/*            <div className="col-sm">*/}
{/*                <p><strong>Seach By Year</strong></p>*/}
{/*                <ul className="countdrop">*/}
{/*                    <li>*/}
{/*                        <Link href={`${currentYear-15}`}>  <span> {`${currentYear-15} - ${currentYear-11}`}</span></Link>*/}
{/*                    </li>*/}
{/*                    <li>*/}
{/*                        <Link href={`${currentYear-10}`}>  <span> {`${currentYear-10} - ${currentYear-7}`}</span></Link>*/}
{/*                    </li>*/}
{/*                    <li>*/}
{/*                        <Link href={`${currentYear-6}`}>  <span> {`${currentYear-6} - ${currentYear-3}`}</span></Link>*/}
{/*                    </li>*/}
{/*                    <li>*/}
{/*                        <Link href={`${currentYear-2}`}>  <span> {`${currentYear-2} - ${currentYear}`}</span></Link>*/}
{/*                    </li>*/}



{/*                </ul>*/}
{/*            </div>*/}
{/*            <div className="col-sm">*/}
{/*                <p><strong>Seach By Location</strong></p>*/}
{/*                <ul className="countdrop">*/}
{/*                    <Link href="#"><img src="/assets/images/flags/BS.svg" className="flagimg-fluid" alt="Bahamas flag" />   <span style={{ marginLeft: '10px' }}>Bahamas</span></Link>*/}
{/*                    <Link href="#"><img src="/assets/images/flags/CL.svg" className="flagimg-fluid" alt="Chile flag" />     <span style={{ marginLeft: '10px' }}>Chile</span>                    </Link>*/}
{/*                    <Link href="#"><img src="/assets/images/flags/GY.svg" className="flagimg-fluid" alt="Guyana flag" />    <span style={{ marginLeft: '10px' }}>Guyana</span></Link>*/}
{/*                    <Link href="#"><img src="/assets/images/flags/JM.svg" className="flagimg-fluid" alt="Jamaica flag" />   <span style={{ marginLeft: '10px' }}>Jamaica</span></Link>*/}
{/*                    <Link href="#"><img src="/assets/images/flags/KE.svg" className="flagimg-fluid" alt="Kenya flag" />     <span style={{ marginLeft: '10px' }}>Kenya</span></Link>*/}
{/*                    <Link href="#"><img src="/assets/images/flags/MW.svg" className="flagimg-fluid" alt="Malawi flag" />    <span style={{ marginLeft: '10px' }}>Malawi</span></Link>*/}
{/*                </ul>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*</div>*/}
{/*</div>*/}
{/*</li>*/}
{/*    <li className="nav-item dropdown">*/}
{/*        <div className="menudropdown currencydropdown">*/}
{/*            <button className=" currencydropbtn supportbtn dropdown-toggle">*/}
{/*                Need Help*/}
{/*            </button>*/}
{/*            <div className="currencydropdown-content menucontent ">*/}
{/*                <div className="row bg-white needhelp">*/}
{/*                    <div className="col-lg-12 col-md-12 col-12">*/}
{/*                        <ul className="countdrop needhelpmenu p-0">*/}
{/*                            <Link href="/why-choose-universal-motors" className="mt-0"><span>Why Choose Universal Motor?</span></Link>*/}
{/*                            <Link href="/how-to-buy"> <span>How to Buy</span></Link>*/}
{/*                            <Link href="/bank-information"><span>Bank Information</span></Link>*/}
{/*                            <Link href="/export-information"> <span>Export Information</span></Link>*/}
{/*                            <Link href="/vehicle-sshipment-condition"> <span>Condition of Shipment</span></Link>*/}
{/*                            <Link href="/export-import-services"> <span>Export &amp; Import Services</span></Link>*/}
{/*                        </ul>*/}
{/*                    </div>*/}
{/*                </div>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*    </li>*/}
{/*    <li className="nav-item dropdown">*/}
{/*        <div className="menudropdown currencydropdown">*/}
{/*            <button className=" currencydropbtn supportbtn dropdown-toggle">*/}
{/*                About Universal Motors*/}
{/*            </button>*/}
{/*            <div className="currencydropdown-content menucontent ">*/}
{/*                <div className="row bg-white needhelp">*/}
{/*                    <div className="col-lg-12 col-md-12 col-12">*/}
{/*                        <ul className="countdrop needhelpmenu p-0">*/}
{/*                            <Link href="/about-us" className="mt-0"> <span>About Us</span></Link>*/}
{/*                            <Link href="/sustainability-fundamental-policy"> <span>Sustainability Fundamental Policy</span></Link>*/}
{/*                            <Link href="/company-profile"><span>Company Profile</span></Link>*/}
{/*                            <Link href="/global-offices"> <span>Global Offices</span></Link>*/}
{/*                            <Link href="/terms-of-service"> <span>Terms of Services</span></Link>*/}
{/*                            <Link href="/privacy-policy"> <span>Privacy Policy</span></Link>*/}
{/*                            <Link href="/security-export-control"> <span>Security Export Control</span></Link>*/}
{/*                            <Link href="/basic-policy-against"> <span>Basic Policy Against Anti-Social Forces</span></Link>*/}
{/*                            <Link href="/disclaimer-policy"> <span>Disclaimer Policy</span></Link>*/}
{/*                        </ul>*/}
{/*                    </div>*/}
{/*                </div>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*    </li>*/}
{/*    <li className="nav-item dropdown">*/}
{/*        <div className="menudropdown currencydropdown">*/}
{/*            <button className=" currencydropbtn supportbtn dropdown-toggle">*/}
{/*                Import Protocols*/}
{/*            </button>*/}
{/*            <div className="currencydropdown-content menucontent ">*/}
{/*                <div className="row bg-white needhelp">*/}
{/*                    <div className="col-lg-12 col-md-12 col-12">*/}
{/*                        <Link className="nav-link mt-0" href="/import-protocols-in-bahamas">*/}
{/*                           <img src="/assets/images/flags/BS.svg" alt="Bahamas flag" height={15} />*/}
{/*                            <span>Bahamas</span>*/}
{/*                        </Link>*/}
{/*                        <Link href="/import-protocols-in-chile" className="nav-link" ><img src="/assets/images/flags/CL.svg" alt="Chile flag" height={15} /> <span>Chile</span></Link>*/}
{/*                        <Link className="nav-link" href="/import-protocols-in-dr-congo"><img src="/assets/images/flags/CD.svg" alt="Congo flag" height={15} /> <span>Dr Congo</span></Link>*/}
{/*                        <Link href="/import-protocols-in-guyana" className="nav-link" ><img src="/assets/images/flags/GY.svg" alt="Guyana flag" height={15} /> <span>Guyana</span></Link>*/}
{/*                        <Link href="/import-protocols-in-jamaica" className="nav-link" ><img src="/assets/images/flags/JM.svg" alt="Jamaica flag" height={15} /> <span>Jamaica</span></Link>*/}
{/*                        <Link href="/import-protocols-in-kenya" className="nav-link" ><img src="/assets/images/flags/KE.svg" alt="Kenya flag" height={15} /> <span>Kenya</span></Link>*/}
{/*                        <Link href="/import-protocols-in-malawi" className="nav-link" ><img src="/assets/images/flags/MW.svg" alt="Malawi flag" height={15} /><span> Malawi</span></Link>*/}
{/*                        <Link href="/import-protocols-in-pakistan" className="nav-link" ><img src="/assets/images/flags/PK.svg" alt="Pakistan flag" height={15} /> <span>Pakistan</span></Link>*/}
{/*                        <Link href="/import-protocols-in-paraguay" className="nav-link" ><img src="/assets/images/flags/PY.svg" alt="Paraguay flag" height={15} /> <span>Paraguay</span></Link>*/}
{/*                        <Link href="/import-protocols-in-russia" className="nav-link" ><img src="/assets/images/flags/RU.svg" alt="Russia flag" height={15} /> <span>Russia</span></Link>*/}
{/*                        <Link href="/import-protocols-in-south-sudan" className="nav-link" ><img src="/assets/images/flags/SS.svg" alt="Sudan flag" height={15} /> <span>South Sudan</span></Link>*/}
{/*                        <Link href="/import-protocols-in-tanzania" className="nav-link" ><img src="/assets/images/flags/TZ.svg" alt="Tanzania flag" height={15} /> <span>Tanzania</span></Link>*/}
{/*                        <Link href="/import-protocols-in-uganda" className="nav-link" ><img src="/assets/images/flags/UG.svg" alt="Uganda flag" height={15} /><span> Uganda</span></Link>*/}
{/*                        <Link href="/import-protocols-in-zambia" className="nav-link" ><img src="/assets/images/flags/ZM.svg" alt="Zambia flag" height={15} /> <span>Zambia</span></Link>*/}
{/*                        <Link href="/import-protocols-in-zimbabwe" className="nav-link" ><img src="/assets/images/flags/ZW.svg" alt="Zimbabwe flag" height={15} /> <span>Zimbabwe</span></Link>*/}
{/*                        <Link href="/import-protocols-in-ghana" className="nav-link" ><img src="/assets/images/flags/gh.svg" alt="Ghana flag" height={15} /> <span>Ghana</span></Link>*/}
{/*                    </div>*/}
{/*                </div>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*    </li>*/}
{/*    <li className="nav-item">*/}
{/*        <Link className="nav-link" style={{padding: '5px 10px'}} href="/how-to-pay">*/}
{/*            How To Pay*/}
{/*        </Link>*/}
{/*    </li>*/}
{/*    <li className="nav-item">*/}
{/*        <Link className="nav-link" style={{padding: '5px 10px'}} href="/faqs">*/}
{/*            FAQs*/}
{/*        </Link>*/}
{/*    </li>*/}
{/*</ul>*/}
{/*</div>*/}
{/*</div>*/}
{/*</div>*/}
{/*    <div className="col-xl-2 col-lg-2 col-md-2" />*/}
{/*</div>*/}
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
                                        <li><Link href="Cars/1/Make">Seach by Make</Link></li>
                                        <li><Link href="Cars/1/Bodytype">Seach by Type</Link></li>
                                        <li><Link href="Cars/10000/Price">Seach by Price</Link></li>
                                        <li><Link href="Cars/@(DateTime.Now.Year-3)/Year">Seach by Year</Link></li>
                                        <li className="last">Seach by Inventory Location</li>
                                        <li className="highlighted"><i className="fa fa-globe" />Local Service</li>
                                        @if (MasterData.Locations != null)
                                        {'{'}
                                        @foreach (var obj in MasterData.Locations.Where(x=&gt;x.IsHotLocation))
                                        {'{'}
                                        <li>
                                            <Link href="/Cars/@obj.CountryId/Country">
                                               <img src="/assets/images/flags/@(obj.Slug).svg" className="flagimg-fluid" alt="@obj.CountryName flag" /> <span>@obj.CountryName </span>
                                            </Link>
                                        </li>
                                        {'}'}
                                        {'}'}
                                        <li className="highlighted"><i className="fa fa-phone" />Contact Us</li>
                                        <li>+49 471 9731 9003</li>
                                        <li>info@universalmotorsltd.com</li>
                                        <li className="last">+49 471 9731 9003</li>
                                        <li className="highlighted"><i className="fa fa-question" />Need Help</li>
                                        <li><Link href="/why-choose-universal-motors">Why Choose UM?</Link></li>
                                        <li><Link href="/how-to-buy">How To Buy</Link></li>
                                        <li><Link href="/how-to-pay">How to Pay?</Link></li>
                                        <li><Link href="/faqs">FAQs</Link></li>
                                        <li className="last"><Link href="/export-information">Exports Information</Link></li>
                                        <li className="highlighted"><i className="fa fa-info" /><Link href="/about-us">About UM</Link></li>
                                        <li><Link href="/company-profile">Company Profile</Link></li>
                                        <li><Link href="/global-offices">Global Offices</Link></li>
                                        <li><Link href="/terms-of-service">Terms Of Services</Link></li>
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/security-export-control">Secutiy Export Control</Link></li>
                                        <li className="last"><Link href="/basic-policy-against">Basic Policy Against Anti-Social Forces</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <Link href="/"><img src="/assets/images/um.svg" alt="logo" className="mobile-logo" width={50}/></Link>
                        </div>
                        <div className="col-7">
                            <div className="featuresection">

                                <Link href="#search"><img src="https://img.icons8.com/ios-glyphs/2x/search.png" alt="" width={25} /></Link>
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