"use client";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

interface Props {
  imageURLs: { src: string }[];
}
export default function CarouselStock({ imageURLs }: Props) {
  return (
    <>
      <Carousel
        images={imageURLs}
        style={{ height: 500, width: 800 }}
        widgetsHasShadow={true}
        shouldMaximizeOnClick={true}
        playIcon={false}
      />
    </>
  );
}
