// import { Machinery } from "@/models/Machinery";
// import { StockCars } from "@/models/StockCars";
// import { Trucks } from "@/models/Trucks";
// import PriceFormat from "@/utils/PriceFormat";
// import Link from "next/link";

// type Prop = {
//   data: StockCars[] | Trucks[] | Machinery[];
// };
// export default function CarReservedTable({ data }: Prop) {
//   return (
//     <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
//       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             <th scope="col" className="px-6 py-3"></th>
//             <th scope="col" className="px-6 py-3">
//               Stock ID
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Title
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Year
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Price
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Action
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {data?.map((item: StockCars | Trucks | Machinery) => {
//             return (
//               <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                 <th
//                   scope="row"
//                   className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                 >
//                   <div className="!w-20 !h-16">
//                     <img src={item?.imageUrl} className="!w-20 !h-16" alt="" />
//                   </div>
//                 </th>
//                 <td className="px-6 py-4">{item.stockCode}</td>
//                 <td className="px-6 py-4">{item.listingTitle}</td>
//                 <td className="px-6 py-4">{item.year}</td>
//                 <td className="px-6 py-4">
//                   <PriceFormat carPrice={item.price} />
//                 </td>
//                 <td className="px-6 py-4 flex">
//                   <Link href={`/dashboard/details/reserve/${item.stockId}`}>
//                     <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//                       View
//                     </p>
//                   </Link>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }
import { Machinery } from "@/models/Machinery";
import { StockCars } from "@/models/StockCars";
import { Trucks } from "@/models/Trucks";
import PriceFormat from "@/utils/PriceFormat";
import Link from "next/link";

type Prop = {
  data: StockCars[] | Trucks[] | Machinery[];
};
export default function CarReservedTable({ data }: Prop) {
  return (
    <div className="w-[90%] m-auto overflow-x-auto shadow-md sm:rounded-lg">

      {data?.map((item: StockCars | Trucks | Machinery) => {
        return (
          <div className="mt-3 min-w-[1200px] flex gap-3 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">

            <div className="!min-w-60">
              <img src={item?.imageUrl} className="!w-60 !h-36" alt="" />
              <p className="text-center text-[14px] py-2">Ref No. BP0384</p>
            </div>
            <div className="w-[60%]">
              <p className="font-semibold text-xl">{item.listingTitle}</p>
              <div className="w-full mt-5">
                <table >
                  <tr >
                    <td className="w-36 font-semibold bg-slate-100 p-1 mr-1">
                      Invoice No
                    </td>
                    <td className="w-36 bg-slate-50 p-1"  >
                      562662
                    </td>
                    <td className="w-36 font-semibold bg-slate-100 p-1" >
                      Payment
                    </td>
                    <td className="w-36 bg-slate-50 p-1" >
                      17 Nov, 2023
                    </td>
                  </tr>
                  <tr>
                    <td className="w-36 font-semibold bg-slate-100 p-1" >
                      Order Date
                    </td>
                    <td className="w-36 bg-slate-50 p-1" >
                      14 Nov, 2023
                    </td>
                    <td className="w-36 font-semibold bg-slate-100 p-1" >
                      ETD
                    </td>
                    <td className="w-36 bg-slate-50 p-1" >
                      20 Nov, 2023
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="w-72 ">
              <p className="font-semibold text-xl mb-14">Total Price: <PriceFormat carPrice={item.price} /></p>

              <Link className="w-full !no-underline" href={`/dashboard/details/reserve/${item.stockId}`}>
                <div className="w-full bg-[#221C63] py-3 rounded-xl">
                  <p className="font-medium text-center text-white dark:text-blue-500 hover:underline">
                    CAP (Tracking)
                  </p>
                </div>
              </Link>
            </div>

          </div>
        );
      })}
    </div>
  );
}
