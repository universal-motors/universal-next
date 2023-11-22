import agent from "@/api/agent";
import { MoneyAllocation } from "@/models/Master/MoneyAllocation";
import { useUserStore } from "@/store/store";
import PriceFormat from "@/utils/PriceFormat";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CarPurchasedTable() {
  const { user } = useUserStore();
  const [data, setData] = useState<MoneyAllocation[]>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await agent.LoadData.purchasedCarsByCustomerID(
        user.customerId
      );
      console.log("--->", data);
    };
    getData();
  }, [fetch]);
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3"></th>
          <th scope="col" className="px-6 py-3">
            Title
          </th>
          <th scope="col" className="px-6 py-3">
            Year
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            ETD
          </th>
          <th scope="col" className="px-6 py-3">
            ETA
          </th>
          <th scope="col" className="px-6 py-3">
            Deposit
          </th>
          <th scope="col" className="px-6 py-3">
            Balance
          </th>

          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item: MoneyAllocation) => {
          return (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="!w-20 !h-16">
                  <img src={item?.imageUrl} className="!w-20 !h-16" alt="" />
                </div>
              </th>
              <td className="px-6 py-4">{item.listingTitle}</td>
              <td className="px-6 py-4">{item.year}</td>
              <td className="px-6 py-4">
                <PriceFormat carPrice={item.totalCost} />
              </td>
              <td className="px-6 py-4 flex">
                <Link href={`/global/results/cars/${item.stockID}`}>
                  <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </p>
                </Link>
                {/* <p className="font-medium text-red-500  hover:underline ml-3 cursor-pointer" onClick={async () => {
                                await removeFavourite({
                                    customerId: user.customerId,
                                    stockId: item.stockId,
                                })
                                setFetch(!fetch);
                            }} >Remove</p> */}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
