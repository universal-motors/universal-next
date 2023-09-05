'use client'
import {Controller, useForm} from 'react-hook-form'
import {CustomerSignUp} from "@/models/Customer";
import {Country} from "@/models/Master/Country";
import {Ports} from "@/models/Master/Ports";
import {PortMapping} from "@/models/Master/PortMapping";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {signIn} from "next-auth/react";



interface Props {
    countries: Country[], //tblBodyTypes[],
    ports: Ports[]//tblMakes[],
    portMapping: PortMapping[]
    setSignIn: (value: boolean) => void;
}

function SignUp({countries, ports,portMapping,setSignIn}: Props) {
    const [countryID, setCountryID] = useState(0);
    const [portID, setPortID] = useState(0);
    const [mappedPorts, setMappedPorts] = useState<PortMapping[]>([]);
    const [countryCode, setCountryCode] = useState("");
    const form = useForm<CustomerSignUp>();
    const {register,control,formState, handleSubmit} = form;
    const {errors} = formState;
    const role = ["Customer",]

    const handleSignIn = (event:FormEvent) => {
        // event.preventDefault()
        setSignIn(true)
    }

    const handleCountryChange = (event:ChangeEvent<HTMLSelectElement>) => {
        const destinationID =parseInt(event.target.value)
        setCountryID(destinationID)
        setPortID(0)
       const ports = portMapping.filter(port=> port.countryID == destinationID);
        setMappedPorts(ports)
        setCountryCode(countries.filter(x=>x.countryId==destinationID)[0].countryCode)

    };





    return (
        <>
        <div className="p-3">
            <div className="text-sm text-gray-500">
                <form onSubmit={handleSubmit(async (data) => {
                    data.roles = ["Customer",]
                    //console.log(data)
                    try {
                        const response = await fetch('https://api20230805195433.azurewebsites.net/api/authentication',//agent.basUrl+'authentication/',
                            {
                                method:'POST',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify(data)
                            }
                        )
                        console.log(response)
                        if (!response.ok){
                            throw new Error("Something went wrong, we cant register you at the moment")
                        }

                        await signIn('credentials', {
                            username: data.username,
                            password: data.password,
                        })

                        console.log("Account created successfully");


                    }catch (e) {
                        console.log(e)
                    }
                }
                )}>

                    <div className=" flex justify-between text-sm">
                        <input {...register("firstname")} type="text" className="border rounded p-2 py-3 w-[49%]" placeholder="First Name" required/>
                        <input {...register("lastname")}  type="text" className="border rounded p-2 py-3 w-[49%]" placeholder="Last Name" />
                    </div>
                    {/*<div className="flex justify-between text-sm">*/}
                    {/*    <label className=" rounded p-2 w-[49%]"  htmlFor="username" >Your Country</label>*/}
                    {/*    <label className=" rounded p-2 w-[49%]"  htmlFor="username" >Preffered Port</label>*/}
                    {/*</div>*/}
                    <div className="flex justify-between text-sm">
                       <select className="mt-3 border rounded p-2 w-[49%]" {...register("countryID")} onChange={handleCountryChange} placeholder="Select Country">
                            <option value={0}>Select Country</option>
                            {
                                countries
                                    .map(country=> (
                                        <option key={country.countryId}  value={country.countryId}>{country.countryName}</option>
                                    ))
                            }
                        </select>
                        <select  value={portID} className="mt-3 border rounded p-2 w-[49%]"  aria-expanded="true" aria-haspopup="true">
                            <option  value={0}>Select Port</option>
                            {
                                mappedPorts
                                    .map(port=> (
                                        <option key={port.portId} value={port.portId}>{ports.find(x=>x.portId==port.portId)?.portName}</option>
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
                        <input {...register("phoneNumber",{
                            required: "Phone number is required",
                        })} placeholder="Phone Number" defaultValue={countryCode}  className="border rounded p-2 py-3 w-[49%]" />
                    </div>
                    <div className="my-3 flex justify-between text-sm">
                        <input {...register("username", {
                            required: "Username is required",
                        })} type="text" className="border rounded p-2 w-[49%]" placeholder="Username" required/>
                        <input {...register("password")} type="password"  className="border rounded p-2 py-3 w-[49%]" placeholder="Password" required/>
                        <input {...register("confirmPassword")} type="password"  className="border rounded p-2 py-3 w-[49%]" placeholder="Confirm Password" required/>
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

            </div>
        </div>










        </>
    );
}

export default SignUp;