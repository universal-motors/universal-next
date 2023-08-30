
import {StockCars} from "@/models/StockCars";
import {Country} from "@/models/Master/Country";
import {Trucks} from "@/models/Trucks";
import NumberFormat from "@/lib/utils";

interface Props {
    car : Trucks,
    location: Country|undefined
}
export default function TruckSpecification({car, location}:Props){

    return(
        <>
            <div className="row specsrow">
                <div className="col-sm specs">
                    <h4>Mileage</h4>
                    <span className="label-text   items-center rounded-md ml-5">
                    <img decoding="async" src="/assets/images/kmsDriven.svg" loading="eager" className="mx-auto mr-2"/><br/>
                        {NumberFormat(car.mileage)} Kms
                    </span>
                </div>
                <div className="col-sm specs">
                    <h4>YEAR</h4>
                    <span className="label-text   items-center rounded-md ml-5">
                    <img decoding="async" src="/assets/images/registrationYear.svg" loading="eager" className="mx-auto mr-2"/><br/>
                       {car.year} </span>
                </div>

                {
                    car.engineSize != "0" && (
                        <div className="col-sm specs">
                            <h4>Engine</h4>
                            <span className="label-text  items-center rounded-md ml-5">
                    <img decoding="async" src="/assets/images/engineDisplacement.svg" loading="eager" className="mx-auto mr-2"/><br/>
                                {car.engineSize}</span>
                        </div>
                    )
                }
                <div className="col-sm specs">
                    <h4>Axle</h4>
                    <span className="label-text  items-center rounded-md ml-5">
                    <img decoding="async" src="/assets/images/transmission.svg" loading="eager" className="mx-auto"/><br/>
                       {car.axle} </span>
                </div>
                <div className="col-sm specs">
                    <h4>Country</h4>
                    <span className="label-text  text-center items-center rounded-md ml-5">
                    <img decoding="async" src={`/assets/images/flags/${location?.slug}.svg`} loading="eager"className="h-8 mx-auto"/><br/>

                       {car.locationName} </span>

                </div>
            </div>
        </>
    )
}
