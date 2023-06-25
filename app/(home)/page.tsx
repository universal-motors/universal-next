'use client';
import {Accordion, Tab, Tabs} from "react-bootstrap";


export default function Home() {

  return (
   <>
     <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 carboxes">

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
                 <form>
                   <div className="row">
                     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                       <div className="showcase-Boxselect">
                         <label>Make:</label>
                         <select className="custom-select">
                           <option  value={0}>Select Make</option>
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
                           <option  value={0}>Select Model</option>
                           {/*@foreach (var model in Helpers.MasterData.CarModels.Where(x =&gt; x.MakeId == search.MakeID))*/}
                           {/*{'{'}*/}
                           {/*<option slug="@model.ModelName" value="@model.ModelId">@model.ModelName</option>*/}
                           {/*{'}'}*/}
                         </select>
                       </div>
                     </div>
                     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                       <div className="showcase-Boxselect">
                         <label>Body Type:</label>
                         <select className="custom-select" >
                           <option value={0}>Select Body Type</option>
                           {/*{*/}
                           {/*  masterDataStore.bodyTypes.map(bodytype=> (*/}
                           {/*      <option  value={bodytype.bodyTypeId}> body.TypeOfBody</option>*/}
                           {/*  ))*/}
                           {/*}*/}

                         </select>
                       </div>
                     </div>
                     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                       <div className="showcase-Boxselect">
                         <label>Steering:</label>
                         <select className="custom-select" >
                           <option  value={0}>Select Steering</option>
                           {/*@foreach (var make in Helpers.MasterData.SteeringTypes)*/}
                           {/*{'{'}*/}
                           {/*<option slug="@make.Slug" value="@make.SteeringTypeId">@make.TypeOfSteering</option>*/}
                           {/*{'}'}*/}
                         </select>
                       </div>
                     </div>
                     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                       <div className="showcase-Boxselect">
                         <label>Manufacturing Year:</label>
                         <div className="row">
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 pr-1">
                             <select className="custom-select">
                               <option  value={0}>From Year</option>
                               {/*@for (int i = DateTime.Now.Year; i &gt; DateTime.Now.Year - 20; i--)*/}
                               {/*{'{'}*/}
                               {/*<option value="@i">@i</option>*/}
                               {/*{'}'}*/}
                             </select>
                           </div>
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 pl-1">
                             <select className="custom-select">
                               <option>To Year</option>
                               {/*@for (int i = DateTime.Now.Year; i &gt; DateTime.Now.Year - 20; i--)*/}
                               {/*{'{'}*/}
                               {/*<option value="@i">@i</option>*/}
                               {/*{'}'}*/}
                             </select>
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
                 </form>
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

       <div className="row">

         <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
           <div>
             <h2>Most Popular in <span> @Helpers.CustomerCountry</span></h2>
             <div className="carsrow row py-5">
               {
                 //
                 // universalStore?.stocks
                 //     .filter(car => car.price <= 5000)
                 //     .sort((a, b) => b.stockId - a.stockId)
                 //     .slice(0,10)
                 //     .map(car=> (
                 //         <a href="/Cars/CarsDetailed/@car.StockId">
                 //           <div className="col-sm"  key={car.stockId}>
                 //             <div className="cardimage">
                 //               <img src={car.imageUrl} alt={car.slug} title={car.slug} />
                 //             </div>
                 //             <div className="cardcontent">
                 //               <h4>{car.listingTitle}</h4>
                 //               <p className="modelno">{car.modelCode}</p>
                 //               <p className="car-price">Price: <span> {car.price}</span></p>
                 //             </div>
                 //           </div>
                 //         </a>
                 //     ))
               }

             </div>
           </div>
           <div className="row">
             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
               <div className="showcase-Recheading">
                 <h2>New Arrival in <span>Japan</span></h2>
                 <div className="carsrow row py-5">
                   {
                     // universalStore.stocks
                     //     .filter(car => car.locationId ==84)
                     //     .sort((a, b) => b.stockId - a.stockId)
                     //     .slice(0,10)
                     //     .map(car=> (
                     //         <a href="/Cars/CarsDetailed/@car.StockId">
                     //           <div className="col-sm"  key={car.stockId}>
                     //             <div className="cardimage">
                     //               <img src={car.imageUrl} alt={car.slug} title={car.slug} />
                     //             </div>
                     //             <div className="cardcontent">
                     //               <h4>{car.listingTitle}</h4>
                     //               <p className="modelno">{car.modelCode}</p>
                     //               <p className="car-price">Price: <span> {car.price}</span></p>
                     //             </div>
                     //           </div>
                     //         </a>
                     //     ))
                   }



                 </div>
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
               <h2>Most <span>Affordable Cars </span></h2>
               <div className="showcase-Recheading">
                 <div className="carsrow row py-5">
                   {
                     // universalStore.stocks
                     //     .filter(car => car.price <= 5000)
                     //     .sort((a, b) => b.stockId - a.stockId)
                     //     .slice(0,10)
                     //     .map(car=> (
                     //
                     //         <a href="/Cars/CarsDetailed/@car.StockId">
                     //           <div className="col-sm"  key={car.stockId}>
                     //             <div className="cardimage">
                     //               <img src={car.imageUrl} alt={car.slug} title={car.slug} />
                     //             </div>
                     //             <div className="cardcontent">
                     //               <h4>{car.listingTitle}</h4>
                     //               <p className="modelno">{car.modelCode}</p>
                     //               <p className="car-price">Price: <span> {car.price}</span></p>
                     //             </div>
                     //           </div>
                     //         </a>
                     //     ))
                   }
                 </div>
               </div>
             </div>
           </div>
           <div className="gceFaq-tabs faqSec">
             <h3>FAQs</h3>
             <Tabs
                 defaultActiveKey="all"
                 id="justify-tab-example"
                 className="nav nav-tabs"
                 fill
             >
               <Tab eventKey="all" title="ALL">
                 <div className="tab-pane active" id="tabs-all" role="tabpanel">
                   <div className="row">
                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                       <div className="accordion faqExample" id="faqExampleall">
                         <div className="row">
                           <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                             <Accordion>
                               <Accordion.Item eventKey="0">
                                 <Accordion.Header className="card-header"><span> What do I have to do to buy a car?</span></Accordion.Header>
                                 <Accordion.Body className="card-body">
                                   <span> Registration is required. After registration is completed, you can buy any car that you want.</span>
                                 </Accordion.Body>
                               </Accordion.Item>
                               <Accordion.Item eventKey="1">
                                 <Accordion.Header className="card-header">  <span>  Do you have any criteria to become a registered member of Universal Motors?</span></Accordion.Header>
                                 <Accordion.Body className="card-body">
                                   <span> Anyone who is an automobile dealer or an individual buyer can apply for the membership. However, for an individual car buyer, we encourage you to check your countrys regulations before purchase. We are not familiar with the laws of your country. We are not able to offer you any advice, or to introduce you to any car importer or customs clearing agent in your country.</span>
                                 </Accordion.Body>
                               </Accordion.Item>
                               <Accordion.Item eventKey="2">
                                 <Accordion.Header className="card-header"> <span> How many used cars are normally available in your Inventory and in auction?</span></Accordion.Header>
                                 <Accordion.Body className="card-body">
                                   <span> Usually, we have more than a thousand cars in our regular inventory. In addition, you can have access to about 150,000 cars a week available at different online auctions we cover. Usually we have 2 to 3 RORO Ships and 4 to 5 Container Shipments in a month.</span>
                                 </Accordion.Body>
                               </Accordion.Item>
                               <Accordion.Item eventKey="3">
                                 <Accordion.Header className="card-header"> <span>   What payment methods can be accepted by Universal Motors?</span></Accordion.Header>
                                 <Accordion.Body className="card-body">
                                   <span> Normally we do accept payment by telegraphic transfer to our designated bank account from your bank.</span>
                                 </Accordion.Body>
                               </Accordion.Item>
                               <Accordion.Item eventKey="4">
                                 <Accordion.Header className="card-header"> <span> How long does it take me to receive my car?</span></Accordion.Header>
                                 <Accordion.Body className="card-body">
                                   <span> We cannot tell you the exact time for your car to be delivered to you as it completely depends on the shipping schedule and destination of the customer.</span>
                                 </Accordion.Body>
                               </Accordion.Item>
                               <Accordion.Item eventKey="5">
                                 <Accordion.Header className="card-header"> <span> Is there any membership fee?</span></Accordion.Header>
                                 <Accordion.Body className="card-body">
                                   <span> No. No fees or hidden charges are required. So dont hesitate and sign up now.</span>
                                 </Accordion.Body>
                               </Accordion.Item>
                               <Accordion.Item eventKey="6">
                                 <Accordion.Header className="card-header"> <span>If I purchase a vehicle at $ 2,000, how much will I have to pay as extra charges?</span></Accordion.Header>
                                 <Accordion.Body className="card-body">
                                   <span> If the price is in FOB, you will have to pay Freight charge, Clearance fee, Import duty, Registration fee, Compliance fee, and any other fee which may occur according to the import regulations of your country.If the price is in C&amp;F, you can omit Freight charge from the above charges.</span>
                                 </Accordion.Body>
                               </Accordion.Item>
                             </Accordion>
                           </div>
                           <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                             <Accordion>
                               <Accordion.Item eventKey="0">
                                 <Accordion.Header className="card-header"><span> Can I purchase LHD cars from Universal Motors?</span></Accordion.Header>
                                 <Accordion.Body className="card-body">
                                   <span> LHD cars are usually imported from countries like UAE, US, Europe and South Korea. However, you can search for an LHD car in a fair amount of South Korean and American Inventory.</span>
                                 </Accordion.Body>
                               </Accordion.Item>
                               <Accordion.Item eventKey="1">
                                 <Accordion.Header className="card-header">  <span> Can I cancel my purchase order?</span></Accordion.Header>
                                 <Accordion.Body className="card-body">
                                   <span> When you cancel an order, we may have to resell that car in an auction or in any other way. Therefore, if you cancel the order, you have to pay the balance in addition to the costs that may incur.</span>
                                 </Accordion.Body>
                               </Accordion.Item>
                               <Accordion.Item eventKey="2">
                                 <Accordion.Header className="card-header"> <span> Do you inspect the cars before shipping?</span></Accordion.Header>
                                 <Accordion.Body className="card-body">
                                   <span> All the cars are thoroughly inspected to confirm that there is no difference between the actual specifications and those on the specification sheet.</span>
                                 </Accordion.Body>
                               </Accordion.Item>
                               <Accordion.Item eventKey="3">
                                 <Accordion.Header className="card-header"> <span>  When can I use online auction service?</span></Accordion.Header>
                                 <Accordion.Body className="card-body">
                                   <span>You can use it every day.</span>
                                 </Accordion.Body>
                               </Accordion.Item>
                               <Accordion.Item eventKey="4">
                                 <Accordion.Header className="card-header"> <span> Is there any way to know an indicative bidding price for a vehicle I am interested in at an auction?</span></Accordion.Header>
                                 <Accordion.Body className="card-body">
                                   <span> Yes, the data from recent auctions will be a good source of information. It indicates the prices of vehicles that have been sold over the last 3 months.</span>
                                 </Accordion.Body>
                               </Accordion.Item>
                               <Accordion.Item eventKey="5"  className="danger">
                                 <Accordion.Header className="card-header"> <span> Do your staffs inspect the cars before bidding?</span></Accordion.Header>
                                 <Accordion.Body className="card-body">
                                   <span> We have highly skilled professionals who carefully inspect the cars. Before the professionals decide to bid a car, they confirm that the actual specification and condition of the car matches the information provided by the auction house.</span>
                                 </Accordion.Body>
                               </Accordion.Item>

                             </Accordion>



                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </Tab>
               <Tab eventKey="auction_service" title="Auction Service">
                 <div className="accordion faqExample" id="faqExampleall">
                   <div className="row">
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                       <Accordion>
                         <Accordion.Item eventKey="0">
                           <Accordion.Header className="card-header"> <span> How many used cars are normally available in your Inventory and in auction?</span></Accordion.Header>
                           <Accordion.Body className="card-body">
                             <span> Usually, we have more than a thousand cars in our regular inventory. In addition, you can have access to about 150,000 cars a week available at different online auctions we cover. Usually we have 2 to 3 RORO Ships and 4 to 5 Container Shipments in a month.</span>
                           </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="1">
                           <Accordion.Header className="card-header">  <span> Can I cancel my purchase order?</span></Accordion.Header>
                           <Accordion.Body className="card-body">
                             <span> When you cancel an order, we may have to resell that car in an auction or in any other way. Therefore, if you cancel the order, you have to pay the balance in addition to the costs that may incur.</span>
                           </Accordion.Body>
                         </Accordion.Item>

                       </Accordion>

                     </div>
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                       <Accordion>
                         <Accordion.Item eventKey="0">
                           <Accordion.Header className="card-header"> <span>  When can I use online auction service?</span></Accordion.Header>
                           <Accordion.Body className="card-body">
                             <span>You can use it every day.</span>
                           </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="1">
                           <Accordion.Header className="card-header"> <span> Is there any way to know an indicative bidding price for a vehicle I am interested in at an auction?</span></Accordion.Header>
                           <Accordion.Body className="card-body">
                             <span> Yes, the data from recent auctions will be a good source of information. It indicates the prices of vehicles that have been sold over the last 3 months.</span>
                           </Accordion.Body>
                         </Accordion.Item>
                       </Accordion>

                     </div>
                   </div>
                 </div>
               </Tab>
               <Tab eventKey="lhd_cars" title="LHD Cars">
                 <div className="accordion faqExample" id="faqExampleall">
                   <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                     <Accordion>
                       <Accordion.Item eventKey="0">
                         <Accordion.Header className="card-header"><span> Can I purchase LHD cars from Universal Motors?</span></Accordion.Header>
                         <Accordion.Body className="card-body">
                           <span> LHD cars are usually imported from countries like UAE, US, Europe and South Korea. However, you can search for an LHD car in a fair amount of South Korean and American Inventory.</span>
                         </Accordion.Body>
                       </Accordion.Item>
                     </Accordion>
                   </div>
                 </div>
               </Tab>
               <Tab eventKey="others" title="Others" >
                 <div className="accordion faqExample" id="faqExampleall">
                   <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                     <Accordion>
                       <Accordion.Item eventKey="0">
                         <Accordion.Header className="card-header"> <span>If I purchase a vehicle at $ 2,000, how much will I have to pay as extra charges?</span></Accordion.Header>
                         <Accordion.Body className="card-body">
                           <span> If the price is in FOB, you will have to pay Freight charge, Clearance fee, Import duty, Registration fee, Compliance fee, and any other fee which may occur according to the import regulations of your country.If the price is in C&amp;F, you can omit Freight charge from the above charges.</span>
                         </Accordion.Body>
                       </Accordion.Item>
                     </Accordion>
                   </div>
                 </div>
               </Tab>
               <Tab eventKey="payment_buy" title="Payment &amp; How to Buy" >
                 <div className="accordion faqExample" id="faqExampleall">
                   <div className="row">
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                       <Accordion>
                         <Accordion.Item eventKey="0">
                           <Accordion.Header className="card-header"><span> What do I have to do to buy a car?</span></Accordion.Header>
                           <Accordion.Body className="card-body">
                             <span> Registration is required. After registration is completed, you can buy any car that you want.</span>
                           </Accordion.Body>
                         </Accordion.Item>

                       </Accordion>
                     </div>
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                       <Accordion>
                         <Accordion.Item eventKey="0">
                           <Accordion.Header className="card-header"> <span>   What payment methods can be accepted by Universal Motors?</span></Accordion.Header>
                           <Accordion.Body className="card-body">
                             <span> Normally we do accept payment by telegraphic transfer to our designated bank account from your bank.</span>
                           </Accordion.Body>
                         </Accordion.Item>
                       </Accordion>
                     </div>
                   </div>
                 </div>
               </Tab>
               <Tab eventKey="registratin_criteria" title="Registration Criteria" >
                 <div className="accordion faqExample" id="faqExampleall">
                   <div className="row">
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                       <Accordion>
                         <Accordion.Item eventKey="0">
                           <Accordion.Header className="card-header"><span> Do you have any criteria to become a registered member of Universal Motors?</span></Accordion.Header>
                           <Accordion.Body className="card-body">
                             <span> Anyone who is an automobile dealer or an individual buyer can apply for the membership. However, for an individual car buyer, we encourage you to check your countrys regulations before purchase. We are not familiar with the laws of your country. We are not able to offer you any advice, or to introduce you to any car importer or customs clearing agent in your country.</span>
                           </Accordion.Body>
                         </Accordion.Item>

                       </Accordion>
                     </div>
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                       <Accordion>
                         <Accordion.Item eventKey="0">
                           <Accordion.Header className="card-header"> <span>   Is there any membership fee?</span></Accordion.Header>
                           <Accordion.Body className="card-body">
                             <span> No. No fees or hidden charges are required. So dont hesitate and sign up now.</span>
                           </Accordion.Body>
                         </Accordion.Item>
                       </Accordion>
                     </div>
                   </div>
                 </div>
               </Tab>
               <Tab eventKey="shipping_document" title="Shipping &amp; Document" >
                 <div className="accordion faqExample" id="faqExampleall">
                   <div className="row">
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                       <Accordion>
                         <Accordion.Item eventKey="0">
                           <Accordion.Header className="card-header"><span> How long does it take me to receive my car?</span></Accordion.Header>
                           <Accordion.Body className="card-body">
                             <span> We cannot tell you the exact time for your car to be delivered to you as it completely depends on the shipping schedule and destination of the customer.</span>
                           </Accordion.Body>
                         </Accordion.Item>

                       </Accordion>
                     </div>
                   </div>
                 </div>
               </Tab>
               <Tab eventKey="vehicle_inspection" title="Vehicle Inspection" >
                 <div className="accordion faqExample" id="faqExampleall">
                   <div className="row">
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                       <Accordion>
                         <Accordion.Item eventKey="0">
                           <Accordion.Header className="card-header"><span> Do your staffs inspect the cars before bidding?</span></Accordion.Header>
                           <Accordion.Body className="card-body">
                             <span> We have highly skilled professionals who carefully inspect the cars. Before the professionals decide to bid a car, they confirm that the actual specification and condition of the car matches the information provided by the auction house.</span>
                           </Accordion.Body>
                         </Accordion.Item>

                       </Accordion>
                     </div>
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                       <Accordion>
                         <Accordion.Item eventKey="0">
                           <Accordion.Header className="card-header"> <span> Do you inspect the cars before shipping?</span></Accordion.Header>
                           <Accordion.Body className="card-body">
                             <span> All the cars are thoroughly inspected to confirm that there is no difference between the actual specifications and those on the specification sheet.</span>
                           </Accordion.Body>
                         </Accordion.Item>
                       </Accordion>
                     </div>
                   </div>
                 </div>
               </Tab>
             </Tabs>


           </div>
           <div className="cta-homeSec">
             <div className="row">
               <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                 <div className="cta-heading">
                   <h3>Universal Cars Export</h3>
                   <p>
                     For any queries, Call our support team at &nbsp; &nbsp; <a href="tel:+49 471 9731 9003" className="text-white"> +49 471 9731 9003</a>
                   </p>
                   <h6><a href="/inquiry-form/ContactUS">Contact us</a></h6>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12 ">
       <a href="https://wa.link/5g81p6"><div className="whatsappbg" /></a>
       <a href="https://www.facebook.com/people/Universal-Motors-LTD/100064181618215/?wtsid=rdr_0KEZcfREX6pES4I4W"><div className="fbpbg" /></a>
       <div className="showcase-Make rightsidebar">
         <h5 className="pt-3"><b>UM in Your Country</b></h5>
         <ul className="countdrop">
           <a className="mt-0" href="/import-protocols-in-bahamas" >
             <img src="/assets/images/flags/BS.svg" height="15px" alt="Bahamas flag" />
             <span>Bahamas</span>
           </a>
           <a href="/import-protocols-in-chile" > <img src="/assets/images/flags/CL.svg" height="15px" alt="Chile flag" /> <span>Chile</span></a>
           <a className="nav-link" href="/import-protocols-in-dr-congo" ><img src="/assets/images/flags/CD.svg" height="15px" alt="Congo flag" /> <span>Dr Congo</span></a>
           <a href="/import-protocols-in-guyana" ><img src="/assets/images/flags/GY.svg" height="15px" alt="Guyana flag" /> <span>Guyana</span></a>
           <a href="/import-protocols-in-jamaica" > <img src="/assets/images/flags/JM.svg" height="15px" alt="Jamaica flag" /> <span>Jamaica</span></a>
           <a href="/import-protocols-in-kenya" > <img src="/assets/images/flags/KE.svg" height="15px" alt="Kenya flag" /> <span>Kenya</span></a>
           <a href="/import-protocols-in-malawi" ><img src="/assets/images/flags/MW.svg" height="15px" alt="Malawi flag" /><span> Malawi</span></a>
           <a href="/import-protocols-in-pakistan" ><img src="/assets/images/flags/PK.svg" height="15px" alt="Pakistan flag" /> <span>Pakistan</span></a>
           <a href="/import-protocols-in-paraguay" > <img src="/assets/images/flags/PY.svg" height="15px" alt="Paraguay flag" /> <span>Paraguay</span></a>
           <a href="/import-protocols-in-russia" ><img src="/assets/images/flags/RU.svg" height="15px" alt="Russia flag" /> <span>Russia</span></a>
           <a href="/import-protocols-in-south-All"><img src="/assets/images/flags/SS.svg" height="15px" alt="Sudan flag" /> <span>South Sudan</span></a>
           <a href="/import-protocols-in-tanzania" > <img src="/assets/images/flags/TZ.svg" height="15px" alt="Tanzania flag" /> <span>Tanzania</span></a>
           <a href="/import-protocols-in-uganda" > <img src="/assets/images/flags/UG.svg" height="15px" alt="Uganda flag" /><span> Uganda</span></a>
           <a href="/import-protocols-in-zambia" > <img src="/assets/images/flags/ZM.svg" height="15px" alt="Zambia flag" /> <span>Zambia</span></a>
           <a href="/import-protocols-in-zimbabwe" > <img src="/assets/images/flags/ZW.svg" height="15px" alt="Zimbabwe flag" /> <span>Zimbabwe</span></a>
           <a href="/import-protocols-in-ghana" > <img src="/assets/images/flags/gh.svg" height="15px" alt="Ghana flag" /> <span>Ghana</span></a>
         </ul>
       </div>
       <div className="followme py-3">
         <h5>Follow Us:</h5>
         <a href="https://www.facebook.com/Universal-Motors-LTD-101574801831062"><i className="fa fa-facebook" style={{color: 'blue'}} /></a>
         <a className="p-0 m-0" href="https://wa.link/5g81p6" style={{color: 'blue', fontSize: '12px'}}><i className="fa fa-whatsapp" style={{color: 'green'}} /></a>
       </div>
     </div>
   </>
  )
}
