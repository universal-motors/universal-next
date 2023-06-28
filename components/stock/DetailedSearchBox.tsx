import {ChangeEvent, FormEvent, useState} from "react";
import {Col, Form} from "react-bootstrap";
import {useStore} from "../stores/store.ts";


export default function DetailedSearchBox(){

const initialState = {
    modelId: 0,
    makeId: 0,
    bodyTypeId:0,
    conditionId:0,
    steeringTypeId:0,
    drivetrainId:0,
    fromYear:0,
    toYear: 0,
    minPrice:0,
    maxPrice:0,
    minMileage:0,
    maxMileage:0,
    minEngineSize: 0,
    maxEngineSize: 0,
    fuelTypeId:0,
    transmissionId:0,
    colorId:0
}
    const currentYear = new Date().getFullYear()
    const yearsList = [];
    for (let i = currentYear-15; i <= currentYear; i++) {
        yearsList.push(i);
    }
    const {stockStore} = useStore();

const [filter, setFilter] = useState(initialState);

function handleSubmit(event:FormEvent){
    event.preventDefault()
    console.log(filter);
}

    function handleInputChange(event:ChangeEvent<HTMLSelectElement>){
        const {name,value} = event.target;
        setFilter({...filter, [name]:value})
        console.log(value);
    }


    return(
        <>
            <div className="container searched">
                <Form onSubmit={handleSubmit} autoComplete="off">
                <div className="row">

                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <Form.Group as={Col} controlId="formGridMakeID">
                              <Form.Select onChange={handleInputChange} name='makeId'>
                                  <option value={0}>Select Make</option>
                                  {
                                      stockStore.makes.map(makes=> (
                                          <option value={makes.makeId}>{makes.makeName}</option>
                                      ))
                                  }
                                </Form.Select>
                            </Form.Group>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <Form.Group as={Col} controlId="formGridModelID">
                                <Form.Select onChange={handleInputChange} name='modelId'>
                                    <option value={0}>Select Model</option>
                                    {
                                        stockStore.bodyTypes.map(bodytype=> (
                                            <option value={bodytype.bodyTypeId}>{bodytype.typeOfBody}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <Form.Group as={Col} controlId="formGridBodyType">
                                <Form.Select onChange={handleInputChange} name='bodyTypeId'>
                                    <option value={0}>Select Body Type</option>
                                    {
                                        stockStore.bodyTypes.map(bodytype=> (
                                            <option value={bodytype.bodyTypeId}>{bodytype.typeOfBody}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <Form.Group as={Col} controlId="formGridCondition">
                                <Form.Select onChange={handleInputChange} name='conditionId'>
                                    <option value={0}>Select Condition</option>
                                    <option value={1}>New</option>
                                    <option value={2}>Used</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <Form.Group as={Col} controlId="formGridSteeringType">
                                <Form.Select onChange={handleInputChange} name='steeringTypeId'>
                                    <option  value={0}>Select Steering</option>
                                    <option value={1}>Right Hand</option>
                                    <option value={2}>Left Hand</option>
                                </Form.Select>
                            </Form.Group>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Form.Group as={Col} controlId="formGridFromYear">
                                        <Form.Select onChange={handleInputChange} name='fromYear'>
                                            <option value={0}>From Year</option>
                                            {
                                                yearsList.map(year=> (
                                                    <option value={year}>{year}</option>
                                                ))
                                            }
                                        </Form.Select>
                                    </Form.Group>

                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Form.Group as={Col} controlId="formGridToYear">
                                        <Form.Select onChange={handleInputChange} name='toYear'>
                                            <option  value={0}>To Year</option>
                                            {
                                                yearsList
                                                    .sort((a,b)=> b-a)
                                                    .map(year=> (
                                                        <option value={year}>{year}</option>
                                                    ))
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <Form.Group as={Col} controlId="formGridToYear">
                                <Form.Select onChange={handleInputChange} name='drivetrainId'>
                                    <option value={0}>Select Drivetrain</option>
                                    {
                                        yearsList
                                            .sort((a,b)=> b-a)
                                            .map(year=> (
                                                <option value={year}>{year}</option>
                                            ))
                                    }
                                </Form.Select>
                            </Form.Group>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Form.Group as={Col} controlId="formGridToMinPrice">
                                        <Form.Select onChange={handleInputChange} name='minPrice'>
                                           <option value={0}>Min. Price</option>
                                            <option value={500}>$500</option>
                                            <option value={750}>$750</option>
                                            <option value={1000}>$1,000</option>
                                            <option value={1500}>$1,500</option>
                                            <option value={2000}>$2,000</option>
                                            <option value={2500}>$2,500</option>
                                            <option value={3000}>$3,000</option>
                                            <option value={3500}>$3,500</option>
                                            <option value={4000}>$4,000</option>
                                            <option value={4500}>$4,500</option>
                                            <option value={5000}>$5,000</option>
                                            <option value={5500}>$5,500</option>
                                            <option value={6000}>$6,000</option>
                                            <option value={6500}>$6,500</option>
                                            <option value={7000}>$7,000</option>
                                            <option value={7500}>$7,500</option>
                                            <option value={8000}>$8,000</option>
                                            <option value={8500}>$8,500</option>
                                            <option value={9000}>$9,000</option>
                                            <option value={9500}>$9,500</option>
                                            <option value={10000}>$10,000</option>
                                            <option value={15000}>$15,000</option>
                                            <option value={20000}>$20,000</option>
                                        </Form.Select>
                                    </Form.Group>

                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Form.Group as={Col} controlId="formGridToMaxPrice">
                                        <Form.Select onChange={handleInputChange} name='maxPrice'>
                                            <option value={0}>Max. Price</option>
                                            <option value={500}>$500</option>
                                            <option value={750}>$750</option>
                                            <option value={1000}>$1,000</option>
                                            <option value={1500}>$1,500</option>
                                            <option value={2000}>$2,000</option>
                                            <option value={2500}>$2,500</option>
                                            <option value={3000}>$3,000</option>
                                            <option value={3500}>$3,500</option>
                                            <option value={4000}>$4,000</option>
                                            <option value={4500}>$4,500</option>
                                            <option value={5000}>$5,000</option>
                                            <option value={5500}>$5,500</option>
                                            <option value={6000}>$6,000</option>
                                            <option value={6500}>$6,500</option>
                                            <option value={7000}>$7,000</option>
                                            <option value={7500}>$7,500</option>
                                            <option value={8000}>$8,000</option>
                                            <option value={8500}>$8,500</option>
                                            <option value={9000}>$9,000</option>
                                            <option value={9500}>$9,500</option>
                                            <option value={10000}>$10,000</option>
                                            <option value={15000}>$15,000</option>
                                            <option value={20000}>$20,000</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Form.Group as={Col} controlId="formGridToMaxPrice">
                                        <Form.Select onChange={handleInputChange} name='minMileage'>
                                            <option value={0}>Min. Mileage</option>
                                            <option value={50000}>50000</option>
                                            <option value={100000}>100000</option>
                                            <option value={150000}>150000</option>
                                            <option value={200000}>200000</option>
                                            <option value={300000}>300000</option>
                                        </Form.Select>
                                    </Form.Group>

                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Form.Group as={Col} controlId="formGridToMaxPrice">
                                        <Form.Select onChange={handleInputChange} name='maxMileage'>
                                            <option value={0}>Max. Mileage</option>
                                            <option value={50000}>50000</option>
                                            <option value={100000}>100000</option>
                                            <option value={150000}>150000</option>
                                            <option value={200000}>200000</option>
                                            <option value={300000}>300000</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Form.Group as={Col} controlId="formGridToMaxPrice">
                                        <Form.Select onChange={handleInputChange} name='minEngineSize'>
                                        <option value={0}>Min. CC</option>
                                        <option value={600}>600cc</option>
                                        <option value={1000}>1000cc</option>
                                        <option value={1500}>1500cc</option>
                                        <option value={2000}>2000cc</option>
                                        <option value={2500}>2500cc</option>
                                        <option value={3000}>3000cc</option>
                                        <option value={4000}>4000cc</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Form.Group as={Col} controlId="formGridToMaxPrice">
                                        <Form.Select onChange={handleInputChange} name='maxEngineSize'>
                                            <option value={0}>Max. CC</option>
                                            <option value={600}>600cc</option>
                                            <option value={1000}>1000cc</option>
                                            <option value={1500}>1500cc</option>
                                            <option value={2000}>2000cc</option>
                                            <option value={2500}>2500cc</option>
                                            <option value={3000}>3000cc</option>
                                            <option value={4000}>4000cc</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <Form.Group as={Col} controlId="formGridToFuel">
                                <Form.Select onChange={handleInputChange} name='fuelTypeId'>
                                    <option  value={0}>Select Fuel Type</option>
                                    <option  value="@make.FuelTypeId">@make.TypeOfFuel</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <Form.Group as={Col} controlId="formGridToTransmission">
                                <Form.Select onChange={handleInputChange} name='transmissionId'>
                                    <option  value={0}>Select Transmission</option>
                                    <option  value="@make.FuelTypeId">@make.TypeOfFuel</option>
                                </Form.Select>
                            </Form.Group>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <Form.Group as={Col} controlId="formGridToColor">
                                <Form.Select onChange={handleInputChange} name='colorId'>
                                    <option value={0}>Select Color</option>
                                    <option  value="@make.FuelTypeId">@make.TypeOfFuel</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-6 col-6">
                            <button type="submit" className="searchpagebtn">Search Now</button>
                        </div>

                </div>
                </Form>
            </div>
        </>
    )
}