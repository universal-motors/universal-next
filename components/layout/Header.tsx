"use client";

import Navigation from "@/components/layout/Navigation";
import TopCountryTimeBar from "@/components/layout/TopCountryTimeBar";
import SearchBar from "@/components/ui/SearchBar";
import AuthModal from "@/components/user/Auth/AuthModal";
import { Country } from "@/models/Master/Country";
import { PortMapping } from "@/models/Master/PortMapping";
import { Ports } from "@/models/Master/Ports";
import { checkEmail } from "@/services/profile";
import { useUserStore } from "@/store/store";
import { Dialog, Transition } from "@headlessui/react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { FcCustomerSupport } from "react-icons/fc";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  locations: Country[];
  // bodyTypes : BodyType[]
  // makes : Make[]
  ports: Ports[];
  portMapping: PortMapping[];
  stockCount: number;
}

const currentYear = new Date().getFullYear();

function Header({ locations, ports, portMapping, stockCount }: Props) {
  const router = useRouter()
  //  const { data: session } = useSession()
  let [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // const { status, data: session } = useSession();
  const { deleteData, user, setIsUpdate, update: updateData } = useUserStore();
  function closeMobileSearchModal() {
    setIsOpen(false);
  }

  function openMobileSearchModal() {
    setIsOpen(true);
  }
  const login = useGoogleLogin({


    onSuccess: async (tokenResponse: any) => {
      await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      })
        .then(res => {
          checkEmail(
            res.data.email,
            res.data?.picture,
            res.data?.name,
            setIsUpdate,
            updateData,
            router
          );
        });

      // const userObject: any = await jwtDecode(tokenResponse.access_token
      // );
      // console.log(userObject)

    },
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <header className="headerbg">
        <div className="container-fluid">
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <div className="row">
            <TopCountryTimeBar stockCount={stockCount} />
          </div>
        </div>
      </header>
      <section className="menuhead sticky-header" id="sheader">
        <div className="container-fluid">
          <div className="row" style={{ justifyContent: "end" }}>
            <div className="col-xl-1 col-lg-2 col-md-2">
              <Link href="/">
                <img
                  src="/assets/images/logo.png"
                  alt="logo"
                  className="header-logo"
                  style={{
                    width: "100%",
                    position: "relative",
                    top: "20px",
                    left: "-20px",
                  }}
                />
              </Link>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5">
              <SearchBar />
            </div>

            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="row">
                <div
                  className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12"
                  style={{ paddingRight: "0 !important", paddingLeft: 0 }}
                >
                  <div className="support">
                    {/*<i className="fa fa-headphones" />*/}
                    <FcCustomerSupport className="m-2 " size={40} />
                    <div className="currencydropdown">
                      <button className="currencydropbtn supportbtn ">
                        Support
                        <br />
                        +49 471 9731 9003
                      </button>
                      <div className="currencydropdown-content supportcontent">
                        <div className="row bg-white">
                          <div className="col-md-6 px-1">
                            <p className="m-0" style={{ fontSize: "12px" }}>
                              <strong>Call Us</strong>
                            </p>
                            <p className="m-0" style={{ fontSize: "12px" }}>
                              Call our award-winning sales &amp; support team
                            </p>
                            <i
                              className="fa fa-phone mb-1"
                              style={{ fontSize: "12px" }}
                            >
                              +49 471 9731 9003
                            </i>
                            <i
                              className="fa fa-phone mb-1"
                              style={{ fontSize: "12px" }}
                            >
                              +81 50 5050 8550
                            </i>

                            <p className="m-0" style={{ fontSize: "12px" }}>
                              <strong>Email</strong>
                            </p>
                            <p>
                              <Link
                                className="p-0"
                                href="mailto:info@universalmotorsltd.com"
                                style={{ color: "blue", fontSize: "12px" }}
                              >
                                info@universalmotorsltd.com
                              </Link>
                            </p>
                            <p className="m-0" style={{ fontSize: "12px" }}>
                              <strong>Business Hours</strong>
                            </p>
                            <p style={{ fontSize: "12px" }} className="m-0">
                              Mon - Fri: 9:00 AM - 6:00 PM
                              <br />
                              Saturday: 9:00 AM - 1:00 PM
                            </p>
                          </div>
                          <div className="col-md-6 px-1">
                            <p className="m-0" style={{ fontSize: "12px" }}>
                              <strong>Chat Now</strong>
                            </p>
                            <p className="mb-1" style={{ fontSize: "12px" }}>
                              Chat with our sales team &amp; support team for
                              quick answers on product features, pricing and
                              more.
                            </p>
                            <button
                              className="chatbtn"
                              style={{ fontSize: "12px" }}
                            >
                              Chat Now
                            </button>
                            <p style={{ fontSize: "12px" }} className="m-0">
                              24/7
                            </p>
                            <p className="m-0" style={{ fontSize: "12px" }}>
                              <strong>Whatsapp</strong>
                            </p>
                            <p>
                              <Link
                                className="p-0 m-0"
                                href="https://wa.link/5g81p6"
                                style={{ color: "blue", fontSize: "12px" }}
                              >
                                +49 471 9731 9003
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12">
                  <div className="support">
                    <h2>
                      <FcLike className="m-2" />
                    </h2>
                    <div className="currencydropdown">
                      <button className="currencydropbtn supportbtn">
                        Check
                        <br />
                        Favourites
                      </button>
                    </div>
                  </div>
                </div> */}
                <AuthModal
                  countryList={[]}
                  portList={[]}
                  portMapping={undefined} // countryList={locations}
                // portList={ports}
                // portMapping={portMapping}
                />

                {/*<SignInComponentUI/>*/}
              </div>
            </div>
          </div>
          <Navigation />
        </div>

        <div className="container-fluid"></div>
      </section>
      {/* ........MOBILE HEADER....... */}
      <section className="mobile-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <input type="checkbox" id="check" />
              <div className="mobile-container">
                <label htmlFor="check">
                  <span className="fa fa-times" id="times" />
                  <span className="fa fa-bars" id="bars" />
                </label>
                <div className="sidemenu">
                  <Link href="/">
                    <img
                      src="/assets/images/logo.png"
                      className="side-logo"
                      alt="hamburger icon"
                    />
                  </Link>
                  <ul className="sidelist">
                    <li className="highlighted">
                      <i className="fa fa-gear" />
                      Site Setting
                    </li>
                    <li className="last">Currency</li>
                    <li className="highlighted">
                      <i className="fa fa-search" />
                      Search
                    </li>

                    <li>
                      {" "}
                      <Link href="/global/results/cars?makeID=5">
                        {" "}
                        Search by Make
                      </Link>
                    </li>
                    <li>
                      <Link href="/global/results/cars?bodyTypeID=3">
                        Search by Type
                      </Link>
                    </li>
                    <li>
                      <Link href="/global/results/cars?price=25000">
                        Search by Price
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/global/results/cars?year=${new Date().getFullYear()}`}
                      >
                        Search by Year
                      </Link>
                    </li>
                    <li className="last">Search by Inventory Location</li>
                    <li className="highlighted">
                      <i className="fa fa-globe" />
                      Local Service
                    </li>
                    {locations
                      .filter((location) => location.isInventoryLocation)
                      .map((location) => (
                        <li key={location.countryId}>
                          <Link
                            href={{
                              pathname: "/global/results/cars",
                              query: {
                                countryID: location.countryId,
                              },
                            }}
                          >
                            <span className=" inline-flex items-center rounded-md">
                              <Image
                                src={`/assets/images/flags/${location.slug}.svg`}
                                className="flagimg-fluid mr-5"
                                alt={location.slug ?? ""}
                                width={16}
                                height={16}
                              />
                              {location.countryName}
                            </span>
                          </Link>
                        </li>
                      ))}
                    <li className="highlighted">
                      <i className="fa fa-phone" />
                      Contact Us
                    </li>
                    <li>+49 471 9731 9003</li>
                    <li className="last">+81 50 5050 8550</li>
                    <li>info@universalmotorsltd.com</li>

                    <li className="highlighted">
                      <i className="fa fa-question" />
                      Need Help
                    </li>
                    <li>
                      <Link href="/global/information?page=why-choose-universal-motors">
                        Why Choose UM?
                      </Link>
                    </li>
                    <li>
                      <Link href="/global/information?page=how-to-buy">
                        How To Buy
                      </Link>
                    </li>
                    <li>
                      <Link href="/global/information?page=how-to-pay">
                        How to Pay?
                      </Link>
                    </li>
                    <li>
                      <Link href="/global/information?page=faqs">FAQs</Link>
                    </li>
                    <li className="last">
                      <Link href="/global/information?page=export-information">
                        Exports Information
                      </Link>
                    </li>
                    <li className="highlighted">
                      <i className="fa fa-info" />
                      <Link href="/global/information?page=about-universal-motors">
                        About UM
                      </Link>
                    </li>
                    <li>
                      <Link href="/global/about-universal-motors?page=company-profile">
                        Company Profile
                      </Link>
                    </li>
                    <li>
                      <Link href="/global/about-universal-motors?page=global-offices">
                        Global Offices
                      </Link>
                    </li>
                    <li>
                      <Link href="/global/about-universal-motors?page=terms-of-service">
                        Terms Of Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/global/about-universal-motors?page=privacy-policy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/global/about-universal-motors?page=security-export-control">
                        Secutiy Export Control
                      </Link>
                    </li>
                    <li className="last">
                      <Link href="/global/about-universal-motors?page=policy-against-anti-social">
                        Basic Policy Against Anti-Social Forces
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-3">
              <Link href="/">
                <img
                  src="/assets/images/logo.png"
                  alt="logo"
                  className="mobile-logo"
                  width={50}
                />
              </Link>
            </div>
            <div className="col-7">
              <div className="featuresection flex inline-flex">
                <Link href="" onClick={openMobileSearchModal}>
                  <img
                    src="https://img.icons8.com/ios-glyphs/2x/search.png"
                    alt=""
                    width={25}
                  />
                </Link>
                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeMobileSearchModal}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full  items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-blue-950 p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-white"
                            >
                              Search ...
                            </Dialog.Title>
                            <div className="mt-4">
                              <div className="col-xl-5 col-lg-5 col-md-5">
                                <SearchBar />
                              </div>
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeMobileSearchModal}
                              >
                                Cancel
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
                <Link href="#support">
                  <img
                    src="https://img.icons8.com/external-icongeek26-outline-icongeek26/2x/external-headphone-music-icongeek26-outline-icongeek26.png"
                    alt=""
                    width={25}
                  />
                </Link>
                <Link href="#customer">
                  <img
                    src="https://img.icons8.com/ios/2x/hearts.png"
                    alt=""
                    width={25}
                  />
                </Link>
                <div className="pt-[6px]">
                  {user && user.email ?
                    (
                      <>
                        <img
                          src={
                            user.img ??
                            "https://img.icons8.com/fluency-systems-regular/2x/user.png"
                          }
                          alt=""
                          onClick={() => setDropdown(!dropdown)}
                          width={25}
                          className="rounded-full"
                        />
                      </>
                    )
                    :
                    (
                      <img
                        src="https://img.icons8.com/fluency-systems-regular/2x/user.png"
                        alt=""
                        onClick={() => {
                          login()
                        }}
                        width={25}
                      />
                    )
                  }
                </div>

                {/* <Link href="#support"><i class="fa fa-headphones"></i></Link>
                    <Link href="#"><i class="fa fa-heart-o"></i></Link>
                    <Link href="#customer"><i class="fa fa-user-o"></i></Link> */}
              </div>
              {user && user.email && (
                <div
                  id="dropdownAvatarName"
                  className={`${!dropdown && "hidden"
                    } z-50 absolute right-0 top-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <div className="px-1 py-3 text-sm !text-gray-900 ">
                    <div className="font-medium text-center !text-gray-900 ">
                      {user.name}
                    </div>
                    <div className="truncate text-center text-[10px] !text-gray-900">
                      {user.email}
                    </div>
                  </div>

                  <div className="py-2">
                    <Link
                      href="/dashboard"
                      className="text-center block px-4 py-2 text-sm !text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </div>
                  <div className="py-2">
                    <Link
                      href="/"
                      className="text-center block px-4 py-2 text-sm !text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Favourites
                    </Link>
                  </div>

                  <div className="py-2 cursor-pointer">
                    <p
                      onClick={() => {
                        router.push("/")
                        googleLogout()
                        deleteData();
                      }}
                      className="block px-4 py-2  text-center text-sm !text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section >
    </>
  );
}

export default Header;
