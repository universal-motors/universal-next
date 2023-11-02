"use client";
import agent from "@/api/agent";
import Input from "@/components/Input";
import { PortMapping } from "@/models/Master/PortMapping";
import axios from "axios";
import { useSession } from "next-auth/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillDelete } from "react-icons/ai";

export default function ProfileForm() {
  const [countries, setCounties] = useState<any>([]);
  const [portMapping, setPortMapping] = useState<any>([]);
  const [ports, setPorts] = useState<any>([]);
  // let countries: any;
  // let portMapping: any;
  // let ports: any;
  const getData = async () => {
    const countries = await agent.LoadData.countryList();
    const portMapping = await agent.LoadData.portmapping();
    const ports = await agent.LoadData.portsList();
    setCounties(countries.data);
    setPortMapping(portMapping.data);
    setPorts(ports.data);
    console.log(portMapping.data, "<--");
  };
  useEffect(() => {
    getData();
  }, []);
  const { status, data: session } = useSession();
  const [countryID, setCountryID] = useState(0);
  const [mappedPorts, setMappedPorts] = useState<PortMapping[]>([]);
  const [portID, setPortID] = useState(0);
  const [Emails, setEmails] = useState<string[]>([""]);
  const [Phones, setPhones] = useState<string[]>([""]);
  const addEmail = () => {
    setEmails([...Emails, ""]);
  };
  console.log("-->", countryID);
  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value, portMapping);
    const destinationID = parseInt(event.target.value);
    setCountryID(destinationID);
    setPortID(0);
    const ports = portMapping.filter(
      (port: { countryID: number }) => port.countryID == destinationID
    );
    setMappedPorts(ports);
  };

  const handlePortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const changedPortID = parseInt(event.target.value);
    setPortID(changedPortID);
  };
  const updateEmail = (index: number, newValue: string) => {
    const updatedEmails = [...Emails];
    updatedEmails[index] = newValue;
    setEmails(updatedEmails);
  };

  const removeEmail = (index: number) => {
    const updatedEmails = [...Emails];
    updatedEmails.splice(index, 1);
    setEmails(updatedEmails);
  };
  const addPhone = () => {
    setPhones([...Phones, ""]);
  };

  const updatePhone = (index: number, newValue: string) => {
    const updatedPhones = [...Phones];
    updatedPhones[index] = newValue;
    setPhones(updatedPhones);
  };

  const removePhone = (index: number) => {
    const updatedPhones = [...Phones];
    updatedPhones.splice(index, 1);
    setPhones(updatedPhones);
  };
  type TProfile = {
    customerCode: string;
    name: string;
    lastname: string;
    email: string[];
    phoneNumber: string[];
    companyName: string;
    address: string;
    countryID: number;
    preferredPortId: string;
  };
  // interface CustomerSignUp {
  //   customerCode: string;
  //   name: string;
  //   lastname: string;
  //   companyName: string;
  //   address: string;
  //   countryID: number;
  //   preferredPortId: number;
  //   email: string;
  //   phoneNumber: string;
  //   // roles: string[];

  // }
  const form = useForm<TProfile>();
  const { register, control, formState, setValue, handleSubmit } = form;
  useEffect(() => {
    if (session && session?.user) {
      setValue("name", String(session.user?.name));
      setEmails([String(session.user?.email)]);
      checkEmail(String(session.user?.email));
    }
  }, [status]);

  const generateCustomerCode = async (countryID: number) => {
    return await agent.LoadData.generateCustomerCode(countryID);
  };
  // console.log(generateCustomerCode(157))
  const checkEmail = async (email: string) => {
    try {
      let res = await axios({
        method: "get",
        url: `customers/Exists/${email}`,
        // data: reqBody
      });
      console.log(res);
      // let data = res.data;
      // return data;
    } catch (error: any) {
      if (error && error.message === "Request failed with status code 404") {
        console.log(error.message);
      } // this is the main part. Use the response property from the error object

      // return error.response;
    }
  };
  useEffect(() => {
    setValue("email", Emails);
  }, [Emails]);

  useEffect(() => {
    setValue("phoneNumber", Phones);
  }, [Phones]);

  return (
    <div className="w-[90%] mx-auto mt-7">
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log(generateCustomerCode(157));
        })}
      >
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <Input
            label={"First name"}
            type="text"
            placeholder="John"
            htmlFor="name"
            register={{
              ...register("name", {
                required: " required",
              }),
            }}
          />
          <Input
            label={"Last name"}
            type="text"
            placeholder="Doe"
            htmlFor="lastname"
            register={{
              ...register("lastname", {
                required: " required",
              }),
            }}
          />
          <Input
            label={"Company Name"}
            type="text"
            placeholder="Company Name"
            register={{
              ...register("companyName", {
                required: " required",
              }),
            }}
            htmlFor="companyName"
          />
          <Input
            label={"Address"}
            type="text"
            placeholder="Address"
            register={{
              ...register("address", {
                required: " required",
              }),
            }}
            htmlFor="address"
          />
          {/* <Autocomplete
            list={countries.map((item) => item.name)}
            placeholder={"Country"}
            setValue={setValue}
            htmlFor={"countryID"}
            label="Country"
          /> */}
          <div className="w-full">
            <label
              htmlFor={"Country"}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </label>
            <select
              value={countryID}
              onChange={handleCountryChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <option value={0}>Select Country</option>
              {countries.map((country: any) => (
                // <SelectItem key={country.countryId} value={country.countryId.toString()}>{country.countryName}</SelectItem>
                <option key={country.countryId} value={country.countryId}>
                  {country.countryName}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <label
              htmlFor={"Port"}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Port
            </label>
            <select
              value={portID}
              onChange={handlePortChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <option value={0}>Select Port</option>
              {mappedPorts.map((port) => (
                <option key={port.portId} value={port.portId}>
                  {
                    ports.find(
                      (x: { portId: number }) => x.portId == port.portId
                    )?.portName
                  }
                </option>
              ))}
            </select>
          </div>
          {/* <Autocomplete
            list={["Left Hand", "Right Hand"]}
            placeholder={"port"}
            setValue={setValue}
            htmlFor={"port"}
            label="Port"
          /> */}
          <div className="w-full flex  flex-col justify-center items-center">
            {Emails.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex w-full items-end justify-center gap-2 mt-1"
                >
                  <Input
                    value={Emails[i]}
                    label={i >= 1 ? "Email " + (i + 1) : "Email"}
                    onChange={(e: any) => {
                      updateEmail(i, e.target.value);
                    }}
                    type="text"
                    placeholder={i >= 1 ? "Email " + (i + 1) : "Email"}
                    htmlFor={"email" + i}
                  />
                  {i >= 1 && (
                    <AiFillDelete
                      color="red"
                      size={"24px"}
                      style={{ marginBottom: "10px", cursor: "pointer" }}
                      onClick={() => {
                        removeEmail(i);
                      }}
                    />
                  )}
                </div>
              );
            })}
            {Emails && Emails.length < 3 && (
              <div
                onClick={addEmail}
                className=" cursor-pointer text-white mt-2 bg-[#221C63] hover:bg-[#857de0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Email
              </div>
            )}
          </div>

          <div className="w-full flex  flex-col justify-center items-center">
            {Phones.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex w-full items-end justify-center gap-2 mt-1"
                >
                  <Input
                    value={Phones[i]}
                    label={i >= 1 ? "Phone " + (i + 1) : "Phone"}
                    onChange={(e: any) => {
                      updatePhone(i, e.target.value);
                    }}
                    type="text"
                    placeholder={i >= 1 ? "Phone " + (i + 1) : "Phone"}
                    htmlFor={"Phone" + i}
                  />
                  {i >= 1 && (
                    <AiFillDelete
                      color="red"
                      size={"24px"}
                      style={{ marginBottom: "10px", cursor: "pointer" }}
                      onClick={() => {
                        removePhone(i);
                      }}
                    />
                  )}
                </div>
              );
            })}
            {Phones && Phones.length < 3 && (
              <div
                onClick={addPhone}
                className=" cursor-pointer text-white mt-2 bg-[#221C63] hover:bg-[#857de0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Phone
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex justify-center my-10">
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
