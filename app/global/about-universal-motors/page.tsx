import AboutUs from "@/components/pages/about/AboutUs";
import AntiSocialForces from "@/components/pages/about/AntiSocialForces";
import {getNotFoundError} from "next/dist/build/webpack/plugins/wellknown-errors-plugin/parseNotFoundError";
interface Props {
    // searchParams: {
    //     searchKey:"string",
    //     type:"string",
    searchParams: {
       page:string
    }
}

export default async function ResultPage({searchParams}:Props) {

        if (searchParams.page == "about-us" || searchParams.page == undefined ){
            return(
                <div className="col-xl-10 col-lg-10 col-md-10 ">
                    <AboutUs/>
                </div>
            )
        }
        else if (searchParams.page == "policy-against-anti-social"){
            return(
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
                    <AntiSocialForces/>
                </div>
            )
        }


}
