import { StockCars } from "@/models/StockCars";
import agent from "@/api/agent";
import { Trucks } from "@/models/Trucks";
import NumberFormat from "@/lib/utils";

interface Props {
  car: Trucks;
}
export default async function TruckKeyInformation({ car }: Props) {
  const stockOptions = await agent.LoadData.caroptionMappingList(car.stockId);
  const optionsMaster = await agent.LoadData.caroptionsList(); //db.tblCarOptions.findMany({where: {isActive:true}});

  return (
    <>
      <div>
        <h2>Key Information</h2>
      </div>

      <div className="row features-table ">
        <table className="keyinfo shadow-md sm:rounded-lg">
          <tbody>
            <tr>
              <td className="first">Model Code</td>
              {car.modelCode !== "" ? (
                <td className="text-center"> {car.modelCode}</td>
              ) : (
                <td className="text-center bg-gray-100 text-red-600">
                  Not Available
                </td>
              )}
            </tr>
            {/*<tr>*/}
            {/*    <td className="first">Auction Grade</td>*/}
            {/*    {*/}
            {/*        car.auctionGrade !== '' ? ( <td> {car.auctionGrade}</td>) : (<td>Not Available</td>)*/}
            {/*    }*/}
            {/*</tr>*/}
            <tr>
              <td className="first">Engine Size</td>
              <td className="text-center">{car.engineSize}</td>
            </tr>
            <tr>
              <td className="first">Engine Number</td>
              {car.engineNumber != undefined ? (
                <td className="text-center"> {car.engineNumber}</td>
              ) : (
                <td className="text-center bg-gray-100 text-red-600">
                  Not Available
                </td>
              )}
            </tr>
            <tr>
              <td className="first">Vehicle Category</td>
              <td className="text-center">{car.vehicleCategory}</td>
            </tr>
            <tr>
              <td className="first">Body Length</td>
              {car.lengthOfCar != 0 ? (
                <td className="text-center"> {car.lengthOfCar}</td>
              ) : (
                <td className="text-center bg-gray-100 text-red-600">
                  Not Available
                </td>
              )}
            </tr>
            <tr>
              <td className="first">Dimension</td>
              {car.M3 != undefined ? (
                <td className="text-center"> {car.M3}</td>
              ) : (
                <td className="text-center bg-gray-100 text-red-600">
                  Not Available
                </td>
              )}
            </tr>
            <tr>
              <td className="first">Steering Type</td>
              {car.steeringTypeId == 1 ? (
                <td className="text-center"> Right Hand</td>
              ) : (
                <td className="text-center">Left Hand</td>
              )}
            </tr>
          </tbody>
        </table>
        <table className="keyinfo shadow-md sm:rounded-lg">
          <tbody>
            <tr>
              <td className="first">Chasis Number</td>
              {car.chasisNumber !== "" ? (
                <td className="text-center"> {car.chasisNumber}</td>
              ) : (
                <td className="text-center bg-gray-100 text-red-600">
                  Not Available
                </td>
              )}
            </tr>
            <tr>
              <td className="first">Axle Type</td>
              <td className="text-center">{car.axle}</td>
            </tr>
            <tr>
              <td className="first">Fuel</td>
              <td className="text-center">{car.typeOfFuel}</td>
            </tr>
            <tr>
              <td className="first">Mileage</td>
              <td className="text-center">{NumberFormat(car.mileage)} Kms</td>
            </tr>
            <tr>
              <td className="first">Loading Capacity</td>
              {car.loadingCapacity != "" ? (
                <td className="text-center"> {car.loadingCapacity}</td>
              ) : (
                <td className="text-center bg-gray-100 text-red-600">
                  Not Available
                </td>
              )}
            </tr>

            <tr>
              <td className="first">Colour</td>
              <td className="text-center">{car.colorName}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="features ">
        <h2>Features</h2>
        <ul className="featureitem ">
          {// stockOptions
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
            .filter((op) => op.stockId === car.stockId)
            .map((op) => (
              <li className="active" key={op.id}>
                <h5>
                  {
                    <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-sm font-medium  ">
                      <svg
                        className="h-1.5 w-1.5 fill-green-400"
                        viewBox="0 0 6 6"
                        aria-hidden="true"
                      >
                        <circle cx={3} cy={3} r={3} />
                      </svg>
                      {
                        optionsMaster.data?.find(
                          (x) => x.optionId == op.carOptionsId
                        )?.optionName
                      }
                    </span>
                  }
                </h5>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
