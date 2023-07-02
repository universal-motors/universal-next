import {StockCars} from "@/models/StockCars";

import agent from "@/api/agent";
import CarouselStock from "@/components/stock/StockDetailed/CarouselStock";
import ShareDownloadComponent from "@/components/stock/StockDetailed/ShareDownloadComponent";

interface Props {
    stocks : StockCars
}


export default async function CarDetailedSlideshow({stocks}: Props){
    const stockPicture = await agent.LoadData.stockSliderList(stocks.stockId);
    const images =stockPicture.map((pic) => ({
        src: pic.imageURL
    }));


    return(
        <>
            <CarouselStock imageURLs={images}/>
            <ShareDownloadComponent imageList={stockPicture}/>

        </>
    )
}