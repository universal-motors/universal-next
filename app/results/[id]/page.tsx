
import CarDetailedSlideshow from "@/components/stock/CarDetailedSlideshow";
import StockSpecification from "@/components/stock/StockSpecification";
import StockKeyInformation from "@/components/stock/StockKeyInformation";
import LikeComponent from "@/components/stock/LikeComponent";
import PriceCalculator from "@/components/stock/PriceCalculator";
import InquiryForm from "@/components/stock/InquiryForm";
import db from "@/utils/db";
import {StockCars} from "@/models/StockCars";
import agent from "@/api/agent";
import {tblMasterCountry} from ".prisma/client";

interface Props {
    params: {
        id:number
    }
}

export default async function CarDetailed({params}:Props){
    const Stock = await agent.LoadData.stock(params.id);
    const Countries = await agent.LoadData.countryList();//db.tblMasterCountry.findMany({where: {IsActive:true}});
    const PortMapping = await agent.LoadData.portmapping();
    const Ports = await agent.LoadData.portsList();
    const InventoryLocation = Countries.find(x=> x.countryId == Stock.locationId)

    if (Stock != null)

    return(
        <>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
                <div className="row">
                    <section className="product-slider-section">
                        <div className="container-fluid">
                            <div id="productslider" className="carousel slide">
                                <div className="row">
                                    <h1 className="mobicar carname">{Stock.listingTitle}</h1>
                                    <div className="col-lg-6 col-md-6 detail-leftsection">
                                        <div className="row">
                                            <div id="wrap" className="container-fluid">
                                                <div className="row">
                                                    <CarDetailedSlideshow stocks={Stock} />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="shipping-details">
                                            <StockSpecification car={Stock} location={InventoryLocation} />
                                            <StockKeyInformation car={Stock}/>
                                        </div>
                                    </div>


                                    <div className="col-lg-6 col-md-6">
                                        <h1 className="pccar carname">{Stock.listingTitle}</h1>
                                        <hr/>
                                        <h4>
                                            {/*<button type="button" className="pull-right" onClick={window.print}>*/}
                                            {/*    <img src="images/svgs/print.svg" className="img-fluid" width="30px"/>*/}
                                            {/*</button>*/}
                                        </h4>
                                        <div className="carfavourite">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-6">
                                                    <div className="stock">
                                                        <h5>Stock ID: <strong>
                                                            <img src={`/assets/images/flags/${InventoryLocation.slug}.svg`}
                                                            height="20px"/> {Stock.stockCode}</strong></h5>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-6">
                                                    <div className="addfav">
                                                        <h5>
                                                            {/*<LikeComponent onClick={()=>console.log("Clicked")}/>*/}
                                                            <span className="fav-text">Add to Favorites</span>

                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-sm-12 col-12">
                                                    <div className="auction">
                                                        <h5>Auction grade: <span>{Stock.auctionGrade}</span></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <PriceCalculator
                                            car={Stock}
                                            countries={Countries}
                                            ports={Ports}
                                            portMapping={PortMapping}
                                        />
                                        <InquiryForm/>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}