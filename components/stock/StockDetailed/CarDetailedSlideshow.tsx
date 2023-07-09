import {StockCars} from "@/models/StockCars";

import agent from "@/api/agent";
import CarouselStock from "@/components/stock/StockDetailed/CarouselStock";
import ShareDownloadComponent from "@/components/stock/StockDetailed/ShareDownloadComponent";
import {main} from "@popperjs/core";

interface Props {
    stocks : StockCars,
    mainPic: string
}


export default async function CarDetailedSlideshow({stocks, mainPic}: Props){
    const stockPicture = await agent.LoadData.stockSliderList(stocks.stockId);
    const images =stockPicture.map((pic) => ({
        src: pic.imageURL
    }));
    images.unshift({ src: mainPic });

    return(
        <>
            <CarouselStock imageURLs={images}/>
            <ShareDownloadComponent imageList={stockPicture}/>

        </>
    )
}