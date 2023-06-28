import {tblCars} from ".prisma/client";
import {StockCars} from "@/models/StockCars";
import agent from "@/api/agent";

interface Props {
    stocks : StockCars
}


export default async function CarDetailedSlideshow({stocks}: Props){
    const stockPicture = await agent.LoadData.stockSliderList(stocks.stockId);
    console.log(stocks)
    return(
        <>
        <div className="col-12">
            {/* Carousel */}
            <div id="carousel" className="carousel slide gallery" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active zoom-image" data-slide-number={0} data-toggle="lightbox" data-gallery="gallery" data-remote={stocks.imageUrl}>
                        <img src={stocks.imageUrl} className="d-block w-100" alt="..." />
                    </div>

                    {Array.from({ length: stockPicture.length - 1 }, (_, i) => i + 1).map((i) => (
                        <div key={i} className="carousel-item zoom-image" data-slide-number={i} data-toggle="lightbox" data-gallery="gallery" data-remote={stockPicture[i - 1].imageURL}>
                            <img src={stockPicture[i - 1].imageURL} className="d-block w-100" alt="..." />
                        </div>
                    ))}

                </div>
                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
                <a className="carousel-fullscreen" href="#carousel" role="button">
                    <span className="carousel-fullscreen-icon" aria-hidden="true" />
                    <span className="sr-only">Fullscreen</span>
                </a>
                <a className="carousel-pause pause" href="#carousel" role="button">
                    <span className="carousel-pause-icon" aria-hidden="true" />
                    <span className="sr-only">Pause</span>
                </a>
            </div>
            {/* Carousel Navigatiom */}
            <div id="carousel-thumbs">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-slide-number={0}>
                        <div className="row mx-0">
                            <div id="carousel-selector-0" className="thumb col px-1 py-2 selected" data-target="#carousel" data-slide-to={0}>
                                <img src={stocks.imageUrl} className="img-fluid" alt="..." />
                            </div>

                            {Array.from({ length: stockPicture.length - 1 }, (_, i) => i + 1).map((i) => (
                                <div key={i} className="carousel-item zoom-image" data-slide-number={i} data-toggle="lightbox" data-gallery="gallery" data-remote={stockPicture[i - 1].imageURL}>
                                    <img src={stockPicture[i - 1].imageURL} className="d-block w-100" alt="..." />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    <div className="dshare">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="download-soialmedia">
                <ul>
                    <p>Share:</p>
                    <a href="https://www.facebook.com/Universal-Motors-LTD-101574801831062"><i className="fa fa-facebook" style={{fontSize: '24px'}} /></a>
                    <a href="https://wa.link/5g81p6"><i className="fa fa-whatsapp" style={{fontSize: '24px'}} /></a>
                    <a href="#"><i className="fa fa-twitter" style={{fontSize: '24px'}} /></a>
                </ul>
            </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-md-block">
            <div className="download-proimg">
                <a><i className="fa fa-download" style={{fontSize: '24px'}} /> Download Images </a>
            </div>
        </div>
    </div>
        </>
    )
}