// import '../globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "@/components/layout/Header";
import FrontSlider from "@/components/layout/FrontSlider";
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
    return await agent.LoadData.countryList();//return await prisma.tblMasterCountry.findMany({where: {IsActive:true}} );
}
const GetCarMakes = async () => {
    return await  agent.LoadData.carMakeList();//return await prisma.tblMakes.findMany({where: {isActive:true}} );
}



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const bodyTypes = await GetBodyTypes();
  const locations = await GetLocations();
  const makes = await GetCarMakes();

 return (

    <>
        <Header bodyTypes={bodyTypes} locations={locations} makes={makes}/>
        <FrontSlider />
        <section className="sidebar-menu">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar locations={locations} makes={makes}/>
                    {children}
                </div>
            </div>
        </section>
        <Footer bodyTypes={bodyTypes} locations={locations} makes={makes}/>
    </>



  )
}
