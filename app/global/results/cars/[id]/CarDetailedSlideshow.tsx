import {StockCars} from "@/models/StockCars";

import agent from "@/api/agent";
import CarouselStock from "@/app/global/results/cars/[id]/CarouselStock";
import ShareDownloadComponent from "@/app/global/results/cars/[id]/ShareDownloadComponent";
import {main} from "@popperjs/core";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import Error from "@/app/(home)/error";

interface Props {
    stockID : number,
    mainPic: string
}


export default async function CarDetailedSlideshow({stockID, mainPic}: Props){
    const stockPicture = await agent.LoadData.stockSliderList(stockID);
    const images =stockPicture.data.map((pic) => ({
        src: pic.imageURL
    }));
    images.unshift({ src: mainPic });

    return(
        <>

            <CarouselStock imageURLs={images}/>
            <ShareDownloadComponent imageList={stockPicture.data}/>

        </>
    )
}