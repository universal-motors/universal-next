import '../globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import db from "@/utils/db";

export const metadata = {
  title: 'Universal Motors - Japanese Used Cars For Sale. Shipping Globally! ',
  description: 'Japanese Used Cars For Sale. Shipping Globally! ',
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bodyTypes = await GetBodyTypes();
  const locations = await GetLocations();
  const makes = await GetCarMakes();

  return (
    <html lang="en">
    <head>
      <meta content="text/html"/>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <meta name="theme-color" content="#03173d"/>
      {/*<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"*/}
      {/*      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossOrigin="anonymous"/>*/}
    </head>
      <body>
      <Header bodyTypes={bodyTypes} locations={locations} makes={makes}/>
        <section className="sidebar-menu">
          <div className="container-fluid">
            <div className="row">
              <Sidebar locations={locations} makes={makes}/>
              {children}
              {/*<SearchList />*/}
            </div>
          </div>
        </section>
      <Footer bodyTypes={bodyTypes} locations={locations} makes={makes}/>

      </body>
    </html>
  )
}
