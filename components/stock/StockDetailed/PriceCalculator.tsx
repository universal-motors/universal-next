'use client'
import {StockCars} from "@/models/StockCars";
import {Country} from "@/models/Master/Country";
import {Ports} from "@/models/Master/Ports";
import {PortMapping} from "@/models/Master/PortMapping";
import {Listbox, Switch, Transition} from "@headlessui/react";
import {ChangeEvent, Fragment, useState} from "react";
import {Select, SelectItem} from "@tremor/react";



interface Props {
    car : StockCars,
    countries: Country[],
    ports : Ports[],
    portMapping: PortMapping[]

}

export default function PriceCalculator({car,countries, ports,portMapping}:Props){
    const [enabled, setEnabled] = useState(false)

    const [countryID, setCountryID] = useState('0');
    const [Ports, setPorts] = useState([]);
    // const firstDropdownOptions: Option[] = [
    //     { value: 'option1', label: 'Option 1' },
    //     { value: 'option2', label: 'Option 2' },
    //     { value: 'option3', label: 'Option 3' },
    // ];
    //
    //
    const handleDestinationChange = () => {

        console.log(countryID)

    };

    const getOptionsForSecondDropdown = (selectedValue: string): Option[] => {
        if (selectedValue === 'option1') {
            return [
                { value: 'suboption1', label: 'Suboption 1' },
                { value: 'suboption2', label: 'Suboption 2' },
                { value: 'suboption3', label: 'Suboption 3' },
            ];
        } else if (selectedValue === 'option2') {
            return [
                { value: 'suboption4', label: 'Suboption 4' },
                { value: 'suboption5', label: 'Suboption 5' },
            ];
        } else {
            return [];
        }
    };


    // const handleSecondDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     const selectedValue = event.target.value;
    //     setSecondDropdownValue(selectedValue);
    // };

    return(
        <>

            {/*    <select value={firstDropdownValue} onChange={handleFirstDropdownChange}>*/}
            {/*        <option value="">Select an option</option>*/}
            {/*        {firstDropdownOptions.map((option) => (*/}
            {/*            <option key={option.value} value={option.value}>*/}
            {/*                {option.label}*/}
            {/*            </option>*/}
            {/*        ))}*/}
            {/*    </select>*/}

            {/*    <select value={secondDropdownValue} onChange={handleSecondDropdownChange}>*/}
            {/*        <option value="">Select an option</option>*/}
            {/*        {optionsForSecondDropdown.map((option) => (*/}
            {/*            <option key={option.value} value={option.value}>*/}
            {/*                {option.label}*/}
            {/*            </option>*/}
            {/*        ))}*/}
            {/*    </select>*/}















        <div className="detail">
            <div className="detaildark">
                <div className="row">
                    {/*<Example car={car} countries={countries}/>*/}
                    <div className="col-md-5 col-sm-5 col-5 fob-price">
                       <span style={{ marginRight: '10px' }}>FOB Price:</span>
                        <select  className="w-1/3 gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-100" aria-expanded="true" aria-haspopup="true">
                            <option value={0} selected>$ USD</option>
                            <option value={1}>¥ JPY</option>
                            <option value={2}>€ EUR</option>
                            <option value={3}>£ GBP</option>
                        </select>

                    </div>

                    <div className="col-md-7 col-sm-7 col-7 carprice">
                        <dd className="mt-1  mr-10 text-3xl font-semibold leading-6 text-indigo-900">${car.price}</dd>
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
                <div className="flex flex-row">
                    <div className="inline-flex basis-1/2 m-2">
                        <span className="m-2 text-sm">Freight To : </span>

                        <Select  value={countryID} onValueChange={setCountryID} className="justify-center rounded-md bg-white  text-sm font-semibold text-blue-900 hover:bg-blue-100" aria-expanded="true" aria-haspopup="true">
                            {/*<option value={0}>Select Destination</option>*/}
                            {
                                countries
                                    .map(country=> (
                                        <SelectItem key={country.countryId} value={country.countryId.toString()}>{country.countryName}</SelectItem>
                                    ))
                            }
                        </Select>
                    </div>
                    <div className="inline-flex  basis-1/2 m-2">
                        <span className="m-2 text-sm">Port/City  :</span>
                        <select className="w-2/3  gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-100" aria-expanded="true" aria-haspopup="true">
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
                </div>


            <hr />

                <div className="flex flex-row">
                    <div className="text-center basis-1/3 m-2">
                        <span className="m-2 text-sm">Freight Charges </span>
                        {/*<dd className="mt-1 text-lg font-semibold leading-6 text-indigo-900">${car.price}</dd>*/}

                    </div>
                    <div className="text-center basis-1/3">
                        <span className="m-2 text-sm">Insurance </span><br/>
                        <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
                            {({ checked }) => (
                                /* Use the `checked` state to conditionally style the button. */
                                <button
                                    className={`${
                                        checked ? 'bg-blue-600' : 'bg-gray-200'
                                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                                >
                                    <span className="sr-only">Enable notifications</span>
                                    <span
                                        className={`${
                                            checked ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                    />
                                </button>
                            )}
                        </Switch>
                        {/*<dd className="mt-1 text-lg font-semibold leading-6 text-indigo-900">${car.price}</dd>*/}
                    </div>
                    <div className="text-center basis-1/3">
                        <span className="m-2 text-sm">Inspection Cost</span><br/>
                        <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
                            {({ checked }) => (
                                /* Use the `checked` state to conditionally style the button. */
                                <button
                                    className={`${
                                        checked ? 'bg-blue-600' : 'bg-gray-200'
                                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                                >
                                    <span className="sr-only">Enable notifications</span>
                                    <span
                                        className={`${
                                            checked ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                    />
                                </button>
                            )}
                        </Switch>
                        {/*<dd className="mt-1 text-lg font-semibold leading-6 text-indigo-900">${car.price}</dd>*/}
                    </div>
                </div>

        </div>
    <div className="detaillight">
        <div className="text-center row">
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
                    <h5 className="tprice">TOTAL PRICE (£)</h5>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <dd className="mt-1 underline shadow-2xl text-2xl font-semibold leading-6 text-indigo-900">${car.price}</dd>
            </div>
        </div>

    </div>
</div>

</>
    )
}