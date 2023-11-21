"use client";

import CarReservedTable from "./tables/carReserved";
import MachineryReservedTable from "./tables/machineryReserved";
import TruckReservedTable from "./tables/truckReserved";

export default function Purchased() {
  // reservedCarsByCustomerID

  return (
    <div>
      <p className="text-lg text-[#221C63] text-center mt-3 mb-2">
        Purchased Cars{" "}
      </p>
      <CarReservedTable />
      <p className="text-lg text-[#221C63] text-center mt-3 mb-2">
        Purchased Trucks{" "}
      </p>
      <TruckReservedTable />
      <p className="text-lg text-[#221C63] text-center mt-3 mb-2">
        Purchased Machinery{" "}
      </p>
      <MachineryReservedTable />
    </div>
  );
}
