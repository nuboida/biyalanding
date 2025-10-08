"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

const MainHeader = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed overflow-hidden top-0 z-20 w-full">
      <nav className="bg-white/50 backdrop-blur-2xl flex items-center py-6 px-4 sm:px-10 container-xl">
        {/* Logo Start */}
        <div className="w-full flex items-center justify-between lg:w-auto mr-20">
          <Link href="/">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={150}
              height={30}
              priority
              className="w-auto h-auto"
            />
          </Link>
        </div>
        {/* Logo End */}

        {/* Mobile Menu Button Start */}
        <div className="lg:hidden ml-auto">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu Button End */}

        {/* Nav Buttons Start */}
        <div className={`w-full lg:flex flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:w-fit ${isMenuOpen ? "block" : "hidden"} lg:block`}>
          <div className="mt-6 dark:text-body md:-ml-4 lg:pr-4 lg:mt-0">
            <ul className="space-y-6 tracking-wide text-base lg:text-lg lg:flex lg:space-y-0 bg-[#0D67AA]/15 py-2 px-2">
              <Link href={"/"}>
                <span className={clsx("text-lg text-black px-6 py-1",
                  path === "/" && "bg-white font-bold"
                )}>
                  Biyabot
                </span>
              </Link>
              <Link href={"/business"}>
                <span className={clsx("text-lg text-black px-6 py-1",
                  path.includes("/business") && "bg-white font-bold"
                )}>
                  Business
                </span>
              </Link>
              <Link href={"/merchant"}>
                <span className={clsx("text-lg text-black px-6 py-1",
                  path.includes("/merchant") && "bg-white font-bold"
                )}>
                  Merchant
                </span>
              </Link>
            </ul>
          </div>
        </div>
        {/* Nav Buttons End */}

        <div className={`flex-col justify-center items-center tracking-wide text-base ml-auto ${isMenuOpen ? "flex" : "hidden"} lg:flex`}>
          {
            path === "/" && (
              <Link href="#startSection" className="bg-black text-white py-2 px-6 font-semibold">
                Get Started
              </Link>
            )
          }
          {
            path === "/merchant" && (
              <Link href={"https://merchant.biya.com.ng/login"}>
                <span className="border text-black py-2 px-6 font-semibold">
                  Log In
                </span>
              </Link>
            )
          }
          {
            path === "/business" && (
              <Link href={"https://business.biya.com.ng/login"}>
                <span className="border text-black py-2 px-6 font-semibold">
                  Log In
                </span>
              </Link>
            )
          }
        </div>
      </nav>
    </header>
  )
}

export default MainHeader;
