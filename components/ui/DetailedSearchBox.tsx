// 'use client'
// import {ChangeEvent, FormEvent, useEffect, useState} from "react";
// import {Col, Form} from "react-bootstrap";
// import {useRouter} from "next/navigation";
//
//
// export default function DetailedSearchBox(){
//
//     const currentYear = new Date().getFullYear()
//     const yearsList = [];
//     for (let i = currentYear-15; i <= currentYear; i++) {
//         yearsList.push(i);
//     }
//
//     const router = useRouter();
//     const [makeId, setMakeId] = useState(0);
//     const [modelId, setModelId] = useState(0);
//     const [bodyTypeId, setBodyTypeId] = useState(0);
//     const [conditionId, setConditionId] = useState(2);
//     const [steeringTypeId, setSteeringTypeId] = useState(1);
//     const [drivetrainId, setDrivetrainId] = useState(0);
//     const [colorId, setColorId] = useState(0);
//     const [transmissionId, setTransmissionId] = useState(0);
//     const [fuelTypeId, setFuelTypeId] = useState(0);
//     const [fromYear, setFromYear] = useState(0);
//     const [toYear, setToYear] = useState(0);
//     const [minMileage, setMinMileage] = useState(0);
//     const [maxMileage, setMaxMileage] = useState(0);
//     const [minPrice, setMinPrice] = useState(0);
//     const [maxPrice, setMaxPrice] = useState(0);
//     const [minEngineSize, setMinEngineSize] = useState(0);
//     const [maxEngineSize, setMaxEngineSize] = useState(0);
//
//     // Function to generate the URL query string based on the non-zero state values
//     const generateQueryString = () => {
//         const queryParams = [];
//
//         // Add parameters to the query string only if their state values are non-zero
//         if (makeId !== 0) {
//             queryParams.push(`makeId=${makeId}`);
//         }
//
//         if (modelId !== 0) {
//             queryParams.push(`modelId=${modelId}`);
//         }
//
//         if (colorId !== 0) {
//             queryParams.push(`colorId=${colorId}`);
//         }
//
//         if (bodyTypeId !== 0) {
//             queryParams.push(`bodyTypeId=${bodyTypeId}`);
//         }
//
//         if (conditionId !== 0) {
//             queryParams.push(`conditionId=${conditionId}`);
//         }
//
//         if (steeringTypeId !== 0) {
//             queryParams.push(`steeringTypeId=${steeringTypeId}`);
//         }
//
//         if (drivetrainId !== 0) {
//             queryParams.push(`drivetrainId=${drivetrainId}`);
//         }
//
//         if (transmissionId !== 0) {
//             queryParams.push(`transmissionId=${transmissionId}`);
//         }
//
//         if (fuelTypeId !== 0) {
//             queryParams.push(`fuelTypeId=${fuelTypeId}`);
//         }
//
//         if (fromYear !== 0) {
//             queryParams.push(`fromYear=${fromYear}`);
//         }
//
//         if (toYear !== 0) {
//             queryParams.push(`toYear=${toYear}`);
//         }
//
//         if (minMileage !== 0) {
//             queryParams.push(`minMileage=${minMileage}`);
//         }
//
//         if (maxMileage !== 0) {
//             queryParams.push(`maxMileage=${maxMileage}`);
//         }
//
//
//         if (minPrice !== 0) {
//             queryParams.push(`minPrice=${minPrice}`);
//         }
//
//
//         if (maxPrice !== 0) {
//             queryParams.push(`maxPrice=${maxPrice}`);
//         }
//
//
//         if (minEngineSize !== 0) {
//             queryParams.push(`minEngineSize=${minEngineSize}`);
//         }
//
//
//         if (maxEngineSize !== 0) {
//             queryParams.push(`maxEngineSize=${maxEngineSize}`);
//         }
//
//         // Join the query parameters using '&' and return the final query string
//         return queryParams.join('&');
//     };
//
//     // Watch for changes in the state values and update the URL when necessary
//     useEffect(() => {
//         // Generate the URL query string
//         const queryString = generateQueryString();
//
//         // Construct the full URL with the query string
//         const url = `/search?${queryString}`;
//
//         // Update the URL using router.push()
//         router.push(url);
//     }, [makeId, modelId, colorId] )//* Add more
//
//     function handleSubmit(event:FormEvent){
//         event.preventDefault()
//         console.log(filter);
//     }
//
//     function handleInputChange(event:ChangeEvent<HTMLSelectElement>){
//         const {name,value} = event.target;
//         setFilter({...filter, [name]:value})
//         console.log(value);
//     }
//
//
//     return(
//         <>
//             <div className="container searched">
//                 <Form onSubmit={handleSubmit} autoComplete="off">
//                 <div className="row">
//
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-6">
//                             <Form.Group as={Col} controlId="formGridMakeID">
//                               <Form.Select onChange={handleInputChange} name='makeId'>
//                                   <option value={0}>Select Make</option>
//                                   {
//                                       stockStore.makes.map(makes=> (
//                                           <option value={makes.makeId}>{makes.makeName}</option>
//                                       ))
//                                   }
//                                 </Form.Select>
//                             </Form.Group>
//
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-6">
//                             <Form.Group as={Col} controlId="formGridModelID">
//                                 <Form.Select onChange={handleInputChange} name='modelId'>
//                                     <option value={0}>Select Model</option>
//                                     {
//                                         stockStore.bodyTypes.map(bodytype=> (
//                                             <option value={bodytype.bodyTypeId}>{bodytype.typeOfBody}</option>
//                                         ))
//                                     }
//                                 </Form.Select>
//                             </Form.Group>
//
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-6">
//                             <Form.Group as={Col} controlId="formGridBodyType">
//                                 <Form.Select onChange={handleInputChange} name='bodyTypeId'>
//                                     <option value={0}>Select Body Type</option>
//                                     {
//                                         stockStore.bodyTypes.map(bodytype=> (
//                                             <option value={bodytype.bodyTypeId}>{bodytype.typeOfBody}</option>
//                                         ))
//                                     }
//                                 </Form.Select>
//                             </Form.Group>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-6">
//                             <Form.Group as={Col} controlId="formGridCondition">
//                                 <Form.Select onChange={handleInputChange} name='conditionId'>
//                                     <option value={0}>Select Condition</option>
//                                     <option value={1}>New</option>
//                                     <option value={2}>Used</option>
//                                 </Form.Select>
//                             </Form.Group>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-6">
//                             <Form.Group as={Col} controlId="formGridSteeringType">
//                                 <Form.Select onChange={handleInputChange} name='steeringTypeId'>
//                                     <option  value={0}>Select Steering</option>
//                                     <option value={1}>Right Hand</option>
//                                     <option value={2}>Left Hand</option>
//                                 </Form.Select>
//                             </Form.Group>
//
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-6">
//                             <div className="row">
//                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
//                                     <Form.Group as={Col} controlId="formGridFromYear">
//                                         <Form.Select onChange={handleInputChange} name='fromYear'>
//                                             <option value={0}>From Year</option>
//                                             {
//                                                 yearsList.map(year=> (
//                                                     <option value={year}>{year}</option>
//                                                 ))
//                                             }
//                                         </Form.Select>
//                                     </Form.Group>
//
//                                 </div>
//                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
//                                     <Form.Group as={Col} controlId="formGridToYear">
//                                         <Form.Select onChange={handleInputChange} name='toYear'>
//                                             <option  value={0}>To Year</option>
//                                             {
//                                                 yearsList
//                                                     .sort((a,b)=> b-a)
//                                                     .map(year=> (
//                                                         <option value={year}>{year}</option>
//                                                     ))
//                                             }
//                                         </Form.Select>
//                                     </Form.Group>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-6">
//                             <Form.Group as={Col} controlId="formGridToYear">
//                                 <Form.Select onChange={handleInputChange} name='drivetrainId'>
//                                     <option value={0}>Select Drivetrain</option>
//                                     {
//                                         yearsList
//                                             .sort((a,b)=> b-a)
//                                             .map(year=> (
//                                                 <option value={year}>{year}</option>
//                                             ))
//                                     }
//                                 </Form.Select>
//                             </Form.Group>
//
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-6">
//                             <div className="row">
//                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
//                                     <Form.Group as={Col} controlId="formGridToMinPrice">
//                                         <Form.Select onChange={handleInputChange} name='minPrice'>
//                                            <option value={0}>Min. Price</option>
//                                             <option value={500}>$500</option>
//                                             <option value={750}>$750</option>
//                                             <option value={1000}>$1,000</option>
//                                             <option value={1500}>$1,500</option>
//                                             <option value={2000}>$2,000</option>
//                                             <option value={2500}>$2,500</option>
//                                             <option value={3000}>$3,000</option>
//                                             <option value={3500}>$3,500</option>
//                                             <option value={4000}>$4,000</option>
//                                             <option value={4500}>$4,500</option>
//                                             <option value={5000}>$5,000</option>
//                                             <option value={5500}>$5,500</option>
//                                             <option value={6000}>$6,000</option>
//                                             <option value={6500}>$6,500</option>
//                                             <option value={7000}>$7,000</option>
//                                             <option value={7500}>$7,500</option>
//                                             <option value={8000}>$8,000</option>
//                                             <option value={8500}>$8,500</option>
//                                             <option value={9000}>$9,000</option>
//                                             <option value={9500}>$9,500</option>
//                                             <option value={10000}>$10,000</option>
//                                             <option value={15000}>$15,000</option>
//                                             <option value={20000}>$20,000</option>
//                                         </Form.Select>
//                                     </Form.Group>
//
//                                 </div>
//                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
//                                     <Form.Group as={Col} controlId="formGridToMaxPrice">
//                                         <Form.Select onChange={handleInputChange} name='maxPrice'>
//                                             <option value={0}>Max. Price</option>
//                                             <option value={500}>$500</option>
//                                             <option value={750}>$750</option>
//                                             <option value={1000}>$1,000</option>
//                                             <option value={1500}>$1,500</option>
//                                             <option value={2000}>$2,000</option>
//                                             <option value={2500}>$2,500</option>
//                                             <option value={3000}>$3,000</option>
//                                             <option value={3500}>$3,500</option>
//                                             <option value={4000}>$4,000</option>
//                                             <option value={4500}>$4,500</option>
//                                             <option value={5000}>$5,000</option>
//                                             <option value={5500}>$5,500</option>
//                                             <option value={6000}>$6,000</option>
//                                             <option value={6500}>$6,500</option>
//                                             <option value={7000}>$7,000</option>
//                                             <option value={7500}>$7,500</option>
//                                             <option value={8000}>$8,000</option>
//                                             <option value={8500}>$8,500</option>
//                                             <option value={9000}>$9,000</option>
//                                             <option value={9500}>$9,500</option>
//                                             <option value={10000}>$10,000</option>
//                                             <option value={15000}>$15,000</option>
//                                             <option value={20000}>$20,000</option>
//                                         </Form.Select>
//                                     </Form.Group>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-6">
//                             <div className="row">
//                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
//                                     <Form.Group as={Col} controlId="formGridToMaxPrice">
//                                         <Form.Select onChange={handleInputChange} name='minMileage'>
//                                             <option value={0}>Min. Mileage</option>
//                                             <option value={50000}>50000</option>
//                                             <option value={100000}>100000</option>
//                                             <option value={150000}>150000</option>
//                                             <option value={200000}>200000</option>
//                                             <option value={300000}>300000</option>
//                                         </Form.Select>
//                                     </Form.Group>
//
//                                 </div>
//                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
//                                     <Form.Group as={Col} controlId="formGridToMaxPrice">
//                                         <Form.Select onChange={handleInputChange} name='maxMileage'>
//                                             <option value={0}>Max. Mileage</option>
//                                             <option value={50000}>50000</option>
//                                             <option value={100000}>100000</option>
//                                             <option value={150000}>150000</option>
//                                             <option value={200000}>200000</option>
//                                             <option value={300000}>300000</option>
//                                         </Form.Select>
//                                     </Form.Group>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-6">
//                             <div className="row">
//                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
//                                     <Form.Group as={Col} controlId="formGridToMaxPrice">
//                                         <Form.Select onChange={handleInputChange} name='minEngineSize'>
//                                         <option value={0}>Min. CC</option>
//                                         <option value={600}>600cc</option>
//                                         <option value={1000}>1000cc</option>
//                                         <option value={1500}>1500cc</option>
//                                         <option value={2000}>2000cc</option>
//                                         <option value={2500}>2500cc</option>
//                                         <option value={3000}>3000cc</option>
//                                         <option value={4000}>4000cc</option>
//                                         </Form.Select>
//                                     </Form.Group>
//                                 </div>
//                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
//                                     <Form.Group as={Col} controlId="formGridToMaxPrice">
//                                         <Form.Select onChange={handleInputChange} name='maxEngineSize'>
//                                             <option value={0}>Max. CC</option>
//                                             <option value={600}>600cc</option>
//                                             <option value={1000}>1000cc</option>
//                                             <option value={1500}>1500cc</option>
//                                             <option value={2000}>2000cc</option>
//                                             <option value={2500}>2500cc</option>
//                                             <option value={3000}>3000cc</option>
//                                             <option value={4000}>4000cc</option>
//                                         </Form.Select>
//                                     </Form.Group>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-6">
//                             <Form.Group as={Col} controlId="formGridToFuel">
//                                 <Form.Select onChange={handleInputChange} name='fuelTypeId'>
//                                     <option  value={0}>Select Fuel Type</option>
//                                     <option  value="@make.FuelTypeId">@make.TypeOfFuel</option>
//                                 </Form.Select>
//                             </Form.Group>
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-6">
//                             <Form.Group as={Col} controlId="formGridToTransmission">
//                                 <Form.Select onChange={handleInputChange} name='transmissionId'>
//                                     <option  value={0}>Select Transmission</option>
//                                     <option  value="@make.FuelTypeId">@make.TypeOfFuel</option>
//                                 </Form.Select>
//                             </Form.Group>
//
//                         </div>
//                         <div className="col-lg-4 col-md-6 col-sm-6 col-6">
//                             <Form.Group as={Col} controlId="formGridToColor">
//                                 <Form.Select onChange={handleInputChange} name='colorId'>
//                                     <option value={0}>Select Color</option>
//                                     <option  value="@make.FuelTypeId">@make.TypeOfFuel</option>
//                                 </Form.Select>
//                             </Form.Group>
//                         </div>
//                         <div className="col-lg-8 col-md-6 col-sm-6 col-6">
//                             <button type="submit" className="searchpagebtn">Search Now</button>
//                         </div>
//
//                 </div>
//                 </Form>
//             </div>
//         </>
//     )
// }