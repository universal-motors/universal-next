"use client";
import { Autocomplete } from "@/components/AutoComplete";
import Input from "@/components/Input";
import { countries } from "@/lib/utils";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

export default function ProfileForm() {
  const [Emails, setEmails] = useState<string[]>([""]);
  const [Phones, setPhones] = useState<string[]>([""]);
  const addEmail = () => {
    setEmails([...Emails, ""]);
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
  return (
    <div className='w-[90%] mx-auto mt-7'>
      <form>
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <Input
            label={"First name"}
            type='text'
            placeholder='John'
            htmlFor='first_name'
          />
          <Input
            label={"Last name"}
            type='text'
            placeholder='Doe'
            htmlFor='last_name'
          />
          <Input
            label={"Company Name"}
            type='text'
            placeholder='Company Name'
            htmlFor='company_name'
          />
          <Input
            label={"Address"}
            type='text'
            placeholder='Address'
            htmlFor='address'
          />
          <Autocomplete
            list={countries.map((item) => item.name)}
            placeholder={"Country"}
            htmlFor={"country"}
            label='Country'
          />
          <Autocomplete
            list={["Left Hand", "Right Hand"]}
            placeholder={"port"}
            htmlFor={"port"}
            label='Port'
          />
          <div className='w-full flex  flex-col justify-center items-center'>
            {Emails.map((item, i) => {
              return (
                <div
                  key={i}
                  className='flex w-full items-end justify-center gap-2 mt-1'
                >
                  <Input
                    value={Emails[i]}
                    label={i >= 1 ? "Email " + (i + 1) : "Email"}
                    onChange={(e: any) => {
                      updateEmail(i, e.target.value);
                    }}
                    type='text'
                    placeholder={i >= 1 ? "Email " + (i + 1) : "Email"}
                    htmlFor={"email" + i}
                  />
                  {i >= 1 && (
                    <AiFillDelete
                      color='red'
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
                className=' cursor-pointer text-white mt-2 bg-[#221C63] hover:bg-[#857de0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Add Email
              </div>
            )}
          </div>

          <div className='w-full flex  flex-col justify-center items-center'>
            {Phones.map((item, i) => {
              return (
                <div
                  key={i}
                  className='flex w-full items-end justify-center gap-2 mt-1'
                >
                  <Input
                    value={Phones[i]}
                    label={i >= 1 ? "Phone " + (i + 1) : "Phone"}
                    onChange={(e: any) => {
                      updatePhone(i, e.target.value);
                    }}
                    type='text'
                    placeholder={i >= 1 ? "Phone " + (i + 1) : "Phone"}
                    htmlFor={"Phone" + i}
                  />
                  {i >= 1 && (
                    <AiFillDelete
                      color='red'
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
                className=' cursor-pointer text-white mt-2 bg-[#221C63] hover:bg-[#857de0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Add Phone
              </div>
            )}
          </div>
        </div>
        <div className='w-full flex justify-center my-10'>
          <button
            type='submit'
            className=' text-white bg-[#221C63] hover:bg-[#857de0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
