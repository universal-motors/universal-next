//'use client';
import ListingHomePageCars from "@/components/stock/ListingHomePageCars";
import agent from "@/api/agent";
import Link from "next/link";
import SimpleSearchBox from "@/components/stock/SimpleSearchBox";

const GetStock = async () => {
  return await agent.LoadData.stockList();//db.tblCars.findMany({where: {IsActive:true}});
}

const GetBodyTypes = async () => {

  return await agent.LoadData.bodyTypeList();// db.tblBodyTypes.findMany({where: {isActive:true}});
}
const GetLocations = async () => {
    return await agent.LoadData.countryList();
    //db.tblMasterCountry.findMany({where: {IsActive:true}} );
}

const GetCarMakes = async () => {
  return await  agent.LoadData.carMakeList();//db.tblMakes.findMany({where: {isActive:true}} );
}

const GetCarModels = async () => {
  return await  agent.LoadData.carModelList();//db.tblCarModels.findMany({where: {isActive:true}} );
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

       <SimpleSearchBox makes={makes} models={models}  bodyTypes={bodyTypes}/>
       <ListingHomePageCars stocks={stocks} />

     </div>
     <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12 ">
         <figure
             className="h-auto max-w-lg transition-all duration-300 rounded-lg ">
             <a href="https://wa.link/5g81p6">
                 <img className="rounded-lg"
                      src="/assets/images/what-share.jpg"
                      alt="Whatsapp Description"/>
             </a>
         </figure>
         <figure
             className="h-auto max-w-lg transition-all duration-300 rounded-lg ">
             <a href="https://www.facebook.com/people/Universal-Motors-LTD/100064181618215/?wtsid=rdr_0KEZcfREX6pES4I4W">
                 <img className="rounded-lg"
                      src="/assets/images/faceboook-share.jpg"
                      alt="Facebook Description"/>
             </a>
         </figure>



       <div className="showcase-Make rightsidebar">
         <h5 className="pt-3 text-center justify-items-center"><b>UM in Your Country</b></h5>
         <ul className="countdrop">
           <Link className="transition duration-300 ease-in-out hover:scale-110" href="/global/information/import-protocols?page=bahamas" >
             <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/BS.svg"   className="img-fluid mr-3" height="15px" alt="Bahamas flag" />
             Bahamas</span>
           </Link>
           <Link className="transition duration-300 ease-in-out hover:scale-110" href="/global/information/import-protocols?page=chile" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/CL.svg"  className="img-fluid mr-3" height="15px" alt="Chile flag" />
            Chile</span>
           </Link>
           <Link className="transition duration-300 ease-in-out hover:scale-110 nav-link" href="/global/information/import-protocols?page=congo" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/CD.svg" className="img-fluid mr-3" height="15px" alt="Congo flag" />Dr Congo</span></Link>
           <Link  className="transition duration-300 ease-in-out hover:scale-110" href="/global/information/import-protocols?page=guyana" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/GY.svg"  className="img-fluid mr-3" height="15px" alt="Guyana flag" /> Guyana</span></Link>
           <Link className="transition duration-300 ease-in-out hover:scale-110" href="/global/information/import-protocols?page=jamaica" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/JM.svg"  className="img-fluid mr-3" height="15px" alt="Jamaica flag" /> Jamaica</span></Link>
           <Link className="transition duration-300 ease-in-out hover:scale-110" href="/global/information/import-protocols?page=kenya" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/KE.svg"  className="img-fluid mr-3" height="15px" alt="Kenya flag" /> Kenya</span></Link>
           <Link className="transition duration-300 ease-in-out hover:scale-110" href="/global/information/import-protocols?page=malawi" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/MW.svg"  className="img-fluid mr-3" height="15px" alt="Malawi flag" /> Malawi</span></Link>
           <Link className="transition duration-300 ease-in-out hover:scale-110" href="/global/information/import-protocols?page=pakistan" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/PK.svg"  className="img-fluid mr-3" height="15px" alt="Pakistan flag" /> Pakistan</span></Link>
           <Link className="transition duration-300 ease-in-out hover:scale-110" href="/global/information/import-protocols?page=paraguay" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/PY.svg"  className="img-fluid mr-3" height="15px" alt="Paraguay flag" /> Paraguay</span></Link>
           <Link className="transition duration-300 ease-in-out hover:scale-110" href="/global/information/import-protocols?page=russia" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/RU.svg"  className="img-fluid mr-3" height="15px" alt="Russia flag" /> Russia</span></Link>
           <Link className="transition duration-300 ease-in-out hover:scale-110" href="/global/information/import-protocols?page=sudan">
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/SS.svg"  className="img-fluid mr-3" height="15px" alt="Sudan flag" /> South Sudan</span></Link>
           <Link className="transition duration-300 ease-in-out hover:scale-110" href="/global/information/import-protocols?page=tanzania" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/TZ.svg"  className="img-fluid mr-3" height="15px" alt="Tanzania flag" /> Tanzania</span></Link>
           <Link className="transition duration-300 ease-in-out hover:scale-110" href="/global/information/import-protocols?page=uganda" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/UG.svg"  className="img-fluid mr-3" height="15px" alt="Uganda flag" /> Uganda</span></Link>
           <Link className="transition duration-300 ease-in-out hover:scale-110" href="/global/information/import-protocols?page=zambia" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/ZM.svg"  className="img-fluid mr-3" height="15px" alt="Zambia flag" /> Zambia</span></Link>
           <Link className="transition duration-300 ease-in-out hover:scale-110" href="/global/information/import-protocols?page=zimbabwe" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/ZW.svg"  className="img-fluid mr-3" height="15px" alt="Zimbabwe flag" /> Zimbabwe</span></Link>
           <Link className="transition duration-300 ease-in-out hover:scale-110" href="/global/information/import-protocols?page=ghana" >
                 <span className=" inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
             <img src="/assets/images/flags/GH.svg"  className="img-fluid mr-3" height="15px" alt="Ghana flag" /> Ghana</span></Link>
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
