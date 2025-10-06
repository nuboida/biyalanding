"use client"

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from 'react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

type ButtonPropType = ComponentPropsWithRef<'button'>

export const DotButton: React.FC<ButtonPropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </button>
  )
}

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  )
}

type CarouselPropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const MainAbout: React.FC<CarouselPropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
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
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container gap-8">
                  <div className="flex flex-col justify-between items-center w-full sm:w-8/12 md:w-5/12 lg:w-3/12 px-2 pt-5 text-white bg-[#0D67AA] embla__slide">
                    <div className="px-3">
                      <h6 className="text-xl mb-2 font-semibold">
                        Top 2 pay <span className="bg-accent1 text-sm px-2 ml-1 text-center">Beta</span>
                      </h6>
                      <p>
                        Merchants can now get paid instantly with BiyaBot. Just a quick chat and the payment is done, making it easier than ever to keep your business moving.
                      </p>
                    </div>
                    <div className="w-full mt-4">
                      <Image
                        src={"/aboutitem1.svg"}
                        alt="item image"
                        height={398}
                        width={381}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center w-full sm:w-8/12 md:w-5/12 lg:w-3/12 px-2 pt-5 text-black bg-[#E8E9EF] embla__slide">
                    <div className="px-3">
                      <h6 className="text-xl mb-2 font-semibold">
                        Fast Refunds
                      </h6>
                      <p>
                        If something doesn’t go right, we’ve got you covered. If something goes wrong, our fast and easy refund process ensures you get your money back quickly, with no hassle.
                      </p>
                    </div>
                    <div className="w-full mt-4">
                      <Image
                        src={"/aboutitem2.svg"}
                        alt="item image"
                        height={398}
                        width={381}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center w-full sm:w-8/12 md:w-5/12 lg:w-3/12 px-2 pt-5 text-white bg-[#17235D] embla__slide">
                    <div className="px-3">
                      <h6 className="text-xl mb-2 font-semibold">
                        Pay Bills
                      </h6>
                      <p>
                        Get your electricity and cable bills sorted within seconds!  It’s quick, reliable, and designed to save you time.
                      </p>
                    </div>
                    <div className="w-full mt-4">
                      <Image
                        src={"/aboutitem3.svg"}
                        alt="item image"
                        height={398}
                        width={381}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center w-full sm:w-8/12 md:w-5/12 lg:w-3/12 px-2 pt-5 text-black bg-[#E8EFE9] embla__slide">
                    <div className="px-3">
                      <h6 className="text-xl mb-2 font-semibold">
                        Airtime Top Up
                      </h6>
                      <p>
                        Easily buy airtime on your service providers for you and your loved ones.
                      </p>
                    </div>
                    <div className="w-full mt-4">
                      <Image
                        src={"/aboutitem4.svg"}
                        alt="item image"
                        height={398}
                        width={381}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center w-full sm:w-8/12 md:w-5/12 lg:w-3/12 px-2 pt-5 text-white bg-[#0D67AA] embla__slide">
                    <div className="px-3">
                      <h6 className="text-xl mb-2 font-semibold">
                        Reliable Customer Support
                      </h6>
                      <p>
                        We’re always here to help! Contact us anytime via email or our social media channels, and we’ll resolve your issues quickly.
                      </p>
                    </div>
                    <div className="w-full mt-4">
                      <Image
                        src={"/aboutitem5.svg"}
                        alt="item image"
                        height={398}
                        width={381}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                </div>
                <div className="embla__controls">
                  <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainAbout;
