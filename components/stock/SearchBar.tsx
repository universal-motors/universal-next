'use client'
import {IoCarSport} from "react-icons/io5";
import {FcSearch} from "react-icons/fc";
import {useRouter} from "next/navigation";
import {FormEvent, useState} from "react";
import {Form} from "react-bootstrap";
import {experimental_useFormStatus as useFormStatus} from 'react-dom'

export default function SearchBar() {
    const router = useRouter();
    const [searchKey,setSearchKey] = useState("");
    const {pending} = useFormStatus();

    const onHandleSubmit = (event:FormEvent) => {
        event.preventDefault()
        if(searchKey==="") return;

        router.push(`/global/results?searchKey=${searchKey}`)
        setSearchKey("")
    }
    return (
        <div>
            <form onSubmit={onHandleSubmit}>
            <div className="mt-2 flex rounded-md shadow-sm">

                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <IoCarSport className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                        className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Stock Code, Listing Title, Year of Listing ..."
                        value={searchKey}
                        onChange={(e)=>setSearchKey(e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    className="bg-yellow-400 relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    {pending && "Searching ... "}
                    {!pending && <FcSearch className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />}

                </button>

            </div>
            </form>
        </div>
    )
}

