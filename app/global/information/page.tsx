import VehicleShipmentCondition from "@/components/pages/help/VehicleShipmentCondition";
import WhyUniversalMotors from "@/components/pages/help/WhyUniversalMotors";
import HowToBuy from "@/components/pages/help/HowToBuy";
import BankInformation from "@/components/pages/help/BankInformation";
import ExporInformation from "@/components/pages/help/ExporInformation";
import ExportImportServices from "@/components/pages/help/ExportImportServices";
import HowtoPay from "@/components/pages/help/HowtoPay";
import FAQSPage from "@/components/pages/help/FAQSPage";
interface Props {
  searchParams: {
    page: string;
  };
}

export default async function ResultPage({ searchParams }: Props) {
  if (
    searchParams.page == "why-choose-universal-motors" ||
    searchParams.page == undefined
  ) {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 ">
        <WhyUniversalMotors />
      </div>
    );
  } else if (searchParams.page == "how-to-buy") {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <HowToBuy />
      </div>
    );
  } else if (searchParams.page == "bank-information") {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <BankInformation />
      </div>
    );
  } else if (searchParams.page == "export-information") {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <ExporInformation />
      </div>
    );
  } else if (searchParams.page == "vehicle-shipment-condition") {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <VehicleShipmentCondition />
      </div>
    );
  } else if (searchParams.page == "export-import-services") {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <ExportImportServices />
      </div>
    );
  } else if (searchParams.page == "how-to-pay") {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <HowtoPay />
      </div>
    );
  } else if (searchParams.page == "faqs") {
    return (
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <FAQSPage />
      </div>
    );
  }
}
