'use client'
import {IoCarSport, IoCarSportSharp} from "react-icons/io5";
import {FcSearch} from "react-icons/fc";
import {useRouter} from "next/navigation";
import {FormEvent, useState, useTransition} from "react";
import {TbTruck} from "react-icons/tb";


export default function SearchBar() {
    const router = useRouter();
    const [searchKey,setSearchKey] = useState("");


    const onHandleSubmitCar = (event:FormEvent) => {
        event.preventDefault()
        if(searchKey==="") return;

        router.push(`/global/results/cars/?searchTerm=${searchKey}`)
        setSearchKey("")

    }

    const onHandleSubmitTruck = (event:FormEvent) => {
        event.preventDefault()
        if(searchKey==="") return;

        router.push(`/global/results/trucks/?searchTerm=${searchKey}`)
        setSearchKey("")

    }


    return (
        <div>
           <form>
             <div className="mt-2 flex rounded-md shadow-sm">

                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <FcSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                        className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Stock Code, Listing Title, Year of Listing, Model Code ..."
                        value={searchKey}
                        name="searchKey"
                        onChange={(e)=>setSearchKey(e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    onClick={onHandleSubmitCar}
                    className="transition duration-300 ease-in-out hover:scale-110 bg-gray-200 relative -ml-px inline-flex items-center gap-x-1.5  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    {/*{isPending && "Searching ... "}*/}
                    {/*{!isPending && <FcSearch className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />}*/}
                    Search<IoCarSportSharp className="-ml-0.5 h-5 w-5 text-blue-600" aria-hidden="true" />

                </button>
                 <button
                     type="button"
                     onClick={onHandleSubmitTruck}
                     className="transition duration-300 ease-in-out hover:scale-110 bg-yellow-400 relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                 >
                     {/*{isPending && "Searching ... "}*/}
                     {/*{!isPending && <FcSearch className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />}*/}
                     Search<TbTruck className="-ml-0.5 h-5 w-5 text-red-800" aria-hidden="true" />

                 </button>

            </div>
            </form>
        </div>
    )
}

