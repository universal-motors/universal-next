//'use client';
import ListingHomePageCars from "@/components/stock/ListingHomePageCars";

import agent from "@/api/agent";

//import db from "@/utils/db";
const GetStock = async () => {
  return await agent.LoadData.stockList();//db.tblCars.findMany({where: {IsActive:true}});
}


export default async function Home() {
  const stocks = await GetStock();
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

       <ListingHomePageCars stocks={stocks} />

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
         <a href="https://www.facebook.com/Universal-Motors-LTD-101574801831062">
           <i className="fa fa-facebook" style={{color: 'blue'}} /></a>
         <a className="p-0 m-0" href="https://wa.link/5g81p6" style={{color: 'blue', fontSize: '12px'}}><i className="fa fa-whatsapp" style={{color: 'green'}} /></a>
       </div>
     </div>
   </>
  )
}
