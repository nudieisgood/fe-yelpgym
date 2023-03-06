import { Fragment, useContext, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Gyms", href: "/gyms" },
  { name: "Add Gym", href: "/gyms/new" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ children }) {
  const [click, setClick] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Disclosure as="nav" className="bg-gray-700">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="text-white hidden sm:block">YelpGym</div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item, index) => (
                        <NavLink
                          onClick={() => {
                            setClick(index);
                          }}
                          key={item.name}
                          to={item.href}
                          className={
                            click === index
                              ? "no-underline px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white"
                              : "no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                          }

                          //   "no-underline px-3 py-2 rounded-md text-sm font-medium " +
                          //   (isActive
                          //     ? "bg-gray-900 text-white"
                          //     : "text-gray-300 hover:bg-gray-700 hover:text-white")
                          // )
                        >
                          {item.name}
                        </NavLink>
                      ))}
                      {loggedIn ? (
                        <NavLink
                          to="/login"
                          onClick={() => {
                            setLoggedIn(false);
                          }}
                          className="block no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          Logout
                        </NavLink>
                      ) : (
                        <NavLink
                          to="/login"
                          className="block no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          Login
                        </NavLink>
                      )}
                      <NavLink
                        className="block no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        to="/register"
                      >
                        Register
                      </NavLink>
                    </div>
                  </div>
                </div>
                {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div> */}
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item, index) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={
                      click === index
                        ? "block no-underline px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white"
                        : "block no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                  >
                    {item.name}
                  </NavLink>
                  // <Disclosure.Button
                  //   key={item.name}
                  //   as="a"
                  //   href={item.href}
                  //   className={classNames(
                  //     item.current
                  //       ? "bg-gray-900 text-white"x
                  //       : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  //     "block px-3 py-2 rounded-md text-base font-medium"
                  //   )}
                  //   aria-current={item.current ? "page" : undefined}
                  // >
                  //   {item.name}
                  // </Disclosure.Button>
                ))}
                {loggedIn ? (
                  <NavLink
                    to="/login"
                    onClick={() => {
                      setLoggedIn(false);
                    }}
                    className="block no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Logout
                  </NavLink>
                ) : (
                  <NavLink
                    to="/login"
                    className="block no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Login
                  </NavLink>
                )}
                <NavLink
                  className="block no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  to="/register"
                >
                  Register
                </NavLink>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
