import CarDetailedSlideshow from "@/components/stock/StockDetailed/CarDetailedSlideshow";
import StockSpecification from "@/components/stock/StockDetailed/StockSpecification";
import StockKeyInformation from "@/components/stock/StockDetailed/StockKeyInformation";
import LikeComponent from "@/components/stock/LikeComponent";
import PriceCalculator from "@/components/stock/StockDetailed/PriceCalculator";
import InquiryForm from "@/components/stock/StockDetailed/InquiryForm";
import agent from "@/api/agent";

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
                                                    <CarDetailedSlideshow mainPic={Stock.imageUrl} stocks={Stock} />
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
                                        <div className="col-md-4 col-sm-4 col-4">
                                            <div className="stock">
                                               <span className="flex items-center gap-x-1 bg-red-100 px-2 py-1 font-medium text-red-700">
                                                        Stock ID :
                                                        <img className='h-6 m-2' src={`/assets/images/flags/${InventoryLocation?.slug}.svg`} alt={InventoryLocation?.slug} />
                                                        {Stock.stockCode}
                                                </span>

                                            </div>
                                        </div>

                                        <hr/>

                                        <h4>
                                            {/*<button type="button" className="pull-right" onClick={window.print}>*/}
                                            {/*    <img src="images/svgs/print.svg" className="img-fluid" width="30px"/>*/}
                                            {/*</button>*/}
                                        </h4>
                                        {/*<div className="carfavourite">*/}
                                        {/*    <div className="row">*/}
                                        {/*        <div className="col-md-6 col-sm-6 col-6">*/}
                                        {/*            /!*<span className="fav-text">Add to Favorites</span>*!/*/}
                                        {/*        /!*    <div className="stock">*!/*/}
                                        {/*        /!*        <h5 >*!/*/}
                                        {/*        /!*             <span className="inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700">*!/*/}
                                        {/*        /!*               <strong> Stock ID: <img className='h-6 m-2' src={`/assets/images/flags/${InventoryLocation.slug}.svg`}/>  {Stock.stockCode}</strong>*!/*/}
                                        {/*        /!*              </span>*!/*/}
                                        {/*        /!*        </h5>*!/*/}
                                        {/*        /!*    </div>*!/*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col-md-6 col-sm-6 col-6">*/}
                                        {/*            <div className="addfav">*/}
                                        {/*                <h5>*/}
                                        {/*                    /!*<LikeComponent onClick={()=>console.log("Clicked")}/>*!/*/}
                                        {/*                     <span className="fav-text">Add to Favorites<LikeComponent /></span>*/}

                                        {/*                </h5>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col-md-12 col-sm-12 col-12">*/}
                                        {/*        /!*    <div className="auction">*!/*/}
                                        {/*        /!*        <h5 >*!/*/}
                                        {/*        /!*             <span className="inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700">*!/*/}
                                        {/*        /!*               <strong> Auction grade: {Stock.auctionGrade}</strong>*!/*/}
                                        {/*        /!*              </span>*!/*/}
                                        {/*        /!*        </h5>*!/*/}
                                        {/*        /!*    </div>*!/*/}
                                        {/*        /!*    <span className="fav-text">Add to Favorites</span>*!/*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
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