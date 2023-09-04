"use client";

import { Tab } from "@headlessui/react";
import { SearchSelect, SearchSelectItem } from "@tremor/react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";
import {useStore} from "@/store/store";

interface TabType {
  name: string;
  href: string;
  current: boolean;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default async function Dashboard() {
  //const session = await getServerSession(options)
  const {userStore} = useStore();
  console.log(userStore.isLoggedIn)
  const tabs: TabType[] = [
    { name: "My Profile", href: "#", current: true },
    { name: "My Account Info", href: "#", current: false },
    { name: "My cosignee Details", href: "#", current: false },
    { name: "My Favourites", href: "#", current: false },
    { name: "Inquiry & Bid List", href: "#", current: false },
    { name: "Reserved Vechile", href: "#", current: false },
    { name: "Purchased Vehicle", href: "#", current: false },
  ];
  return (
      <>
        {

          userStore.isLoggedIn ? (
              //true ? (
              <div className="flex flex-row h-screen w-screen">
                <div className="col-lg-2 bg-black flex flex-none flex-col justify-between p-6 text-white">
                  <div>
                    <a href="/">
                      <img
                          src="https://www.universalmotorsltd.com/assets/images/logo.png"
                          className="w-20 mx-auto"
                          alt="Logo"
                      />
                    </a>
                  </div>
                  {/* <div className="space-y-2">
          <ul className="h-200">
            <li>Account Password</li>
            <li>Account Password</li>
            <li>Account Password</li>
            <li>Account Password</li>
            <li>Account Password</li>
          </ul>
        </div> */}
                  <nav className="space-y-2">
                    <a
                        href="#"
                        className="block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white"
                    >
                      Change Password
                    </a>

                    <a
                        href="#"
                        className="block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white"
                    >
                      Account Information
                    </a>

                    <a
                        href="#"
                        className="block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white"
                    >
                      Contact Information
                    </a>

                    <a
                        href="#"
                        className="block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white"
                    >
                      Connect Accounts
                    </a>

                    <a
                        href="#"
                        className="block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white"
                    >
                      Preferences
                    </a>

                    <a
                        href="#"
                        className="block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white"
                    >
                      Account Activity
                    </a>
                  </nav>
                  <div className="w-48 h-12 px-[46px] py-2 bg-[#474747] bg-opacity-20 rounded-lg justify-start items-center gap-3 inline-flex">
                    <div className="justify-start items-center gap-3 flex">
                      <div className="w-5 h-5 relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                          <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="w-[68px] h-6 text-white text-lg font-medium leading-normal">
                      Logout
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-2 bg-pink-200">B</div> */}
                <div className="col-lg-10">
                  <div className="flex justify-end">
                    {/* Bell icon */}
                    <div className="flex flex-row justify-end space-x-10">
                      <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                          <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                          />
                        </svg>
                      </button>
                      <form className="flex flex-row items-center rounded-xl bg-white py-3 pr-6 pl-8 drop-shadow-card">
                        <label htmlFor="search" className="w-full max-w-xs ">
                          <input
                              placeholder="Search"
                              className="focus-visible:outline-none"
                          />
                        </label>
                        <button type="submit">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                          >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* Tabs */}

                  <Tab.Group>
                    <Tab.List className="flex space-x-1 my-1 rounded-xl bg-blue-900/20 p-1">
                      {tabs.map((tab) => (
                          <Tab
                              key={tab.name}
                              className={({ selected }) =>
                                  classNames(
                                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                      selected
                                          ? "bg-white shadow"
                                          : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                  )
                              }
                          >
                            {tab.name}
                          </Tab>
                      ))}
                    </Tab.List>

                    {/* Tabs data */}

                    <Tab.Panels>
                      <Tab.Panel
                          className={classNames(
                              "rounded-xl bg-white p-3",
                              "ring-white ring-opacity-80 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                          )}
                      >
                        <Form>
                          <div className="row showcase-Box carform">
                            <div className="col-lg-6">
                              <label className="mb-2">*First Name</label>
                              <input
                                  className="w-full outline-none text-left whitespace-nowrap truncate rounded-tremor-default focus:ring-2 transition duration-100 text-tremor-default shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted dark:shadow-dark-tremor-input dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted pl-4 pr-8 py-2 border placeholder:text-tremor-content dark:placeholder:text-tremor-content bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis border-tremor-border dark:border-dark-tremor-border"
                                  placeholder="Select..."
                                  id="headlessui-combobox-input-:rc:"
                                  role="combobox"
                                  aria-expanded="false"
                                  aria-autocomplete="list"
                                  data-headlessui-state=""
                                  type="text"
                              ></input>
                            </div>
                            <div className="col-lg-6">
                              <label className="mb-2">*Last Name</label>
                              <input
                                  className="w-full outline-none text-left whitespace-nowrap truncate rounded-tremor-default focus:ring-2 transition duration-100 text-tremor-default shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted dark:shadow-dark-tremor-input dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted pl-4 pr-8 py-2 border placeholder:text-tremor-content dark:placeholder:text-tremor-content bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis border-tremor-border dark:border-dark-tremor-border"
                                  placeholder="Select..."
                                  id="headlessui-combobox-input-:rc:"
                                  role="combobox"
                                  aria-expanded="false"
                                  aria-autocomplete="list"
                                  data-headlessui-state=""
                                  type="text"
                              ></input>
                            </div>
                            {/* <div className="col-lg-12">
                    <label className="mb-2">Account Type</label>
                    <p>Personal</p>
                  </div> */}
                            <div className="col-lg-6">
                              <label className="mb-2">Address</label>
                              <input
                                  className="w-full outline-none text-left whitespace-nowrap truncate rounded-tremor-default focus:ring-2 transition duration-100 text-tremor-default shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted dark:shadow-dark-tremor-input dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted pl-4 pr-8 py-2 border placeholder:text-tremor-content dark:placeholder:text-tremor-content bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis border-tremor-border dark:border-dark-tremor-border"
                                  placeholder="Select..."
                                  id="headlessui-combobox-input-:rc:"
                                  role="combobox"
                                  aria-expanded="false"
                                  aria-autocomplete="list"
                                  data-headlessui-state=""
                                  type="text"
                              ></input>
                            </div>

                            <div className="col-lg-6">
                              <label className="mb-2">Address (contd):</label>
                              <input
                                  className="w-full outline-none text-left whitespace-nowrap truncate rounded-tremor-default focus:ring-2 transition duration-100 text-tremor-default shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted dark:shadow-dark-tremor-input dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted pl-4 pr-8 py-2 border placeholder:text-tremor-content dark:placeholder:text-tremor-content bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis border-tremor-border dark:border-dark-tremor-border"
                                  placeholder="Select..."
                                  id="headlessui-combobox-input-:rc:"
                                  role="combobox"
                                  aria-expanded="false"
                                  aria-autocomplete="list"
                                  data-headlessui-state=""
                                  type="text"
                              ></input>
                            </div>

                            <div className="col-lg-5">
                              <label className="mb-2">City:</label>
                              <input
                                  className="w-full outline-none text-left whitespace-nowrap truncate rounded-tremor-default focus:ring-2 transition duration-100 text-tremor-default shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted dark:shadow-dark-tremor-input dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted pl-4 pr-8 py-2 border placeholder:text-tremor-content dark:placeholder:text-tremor-content bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis border-tremor-border dark:border-dark-tremor-border"
                                  placeholder="Select..."
                                  id="headlessui-combobox-input-:rc:"
                                  role="combobox"
                                  aria-expanded="false"
                                  aria-autocomplete="list"
                                  data-headlessui-state=""
                                  type="text"
                              ></input>
                            </div>

                            <div className="col-lg-5">
                              <label className="mb-2">State:</label>
                              <input
                                  className="w-full outline-none text-left whitespace-nowrap truncate rounded-tremor-default focus:ring-2 transition duration-100 text-tremor-default shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted dark:shadow-dark-tremor-input dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted pl-4 pr-8 py-2 border placeholder:text-tremor-content dark:placeholder:text-tremor-content bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis border-tremor-border dark:border-dark-tremor-border"
                                  placeholder="Select..."
                                  id="headlessui-combobox-input-:rc:"
                                  role="combobox"
                                  aria-expanded="false"
                                  aria-autocomplete="list"
                                  data-headlessui-state=""
                                  type="text"
                              ></input>
                            </div>

                            <div className="col-lg-2">
                              <label className="mb-2">Zip Code:</label>
                              <input
                                  className="w-full outline-none text-left whitespace-nowrap truncate rounded-tremor-default focus:ring-2 transition duration-100 text-tremor-default shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted dark:shadow-dark-tremor-input dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted pl-4 pr-8 py-2 border placeholder:text-tremor-content dark:placeholder:text-tremor-content bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis border-tremor-border dark:border-dark-tremor-border"
                                  placeholder="Select..."
                                  id="headlessui-combobox-input-:rc:"
                                  role="combobox"
                                  aria-expanded="false"
                                  aria-autocomplete="list"
                                  data-headlessui-state=""
                                  type="text"
                              ></input>
                            </div>

                            <div className="col-lg-6">
                              <label className="mb-2">Import Country:</label>
                              <SearchSelect>
                                <SearchSelectItem value="1">Right Hand</SearchSelectItem>
                                <SearchSelectItem value="2">Left Hand</SearchSelectItem>
                              </SearchSelect>
                            </div>

                            <div className="col-lg-6">
                              <label className="mb-2">Port:</label>
                              <SearchSelect>
                                <SearchSelectItem value="1">Right Hand</SearchSelectItem>
                                <SearchSelectItem value="2">Left Hand</SearchSelectItem>
                              </SearchSelect>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-8 col-sm-6 col-6">
                              <div className="showcase-Boxbtn">
                                <Button>Update</Button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </Tab.Panel>

                      {/* 2nd panel */}

                      <Tab.Panel
                          className={classNames(
                              "rounded-xl bg-white p-3",
                              "ring-white ring-opacity-80 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                          )}
                      >
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400"></thead>
                            <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                              <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                              >
                                Customer Id
                              </th>
                              <td className="px-6 py-4 text-gray-800">872837</td>
                              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                Company
                              </td>
                              <td className="px-6 py-4 text-gray-800">
                                Universal Motors
                              </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                              <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                              >
                                Customer Name
                              </th>
                              <td className="px-6 py-4 text-gray-800">Sajid Parkar</td>
                              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                Address
                              </td>
                              <td className="px-6 py-4 text-gray-800">F 26, Block F</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                              <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                              >
                                Bank Name
                              </th>
                              <td className="px-6 py-4 text-gray-800">Meezan</td>
                              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                Tel
                              </td>
                              <td className="px-6 py-4 text-gray-800">+8371837183</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                              <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                              >
                                Account Name
                              </th>
                              <td className="px-6 py-4 text-gray-800">Hamza Anis</td>
                              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                Fax
                              </td>
                              <td className="px-6 py-4 text-gray-800">
                                +83782472847287482
                              </td>
                            </tr>
                            <tr>
                              <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                              >
                                Branch
                              </th>
                              <td className="px-6 py-4 text-gray-800">Shadman</td>
                              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                Email
                              </td>
                              <td className="px-6 py-4 text-gray-800">
                                hamzaanis2014@gmail.com
                              </td>
                            </tr>
                            <tr>
                              <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                              >
                                Account Number
                              </th>
                              <td className="px-6 py-4 text-gray-800">73276362736</td>
                              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                Web site
                              </td>
                              <td className="px-6 py-4 text-gray-800">
                                universalmotorsltd.com
                              </td>
                            </tr>
                            <tr>
                              <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                              >
                                Swift Code
                              </th>
                              <td className="px-6 py-4 text-gray-800">jahdjdha</td>
                              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
                              <td className="px-6 py-4 text-gray-800"></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </Tab.Panel>

                      {/* 3rd Panel */}
                      <Tab.Panel
                          className={classNames(
                              "rounded-xl bg-white p-3",
                              "ring-white ring-opacity-80 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                          )}
                      >
                        <Form>
                          <div className="row showcase-Box carform">
                            <div className="col-lg-6">
                              <label className="mb-2">*First Name</label>
                              <input
                                  className="w-full outline-none text-left whitespace-nowrap truncate rounded-tremor-default focus:ring-2 transition duration-100 text-tremor-default shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted dark:shadow-dark-tremor-input dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted pl-4 pr-8 py-2 border placeholder:text-tremor-content dark:placeholder:text-tremor-content bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis border-tremor-border dark:border-dark-tremor-border"
                                  placeholder="Select..."
                                  id="headlessui-combobox-input-:rc:"
                                  role="combobox"
                                  aria-expanded="false"
                                  aria-autocomplete="list"
                                  data-headlessui-state=""
                                  type="text"
                              ></input>
                            </div>
                            <div className="col-lg-6">
                              <label className="mb-2">*Last Name</label>
                              <input
                                  className="w-full outline-none text-left whitespace-nowrap truncate rounded-tremor-default focus:ring-2 transition duration-100 text-tremor-default shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted dark:shadow-dark-tremor-input dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted pl-4 pr-8 py-2 border placeholder:text-tremor-content dark:placeholder:text-tremor-content bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis border-tremor-border dark:border-dark-tremor-border"
                                  placeholder="Select..."
                                  id="headlessui-combobox-input-:rc:"
                                  role="combobox"
                                  aria-expanded="false"
                                  aria-autocomplete="list"
                                  data-headlessui-state=""
                                  type="text"
                              ></input>
                            </div>
                          </div>
                        </Form>
                      </Tab.Panel>

                      {/* 4th Panel */}
                      <Tab.Panel>
                        <h1 className="text-red-400 text-center">
                          Your Favourite Car List is empty
                        </h1>
                        <div className="showcase-Boxbtn mx-auto">
                          <a
                              href="#"
                              className="px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-black"
                          >
                            Add Car
                          </a>
                        </div>
                      </Tab.Panel>

                      {/* 5th Panel */}
                      <Tab.Panel>
                        <div className="flex showcase-Box">
                          <div className="flex-items-center mr-4 ml-3 mt-4">
                            <input
                                id="inline-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            ></input>
                            <label>All</label>
                          </div>

                          <div className="flex-items-center mr-4 ml-3 mt-4">
                            <input
                                id="inline-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            ></input>
                            <label>Free Qoute</label>
                          </div>

                          <div className="flex-items-center mr-4 ml-3 mt-4">
                            <input
                                id="inline-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            ></input>
                            <label>Bid</label>
                          </div>
                        </div>
                      </Tab.Panel>

                      {/* 6th Panel */}
                      <Tab.Panel>
                        <h1 className="text-red-400 text-center">No Record Found</h1>
                      </Tab.Panel>

                      {/* 7th Panel */}
                      <Tab.Panel
                          className={classNames(
                              "rounded-xl bg-white p-3",
                              "ring-white ring-opacity-80 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                          )}
                      >
                        <Form>
                          <div className="row showcase-Box carform">
                            <div className="col-lg-3">
                              <label className="mb-2">*Stock Id</label>
                              <input
                                  className="w-full outline-none text-left whitespace-nowrap truncate rounded-tremor-default focus:ring-2 transition duration-100 text-tremor-default shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted dark:shadow-dark-tremor-input dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted pl-4 pr-8 py-2 border placeholder:text-tremor-content dark:placeholder:text-tremor-content bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis border-tremor-border dark:border-dark-tremor-border"
                                  placeholder="Select..."
                                  id="headlessui-combobox-input-:rc:"
                                  role="combobox"
                                  aria-expanded="false"
                                  aria-autocomplete="list"
                                  data-headlessui-state=""
                                  type="text"
                              ></input>
                            </div>

                            <div className="col-lg-3">
                              <label className="mb-2">Purchased Date</label>
                              <input
                                  className="w-full outline-none text-left whitespace-nowrap truncate rounded-tremor-default focus:ring-2 transition duration-100 text-tremor-default shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted dark:shadow-dark-tremor-input dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted pl-4 pr-8 py-2 border placeholder:text-tremor-content dark:placeholder:text-tremor-content bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis border-tremor-border dark:border-dark-tremor-border"
                                  placeholder="Select..."
                                  id="headlessui-combobox-input-:rc:"
                                  role="combobox"
                                  aria-expanded="false"
                                  aria-autocomplete="list"
                                  data-headlessui-state=""
                                  type="date"
                              ></input>
                              ~
                              <input
                                  className="w-full outline-none text-left whitespace-nowrap truncate rounded-tremor-default focus:ring-2 transition duration-100 text-tremor-default shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted dark:shadow-dark-tremor-input dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted pl-4 pr-8 py-2 border placeholder:text-tremor-content dark:placeholder:text-tremor-content bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis border-tremor-border dark:border-dark-tremor-border"
                                  placeholder="Select..."
                                  id="headlessui-combobox-input-:rc:"
                                  role="combobox"
                                  aria-expanded="false"
                                  aria-autocomplete="list"
                                  data-headlessui-state=""
                                  type="date"
                              ></input>
                            </div>

                            <div className="col-lg-6">
                              <label className="mb-2 mr-2">Status:</label>

                              <input
                                  id="inline-radio"
                                  type="radio"
                                  value=""
                                  name="inline-radio-group"
                                  className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              ></input>
                              <label className="mr-2">All</label>

                              <input
                                  id="inline-radio"
                                  type="radio"
                                  value=""
                                  name="inline-radio-group"
                                  className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              ></input>
                              <label className="mr-2">In transit</label>

                              <input
                                  id="inline-radio"
                                  type="radio"
                                  value=""
                                  name="inline-radio-group"
                                  className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              ></input>
                              <label className="mr-2">In Recieved</label>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-8 col-sm-6 col-6">
                              <div className="showcase-Boxbtn">
                                <Button>Search</Button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </div>
          ) : (
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-screen m-auto flex items-center justify-center">
            <h1>You shall not Pass</h1>
            {/*<SignUpForm setSignIn={} countries={[]} ports={[]} portMapping={[]}/>*/}
          </div>)
        }
      </>

  );
}
