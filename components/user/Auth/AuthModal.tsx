"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import SignInForm from "@/components/user/Auth/SignInForm";
import SignUpForm from "@/components/user/Auth/SignUpForm";
import { Country } from "@/models/Master/Country";
import { Ports } from "@/models/Master/Ports";

interface Props {
  countryList: Country[];
  portList: Ports[];
  portMapping: any;
}

export default function AuthModal({
  countryList,
  portList,
  portMapping,
}: Props) {
  let [isOpen, setIsOpen] = useState(false);
  let [isSignIn, setIsSignIn] = useState(true);

  function closeModal() {
    setIsOpen(false);
    setIsSignIn(true);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSignUp = () => {
    setIsSignIn(false);
  };

  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
        <div className="registerbox">
          {/*<i className="fa fa-user" />*/}
          <h2>
            <FcBusinessman className="m-2" />
          </h2>
          <div className="currencydropdown">
            <button
              type="button"
              onClick={openModal}
              className="rounded-md bg-blue-300 bg-opacity-100 px-4 py-2 text-sm font-medium hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-opacity-75"
            >
              {/*Hello, Sign in<br />My Account*/}
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center uppercase font-medium leading-6 text-gray-900 p-2"
                  >
                    {isSignIn ? "Sign In" : "Sign Up"}
                  </Dialog.Title>
                  {isSignIn ? (
                    <SignInForm signIn={true} setSignIn={setIsSignIn} />
                  ) : (
                    <SignUpForm
                      setSignIn={setIsSignIn}
                      countries={countryList}
                      ports={portList}
                      portMapping={portMapping}
                    />
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
