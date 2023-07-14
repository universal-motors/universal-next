
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

import {prisma} from "@/utils/db";
import {tblBodyTypes, tblCars, tblMakes, tblMasterCountry} from ".prisma/client";

export const metadata = {
  title: 'Universal Motors - Japanese Used Cars For Sale. Shipping Globally! ',
  description: 'Japanese Used Cars For Sale. Shipping Globally! ',
}


const GetBodyTypes = async () => {
  return await prisma.tblBodyTypes.findMany({where: {isActive:true}});
}
const GetLocations = async () => {
  return await prisma.tblMasterCountry.findMany({where: {IsActive:true}} );
}
const GetCarMakes = async () => {
  return await prisma.tblMakes.findMany({where: {isActive:true}} );
}

const GetStock = async () => {
  return await prisma.tblCars.findMany({where: {IsActive:true}});
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bodyTypes: tblBodyTypes[] = await GetBodyTypes();
  const locations: tblMasterCountry[] = await GetLocations();
  const makes: tblMakes[] = await GetCarMakes();
  //const stockCount:number = await GetStockCount();
  const stocks:tblCars[] = await GetStock();
  return (

    <>
       <Header stock={stocks} locations={locations} />
        <section className="sidebar-menu">
          <div className="container-fluid">
            <div className="row">
              <Sidebar stocks={stocks} locations={locations} makes={makes}/>
              {children}
            </div>
          </div>
        </section>
        <Footer bodyTypes={bodyTypes} locations={locations} makes={makes}/>


    </>



  )
}
