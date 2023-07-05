'use client';
import {Col, Form} from "react-bootstrap";
import {tblBodyTypes, tblCarModels, tblMakes, tblMasterCountry} from ".prisma/client";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";

interface Props{
    bodyTypes: tblBodyTypes[],
    locations: tblMasterCountry[],
    makes: tblMakes[],
    models: tblCarModels[]
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

const currentYear = new Date().getFullYear()


export default function SimpleSearchBox({bodyTypes,locations,makes, models}:Props){

    const [filter, setFilter] = useState(initialState);
    const [makeId, setMakeId] = useState(0);
    const [modelId, setModelId] = useState(0);
    const [bodyTypeId, setBodyTypeId] = useState(0);
    const [fromYear, setFromYear] = useState(0);
    const [toYear, setToYear] = useState(0);
    const [steeringTypeId, setSteeringTypeId] = useState(1);
    const [url, setUrl] = useState('/search?');
    const queryParams = [];
    
    const yearsList = [];
    for (let i = currentYear-15; i <= currentYear; i++) {
        yearsList.push(i);
    }

    function handleSubmit(event:FormEvent){
    event.preventDefault()

    }


    function handleInputChange(event:ChangeEvent<HTMLSelectElement>){
        const fieldName = event.target.name;
        const fieldValue = parseInt(event.target.value);


        switch (fieldName) {
            case 'makeId':
                setMakeId(fieldValue);
                if (makeId !== 0) {
                    queryParams.push(`makeId=${makeId}`);
                    const queryString = queryParams.join('&');
                    setUrl( `/search?${queryString}`);
                }
                break;
            case 'modelId':
                setModelId(fieldValue);
                if (modelId !== 0) {
                    queryParams.push(`modelId=${modelId}`)
                    const queryString = queryParams.join('&');
                    setUrl( `/search?${queryString}`);
                }
                break;
            case 'bodyTypeId':
                setBodyTypeId(fieldValue);
                if (bodyTypeId != 0) {
                    queryParams.push(`bodyTypeId=${bodyTypeId}`);
                    const queryString = queryParams.join('&');
                    setUrl( `/search?${queryString}`);
                }
                break;
            case 'steeringTypeId':
                setSteeringTypeId(fieldValue);
                if (steeringTypeId != 0) {
                    queryParams.push(`steeringTypeId=${steeringTypeId}`);
                    const queryString = queryParams.join('&');
                    setUrl( `/search?${queryString}`);
                }
                break;
            case 'fromYear':
                setFromYear(fieldValue);
                console.log(fromYear)
                if (fromYear != 0) {
                    queryParams.push(`fromYear=${fromYear}`);
                    const queryString = queryParams.join('&');
                    setUrl( `/search?${queryString}`);
                }
                break;
            case 'toYear':
                setToYear(fieldValue);
                console.log(toYear)
                if (toYear != 0) {
                    queryParams.push(`toYear=${toYear}`);
                    const queryString = queryParams.join('&');
                    setUrl( `/search?${queryString}`);
                }
                break;
            default:
                break;
        }


        console.log(url);
    }


    return(
        <>
            <div className="formrow row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 formvariation">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-sm-2 text-right vehicleicon">
                                <span className="fa fa-car" id="caric"  />
                            </div>
                            <div className="col-md-2 col-sm-2 vehicleicon">
                                <span className="fa fa-truck" id="truckic"  />
                            </div>
                            <div className="col-md-8 col-sm-8" />
                        </div>
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
                                            <Form.Group as={Col} controlId="formGridMakeID">
                                                <Form.Select onChange={handleInputChange}  name='makeId'>
                                                    <option value={0}>Select Make</option>
                                                    {
                                                        makes.map(make=> (
                                                            <option key={make.MakeId} value={make.MakeId}>{make.MakeName}</option>
                                                        ))
                                                    }
                                                </Form.Select>
                                            </Form.Group>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <label>Model:</label>
                                            <Form.Group as={Col} controlId="formGridModelID">
                                                <Form.Select onChange={handleInputChange}  name='modelId'>
                                                    <option value={0}>Select Model</option>
                                                    {
                                                        models.map(model=> (
                                                            <option key={model.ModelId} value={model.ModelId}>{model.ModelName}</option>
                                                        ))
                                                    }
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <label>Body Type: </label>
                                            <Form.Group as={Col} controlId="formGridBodyType">
                                                <Form.Select onChange={handleInputChange}   name='bodyTypeId'>
                                                    <option value={0}>Select Body Type</option>
                                                    {
                                                        bodyTypes.map(bodytype=> (
                                                            <option key={bodytype.BodyTypeId} value={bodytype.BodyTypeId}>{bodytype.TypeOfBody}</option>
                                                        ))
                                                    }
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <label>Steering: </label>
                                            <Form.Group as={Col} controlId="formGridSteeringType">
                                                <Form.Select onChange={handleInputChange}  name='steeringTypeId'>
                                                    <option  value={0}>Select Steering</option>
                                                    <option value={1}>Right Hand</option>
                                                    <option value={2}>Left Hand</option>
                                                </Form.Select>
                                            </Form.Group>

                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <div className="showcase-Boxselect">
                                                <label>Manufacturing Year:</label>
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 pr-1">
                                                        <Form.Group as={Col} controlId="formGridFromYear">
                                                            <Form.Select onChange={handleInputChange} name='fromYear'>
                                                                <option value={0}>From</option>
                                                                {
                                                                    yearsList.map(year=> (
                                                                        <option key={year} value={year}>{year}</option>
                                                                    ))
                                                                }
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 pl-1">
                                                        <Form.Group as={Col} controlId="formGridToYear">
                                                            <Form.Select onChange={handleInputChange} name='toYear'>
                                                                <option  value={0}>To</option>
                                                                {
                                                                    yearsList
                                                                        .sort((a,b)=> b-a)
                                                                        .map(year=> (
                                                                            <option key={year} value={year}>{year}</option>
                                                                        ))
                                                                }
                                                            </Form.Select>
                                                        </Form.Group>
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