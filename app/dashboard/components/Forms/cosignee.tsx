"use client";
import { Autocomplete } from "@/components/AutoComplete";
import Input from "@/components/Input";
import { countries } from "@/lib/utils";
import { useForm } from "react-hook-form";

export default function CosigneeForm() {
  const form = useForm<any>();
  const { register, control, formState, setValue, handleSubmit } = form;
  return (
    <div className="w-[90%] mx-auto mt-7">
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <Input
            label={"Consignee Name"}
            type="text"
            placeholder="Consignee Name"
            htmlFor="consignee_name"
          />
          <Input
            label={"Notify Name"}
            type="text"
            placeholder="Notify Name"
            htmlFor="notify_name"
          />
          <Autocomplete
            list={countries.map((item) => item.name)}
            placeholder={"Consignee Country"}
            htmlFor={"consignee_country"}
            setValue={setValue}
            label="Consignee Country"
          />
          <Autocomplete
            list={countries.map((item) => item.name)}
            placeholder={"Notify Country"}
            htmlFor={"notify_country"}
            setValue={setValue}
            label="Notify Country"
          />
          <Input
            type="text"
            placeholder={"Consignee City"}
            htmlFor={"consignee_city"}
            label="Consignee City"
          />
          <Input
            type="text"
            placeholder={"Notify City"}
            htmlFor={"notify_city"}
            label="Notify City"
          />
          <Input
            label={"Consignee Address"}
            type="text"
            placeholder="Consignee Address"
            htmlFor="consignee_Address"
          />
          <Input
            label={"Notify Address"}
            type="text"
            placeholder="Notify Address"
            htmlFor="notify_Address"
          />
          <Input
            label={"Consignee Phone"}
            type="text"
            placeholder="Consignee Phone"
            htmlFor="consignee_phone"
          />
          <Input
            label={"Notify Phone"}
            type="text"
            placeholder="Notify Phone"
            htmlFor="notify_phone"
          />
          <Input
            label={"Consignee Email"}
            type="text"
            placeholder="Consignee Email"
            htmlFor="consignee_email"
          />
          <Input
            label={"Notify Email"}
            type="text"
            placeholder="Notify Email"
            htmlFor="notify_email"
          />
        </div>
        <div className="w-full flex justify-center my-6">
          <button
            type="submit"
            className=" text-white bg-[#221C63] hover:bg-[#857de0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
