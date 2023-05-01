"use client";
import { useContext } from "react";

// import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Rotate as Hamburger } from "hamburger-react";

import AuthContext from "@/context/auth/authContext";
import Router from "next/router";

type Props = {};

function Navbar({}: Props) {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout } = authContext;
  const navLinks = [
    {
      url: "/",
      link: "Home",
      id: "1",
    },
    {
      url: "/dashboard",
      link: "Dashboard",
      id: "2",
    },
    {
      url: "/about",
      link: "About",
      id: "3",
    },
  ];
  const path = usePathname();
  // const { data: session } = useSession();

  const handleSignOut = () => {
    logout();
    Router.push('/sign-in')
  };

  const router = useRouter();

  const [open, setopen] = useState(false);

  return (
    <>
      <nav className=" border-gray-200 bg-gray-900 sticky top-0 left-0 right-0 z-40">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-slate-200">
              <p>
                iconic<span className="font-light">trades</span>
              </p>
            </span>
          </Link>
          <div className="md:flex md:order-2 items-center md:space-x-8 hidden">
            {isAuthenticated ? (
              <Button
                onClick={handleSignOut}
                style={path === "/sign-up" ? {} : {}}
                // className="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Log out
              </Button>
            ) : (
              <>
                <Button
                  style={
                    path === "/sign-in"
                      ? { color: "#2563eb" }
                      : { color: "white" }
                  }
                  onClick={() => {
                    router.push("/sign-in");
                  }}
                  variant="ghost"
                >
                  Sign in
                </Button>
                <Button
                    style={
                      { color: "#2563eb" }
                  }
                  onClick={() => {
                    router.push("/sign-up");
                  }}
                >
                  Sign up
                </Button>
              </>
            )}

            {/* menu here */}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-900  border-gray-700">
              {isAuthenticated && navLinks.map((alink) => {
                const { url, link, id } = alink;

                return (
                  <li key={id}>
                    <Link
                      style={
                        path === url ? { color: "#2563eb" } : { color: "white" }
                      }
                      href={url}
                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0"
                      aria-current="page"
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            onClick={() => {
              setopen(!open);
            }}
            className="md:hidden  z-30"
          >
            <Hamburger rounded color="white" />
          </button>
        </div>

        {/* navbar drawer */}
        <div
          style={
            open
              ? { transform: "translateX(0%)" }
              : { transform: "translateX(-100%)" }
          }
          id="drawer-example"
          className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full w-[85vw] bg-gray-800"
          tabIndex={-1}
          aria-labelledby="drawer-label"
        >
          <div className="py-4">
            <h3 className="text-slate-200 text-lg font-bold">
              iconic<span className="font-normal ml-1">trade</span>
            </h3>
          </div>
          <div className="bg-slate-700 h-px w-full" />

          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              {navLinks.map((alink) => {
                const { url, link, id } = alink;

                return (
                  <li key={id}>
                    <Link
                      onClick={() => {
                        setopen(false);
                      }}
                      style={
                        path === url ? { color: "#2563eb" } : { color: "white" }
                      }
                      href={url}
                      className="block py-2 pr-4 bg-transparent text-white md:p-0"
                      aria-current="page"
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  style={
                    path === "/sign-in"
                      ? { color: "#2563eb" }
                      : { color: "white" }
                  }
                  href={"/sign-in"}
                  className="block py-2 pr-4 bg-transparent text-white md:p-0"
                  aria-current="page"
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// {session ? (
//   <button
//     onClick={handleSignOut}
//     style={path === "/sign-up" ? {} : {}}
//     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
//   >
//     Log out
//   </button>
// ) : (
//   <>
//     <Button
//       style={
//         path === "/sign-in"
//           ? { color: "#2563eb" }
//           : { color: "white" }
//       }
//       onClick={() => {
//         router.push("/sign-in");
//       }}
//       variant="ghost"
//     >
//       Sign in
//     </Button>
//     <Button
//       style={
//         path === "/sign-up"
//           ? { color: "#2563eb" }
//           : { color: "white" }
//       }
//       onClick={() => {
//         router.push("/sign-up");
//       }}
//       variant="subtle"
//     >
//       Sign up
//     </Button>
//   </>
// )}
