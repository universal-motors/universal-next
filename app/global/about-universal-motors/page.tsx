import AboutUs from "@/components/pages/about/AboutUs";
import AntiSocialForces from "@/components/pages/about/AntiSocialForces";
import { getNotFoundError } from "next/dist/build/webpack/plugins/wellknown-errors-plugin/parseNotFoundError";
import PrivacyPolicy from "@/components/pages/about/PrivacyPolicy";
import DisclaimerPolicy from "@/components/pages/about/DisclaimerPolicy";
import CompanyProfile from "@/components/pages/about/CompanyProfile";
import GlobalOffices from "@/components/pages/about/GlobalOffices";
import VehicleShipmentCondition from "@/components/pages/help/VehicleShipmentCondition";
import SustainabilityPolicy from "@/components/pages/about/SustainabilityPolicy";
import SecurityExport from "@/components/pages/about/SecurityExport";
import TOS from "@/components/pages/about/TOS";
interface Props {
  // searchParams: {
  //     searchKey:"string",
  //     type:"string",
  searchParams: {
    page: string;
  };
}

export default async function ResultPage({ searchParams }: Props) {
  if (searchParams.page == "about-us" || searchParams.page == undefined) {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 ">
        <AboutUs />
      </div>
    );
  } else if (searchParams.page == "policy-against-anti-social") {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <AntiSocialForces />
      </div>
    );
  } else if (searchParams.page == "disclaimer-policy") {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <DisclaimerPolicy />
      </div>
    );
  } else if (searchParams.page == "privacy-policy") {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <PrivacyPolicy />
      </div>
    );
  } else if (searchParams.page == "company-profile") {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <CompanyProfile />
      </div>
    );
  } else if (searchParams.page == "global-offices") {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <GlobalOffices />
      </div>
    );
  } else if (searchParams.page == "sustainability-fundamental-policy") {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <SustainabilityPolicy />
      </div>
    );
  } else if (searchParams.page == "security-export-control") {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <SecurityExport />
      </div>
    );
  } else if (searchParams.page == "terms-of-service") {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <TOS />
      </div>
    );
  }
}
