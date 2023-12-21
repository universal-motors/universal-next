
import agent from "@/api/agent";
import CarDetailedSlideshow from "@/app/global/results/[pid]/cars/[id]/CarDetailedSlideshow";
import StockKeyInformation from "@/app/global/results/[pid]/cars/[id]/StockKeyInformation";
import StockSpecification from "@/app/global/results/[pid]/cars/[id]/StockSpecification";
import DescriptionUI from "@/components/ui/DescriptionUI";
import Cards from "./cards";


interface Props {
    params: {
        id: number;
    };
}

export default async function ReservedDetail({ params }: Props) {

    const Stock = await agent.LoadData.stock(Number(params?.id));
    const Countries = await agent.LoadData.countryList();
    const InventoryLocation = Countries.data.find(
        (x) => x.countryId == Stock.data.locationId
    );

    if (Stock != null)
        return (
            <>
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 detailedsection ">
                    <div className="row">
                        <section className="product-slider-section">
                            <div className="container-fluid w-full">
                                <div id="productslider" className="carousel slide">
                                    <div className="row">
                                        {/* <h1 className="mobicar carname">
                                            {Stock.data.listingTitle}
                                        </h1> */}
                                        <div className="col-md-6  detail-leftsection">
                                            {/* <h1 className="pccar carname">
                                                {Stock.data.listingTitle}
                                            </h1> */}
                                            <h1 className="text-center font-bold">
                                                {Stock.data.listingTitle}
                                            </h1>
                                            <div className="col-12">
                                                <div className="stock w-56 m-auto">
                                                    <span className="flex items-center gap-x-1 bg-[#f1f5f9] px-2 py-1 font-medium text-[#221C63] border-[1px] border-[#221C63] rounded-xl my-2">
                                                        Stock ID :
                                                        <img
                                                            className="h-6 m-2"
                                                            src={`/assets/images/flags/${InventoryLocation?.slug}.svg`}
                                                            alt={InventoryLocation?.slug}
                                                        />
                                                        {Stock.data.stockCode}
                                                    </span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div id="wrap" className="container-fluid">
                                                    <div className="row">
                                                        <CarDetailedSlideshow
                                                            mainPic={Stock.data.imageUrl}
                                                            stockID={Stock.data.stockId}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="shipping-details">
                                                <StockSpecification
                                                    car={Stock.data}
                                                    location={InventoryLocation}
                                                />
                                                <StockKeyInformation car={Stock.data} />
                                                <DescriptionUI description={Stock.data.description} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 ">


                                            <Cards stockID={Stock.data.makeId} />


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </>
        );
}
