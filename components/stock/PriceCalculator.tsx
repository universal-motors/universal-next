import {StockCars} from "@/models/StockCars";
import {Country} from "@/models/Master/Country";
import Link from "next/link";
import {Ports} from "@/models/Master/Ports";
import {PortMapping} from "@/models/Master/PortMapping";

interface Props {
    car : StockCars,
    countries: Country[],
    ports : Ports[],
    portMapping: PortMapping[]

}
export default function PriceCalculator({car,countries, ports,portMapping}:Props){
    return(
        <>
        <div className="detail">
            <div className="detaildark">
                <div className="row">
                    <div className="col-md-5 col-sm-5 col-5 fob-price">
                       <span style={{ marginRight: '10px' }}>FOB Price:</span>
                        <select>
                            <option value={0} selected>$ USD</option>
                            <option value={1}>¥ JPY</option>
                            <option value={2}>€ EUR</option>
                            <option value={3}>£ GBP</option>
                        </select>
                    </div>
                    <div className="col-md-7 col-sm-7 col-7 carprice">
                        {/*@if (selectedCurrencyID == 0)*/}
                        {/*{'{'}*/}
                        {/*<span>${car.price} </span>*/}
                        {/*{'}'}*/}
                        {/*else if (selectedCurrencyID == 1)*/}
                        {/*{'{'}*/}
                        {/*@*<span>¥ @_currencyConverter.ConvertCurrencyAsync("USD","JPY",@_cars.Price)</span>*@*/}
                        {/*<span>¥ @convertedAmount.ToString("0.##")</span>*/}
                        {/*{'}'}*/}
                        {/*else if (selectedCurrencyID == 2)*/}
                        {/*{'{'}*/}
                        {/*<span>€ @convertedAmount.ToString("0.##")</span>*/}
                        {/*{'}'}*/}
                        {/*else if (selectedCurrencyID == 3)*/}
                        {/*{'{'}*/}
                        {/*<span>£ @convertedAmount.ToString("0.##")</span>*/}
                        {/*{'}'}*/}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-8 col-sm-8 col-8 freight">
                        <h5 style={{ marginRight: '10px' }}>Freight To : </h5>
                        <select>
                            <option value={0}>Select Destination</option>
                            {
                                countries
                                    .map(country=> (
                                        <option key={country.countryId} value={country.countryId}>{country.countryName}</option>
                                    ))
                            }
                        </select>
                </div>
                <div className="col-md-4 col-sm-4 col-4" />
            </div>
            <hr />
            <div className="row">
                <div className="col-md-8 col-sm-8 col-8 freight">
                    <h5 style={{ marginRight: '10px' }}>Port/City  :</h5>
                    <select>
                    <option  value={0}>Select Port</option>
                        {
                            portMapping
                                .filter(port=> port.countryID == 187)
                                .map(port=> (
                                    <option key={port.portId} value={port.portId}>{ports.find(x=>x.portId==port.portId)?.portName}</option>
                                ))
                        }

                    </select>
            </div>
            <div className="col-md-4 col-sm-4 col-4" />
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <div>
                    <h5 style={{display: 'inline-block', fontSize: '14px'}}>Freight Charges:</h5>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <input id="insuranceCostLabel" className="text-center" disabled />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <div>
                    <h5 style={{display: 'inline-block', fontSize: '14px'}}>Insurance:</h5>
                    <div className="custom-control custom-switch" style={{display: 'inline-block'}}>
                        <input type="checkbox" className="custom-control-input" id="customSwitch1"  />
                        <label className="custom-control-label" htmlFor="customSwitch1" />
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <input id="insuranceCostLabel"  className="text-center" disabled />
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <div>
                    <h5 style={{display: 'inline-block', fontSize: '14px'}}>Inspection Certificate:</h5>
                    <div className="custom-control custom-switch" style={{display: 'inline-block'}}>
                        <input type="checkbox" className="custom-control-input" id="customSwitch2"  />
                        <label className="custom-control-label" htmlFor="customSwitch2" />
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <input id="insuranceCostLabel" className="text-center" disabled />
            </div>
        </div>
        <hr />
        </div>
    <div className="detaillight">
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <div>
                    {/*@if (selectedCurrencyID == 0)*/}
                    {/*{'{'}*/}
                    {/*<h5 className="tprice">TOTAL PRICE ($)</h5>*/}
                    {/*{'}'}*/}
                    {/*else if (selectedCurrencyID == 1)*/}
                    {/*{'{'}*/}
                    {/*<h5 className="tprice">TOTAL PRICE (¥)</h5>*/}
                    {/*{'}'}*/}
                    {/*else if (selectedCurrencyID == 2)*/}
                    {/*{'{'}*/}
                    {/*<h5 className="tprice">TOTAL PRICE (€)</h5>*/}
                    {/*{'}'}*/}
                    {/*else if (selectedCurrencyID == 3)*/}
                    {/*{'{'}*/}
                    {/*<h5 className="tprice">TOTAL PRICE (£)</h5>*/}
                    {/*{'}'}*/}
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <input id="insuranceCostLabel" className="text-center" disabled />
            </div>
        </div>

    </div>
</div>

</>
    )
}