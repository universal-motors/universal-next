'use client'
import {Controller, useForm} from 'react-hook-form'
import {Customer} from "@/models/Customer";
import {Country} from "@/models/Master/Country";
import {Ports} from "@/models/Master/Ports";
import {PortMapping} from "@/models/Master/PortMapping";



interface Props {
    countries: Country[], //tblBodyTypes[],
    ports: Ports[]//tblMakes[],
    portMapping: PortMapping[]
}

function SignUp({countries, ports,portMapping}: Props) {
    const form = useForm<Customer>();
    const {register,control,formState, handleSubmit} = form;
    const {errors} = formState;


    return (
        <form onSubmit={handleSubmit((data)=>{
            console.log(data)
        })}>
            <input {...register("firstname")} placeholder="First Name" />
            <input {...register("lastname")} placeholder="Last Name" />
            <input {...register("username", {
                    required: "Username is required",
            })} placeholder="Username" />
            <p>{errors.username?.message}</p>

            <input {...register("email",{
                required: "Email is required",
                pattern:{
                    value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                    message: "Invalid email address"
                }
            })} type="email"  placeholder="Email" />
            <p>{errors.username?.message}</p>

            <input {...register("phone",{
                required: "Phone number is required",
            })} placeholder="Phone Number" />

            <select {...register("countryID")} placeholder="Select Country">
                {/* Example country options; you can expand this list */}
                {
                countries
                .map(country=> (
                    <option key={country.countryId} value={country.countryId}>{country.countryName}</option>
                ))

                }

            </select>

            <select {...register("prefferedPortID")} placeholder="Select Port">
                {/* Example country options; you can expand this list */}
                {
                    ports
                        .map(country=> (
                            <option key={country.portId} value={country.portId}>{country.portName}</option>
                        ))

                }

            </select>

            <input {...register("password")} placeholder="Password" />

            <button type="submit">Signup</button>
        </form>
    );
}

export default SignUp;