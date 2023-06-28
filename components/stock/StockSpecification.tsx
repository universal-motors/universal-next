import {tblCars, tblMasterCountry} from ".prisma/client";
import {StockCars} from "@/models/StockCars";
import {Country} from "@/models/Master/Country";

interface Props {
    car : StockCars,
    location: Country
}
export default function StockSpecification({car, location}:Props){

    return(
        <>
            <div className="row specsrow">
                <div className="col-sm specs">
                    <h4>Mileage</h4>
                    <img decoding="async" src="/assets/images/kmsDriven.svg" loading="eager" width="20px" height="20px"/>
                        <p>{car.mileage}</p>
                </div>
                <div className="col-sm specs">
                    <h4>YEAR</h4>
                    <img decoding="async" src="/assets/images/registrationYear.svg" loading="eager" width="20px" height="20px"/>
                        <p className="label-text">{car.year}</p>
                </div>
                <div className="col-sm specs">
                    <h4>Engine</h4>
                    <img decoding="async" src="/assets/images/engineDisplacement.svg" loading="eager" width="20px"
                         height="20px"/>
                        <p className="label-text">{car.engineSize}</p>
                </div>
                <div className="col-sm specs">
                    <h4>Transmision</h4>
                    <img decoding="async" src="/assets/images/transmission.svg" loading="eager" width="20px" height="20px"/>
                        <p className="label-text">{car.transmissionName}</p>
                </div>
                <div className="col-sm specs">
                    <h4>Country</h4>
                    <img decoding="async" src={`/assets/images/flags/${location.slug}.svg`} loading="eager" width="20px"
                         height="20px"/>

                        <p className="label-text">{car.locationName}</p>

                </div>
            </div>
        </>
    )
}