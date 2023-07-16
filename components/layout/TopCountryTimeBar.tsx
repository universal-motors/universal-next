'use client'


import {useEffect, useState} from "react";
import Navigation from "@/components/layout/Navigation";
import Image from "next/image";
import agent from "@/api/agent";
import PriceFormat from "@/utils/PriceFormat";
import NumberFormat from "@/utils/NumberFormat";
interface Props{
    stockCount : number
}
export default  function TopCountryTimeBar({stockCount}:Props){

    const [japanDateTime, setJapanDateTime] = useState('');
    const [uaeDateTime, setUAEDateTime] = useState('');
    const optionsDxb: Intl.DateTimeFormatOptions  = {
        timeZone: 'Asia/Dubai',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const optionsJap: Intl.DateTimeFormatOptions  = {
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };


    useEffect(() => {
        const interval = setInterval(() => {
            const japanDateTime = new Date().toLocaleString('en-US', optionsJap
            );
            const uaeDateTime = new Date().toLocaleString('en-US', optionsDxb);

            setJapanDateTime(japanDateTime);
            setUAEDateTime(uaeDateTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);



    return(
        <>
            <div className="firstsection col-lg-4 col-md-6 col-12 text-center">
                <div className="flex items-center mt-3 pl-44">

                    <span className=" inline-flex items-center gap-x-1.5 ml-3 rounded-md bg-gray-100 px-2 py-1 text-lg align-middle tracking-tight  font-medium text-gray-900">
                    <svg className="h-1.5 w-1.5 fill-indigo-500" viewBox="0 0 6 6" aria-hidden="true">
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                      TOTAL STOCK
                        <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/4/43/Sedan-car.svg" className="h-5 mr-2" /> :
                        <span className="ml-1 bg-gradient-to-r rounded-2xl p-1 from-orange-500 to-yellow-500">  <NumberFormat numbers={stockCount}/></span>
                  </span>

                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 text-center">
                <div className="flex items-center mt-3 pl-44">
                    <img alt="UAE Flag" src="/assets/images/flags/uae_flag.jpg" className="h-4 mr-2" />
                    <img alt="UAE Time" src="/assets/images/Clock.svg" className="h-5" />
                    <span className="inline-flex items-center gap-x-1.5 ml-3 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-900">
                    <svg className="h-1.5 w-1.5 fill-black" viewBox="0 0 6 6" aria-hidden="true">
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                        {uaeDateTime}
                  </span>

                </div>
            </div>
            <div className="secondsection col-lg-4 col-md-6 col-12 text-center">
                <div className="flex items-center mt-3">
                    <img alt="Japan Flag" src="/assets/images/flags/JP.svg"  className="h-4 mr-2" />
                    <img alt="Japan Time" src="/assets/images/Clock.svg" className="h-5"/>
                    <span className="inline-flex items-center gap-x-1.5 ml-3 rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                    <svg className="h-1.5 w-1.5 fill-red-500" viewBox="0 0 6 6" aria-hidden="true">
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                        {japanDateTime}
                  </span>
                </div>
            </div>

        </>
    )
}