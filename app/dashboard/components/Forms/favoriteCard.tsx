import { removeFavourite } from "@/api/agent";
import { useUserStore } from "@/store/store";
import PriceFormat from "@/utils/PriceFormat";
import Link from "next/link";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

type Prop = {
  item: any;
  setFetch: any;
  fetch: Boolean;
};

export default function FavoriteCard({ item, setFetch, fetch }: Prop) {
  const { user } = useUserStore();
  const [heart, setHeart] = useState<Boolean>(true);
  return (
    <div className="container w-11/12 lg:w-9/12 mx-auto">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow">
          <div className="w-full relative lg:w-1/3 h-40 dark:border-gray-700 lg:h-64 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100">
            <img
              src={item.imageurl}
              className="absolute w-full h-full"
              alt=""
            />
            <FaHeart
              onClick={async () => {
                await removeFavourite({
                  customerId: user.customerId,
                  stockId: item.stockId,
                });
                setHeart(!heart);
                setFetch(!fetch);
                // if (user && user.customerId) {
                //     if (fav) {
                //         removeFavourite({ customerId: user.customerId, stockId: car.stockId })
                //         setFav(!fav)
                //         return
                //     }
                //     addFavourite({ customerId: user.customerId, stockId: car.stockId })
                //     setFav(!fav)
                //     return
                // }
                // signIn("google")
                // console.log("Not Logged In")
              }}
              size={"24px"}
              style={{
                position: "absolute",
                top: "4px",
                right: "4px",
                color: !heart ? "white" : "#F44336",
                cursor: "pointer",
                // border: !heart ? '1px solid black' : '',
                textShadow: "1px 1px 1px black",
              }}
            />
          </div>
          <div className="w-full relative lg:w-2/3 h-48  lg:h-64 dark:bg-gray-800 gap-3  pl-5 flex flex-col md:flex-row">
            <div className="flex flex-col justify-center h-full w-full lg:w-1/2 mt-2">
              <p className="text-[16px] md:text-[18px] lg:text-[24px] font-semibold">
                {item.listingTitle}
              </p>
              <p className="font-semibold text-[12px] md:text-[14px] lg:text-base ">
                YEAR :{" "}
                <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-l font-medium ">
                  {item.year}
                </span>
              </p>
              <p className="font-semibold text-[12px] md:text-[14px] lg:text-base ">
                STOCK ID :{" "}
                <span className="inline-flex items-center gap-x-1.5 rounded-full bg-[#221c63] px-2 py-1 text-l font-medium text-white">
                  {item.stockCode}
                </span>
              </p>
              <div className="!mt-2 md:!mt-5">
                <span className="bg-[#221c63] text-[12px] lg:text-base  text-white px-3 lg:px-5 py-2 rounded-lg font-semibold ">
                  PRICE :{" "}
                  <span className="ml-2">
                    <PriceFormat carPrice={item.price} />
                  </span>
                </span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
              <Link href={`/global/results/cars/${item.stockID}`}>
                <div className="border-2 border-[#221c63] py-1 px-5 cursor-pointer rounded-lg hover:bg-[#221c63] text-[#221c63]  hover:text-white">
                  <p className="font-bold text-[12px] lg:text-base">View</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
