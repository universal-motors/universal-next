import AboutPageSideBar from "@/components/pages/about/AboutPageSideBar";
import Link from "next/link";

export default function SecurityExport (){
    return(
        <>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
                <div className="gceCountry-landing about-globaloffSec">
                    {/* The breadcrumb Begins*/}
                    <div className="breadcrumbs">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/global/about-universal-motors"> About Us </Link></li>
                            <li><Link href="#"> Security
                                Export Control</Link></li>
                        </ul>
                    </div>
                    {/* The breadcrumb Ends*/}
                    <div className="row">
                        <AboutPageSideBar/>
                        <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
                            <h3>Security Export Control</h3>
                            <p>Any applicable national and international laws,
                                norms, and regulations relating to contributing
                                to the maintenance of international peace and
                                security, as well as anti-terrorism, including
                                all applicable export controls, must be followed
                                by Universal Motor. Any transaction against this
                                is hereby prohibited.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}