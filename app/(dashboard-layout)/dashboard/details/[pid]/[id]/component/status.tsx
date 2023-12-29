import { SalesOrderDetail } from "@/models/Customer"

type Prop = {
    stock: SalesOrderDetail | undefined
}
export default function Status({ stock }: Prop) {
    return (
        <div className="row w-[95%] m-auto">
            <div className="w-full py-2  bg-[#221C63] mt-3">
                <p className="text-white font-semibold">STATUS</p>
            </div>
            <div className="row features-table !w-full mt-3">
                <table className="keyinfo !w-full">
                    <thead>
                        <tr>
                            {/* <td className="first !text-[12px] sm:!text-[16px]">Stage</td> */}
                            <td className="first !text-[12px] sm:!text-[16px]">Action Tracker</td>
                            <td className="first !text-[12px] sm:!text-[16px]">Status</td>
                            {/* <td className="first !text-[12px] sm:!text-[16px]">Action</td> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td className=" !text-[12px] sm:!text-[16px]">
                                Documents Dispatched
                            </td>

                            <td className="!text-[12px] sm:!text-[16px]">
                                {stock?.release ? "✔️" : "❌"}
                            </td>
                        </tr>
                        <tr>
                            <td className=" !text-[12px] sm:!text-[16px]">
                                OK to Book
                            </td>
                            <td className="!text-[12px] sm:!text-[16px]">
                                {stock?.shipOk ? "✔️" : "❌"}
                            </td>
                        </tr>
                        <tr>
                            <td className=" !text-[12px] sm:!text-[16px]">
                                Consignee
                            </td>
                            <td className="!text-[12px] sm:!text-[16px]">
                                {stock?.consigneeName ? "✔️" : "❌"}
                            </td>
                        </tr>
                        <tr>
                            <td className=" !text-[12px] sm:!text-[16px]">
                                Notify Party
                            </td>
                            <td className="!text-[12px] sm:!text-[16px]">
                                {stock?.notifyPartyName ? "✔️" : "❌"}
                            </td>
                        </tr>
                        <tr>
                            <td className=" !text-[12px] sm:!text-[16px]">
                                Courier Address Updated
                            </td>
                            <td className="!text-[12px] sm:!text-[16px]">
                                {stock?.courierPersonName ? "✔️" : "❌"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
