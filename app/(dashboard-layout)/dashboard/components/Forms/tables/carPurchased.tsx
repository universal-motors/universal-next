import { Machinery } from "@/models/Machinery";
import { StockCars } from "@/models/StockCars";
import { Trucks } from "@/models/Trucks";
import PriceFormat from "@/utils/PriceFormat";
import Link from "next/link";

type Prop = {
  data: StockCars[] | Trucks[] | Machinery[]
}
export default function CarPurchasedTable({ data }: Prop) {
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
            Total CNF
          </th>

          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item: StockCars | Trucks | Machinery, i: number) => {
          return (
            <tr key={i} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
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
                <PriceFormat carPrice={item.price} />
              </td>
              <td className="px-6 py-4 flex">
                <Link href={`/dashboard/details/purchased/${item.stockId}`}>
                  <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </p>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
