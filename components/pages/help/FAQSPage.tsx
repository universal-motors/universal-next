'use client'
import Link from "next/link";
import FaqComponent from "@/components/layout/FaqComponent";

export default function FAQSPage (){
    return(
        <>
            <div>
                <title>Frequently Asked Questions (F.A.Qs) - Universal Motors Ltd.</title>
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
                   <FaqComponent/>
                </div>
            </div>

        </>
    )
}