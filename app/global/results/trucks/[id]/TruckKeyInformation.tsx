
import {StockCars} from "@/models/StockCars";
import agent from "@/api/agent";
import {Trucks} from "@/models/Trucks";



interface Props {
    car : Trucks
}
export default async function TruckKeyInformation({car}:Props){

    const stockOptions = await agent.LoadData.caroptionMappingList(car.stockId);
    const optionsMaster = await agent.LoadData.caroptionsList()//db.tblCarOptions.findMany({where: {isActive:true}});

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
                {/*<tr>*/}
                {/*    <td className="first">Auction Grade</td>*/}
                {/*    {*/}
                {/*        car.auctionGrade !== '' ? ( <td> {car.auctionGrade}</td>) : (<td>Not Available</td>)*/}
                {/*    }*/}
                {/*</tr>*/}
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
                    <td className="first">Vehicle Category</td>
                    <td>{car.vehicleCategory}</td>
                </tr>
                <tr>
                    <td className="first">Body Length</td>
                    <td>{car.lengthOfCar}</td>
                </tr>
                <tr>
                    <td className="first">Dimension</td>
                    <td>{car.M3}</td>
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
                    <td className="first">Axle Type</td>
                    <td>{car.axle}</td>
                </tr>
                <tr>
                    <td className="first">Fuel</td>
                    <td>{car.typeOfFuel}</td>
                </tr>
                <tr>
                    <td className="first">Mileage</td>
                    <td>{car.mileage}</td>
                </tr>
                <tr>
                    <td className="first">Loading Capacity</td>
                    <td>{car.loadingCapacity}</td>
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

                    // stockOptions
                    //     .filter(op => op.stockId === car.stockId)
                    //     .map( op=> (
                    //         <li className="active" key={op.id}>
                    //             <h5>
                    //                 {
                    //                     optionsMaster.find(x=> x.OptionId==op.carOptionsId)?.OptionName
                    //                 }
                    //             </h5>
                    //         </li>
                    //     ))
                    stockOptions?.data
                        .filter(op => op.stockId === car.stockId)
                        .map( op=> (
                            <li className="active" key={op.id}>
                                <h5>
                                    {
                                        <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-sm font-medium  ">
        <svg className="h-1.5 w-1.5 fill-green-400" viewBox="0 0 6 6" aria-hidden="true">
          <circle cx={3} cy={3} r={3} />
        </svg>
                                            {optionsMaster.data?.find(x=> x.optionId==op.carOptionsId)?.optionName}
      </span>
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