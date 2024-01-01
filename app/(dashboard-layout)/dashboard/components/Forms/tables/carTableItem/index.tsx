import agent from "@/api/agent";
import { SalesOrderDetail } from "@/models/Customer";
import { Machinery } from "@/models/Machinery";
import { StockCars } from "@/models/StockCars";
import { Trucks } from "@/models/Trucks";
import { useUserStore } from "@/store/store";
import PriceFormat from "@/utils/PriceFormat";
import { getFormatedDate } from "@/utils/dateFormat";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Prop = {
    item: StockCars | Trucks | Machinery
}
export default function CarTableItem({ item }: Prop) {
    const [stock, setStock] = useState<SalesOrderDetail>();
    const { user } = useUserStore();
    const url = usePathname()
    useEffect(() => {
        const getData = async () => {
            // 33, 17260
            const Stock = await agent.LoadData.getSalesOrderDetailPerStock(
                user?.customerId,
                item?.stockId
            );
            if (Stock) {
                setStock(Stock.data);
            }
        };
        getData();
    }, []);
    return (
        <div className="mt-3 min-w-[1200px] flex gap-3 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">

            <div className="!min-w-60">
                <img src={item?.imageUrl} className="!w-60 !h-36" alt="" />
                <p className="text-center text-[14px] py-2">Stock ID: {item?.stockCode}</p>
            </div>
            <div className="w-[60%]">
                <p className="font-semibold text-xl">{item.listingTitle}</p>
                <div className="w-full mt-5">
                    <table >
                        <tr >
                            <td className="w-36 font-semibold bg-slate-100 p-1 mr-1">
                                Voyage Number
                            </td>
                            <td className="w-36 bg-slate-50 py-1 px-3"  >
                                {stock?.voyageNumber.replaceAll(" ", '') ? stock?.voyageNumber : <span className="text-red-800 text-[14px]">not Available</span>}
                            </td>
                            <td className="w-36 font-semibold bg-slate-100 p-1" >
                                ETA
                            </td>
                            <td className="w-36 bg-slate-50 p-1" >
                                {!stock?.eta.includes('1900-01-01') ? getFormatedDate(stock?.eta) : <span className="text-red-800 text-[14px]">not Available</span>}
                            </td>
                        </tr>
                        <tr>
                            <td className="w-36 font-semibold bg-slate-100 p-1" >
                                Order Date
                            </td>
                            <td className="w-36 bg-slate-50 p-1" >
                                {getFormatedDate(stock?.createdOn)}
                            </td>
                            <td className="w-36 font-semibold bg-slate-100 p-1" >
                                ETD
                            </td>
                            <td className="w-36 bg-slate-50 p-1" >
                                {!stock?.etd.includes('1900-01-01') ? getFormatedDate(stock?.etd) : <span className="text-red-800 text-[14px]">not Available</span>}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="w-72 ">
                <p className="font-semibold text-xl mb-14">Vehicle Price: <PriceFormat carPrice={item.price} /></p>

                <Link className="w-full !no-underline" href={url.includes('reserve') ? `/dashboard/details/reserve/${item.stockId}` : `/dashboard/details/purchase/${item.stockId}`}>
                    <div className="w-full bg-[#221C63] py-3 rounded-xl">
                        <p className="font-medium text-center text-white dark:text-blue-500 hover:underline">
                            CAP (Tracking)
                        </p>
                    </div>
                </Link>
            </div>

        </div>
    )
}
