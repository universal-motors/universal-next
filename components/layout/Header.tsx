
function Header() {

   return (
        <>
         <header className="headerbg">
                <div className="container-fluid">
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <div className="row">
                        <div className="firstsection col-lg-4 col-md-6 col-12 text-center">
                            <div className="new">
                                <p><img src="/assets/images/flags/uae_flag.jpg" height="15px" /> <img src="/assets/images/Clock.svg" height="20px" /> : <span id="uae-time" /></p>
                            </div>
                        </div>
                        <div className="secondsection col-lg-4 col-md-6 col-12 text-center">
                            <p><img src="/assets/images/flags/JP.svg" height="15px" /> <img src="/assets/images/Clock.svg" height="20px" /> : <span id="japan-time" /></p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12 text-center">
                            <div className="currencydropdown">
                                <button className="currencydropbtn">$ Select Your Currency</button>
                                <div className="currencydropdown-content currencdd">
                                    <a href="#"><b>$</b><span>&nbsp;</span>USD</a>
                                    <a href="#"><b>¥</b><span>&nbsp;</span>JPY</a>
                                    <a href="#"><b>د.إ</b><span>&nbsp;</span>AED</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="currencydropdown countrydrop">
                                <button className="currencydropbtn" style={{width: 'inherit'}}>
                                    <i className="fa fa-globe" style={{position: 'relative', left: '-10px', fontSize: '20px'}} />Select Your Country
                                </button>
                                <div className="currencydropdown-content">
                                    <ul className="countdrop">
                                    {
                                        // masterDataStore.locations
                                        //     .filter(location=> location.isHotLocation)
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
                        </div>
                    </div>
                </div>
            </header>
            <section className="menuhead sticky-header" id="sheader">
                <div className="container-fluid">
                    <div className="row" style={{justifyContent: 'end'}}>
                        <div className="col-xl-1 col-lg-2 col-md-2">
                            <a href="/"><img src="/assets/images/um.svg" alt="logo" className="header-logo" /></a>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5">
                           Search Bar

                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12" style={{paddingRight: '0 !important', paddingLeft: 0}}>
                                    <div className="support">
                                        <i className="fa fa-headphones" />
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
                                                            <a className="p-0" href="mailto:info@universalmotorsltd.com" style={{color: 'blue', fontSize: '12px'}}>info@universalmotorsltd.com</a>
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
                                                            <a className="p-0 m-0" href="https://wa.link/5g81p6" style={{color: 'blue', fontSize: '12px'}}>+49 471 9731 9003</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12">
                                    <div className="support">
                                        <i className="fa fa-heart" />
                                        <div className="currencydropdown">
                                            <button className="currencydropbtn supportbtn">
                                                Check<br />Favourites
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="registerbox">
                                        <i className="fa fa-user" />
                                        <div className="currencydropdown">
                                            <button className="currencydropbtn supportbtn">
                                                Hello, Sign in<br />My Account
                                            </button>
                                            <div className="currencydropdown-content regiscontent">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <p className="m-0" style={{fontSize: '14px'}}><strong>My Account</strong></p>
                                                        <button className="regisbtn" style={{fontSize: '14px'}}>SIGN IN</button>
                                                        <div className="regisfooter">
                                                            <p style={{fontSize: '14px'}} className="m-0">New Customer?</p>
                                                            <p>
                                                                <a className="p-0 m-0" href="#" style={{color: 'blue', fontSize: '14px'}}>
                                                                    <span>&nbsp;</span>Sign
                                                                    Up
                                                                </a>
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
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-2" />
                        <div className="col-xl-8 col-lg-12 col-md-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <div className="menudropdown currencydropdown">
                                                <button className=" currencydropbtn supportbtn dropdown-toggle">
                                                    Search From Stock
                                                </button>
                                                <div className="currencydropdown-content menucontent">
                                                    <div className="row bg-white">
                                                        <div className="col-sm">
                                                            <p><strong>Seach By Make</strong></p>
                                                            <ul className="countdrop">
                                                                {
                                                                    // masterDataStore.makes
                                                                    //     .slice(0, 15) // Get the first 10 records
                                                                    //     .map(make=> (
                                                                    //         <li key={make.makeId}>
                                                                    //             <a href="/Cars/?id=@(obj.CountryId)&type=Country">
                                                                    //                 <img
                                                                    //                     src={make.imageURL}
                                                                    //                     className="flagimg-fluid"
                                                                    //                     alt={make.slug}
                                                                    //
                                                                    //                 />
                                                                    //                 <span> {make.makeName}</span>
                                                                    //             </a>
                                                                    //         </li>
                                                                    //     ))
                                                                }
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm">
                                                            <p><strong>Seach By Type</strong></p>
                                                            <ul className="countdrop">
                                                                {
                                                                    // masterDataStore.bodyTypes.map(bodytype=> (
                                                                    //     <li key={bodytype.bodyTypeId}>
                                                                    //         <a href="/Cars/?id=@(obj.CountryId)&type=Country">
                                                                    //             <span>{bodytype.typeOfBody}</span>
                                                                    //         </a>
                                                                    //     </li>
                                                                    // ))
                                                                }
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm">
                                                            <p><strong>Seach By Price</strong></p>
                {/*                                            <ul className="countdrop">*/}
                {/*              /!*                                  <li>*!/*/}
                {/*              /!*                                      <a className="nav-link" href="@nav.ToAbsoluteUri($" cars 5000 price")" match="NavLinkMatch.All">*!/*/}
                {/*              /!*                                      <span>*!/*/}
                {/*              /!*  <span className="lower-price-boundary" data-min={0}>Under</span> <span className="upper-price-boundary" data-max={50000}>$5000</span>*!/*/}
                {/*              /!*</span>*!/*/}
                {/*              /!*                                  </a>*!/*/}
                {/*                        </li>*/}
                {/*                        <li>*/}
                {/*                            <a className="nav-link" href="@nav.ToAbsoluteUri($" cars 10000 price")" match="NavLinkMatch.All">*/}
                {/*                            <span>*/}
                {/*                <span className="lower-price-boundary" data-min={50000}>$5000</span> <span className="upper-price-boundary" data-max={100000}> - $10,000</span>*/}
                {/*              </span>*/}
                {/*                        </a>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <a className="nav-link" href="@nav.ToAbsoluteUri($" cars 15000 price")" match="NavLinkMatch.All">*/}
                {/*                        <span>*/}
                {/*                <span className="lower-price-boundary" data-min={100000}>$10,000</span> <span className="upper-price-boundary" data-max={150000}> - $15,000</span>*/}
                {/*              </span>*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <a className="nav-link" href="@nav.ToAbsoluteUri($" cars 25000 price")" match="NavLinkMatch.All">*/}
                {/*                    <span>*/}
                {/*                <span className="lower-price-boundary" data-min={200000}>$20,000</span> <span className="upper-price-boundary" data-max={250000}> - $25,000</span>*/}
                {/*              </span>*/}
                {/*                </a>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <a className="nav-link" href="@nav.ToAbsoluteUri($" cars 4000 price")" match="NavLinkMatch.All">*/}
                {/*                <span>*/}
                {/*                <span className="lower-price-boundary" data-min={250000}>$25,000</span> <span className="upper-price-boundary" data-max={400000}> - $40,000</span>*/}
                {/*              </span>*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a className="nav-link" href="@nav.ToAbsoluteUri($" cars 4000 price")" match="NavLinkMatch.All" onclick="showSpinner()">*/}
                {/*            <span>*/}
                {/*                <span className="lower-price-boundary" data-min={250000}>$25,000</span>*/}
                {/*                <span className="upper-price-boundary" data-max={400000}> - $40,000</span>*/}
                {/*              </span>*/}
                {/*            <div className="spinner-border text-primary ml-2" role="status" style={{visibility: 'hidden'}}>*/}
                {/*                <span className="sr-only">Loading...</span>*/}
                {/*            </div>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a className="nav-link" href="@nav.ToAbsoluteUri($" cars>4000/Price")" Match="NavLinkMatch.All"&gt;*/}
                {/*            <span>*/}
                {/*                <span className="lower-price-boundary" data-min={400000}>$40,000</span> <span className="upper-price-boundary" data-max={0}>Over</span>*/}
                {/*              </span>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
            <div className="col-sm">
                <p><strong>Seach By Year</strong></p>
                {/*<ul className="countdrop">*/}
                {/*    <li>*/}
                {/*        <a href="@nav.ToAbsoluteUri($" cars {datetime.now.year-16} year")">  <span> @((DateTime.Now.Year - 16) + "-" + (DateTime.Now.Year - 12)) </span></a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a href="@nav.ToAbsoluteUri($" cars {datetime.now.year-12} year")">  <span> @((DateTime.Now.Year - 12) + "-" + (DateTime.Now.Year - 8)) </span></a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a href="@nav.ToAbsoluteUri($" cars {datetime.now.year-8} year")">  <span> @((DateTime.Now.Year - 8) + "-" + (DateTime.Now.Year - 4)) </span></a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a href="@nav.ToAbsoluteUri($" cars {datetime.now.year-4} year")">  <span> @((DateTime.Now.Year -4) + "-" + (DateTime.Now.Year)) </span></a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a href="@nav.ToAbsoluteUri($" cars {datetime.now.year} year")">   <span> @DateTime.Now.Year </span></a>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
            <div className="col-sm">
                <p><strong>Seach By Location</strong></p>
                <ul className="countdrop">
                    <a href="#">
                        <img src="/assets/images/flags/BS.svg" className="flagimg-fluid" alt="Bahamas flag" /> <span>Bahamas</span>
                    </a>
                    <a href="#">
                        <img src="/assets/images/flags/CL.svg" className="flagimg-fluid" alt="Chile flag" /> <span>Chile</span>
                    </a>
                    <a href="#">
                        <img src="/assets/images/flags/GY.svg" className="flagimg-fluid" alt="Guyana flag" /> <span>Guyana</span>
                    </a>
                    <a href="#">
                        <img src="/assets/images/flags/JM.svg" className="flagimg-fluid" alt="Jamaica flag" /> <span>Jamaica</span>
                    </a>
                    <a href="#">
                        <img src="/assets/images/flags/KE.svg" className="flagimg-fluid" alt="Kenya flag" /> <span>Kenya</span>
                    </a>
                    <a href="#">
                        <img src="/assets/images/flags/MW.svg" className="flagimg-fluid" alt="Malawi flag" /> <span>Malawi</span>
                    </a>
                </ul>
            </div>
        </div>
</div>
</div>
</li>
    <li className="nav-item dropdown">
        <div className="menudropdown currencydropdown">
            <button className=" currencydropbtn supportbtn dropdown-toggle">
                Need Help
            </button>
            <div className="currencydropdown-content menucontent ">
                <div className="row bg-white needhelp">
                    <div className="col-lg-12 col-md-12 col-12">
                        <ul className="countdrop needhelpmenu p-0">
                            <a href="/why-choose-universal-motors" className="mt-0"><span>Why Choose Universal Motor?</span></a>
                            <a href="/how-to-buy"> <span>How to Buy</span></a>
                            <a href="/bank-information"><span>Bank Information</span></a>
                            <a href="/export-information"> <span>Export Information</span></a>
                            <a href="/vehicle-sshipment-condition"> <span>Condition of Shipment</span></a>
                            <a href="/export-import-services"> <span>Export &amp; Import Services</span></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li className="nav-item dropdown">
        <div className="menudropdown currencydropdown">
            <button className=" currencydropbtn supportbtn dropdown-toggle">
                About Universal Motors
            </button>
            <div className="currencydropdown-content menucontent ">
                <div className="row bg-white needhelp">
                    <div className="col-lg-12 col-md-12 col-12">
                        <ul className="countdrop needhelpmenu p-0">
                            <a href="/about-us" className="mt-0"> <span>About Us</span></a>
                            <a href="/sustainability-fundamental-policy"> <span>Sustainability Fundamental Policy</span></a>
                            <a href="/company-profile"><span>Company Profile</span></a>
                            <a href="/global-offices"> <span>Global Offices</span></a>
                            <a href="/terms-of-service"> <span>Terms of Services</span></a>
                            <a href="/privacy-policy"> <span>Privacy Policy</span></a>
                            <a href="/security-export-control"> <span>Security Export Control</span></a>
                            <a href="/basic-policy-against"> <span>Basic Policy Against Anti-Social Forces</span></a>
                            <a href="/disclaimer-policy"> <span>Disclaimer Policy</span></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li className="nav-item dropdown">
        <div className="menudropdown currencydropdown">
            <button className=" currencydropbtn supportbtn dropdown-toggle">
                Import Protocols
            </button>
            <div className="currencydropdown-content menucontent ">
                <div className="row bg-white needhelp">
                    <div className="col-lg-12 col-md-12 col-12">
                        <a className="nav-link mt-0" href="/import-protocols-in-bahamas">
                            <img src="/assets/images/flags/BS.svg" alt="Bahamas flag" height="15px" />
                            <span>Bahamas</span>
                        </a>
                        <a href="/import-protocols-in-chile" className="nav-link" > <img src="/assets/images/flags/CL.svg" alt="Chile flag" height="15px" /> <span>Chile</span></a>
                        <a className="nav-link" href="/import-protocols-in-dr-congo"><img src="/assets/images/flags/CD.svg" alt="Congo flag" height="15px" /> <span>Dr Congo</span></a>
                        <a href="/import-protocols-in-guyana" className="nav-link" ><img src="/assets/images/flags/GY.svg" alt="Guyana flag" height="15px" /> <span>Guyana</span></a>
                        <a href="/import-protocols-in-jamaica" className="nav-link" > <img src="/assets/images/flags/JM.svg" alt="Jamaica flag" height="15px" /> <span>Jamaica</span></a>
                        <a href="/import-protocols-in-kenya" className="nav-link" > <img src="/assets/images/flags/KE.svg" alt="Kenya flag" height="15px" /> <span>Kenya</span></a>
                        <a href="/import-protocols-in-malawi" className="nav-link" ><img src="/assets/images/flags/MW.svg" alt="Malawi flag" height="15px" /><span> Malawi</span></a>
                        <a href="/import-protocols-in-pakistan" className="nav-link" ><img src="/assets/images/flags/PK.svg" alt="Pakistan flag" height="15px" /> <span>Pakistan</span></a>
                        <a href="/import-protocols-in-paraguay" className="nav-link" > <img src="/assets/images/flags/PY.svg" alt="Paraguay flag" height="15px" /> <span>Paraguay</span></a>
                        <a href="/import-protocols-in-russia" className="nav-link" ><img src="/assets/images/flags/RU.svg" alt="Russia flag" height="15px" /> <span>Russia</span></a>
                        <a href="/import-protocols-in-south-sudan" className="nav-link" ><img src="/assets/images/flags/SS.svg" alt="Sudan flag" height="15px" /> <span>South Sudan</span></a>
                        <a href="/import-protocols-in-tanzania" className="nav-link" > <img src="/assets/images/flags/TZ.svg" alt="Tanzania flag" height="15px" /> <span>Tanzania</span></a>
                        <a href="/import-protocols-in-uganda" className="nav-link" > <img src="/assets/images/flags/UG.svg" alt="Uganda flag" height="15px" /><span> Uganda</span></a>
                        <a href="/import-protocols-in-zambia" className="nav-link" > <img src="/assets/images/flags/ZM.svg" alt="Zambia flag" height="15px" /> <span>Zambia</span></a>
                        <a href="/import-protocols-in-zimbabwe" className="nav-link" > <img src="/assets/images/flags/ZW.svg" alt="Zimbabwe flag" height="15px" /> <span>Zimbabwe</span></a>
                        <a href="/import-protocols-in-ghana" className="nav-link" > <img src="/assets/images/flags/gh.svg" alt="Ghana flag" height="15px" /> <span>Ghana</span></a>
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li className="nav-item">
        <a className="nav-link" style={{padding: '5px 10px'}} href="/how-to-pay">
            How To Pay
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link" style={{padding: '5px 10px'}} href="/faqs">
            FAQs
        </a>
    </li>
</ul>
</div>
</nav>
</div>
    <div className="col-xl-2 col-lg-2 col-md-2" />
</div>
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
                                    <a href="/"><img src="/assets/images/um.svg" className="side-logo" alt="hamburger icon" /></a>
                                    <ul className="sidelist">
                                        <li className="highlighted"><i className="fa fa-gear" />Site Setting</li>
                                        <li className="last">Currency</li>
                                        <li className="highlighted"><i className="fa fa-search" />Search</li>
                                        <li><a href="Cars/1/Make">Seach by Make</a></li>
                                        <li><a href="Cars/1/Bodytype">Seach by Type</a></li>
                                        <li><a href="Cars/10000/Price">Seach by Price</a></li>
                                        <li><a href="Cars/@(DateTime.Now.Year-3)/Year">Seach by Year</a></li>
                                        <li className="last">Seach by Inventory Location</li>
                                        <li className="highlighted"><i className="fa fa-globe" />Local Service</li>
                                        @if (MasterData.Locations != null)
                                        {'{'}
                                        @foreach (var obj in MasterData.Locations.Where(x=&gt;x.IsHotLocation))
                                        {'{'}
                                        <li>
                                            <a href="/Cars/@obj.CountryId/Country">
                                                <img src="/assets/images/flags/@(obj.Slug).svg" className="flagimg-fluid" alt="@obj.CountryName flag" /> <span>@obj.CountryName </span>
                                            </a>
                                        </li>
                                        {'}'}
                                        {'}'}
                                        <li className="highlighted"><i className="fa fa-phone" />Contact Us</li>
                                        <li>+49 471 9731 9003</li>
                                        <li>info@universalmotorsltd.com</li>
                                        <li className="last">+49 471 9731 9003</li>
                                        <li className="highlighted"><i className="fa fa-question" />Need Help</li>
                                        <li><a href="/why-choose-universal-motors">Why Choose UM?</a></li>
                                        <li><a href="/how-to-buy">How To Buy</a></li>
                                        <li><a href="/how-to-pay">How to Pay?</a></li>
                                        <li><a href="/faqs">FAQs</a></li>
                                        <li className="last"><a href="/export-information">Exports Information</a></li>
                                        <li className="highlighted"><i className="fa fa-info" /><a href="/about-us">About UM</a></li>
                                        <li><a href="/company-profile">Company Profile</a></li>
                                        <li><a href="/global-offices">Global Offices</a></li>
                                        <li><a href="/terms-of-service">Terms Of Services</a></li>
                                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                                        <li><a href="/security-export-control">Secutiy Export Control</a></li>
                                        <li className="last"><a href="/basic-policy-against">Basic Policy Against Anti-Social Forces</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <a href="/"><img src="/assets/images/um.svg" alt="logo" className="mobile-logo" width="50px" /></a>
                        </div>
                        <div className="col-7">
                            <div className="featuresection">
                                {/* <a href="#search"><i class="fa fa-search"></i></a> */}
                                <a href="#search"><img src="https://img.icons8.com/ios-glyphs/2x/search.png" alt="" width="25px" /></a>
                                <a href="#support">
                                    <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/2x/external-headphone-music-icongeek26-outline-icongeek26.png" alt="" width="25px" />
                                </a>
                                <a href="#customer"><img src="https://img.icons8.com/ios/2x/hearts.png" alt="" width="25px" /></a>
                                <a href="#">
                                    <img src="https://img.icons8.com/fluency-systems-regular/2x/user.png" alt="" width="25px" />
                                </a>
                                {/* <a href="#support"><i class="fa fa-headphones"></i></a>
                    <a href="#"><i class="fa fa-heart-o"></i></a>
                    <a href="#customer"><i class="fa fa-user-o"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Header