import Link from "next/link";

export default function ExportImportServices (){
    return(
        <>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
                <div className="gceCountry-landing">
                    {/* The breadcrumb Begins*/}
                    <div className="breadcrumbs">
                        <ul>
                            <li><Link href="/"> Home</Link></li>
                            <li><Link href="#">Export &amp; Import Services</Link></li>
                        </ul>
                    </div>
                    <div className="gceInform-Imptxt">
                        {/* <img class="widthhundread" src="newcontentimgs/website-07.png" alt=""> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="gceCountry-Local exp-Information">
                                        <h3>Export Services</h3>
                                        <div style={{display: 'table'}} className="gceInform-Imptxt exservice">
                                            <h4><i className="fa fa-caret-right pr-2" aria-hidden="true" />Germany</h4>
                                            <h4><i className="fa fa-caret-right pr-2" aria-hidden="true" />Thailand</h4>
                                            <h4><i className="fa fa-caret-right pr-2" aria-hidden="true" />UAE</h4>
                                            <h4><i className="fa fa-caret-right pr-2" aria-hidden="true" />USA</h4>
                                            <h4><i className="fa fa-caret-right pr-2" aria-hidden="true" />South Korea</h4>
                                            <h4><i className="fa fa-caret-right pr-2" aria-hidden="true" />UK</h4>
                                            <h4><i className="fa fa-caret-right pr-2" aria-hidden="true" />Japan</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pb-5">
                                    <div className="gceCountry-Local exp-Information">
                                        <h3>Import Services</h3>
                                        <div style={{display: 'table'}} className="gceInform-Imptxt">
                                            <h4><i className="fa fa-caret-right pr-2" aria-hidden="true" />East Africa</h4>
                                            <h4><i className="fa fa-caret-right pr-2" aria-hidden="true" />West Africa</h4>
                                            <h4><i className="fa fa-caret-right pr-2" aria-hidden="true" />Europe</h4>
                                            <h4><i className="fa fa-caret-right pr-2" aria-hidden="true" />Caribbean Island</h4>
                                            <h4><i className="fa fa-caret-right pr-2" aria-hidden="true" />South America</h4>
                                            <h4><i className="fa fa-caret-right pr-2" aria-hidden="true" />Oceania</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}