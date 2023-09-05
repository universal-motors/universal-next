import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

import agent from "@/api/agent";

export const metadata = {
  title: 'Universal Motors - Japanese Used Cars For Sale. Shipping Globally! ',
  description: 'Japanese Used Cars For Sale. Shipping Globally! ',
}


const GetBodyTypes = async () => {
  return await agent.LoadData.bodyTypeList();// db.tblBodyTypes.findMany({where: {isActive:true}});
}
const GetLocations = async () => {
  const result = await agent.LoadData.countryList();//return await prisma.tblMasterCountry.findMany({where: {IsActive:true}} );
  return result.data;
}
const GetCarMakes = async () => {
  return await  agent.LoadData.carMakeList();//return await prisma.tblMakes.findMany({where: {isActive:true}} );
}
const GetStockCount = async () => {
  return await agent.LoadData.stockCount();
  //db.tblMasterCountry.findMany({where: {IsActive:true}} );
}

const GetPorts = async () => {
  const result = await  agent.LoadData.portsList();
  return result.data;
}

const GetMappingPort = async () => {
  const result = await  agent.LoadData.portmapping();
  return result.data;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bodyTypes = await GetBodyTypes();
  const locations = await GetLocations();
  const inventoryLocation = locations.filter(x => x.isInventoryLocation && x.isActive);
  const makes = await GetCarMakes();
  const stockCount = await GetStockCount();
  const portList = await GetPorts();
  const portMap = await GetMappingPort();

  return (

    <>

        <Header ports={portList} portMapping={portMap} stockCount={stockCount.data} locations={locations}/>
        <section className="sidebar-menu">
          <div className="container-fluid">
            <div className="row">
              <Sidebar  locations={inventoryLocation} makes={makes.data}/>
              {children}
            </div>
          </div>
        </section>
        <Footer bodyTypes={bodyTypes.data} locations={inventoryLocation} makes={makes.data}/>


    </>



  )
}

