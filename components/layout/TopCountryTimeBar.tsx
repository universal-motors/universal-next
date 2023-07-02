'use client'


import {useEffect, useState} from "react";

export default function TopCountryTimeBar(){

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