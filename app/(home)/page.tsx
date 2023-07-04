//'use client';
import ListingHomePageCars from "@/components/stock/ListingHomePageCars";

import agent from "@/api/agent";
import Link from "next/link";
import db from "@/utils/db";
import {Col, Form} from "react-bootstrap";
import SimpleSearchBox from "@/components/stock/SimpleSearchBox";
import {Suspense} from "react";
import LoadingComponent from "@/components/layout/LoadingComponent";

//import db from "@/utils/db";
const GetStock = async () => {
  return await agent.LoadData.stockList();//db.tblCars.findMany({where: {IsActive:true}});
}

const GetBodyTypes = async () => {

  return await db.tblBodyTypes.findMany({where: {isActive:true}});
}
const GetLocations = async () => {
  return await db.tblMasterCountry.findMany({where: {IsActive:true}} );
}

const GetCarMakes = async () => {
  return await db.tblMakes.findMany({where: {isActive:true}} );
}

const GetCarModels = async () => {
  return await db.tblCarModels.findMany({where: {isActive:true}} );
}



export default async function Home() {
  const stocks = await GetStock();
  const bodyTypes = await GetBodyTypes();
  const locations = await GetLocations();
  const makes = await GetCarMakes();
  const models = await GetCarModels();

  return (
   <>
     <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 carboxes">

       <SimpleSearchBox makes={makes} models={models} locations={locations} bodyTypes={bodyTypes}/>

       <ListingHomePageCars stocks={stocks} />

     </div>
     <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12 ">
       <a href="https://wa.link/5g81p6"><div className="whatsappbg" /></a>
       <a href="https://www.facebook.com/people/Universal-Motors-LTD/100064181618215/?wtsid=rdr_0KEZcfREX6pES4I4W"><div className="fbpbg" /></a>
       <div className="showcase-Make rightsidebar">
         <h5 className="pt-3"><b>UM in Your Country</b></h5>
         <ul className="countdrop">
           <Link className="mt-0" href="/import-protocols-in-bahamas" >
             <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/BS.svg"   className="img-fluid mr-3" height="15px" alt="Bahamas flag" />
             Bahamas</span>
           </Link>
           <Link href="/import-protocols-in-chile" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/CL.svg"  className="img-fluid mr-3" height="15px" alt="Chile flag" />
            Chile</span>
           </Link>
           <Link className="nav-link" href="/import-protocols-in-dr-congo" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/CD.svg" className="img-fluid mr-3" height="15px" alt="Congo flag" />Dr Congo</span></Link>
           <Link href="/import-protocols-in-guyana" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/GY.svg"  className="img-fluid mr-3" height="15px" alt="Guyana flag" /> Guyana</span></Link>
           <Link href="/import-protocols-in-jamaica" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/JM.svg"  className="img-fluid mr-3" height="15px" alt="Jamaica flag" /> Jamaica</span></Link>
           <Link href="/import-protocols-in-kenya" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/KE.svg"  className="img-fluid mr-3" height="15px" alt="Kenya flag" /> Kenya</span></Link>
           <Link href="/import-protocols-in-malawi" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/MW.svg"  className="img-fluid mr-3" height="15px" alt="Malawi flag" /> Malawi</span></Link>
           <Link href="/import-protocols-in-pakistan" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/PK.svg"  className="img-fluid mr-3" height="15px" alt="Pakistan flag" /> Pakistan</span></Link>
           <Link href="/import-protocols-in-paraguay" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/PY.svg"  className="img-fluid mr-3" height="15px" alt="Paraguay flag" /> Paraguay</span></Link>
           <Link href="/import-protocols-in-russia" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/RU.svg"  className="img-fluid mr-3" height="15px" alt="Russia flag" /> Russia</span></Link>
           <Link href="/import-protocols-in-south-All">
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/SS.svg"  className="img-fluid mr-3" height="15px" alt="Sudan flag" /> South Sudan</span></Link>
           <Link href="/import-protocols-in-tanzania" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/TZ.svg"  className="img-fluid mr-3" height="15px" alt="Tanzania flag" /> Tanzania</span></Link>
           <Link href="/import-protocols-in-uganda" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/UG.svg"  className="img-fluid mr-3" height="15px" alt="Uganda flag" /> Uganda</span></Link>
           <Link href="/import-protocols-in-zambia" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/ZM.svg"  className="img-fluid mr-3" height="15px" alt="Zambia flag" /> Zambia</span></Link>
           <Link href="/import-protocols-in-zimbabwe" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/ZW.svg"  className="img-fluid mr-3" height="15px" alt="Zimbabwe flag" /> Zimbabwe</span></Link>
           <Link href="/import-protocols-in-ghana" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/gh.svg"  className="img-fluid mr-3" height="15px" alt="Ghana flag" /> Ghana</span></Link>
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
