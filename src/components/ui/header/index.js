"use client";
import { Fragment, useState } from "react";
import NextLink from "next/link";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import Logo from "@/components/svgs/logo";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { auth, usersignOut, onAuthStateChanged } from "@/config/firebase";


export default function Header() {
  const [userAuth, setuserAuth] = useState()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setuserAuth(user)
      console.log(userAuth);
    } else {
      setuserAuth(null)
    }
  });

  const logOut = async () => {
    await usersignOut()
  }

  return (
    <Popover className="relative">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="fixed inset-x-0 w-full h-20 custom-backdrop-blur"></div>
        <div className="flex items-center justify-between py-6">
          <div className="z-20 flex justify-start flex-1">
            <NextLink href="/">
              <span className="sr-only">DataEcho</span>
              <Logo className="w-48 lg:w-56" />
            </NextLink>
          </div>
          <div className="z-20 -my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </Popover.Button>
          </div>

          <div as="nav" className="justify-between flex-1 hidden md:flex">
            <div className="relative w-full flex justify-between">
              <Link
                href={'/'}
                className="inline-flex items-center text-base font-semibold text-gray-800 rounded-md outline-none cursor-pointer group hover:text-gray-700"
              >
                <span>Home</span>
              </Link>
              <Link
                href={'/#about'}
                className="inline-flex items-center text-base font-semibold text-gray-800 rounded-md outline-none cursor-pointer group hover:text-gray-700"
              >
                <span>About</span>
              </Link>
              <Link
                href={'demo'}
                className="inline-flex items-center text-base font-semibold text-gray-800 rounded-md outline-none cursor-pointer group hover:text-gray-700"
              >
                <span>Demo</span>
              </Link>
              {!userAuth ? <Link
                href={'signin'}
                className="inline-flex items-center text-base font-semibold text-gray-800 rounded-md outline-none cursor-pointer group hover:text-gray-700"
              >
                <span>Sign In</span>
              </Link> :
                <div
                  className="inline-flex items-center text-base font-semibold text-gray-800 rounded-md outline-none cursor-pointer group hover:text-gray-700"
                >
                  <span onClick={logOut}>Sign Out</span>
                </div>}
            </div>
          </div>
          <div className="z-20 items-center md:justify-end lg:space-x-20 md:space-x-3 flex-1 hidden md:flex">
            <NextLink href="#footer">
              <p className="px-6 py-2 text-base font-semibold text-white bg-[#0E6CAC] rounded-lg bg-gradient whitespace-nowrap">
                Contact Us
              </p>
            </NextLink>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden">
          {({ close }) => (
            <div className="h-screen p-2 overflow-auto bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <NextLink href="/">
                      <Logo className="w-48 lg:w-56" />
                    </NextLink>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 py-10 gap-y-5 ">
                    <Link href={'#'} className="text-gray-800">
                      Home
                    </Link>
                    <Link href={'#about'} className="text-gray-800">
                      About
                    </Link>
                    <Link href={'demo'} className="text-gray-800">
                      Demo
                    </Link>
                    {!userAuth ? <Link href={'signin'} className="text-gray-800 cursor-pointer">
                      <span>Sign In</span>
                    </Link> :
                      <div className="text-gray-800 cursor-pointer">
                        <span onClick={logOut}>Sign Out</span>
                      </div>}
                  </nav>
                </div>
                <div className="max-w-max">
                  <NextLink href="#footer">
                    <p className="px-6 py-2 text-base font-semibold text-white bg-[#0E6CAC] rounded-lg bg-gradient whitespace-nowrap">
                      Contact Us
                    </p>
                  </NextLink>
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
