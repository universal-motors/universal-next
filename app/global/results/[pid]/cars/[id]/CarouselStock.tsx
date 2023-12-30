"use client";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

interface Props {
  imageURLs: { src: string }[];
  isReserved: Boolean;
}
export default function CarouselStock({ imageURLs, isReserved }: Props) {
  return (
    <>
      {/* <div className="w-full"> */}
      <Carousel
        images={imageURLs}
        style={{ height: 500, width: 800 }}
        widgetsHasShadow={true}
        shouldMaximizeOnClick={true}
        playIcon={false}
      />
      {/* </div> */}

      {isReserved && (
        <div className="relative !bottom-[480px] sm:!bottom-[420px] md:!bottom-[460px] xl:!bottom-[420px] right-28 sm:right-40 md:right-32 xl:right-40  -rotate-45 m-auto  w-full ">
          <div className="bg-[#221C63] mt-3 relative opacity-75 top-10 w-full h-7 ">
            <p className="text-white text-center">Reserved</p>
          </div>
        </div>
      )}
    </>
  );
}
