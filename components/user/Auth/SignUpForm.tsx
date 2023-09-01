'use client'
import {Controller, useForm} from 'react-hook-form'
import {Customer} from "@/models/Customer";
import {Country} from "@/models/Master/Country";
import {Ports} from "@/models/Master/Ports";
import {PortMapping} from "@/models/Master/PortMapping";
import {FormEvent} from "react";



interface Props {
    countries: Country[], //tblBodyTypes[],
    ports: Ports[]//tblMakes[],
    portMapping: PortMapping[]
    setSignIn: (value: boolean) => void;
}

function SignUp({countries, ports,portMapping,setSignIn}: Props) {
    const form = useForm<Customer>();
    const {register,control,formState, handleSubmit} = form;
    const {errors} = formState;

    const handleSignIn = (event:FormEvent) => {
        // event.preventDefault()
        setSignIn(true)
    }




    return (
        <>
        <div className="p-3">
            <p className="text-sm text-gray-500">
                <form onSubmit={handleSubmit((data)=>{
                    console.log(data)
                })}>
                    <div className=" flex justify-between text-sm">
                        <input {...register("firstname")} type="text" className="border rounded p-2 py-3 w-[49%]" placeholder="First Name" required/>
                        <input {...register("lastname")}  type="text" className="border rounded p-2 py-3 w-[49%]" placeholder="Last Name" />
                    </div>
                    <div className="flex justify-between text-sm">
                        <label className=" rounded p-2 w-[49%]"  htmlFor="username" >Your Country</label>
                        <label className=" rounded p-2 w-[49%]"  htmlFor="username" >Preffered Port</label>
                    </div>
                    <div className="flex justify-between text-sm">
                        <select className="border rounded p-2 w-[49%]" {...register("countryID")} placeholder="Select Country">
                            {
                                countries
                                    .map(country=> (
                                        <option key={country.countryId} value={country.countryId}>{country.countryName}</option>
                                    ))

                            }
                        </select>
                        <select className="border rounded p-2 w-[49%]"  {...register("prefferedPortID")} placeholder="Select Port">
                            {
                                ports
                                    .map(country=> (
                                        <option key={country.portId} value={country.portId}>{country.portName}</option>
                                    ))

                            }
                        </select>
                    </div>
                    <div className="my-3 flex justify-between text-sm">
                        <input {...register("email",{
                            required: "Email is required",
                            pattern:{
                                value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                                message: "Invalid email address"
                            }
                        })} type="email"  className="border rounded p-2 w-[49%]" placeholder="Email Address" required/>
                        <input {...register("phone",{
                            required: "Phone number is required",
                        })} placeholder="Phone Number"  className="border rounded p-2 py-3 w-[49%]" />
                    </div>
                    <div className="my-3 flex justify-between text-sm">
                        <input {...register("username", {
                            required: "Username is required",
                        })} type="text" className="border rounded p-2 w-[49%]" placeholder="Username" required/>
                        <input {...register("password")} type="password"  className="border rounded p-2 py-3 w-[49%]" placeholder="Password" required/>
                    </div>
                    <div className="my-3 flex justify-between text-sm">
                    <button
                        className="px-4 py-2 rounded-xl text-white m-0 bg-red-500 hover:bg-red-600 transition"
                        type="submit">Signup</button>
                    <button
                        onClick={handleSignIn}
                        className="px-4 py-2 rounded-xl bg-neutral-50 hover:bg-blue-100  transition"
                    >Existing Customer?
                        Sign In</button>
                    </div>
                </form>

            </p>
        </div>










        </>
    );
}

export default SignUp;