"use client";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

interface Props {
  imageURLs: { src: string }[];
  isReserved: Boolean;
}
export default function CarouselStock({ imageURLs, isReserved }: Props) {
  return (
    <div className="relative overflow-hidden">
      <Carousel
        images={imageURLs}
        style={{ height: 500, width: 800 }}
        widgetsHasShadow={true}
        shouldMaximizeOnClick={true}
        playIcon={false}
      />
      {isReserved && (
        <div className="absolute !top-0  m-auto  w-[98%] ">
          <div className="bg-[#221C63] mt-3 relative opacity-75 top-10 w-full h-7 ">
            <p className="text-white text-center">Reserved</p>
          </div>
        </div>
      )}
    </div>
  );
}
