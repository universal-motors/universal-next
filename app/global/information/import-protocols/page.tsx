import GhanaImport from "@/components/pages/import-protocols/GhanaImport";
import ZimbabweImport from "@/components/pages/import-protocols/ZimbabweImport";
import UgandaImport from "@/components/pages/import-protocols/UgandaImport";
import SouthSudanImport from "@/components/pages/import-protocols/SouthSudanImport";
import RussiaImport from "@/components/pages/import-protocols/RussiaImport";
import ChileImport from "@/components/pages/import-protocols/ChileImport";
import CongoImport from "@/components/pages/import-protocols/CongoImport";
import GuyanaImport from "@/components/pages/import-protocols/GuyanaImport";
import JamaicaImport from "@/components/pages/import-protocols/JamaicaImport";
import KenyaImport from "@/components/pages/import-protocols/KenyaImport";
import MalawiImport from "@/components/pages/import-protocols/MalawiImport";
import PakistanImport from "@/components/pages/import-protocols/PakistanImport";
import ParaguayImport from "@/components/pages/import-protocols/ParaguayImport";
import TanzaniaImport from "@/components/pages/import-protocols/TanzaniaImport";
import ZambiaImport from "@/components/pages/import-protocols/ZambiaImport";
interface Props {
  searchParams: {
    page: string;
  };
}

export default async function ResultPage({ searchParams }: Props) {
  if (searchParams.page == "ghana" || searchParams.page == undefined) {
    return (
      <div className='col-xl-10 col-lg-10 col-md-10 '>
        <GhanaImport />
      </div>
    );
  } else if (searchParams.page == "zimbabwe") {
    return (
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection'>
        <ZimbabweImport />
      </div>
    );
  } else if (searchParams.page == "zambia") {
    return (
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection'>
        <ZambiaImport />
      </div>
    );
  } else if (searchParams.page == "uganda") {
    return (
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection'>
        <UgandaImport />
      </div>
    );
  } else if (searchParams.page == "tanzania") {
    return (
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection'>
        <TanzaniaImport />
      </div>
    );
  } else if (searchParams.page == "sudan") {
    return (
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection'>
        <SouthSudanImport />
      </div>
    );
  } else if (searchParams.page == "russia") {
    return (
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection'>
        <RussiaImport />
      </div>
    );
  } else if (searchParams.page == "chile") {
    return (
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection'>
        <ChileImport />
      </div>
    );
  } else if (searchParams.page == "congo") {
    return (
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection'>
        <CongoImport />
      </div>
    );
  } else if (searchParams.page == "guyana") {
    return (
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection'>
        <GuyanaImport />
      </div>
    );
  } else if (searchParams.page == "jamaica") {
    return (
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection'>
        <JamaicaImport />
      </div>
    );
  } else if (searchParams.page == "kenya") {
    return (
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection'>
        <KenyaImport />
      </div>
    );
  } else if (searchParams.page == "malawi") {
    return (
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection'>
        <MalawiImport />
      </div>
    );
  } else if (searchParams.page == "pakistan") {
    return (
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection'>
        <PakistanImport />
      </div>
    );
  } else if (searchParams.page == "paraguay") {
    return (
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection'>
        <ParaguayImport />
      </div>
    );
  }
}
