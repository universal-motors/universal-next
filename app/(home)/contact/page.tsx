import InquiryForm from "@/app/global/results/[id]/InquiryForm";
import ContactUs from "@/components/pages/contact/ContactUs";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
                <div className="col-md-8 col-sm-4 col-2">
                <ContactUs  />
                </div>

            </div>


        </>
    )
}