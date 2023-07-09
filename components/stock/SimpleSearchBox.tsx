'use client';
import {Col, Form} from "react-bootstrap";
import {tblBodyTypes, tblCarModels, tblMakes, tblMasterCountry} from ".prisma/client";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {SearchSelect, SearchSelectItem, Select, SelectItem} from "@tremor/react";
import {useRouter} from "next/navigation";
import {param} from "ts-interface-checker";
import {BodyType} from "@/models/Master/BodyType";
import {Make} from "@/models/Master/Make";
import {CarModel} from "@/models/Master/CarModel";

interface Props{
    bodyTypes: BodyType[], //tblBodyTypes[],
    // locations: tblMasterCountry[],
    makes: Make[]//tblMakes[],
    models: CarModel[]//tblCarModels[]
}

const initialState = {
    modelId: 0,
    makeId: 0,
    bodyTypeId:0,
   // conditionId:0,
    steeringTypeId:0,
    //drivetrainId:0,
    fromYear:0,
    toYear: 0,
    // minPrice:0,
    // maxPrice:0,
    // minMileage:0,
    // maxMileage:0,
    // minEngineSize: 0,
    // maxEngineSize: 0,
    // fuelTypeId:0,
    // transmissionId:0,
    // colorId:0
}



export default function SimpleSearchBox({bodyTypes,makes, models}:Props){

    const currentYear = new Date().getFullYear()
    const [filter, setFilter] = useState(initialState);
    const [makeId, setMakeId] = useState("0");
    const [modelId, setModelId] = useState("0");
    const [bodyTypeId, setBodyTypeId] = useState("0");
    const [fromYear, setFromYear] = useState("0");
    const [toYear, setToYear] = useState("0");
    const [steeringTypeId, setSteeringTypeId] = useState("0");
    const [url, setUrl] = useState('/search?');
    const queryParams:string[] = [];
    const router = useRouter();
    // const yearsList = [];
    // for (let i = currentYear-15; i <= currentYear; i++) {
    //     yearsList.push(i);
    // }
    const yearList = Array.from({ length: 16 }, (_, index) => (currentYear - index).toString());


    function handleSubmit(event:FormEvent){
        event.preventDefault()
        console.log(makeId,"MakeID, ", modelId, "ModelID, ", bodyTypeId, "BodyTypeID")

        const params = new URLSearchParams();

        params.set("searchFromBox", "true")
        if (makeId !== "0") params.set("makeID", makeId)
        if (modelId !== "0") params.set("modelID", modelId)
        if (bodyTypeId != "0") params.set("bodyTypeID", bodyTypeId)
        if (steeringTypeId != "0") params.set("steeringID", steeringTypeId)
        if (fromYear != "0") params.set("fromYear", fromYear)
        if (toYear != "0") params.set("toYear", toYear)

                    // if (makeId !== "0") {
        //     queryParams.push(`makeId=${makeId}`);
        //     const queryString = queryParams.join('&');
        //     setUrl( `/search?${queryString}`);
        // }
        // if (modelId !== "0") {
        //     queryParams.push(`modelId=${modelId}`)
        //     const queryString = queryParams.join('&');
        //     setUrl( `/search?${queryString}`);
        // }
        // if (bodyTypeId != "0") {
        //     queryParams.push(`bodyTypeId=${bodyTypeId}`);
        //     const queryString = queryParams.join('&');
        //     setUrl( `/search?${queryString}`);
        // }
        // if (steeringTypeId != "0") {
        //     queryParams.push(`steeringTypeId=${steeringTypeId}`);
        //     const queryString = queryParams.join('&');
        //     setUrl( `/search?${queryString}`);
        // }
        // if (fromYear != "0") {
        //     queryParams.push(`fromYear=${fromYear}`);
        //     const queryString = queryParams.join('&');
        //     setUrl( `/search?${queryString}`);
        // }
        // if (toYear != "0") {
        //     queryParams.push(`toYear=${toYear}`);
        //     const queryString = queryParams.join('&');
        //     setUrl( `/search?${queryString}`);
        // }

        // if (url!= "/search?"){
        //     console.log(url);
        // }
        //console.log(`/global/results/cars?${params.toString()}`)
        router.push(`/global/results/cars?${params.toString()}`)
    }


    // function handleInputChange(event:ChangeEvent<HTMLSelectElement>){
    //     const fieldName = event.target.name;
    //     const fieldValue = parseInt(event.target.value);
    //
    //
    //     switch (fieldName) {
    //         case 'makeId':
    //             setMakeId(fieldValue);
    //             if (makeId !== 0) {
    //                 queryParams.push(`makeId=${makeId}`);
    //                 const queryString = queryParams.join('&');
    //                 setUrl( `/search?${queryString}`);
    //             }
    //             break;
    //         case 'modelId':
    //             setModelId(fieldValue);
    //             if (modelId !== 0) {
    //                 queryParams.push(`modelId=${modelId}`)
    //                 const queryString = queryParams.join('&');
    //                 setUrl( `/search?${queryString}`);
    //             }
    //             break;
    //         case 'bodyTypeId':
    //             setBodyTypeId(fieldValue);
    //             if (bodyTypeId != 0) {
    //                 queryParams.push(`bodyTypeId=${bodyTypeId}`);
    //                 const queryString = queryParams.join('&');
    //                 setUrl( `/search?${queryString}`);
    //             }
    //             break;
    //         case 'steeringTypeId':
    //             setSteeringTypeId(fieldValue);
    //             if (steeringTypeId != 0) {
    //                 queryParams.push(`steeringTypeId=${steeringTypeId}`);
    //                 const queryString = queryParams.join('&');
    //                 setUrl( `/search?${queryString}`);
    //             }
    //             break;
    //         case 'fromYear':
    //             setFromYear(fieldValue);
    //             console.log(fromYear)
    //             if (fromYear != 0) {
    //                 queryParams.push(`fromYear=${fromYear}`);
    //                 const queryString = queryParams.join('&');
    //                 setUrl( `/search?${queryString}`);
    //             }
    //             break;
    //         case 'toYear':
    //             setToYear(fieldValue);
    //             console.log(toYear)
    //             if (toYear != 0) {
    //                 queryParams.push(`toYear=${toYear}`);
    //                 const queryString = queryParams.join('&');
    //                 setUrl( `/search?${queryString}`);
    //             }
    //             break;
    //         default:
    //             break;
    //     }
    //
    //
    //     console.log(url);
    // }


    return(
        <>
            <div className="formrow row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 formvariation">
                    <div className="container">
                        {/*<div className="row">*/}
                        {/*    <div className="col-md-2 col-sm-2 text-right vehicleicon">*/}
                        {/*        <span className="fa fa-car" id="caric"  />*/}
                        {/*    </div>*/}
                        {/*    <div className="col-md-2 col-sm-2 vehicleicon">*/}
                        {/*        <span className="fa fa-truck" id="truckic"  />*/}
                        {/*    </div>*/}
                        {/*    <div className="col-md-8 col-sm-8" />*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 p-0 formss">
                    <div className="container">
                        <div className="row">
                            {/*@if (Helpers.MasterData.CarModels != null)*/}

                            <div className="showcase-Box carform">
                                <Form onSubmit={handleSubmit} autoComplete="off">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                            <label>Make: </label>
                                            <SearchSelect value={makeId} onValueChange={setMakeId}>
                                            {
                                                makes.map(make=> (
                                                    <SearchSelectItem key={make.makeId} value={make.makeId.toString()} >
                                                        {make.makeName}
                                                    </SearchSelectItem>
                                                ))
                                            }
                                            </SearchSelect>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <label>Model:</label>
                                            <SearchSelect value={modelId} onValueChange={setModelId}>
                                                {
                                                    models.map(model=> (
                                                        <SearchSelectItem key={model.modelId} value={model.modelId.toString()} >
                                                            {model.modelName}
                                                        </SearchSelectItem>
                                                    ))
                                                }
                                            </SearchSelect>

                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <label>Body Type: </label>
                                            <SearchSelect value={bodyTypeId} onValueChange={setBodyTypeId}>
                                                {/*<SelectItem key={0} value={"0"} >*/}
                                                {/*  Select Body Type*/}
                                                {/*</SelectItem>*/}
                                                {
                                                    bodyTypes.map(bodytype=> (
                                                        <SearchSelectItem key={bodytype.bodyTypeId} value={bodytype.bodyTypeId.toString()} >
                                                            {bodytype.typeOfBody}
                                                        </SearchSelectItem>
                                                    ))
                                                }
                                            </SearchSelect>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <label>Steering: </label>
                                            <SearchSelect value={steeringTypeId} onValueChange={setSteeringTypeId}>
                                                <SearchSelectItem value="1" >
                                                    Right Hand
                                                </SearchSelectItem>
                                                <SearchSelectItem value="2" >
                                                    Left Hand
                                                </SearchSelectItem>
                                            </SearchSelect>


                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <div className="showcase-Boxselect">
                                                <label>Manufacturing Year:</label>
                                                <div className="flex flex-row">
                                                    <div className="flex-none w-20 h-14 ">
                                                        <SearchSelect value={fromYear} onValueChange={setFromYear}>
                                                        {
                                                            yearList.map(year=> (
                                                                <SearchSelectItem key={year} value={year.toString()} >
                                                                    {year}
                                                                </SearchSelectItem>
                                                            ))
                                                        }
                                                        </SearchSelect>
                                                    </div>
                                                    <div className="flex-auto w-10  ">
                                                        <SearchSelect value={toYear} onValueChange={setToYear}>
                                                            {
                                                                yearList.map(year=> (
                                                                    <SearchSelectItem key={year} value={year.toString()} >
                                                                        {year}
                                                                    </SearchSelectItem>
                                                                ))
                                                            }
                                                        </SearchSelect>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <div className="showcase-Boxbtn">
                                                <button type="submit" >Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                            <div className="showcase-Box truckform">
                                <form>
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <div className="showcase-Boxselect">
                                                <label>Make:</label>
                                                <select className="custom-select">
                                                    <option >Select Make</option>
                                                    {/*@foreach (var make in Helpers.MasterData.Makes)*/}
                                                    {/*{'{'}*/}
                                                    {/*<option slug="@make.Slug" value="@make.MakeId">@make.MakeName</option>*/}
                                                    {/*{'}'}*/}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <div className="showcase-Boxselect">
                                                <label>Model:</label>
                                                <select className="custom-select">
                                                    <option>Select Model</option>
                                                    {/*@foreach (var model in Helpers.MasterData.CarModels.Where(x =&gt; x.MakeId == search.MakeID))*/}
                                                    {/*{'{'}*/}
                                                    {/*<option slug="@model.ModelName" value="@model.ModelId">@model.ModelName</option>*/}
                                                    {/*{'}'}*/}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <div className="showcase-Boxselect">
                                                <label>Reg. Date from</label>
                                                <select className="custom-select " name="bodytype" id="body-type-select">
                                                    <option>Any</option>
                                                    <option value="sedan">2022</option>
                                                    <option value="coupe">2021</option>
                                                    <option value="hatchback">2020</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <div className="showcase-Boxselect">
                                                <label>Miles to</label>
                                                <select className="custom-select " name="bodytype" id="body-type-select">
                                                    <option>Any</option>
                                                    <option value="sedan">10,000</option>
                                                    <option value="coupe">20,000</option>
                                                    <option value="hatchback">30,0000</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <div className="showcase-Boxselect">
                                                <label>Price Until:</label>
                                                <select className="custom-select " name="steering" id="steering-select">
                                                    <option>Any</option>
                                                    <option value="sedan">$10,000</option>
                                                    <option value="coupe">$20,000</option>
                                                    <option value="hatchback">430,000</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <div className="showcase-Boxbtn">
                                                <button type="submit">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}