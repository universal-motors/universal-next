import { Autocomplete } from "@/components/AutoComplete";
import Input from "@/components/Input";

export default function ProfileForm() {
    return (
        <div className="w-[90%] mx-auto mt-7">
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <Input label={'First name'} type="text" placeholder="John" htmlFor="first_name" />
                    <Input label={'Last name'} type="text" placeholder="Doe" htmlFor="last_name" />
                    <Input label={'Address'} type="text" placeholder="Address" htmlFor="address" />
                    <Input label={'Address (contd)'} type="text" placeholder="Address (contd)" htmlFor="Address(contd)" />
                    <Input label={'City'} type="text" placeholder="City" htmlFor="city" />
                    <Input label={'State'} type="text" placeholder="State" htmlFor="state" />
                    <Input label={'Zip Code'} type="text" placeholder="Zip Code" htmlFor="zip_code" />
                    <Autocomplete list={[
                        "Left Hand",
                        "Right Hand",
                    ]} placeholder={"Import Country"} htmlFor={"import_country"} label="Import Country" />
                    <Autocomplete list={[
                        "Left Hand",
                        "Right Hand",
                    ]} placeholder={"port"} htmlFor={"port"} label="Port" />
                </div >
                <div className="w-full flex justify-center my-6" >

                    <button type="submit" className=" text-white bg-[#221C63] hover:bg-[#857de0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                </div>
            </form >
        </div>


    )
}
