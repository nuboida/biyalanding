"use client";

import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import EmblaCarousel from "./Carousel/EmblaCarousel";

const OPTIONS: EmblaOptionsType = { containScroll: false }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const MainAbout = () => {
  return (
    <>
      <div className="mb-20 bg-[url('/about-bg.png')] bg-cover">
        <div className="container mx-auto">
          <div className="px-4 sm:px-36 mb-20 flex items-center">
            <div className="flex flex-col lg:flex-row justify-between items-center container-xl pt-20 lg:pt-0">
              <div className="pb-10 w-full lg:w-1/2 flex flex-col justify-between gap-2 text-center lg:text-left mt-52 mb-32">
                <h1 className="text-6xl lg:text-9xl 2xl:text-[170px] font-mono">What is Biyabot</h1>
                <h6 className="font-semibold mb-3.5 text-xl">BiyaBot is a payment platform designed to simplify your life.</h6>
                <p className="w-full lg:w-8/12 mx-auto lg:mx-0">
                  Whether you’re topping up your phone, paying a bill, or managing bulk recharges for your business, you can do it all with just a chat. By becoming a merchant you can receive payments from your customers.
                </p>
                <div className="mt-10">
                  <span className="bg-accent1 text-white py-3 px-8 font-sans text-xl">
                    Get Started
                  </span>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
                <div className="w-8/12">
                  <Image
                    src={"/about-item.svg"}
                    alt="image"
                    width={586}
                    height={535}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary py-20">
            <div className="flex flex-col items-center text-center px-4 mb-20">
              <h1 className="text-6xl lg:text-9xl 2xl:text-[170px] font-mono">How We Make Life Easier</h1>
              <p className="w-full md:w-6/12 lg:w-4/12 text-center">We offer a wide range of services designed to simplify transactions for both individuals and businesses. From managing bulk transactions to helping merchants get paid instantly, Biya ensures every process is seamless, secure, and stress-free.</p>
            </div>

            <EmblaCarousel slides={SLIDES} options={OPTIONS} />

          </div>
        </div>
      </div>
    </>
  )
}

export default MainAbout;
