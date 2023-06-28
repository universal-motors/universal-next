import {tblCars} from ".prisma/client";
import {StockCars} from "@/models/StockCars";
import agent from "@/api/agent";
import Link from "next/link";
import db from "@/utils/db";

interface Props {
    car : StockCars
}
export default async function StockKeyInformation({car}:Props){

    const stockOptions = await agent.LoadData.caroptionMappingList(car.stockId);
    const optionsMaster = await db.tblCarOptions.findMany({where: {isActive:true}});

    return(
        <>
        <div>
            <h2>Key Information</h2>
        </div>

        <div className="row features-table">
            <table className="keyinfo">
                <tbody>
                <tr>
                    <td className="first">Model Code</td>
                    {
                        car.modelCode !== '' ? ( <td> {car.modelCode}</td>) : (<td>Not Available</td>)
                    }
                </tr>
                <tr>
                    <td className="first">Auction Grade</td>
                    {
                        car.auctionGrade !== '' ? ( <td> {car.auctionGrade}</td>) : (<td>Not Available</td>)
                    }
                </tr>
                <tr>
                    <td className="first">Engine Size</td>
                    <td>{car.engineSize}</td>
                </tr>
                <tr>
                    <td className="first">Engine Number</td>
                    {
                        car.engineNumber !== '' ? ( <td> {car.engineNumber}</td>) : (<td>Not Available</td>)
                    }
                </tr>
                <tr>
                    <td className="first">Body Type</td>
                    <td>{car.typeOfBody}</td>
                </tr>
                <tr>
                    <td className="first">Body Length</td>
                    <td>{car.lengthOfCar}</td>
                </tr>
                <tr>
                    <td className="first">Dimension</td>
                    <td>{car.m3}</td>
                </tr>
                </tbody>
            </table>
            <table className="keyinfo">
                <tbody>
                <tr>
                    <td className="first">Chasis Number</td>
                    {
                        car.chasisNumber !== '' ? ( <td> {car.chasisNumber}</td>) : (<td>Not Available</td>)
                    }
                </tr>
                <tr>
                    <td className="first">Steering Type</td>
                    <td>{car.typeOfSteering}</td>
                </tr>
                <tr>
                    <td className="first">Fuel</td>
                    <td>{car.typeOfFuel}</td>
                </tr>
                <tr>
                    <td className="first">Number of Doors</td>
                    <td>{car.noOfDoors}</td>
                </tr>
                <tr>
                    <td className="first">Number of Seats</td>
                    <td>{car.noOfSeats}</td>
                </tr>
                <tr>
                    <td className="first">Colour</td>
                    <td>{car.colorName}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="features">
            <h2>Features</h2>
            <ul className="featureitem">
                {

                    stockOptions
                        .filter(op => op.stockId === car.stockId)
                        .map( op=> (
                            <li className="active" key={op.id}>
                                <h5>
                                    {
                                        optionsMaster.find(x=> x.OptionId==op.carOptionsId)?.OptionName
                                    }
                                </h5>
                            </li>
                        ))


                }


            </ul>
        </div>

        </>
    )
}