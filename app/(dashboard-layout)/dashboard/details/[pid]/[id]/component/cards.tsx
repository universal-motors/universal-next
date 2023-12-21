'use client'

import agent from "@/api/agent";
import { SalesOrderDetail } from "@/models/Customer";
import { useUserStore } from "@/store/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
type Prop = {
    stockID: number
}
export default async function Cards({ stockID }: Prop) {
    const [stock, setStock] = useState<SalesOrderDetail>()
    const { pid } = useParams();
    const { user } = useUserStore();
    useEffect(() => {
        const getData = async () => {
            const Stock = await agent.LoadData.getTransactionsHistory(stockID, user?.customerId);
            if (Stock && Stock?.data)
                setStock(Stock?.data)
        }
        getData()
    }, [])
    if (stock)
        return (
            <div>
                <h2 className="!text-[14px] sm:!text-[24px] capitalize text-center font-semibold leading-6 text-gray-900 mb-3">
                    {pid} Information
                </h2>
                <div className="w-full flex flex-wrap items-center justify-center gap-8">
                    <div className="w-[240px] h-[120px] flex flex-col justify-center items-center gap-2 rounded-[20px] bg-slate-50  ">
                        <h5 className="text-[#A3AED0] text-[14px]">Total CNF</h5>
                        <p className="text-[24px] font-bold">${stock?.totalCnf}</p>

                    </div>
                    <div className="w-[240px] h-[120px] flex flex-col justify-center items-center gap-2 rounded-[20px] bg-slate-50 ">
                        <h5 className="text-[#A3AED0] text-[14px]">Allocated Amount</h5>
                        <p className="text-[24px] font-bold">${stock?.allocatedAmount}</p>

                    </div>
                    <div className="w-[240px] h-[120px] flex flex-col justify-center items-center gap-2 rounded-[20px] bg-slate-50 ">
                        <h5 className="text-[#A3AED0] text-[14px]">Balance Amount</h5>
                        <p className="text-[24px] font-bold">${stock?.balanceAmount}</p>

                    </div>
                    {(stock?.shipOk || stock?.shipOkDate) &&
                        <div className="w-[240px] h-[120px] flex flex-col justify-center items-center gap-2 rounded-[20px] bg-slate-50 ">
                            <h5 className="text-[#A3AED0] text-[14px]">Ship Ok Date</h5>
                            <p className="text-[24px] font-bold text-center">{stock?.shipOkDate}</p>

                        </div>
                    }
                    {(stock?.releaseOk || stock?.releaseDate) &&
                        <div className="w-[240px] h-[120px] flex flex-col justify-center items-center gap-2 rounded-[20px] bg-slate-50 ">
                            <h5 className="text-[#A3AED0] text-[14px]">Ship Ok Date</h5>
                            <p className="text-[24px] font-bold text-center">{stock?.releaseDate}</p>

                        </div>
                    }

                    <div className="w-[240px] h-[120px] flex flex-col justify-center items-center gap-2 rounded-[20px] bg-slate-50 ">
                        <h5 className="text-[#A3AED0] text-[14px]">ETA</h5>
                        <p className="text-[24px] font-bold text-center">{stock?.eta}</p>

                    </div>
                    <div className="w-[240px] h-[120px] flex flex-col justify-center items-center gap-2 rounded-[20px] bg-slate-50 ">
                        <h5 className="text-[#A3AED0] text-[14px]">ETA</h5>
                        <p className="text-[24px] font-bold text-center">{stock?.eta}</p>

                    </div>
                    <div className="w-[240px] h-[120px] flex flex-col justify-center items-center gap-2 rounded-[20px] bg-slate-50 ">
                        <h5 className="text-[#A3AED0] text-[14px]">Release Date</h5>
                        <p className="text-[24px] font-bold text-center">{stock?.releaseDate}</p>

                    </div>
                    <div className="w-[240px] h-[120px] flex flex-col justify-center items-center gap-2 rounded-[20px] bg-slate-50 ">
                        <h5 className="text-[#A3AED0] text-[14px]">Ship Name</h5>
                        <p className="text-[24px] font-bold text-center">{stock?.shipName}</p>

                    </div>
                    <div className="w-[240px] h-[120px] flex flex-col justify-center items-center gap-2 rounded-[20px] bg-slate-50 ">
                        <h5 className="text-[#A3AED0] text-[14px]">Invoice No</h5>
                        <p className="text-[24px] font-bold text-center">{stock?.voyageNumber}</p>

                    </div>
                    {/* ------------------------------------------------------------------------- */}
                    <div className="w-full px-6">
                        <div className="border-b border-gray-200 bg-white px-2 py-5 sm:px-6">
                            <h2 className="!text-[14px] sm:!text-[24px] text-center font-semibold leading-6 text-gray-900">
                                Consignee Information
                            </h2>
                            <div className="row features-table !w-full mt-3">
                                <table className="keyinfo !w-full">
                                    <tbody>
                                        <tr>
                                            <td className="first !text-[12px] sm:!text-[16px]">
                                                Consignee Name
                                            </td>
                                            {stock.consigneeName !== "" ? (
                                                <td className="!text-[12px] sm:!text-[16px]">
                                                    {" "}
                                                    {stock.consigneeName}
                                                </td>
                                            ) : (
                                                <td className="!text-[12px] sm:!text-[16px]">Not Available</td>
                                            )}
                                        </tr>
                                        <tr>
                                            <td className="first !text-[12px] sm:!text-[16px]">
                                                Consignee Phone
                                            </td>
                                            <td className="!text-[12px] sm:!text-[16px]">
                                                {stock.consigneePhone}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="first !text-[12px] sm:!text-[16px]">
                                                Courier Address
                                            </td>
                                            <td className="!text-[12px] sm:!text-[16px]">
                                                {stock.courierAddress}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="first !text-[12px] sm:!text-[16px]">
                                                Courier Person Name

                                            </td>
                                            <td className="!text-[12px] sm:!text-[16px]">
                                                {stock.courierPersonName}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="first !text-[12px] sm:!text-[16px]">
                                                Courier Person Phone


                                            </td>
                                            <td className="!text-[12px] sm:!text-[16px]">
                                                {stock.courierPersonPhone}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* --------------------------------------------------------------------------- */}
                    <div className="w-full ">
                        <div className="ml-6">
                            <div className="flex gap-3 items-center">
                                <div className="w-4 h-4 bg-[#221C63]" >
                                </div>
                                <p>Paid {stock?.paidPercent}%</p>
                            </div>
                            <div className="flex gap-3  items-center">
                                <div className="w-4 h-4 bg-[#9ca3af]" >
                                </div>
                                Remaining {stock?.balancePercent}%
                            </div>
                        </div>
                        <div className="w-[300px] mt-2 mx-auto">
                            <PieChart animate
                                data={[
                                    { title: 'Paid', value: stock.paidPercent, color: '#221C63' },
                                    { title: 'unpaid', value: stock.balancePercent, color: '#9ca3af' },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
}
