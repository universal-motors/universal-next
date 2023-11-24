"use client";
import { addFavourite, removeFavourite } from "@/api/agent";
import { useUserStore } from "@/store/store";
import PriceFormat from "@/utils/PriceFormat";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

type Prop = {
  car: any;
  href: string;
  fav?: any;
};
export default function CarCard({ car, href, fav }: Prop) {
  const [isfav, setFav] = useState(false);
  const router = useRouter();
  const isfa = fav?.find((itm: any) => itm.stockID === car.stockId);
  useEffect(() => {
    if (isfa) {
      setFav(true);
    }
  }, [isfa]);
  const { user } = useUserStore();
  return (
    <div className="transition duration-300 ease-in-out hover:scale-105 my-10 flex min-w-[220px] w-[230px] flex-col overflow-hidden border border-gray-100 bg-[#f1f5f9] shadow-md p-0 rounded-md">
      <div className="relative w-full h-48">
        <Image
          alt="img"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0px",
          }}
          width={285}
          height={400}
          src={car.imageUrl}
        />

        <FaHeart
          onClick={() => {
            if (user && user.customerId) {
              if (isfav) {
                removeFavourite({
                  customerId: user.customerId,
                  stockId: car.stockId,
                });
                setFav(!isfav);
                return;
              }
              addFavourite({
                customerId: user.customerId,
                stockId: car.stockId,
              });
              setFav(!isfav);
              return;
            }
            signIn("google");
            console.log("Not Logged In");
          }}
          size={"24px"}
          style={{
            position: "absolute",
            top: "4px",
            right: "4px",
            color: !isfav ? "white" : "#F44336",
            cursor: "pointer",
          }}
        />
      </div>
      <div
        onClick={() => {
          router.push(href);
        }}
        className="w-full flex flex-col px-2 cursor-pointer relative h-44"
      >
        <p className=" font-semibold text-slate-600 mt-2 ">
          {car.listingTitle}
        </p>
        <p className="text-slate-600 text-xs font-semibold mt-3">
          {car.modelCode}
        </p>
        <p className=" absolute bottom-3 text-white bg-[#221C63] border-[1px] border-slate-400 rounded-lg py-1 px-4">
          <span className="font-semibold">Price:</span>{" "}
          <span>
            <PriceFormat carPrice={car.price} />
          </span>
        </p>
      </div>
    </div>
  );
}
