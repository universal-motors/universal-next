"use client";

import CarPurchasedTable from "./tables/carPurchased";

export default function Purchased() {
  // reservedCarsByCustomerID

  return (
    <div>
      <p className="text-lg text-[#221C63] text-center mt-3 mb-2">
        Purchased Cars{" "}
      </p>
      <CarPurchasedTable />
    </div>
  );
}
