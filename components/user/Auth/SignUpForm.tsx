'use client'
import {Controller, useForm} from 'react-hook-form'
import {Customer} from "@/models/Customer";
import {SearchSelect, SearchSelectItem} from "@tremor/react";
import {Country} from "@/models/Master/Country";
import {Ports} from "@/models/Master/Ports";
import {PortMapping} from "@/models/Master/PortMapping";

interface Props {
    countries: Country[], //tblBodyTypes[],
    ports: Ports[]//tblMakes[],
    portMapping: PortMapping[]
}

function SignUp({countries, ports,portMapping}: Props) {
    const {register, handleSubmit} = useForm<Customer>();
    return (
        <form onSubmit={handleSubmit((data)=>{
            console.log(data)
        })}>
            <input {...register("firstname")} placeholder="First Name" />
            <input {...register("lastname")} placeholder="Last Name" />
            <input {...register("username")} placeholder="Username" />
            <input {...register("email")} type="email"  placeholder="Email" />
            <input {...register("phone")} placeholder="Phone Number" />
            {/*<Controller*/}
            {/*    as={*/}
            {/*        <SearchSelect value={makeId} onValueChange={handleValueChange}>*/}
            {/*            {*/}
            {/*                countries*/}
            {/*                    .map(country=> (*/}
            {/*                        <SearchSelectItem key={country.countryId} value={country.countryId.toString()} >*/}
            {/*                            {country.countryName} { }*/}
            {/*                        </SearchSelectItem>*/}
            {/*                    ))*/}
            {/*            }*/}
            {/*        </SearchSelect>*/}
            {/*    }*/}
            {/*    name="countryID"*/}
            {/*    control={...register("countryID")}*/}
            {/*    defaultValue="0"*/}
            {/*/>*/}
            {/*<Controller*/}
            {/*    as={*/}
            {/*        <SearchSelect value={makeId} onValueChange={handleValueChange}>*/}
            {/*            {*/}
            {/*                ports*/}
            {/*                    .map(port=> (*/}
            {/*                        <SearchSelectItem key={port.portId} value={port.portId.toString()} >*/}
            {/*                            {port.portName} { }*/}
            {/*                        </SearchSelectItem>*/}
            {/*                    ))*/}
            {/*            }*/}
            {/*        </SearchSelect>*/}
            {/*    }*/}
            {/*    name="prefferedPortID"*/}
            {/*    control={...register("prefferedPortID")}*/}
            {/*    defaultValue="0"*/}
            {/*/>*/}
            <input {...register("password")} placeholder="Password" />

            <button type="submit">Signup</button>
        </form>
    );
}

export default SignUp;