import agent from "@/api/agent";
import { ConsigneeCourier, SalesOrderDetail } from "@/models/Customer";
import { useEffect, useState } from "react";

type Prop = {
    stock: SalesOrderDetail | undefined,
}
export default function Documents({ stock }: Prop) {
    const [data, setData] = useState<ConsigneeCourier>();
    const [countries, setCounties] = useState<any>([]);

    useEffect(() => {
        const getData = async () => {
            //13
            const Stock = await agent.LoadData.consigneeCourierByID(
                13
                // stock?.consigneeId
            );
            const Countries = await agent.LoadData.countryList();
            setCounties(Countries.data)
            if (Stock) {
                setData(Stock.data);
            }
        };
        getData();
    }, []);
    const getCountry = (id: any) => {
        return countries.find((itm: any) => itm.countryId === id)?.countryName
    }
    return (
        <div className="row w-[95%] m-auto mt-5">
            <div className="w-full py-2  bg-[#221C63] mt-3">
                <p className="text-white font-semibold">CONSIGNEE / NOTIFY PARTY OF YOUR REQUEST</p>
            </div>
            <div className="row justify-between  !w-full mt-3">
                <table className="keyinfo !w-[50%]">
                    <thead>
                        <tr>
                            <td colSpan={2} className="first !text-[12px] sm:!text-[16px]">Consignee</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="!text-[12px] sm:!text-[16px]">  Name </td>
                            <td className="!text-[12px] sm:!text-[16px]">{data?.consigneeName}</td>
                        </tr>
                        <tr>
                            <td className="!text-[12px] sm:!text-[16px]"> Address</td>
                            <td className="!text-[12px] sm:!text-[16px]">{data?.consigneeAddress}</td>
                        </tr>
                        <tr>
                            <td className="!text-[12px] sm:!text-[16px]"> City</td>
                            <td className="!text-[12px] sm:!text-[16px]">{data?.consigneeCity}</td>
                        </tr>
                        <tr>
                            <td className="!text-[12px] sm:!text-[16px]"> Country</td>
                            <td className="!text-[12px] sm:!text-[16px]">{getCountry(data?.consigneeCountryId)}</td>
                        </tr>
                        <tr>
                            <td className="!text-[12px] sm:!text-[16px]"> Phone</td>
                            <td className="!text-[12px] sm:!text-[16px]">{data?.consigneePhone}</td>
                        </tr>
                        <tr>
                            <td className="!text-[12px] sm:!text-[16px]">Consignee Email</td>
                            <td className="!text-[12px] sm:!text-[16px]">{data?.consigneeEmail}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="keyinfo !w-[45%]">
                    <thead>
                        <tr>
                            <td colSpan={2} className="first !text-[12px] sm:!text-[16px]">Notify Party</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="!text-[12px] sm:!text-[16px]">  Name </td>
                            <td className="!text-[12px] sm:!text-[16px]">{data?.notifyPartyName}</td>
                        </tr>
                        <tr>
                            <td className="!text-[12px] sm:!text-[16px]"> Address</td>
                            <td className="!text-[12px] sm:!text-[16px]">{data?.notifyPartyAddress}</td>
                        </tr>
                        <tr>
                            <td className="!text-[12px] sm:!text-[16px]"> City</td>
                            <td className="!text-[12px] sm:!text-[16px]">{data?.notifyPartyCity}</td>
                        </tr>
                        <tr>
                            <td className="!text-[12px] sm:!text-[16px]"> Country</td>
                            <td className="!text-[12px] sm:!text-[16px]">{getCountry(data?.notifyPartyCountryId)}</td>
                        </tr>
                        <tr>
                            <td className="!text-[12px] sm:!text-[16px]"> Phone</td>
                            <td className="!text-[12px] sm:!text-[16px]">{data?.notifyPartyPhone}</td>
                        </tr>
                        <tr>
                            <td className="!text-[12px] sm:!text-[16px]"> Email</td>
                            <td className="!text-[12px] sm:!text-[16px]">{data?.notifyPartyEmail}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
