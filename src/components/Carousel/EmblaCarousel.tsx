"use client";

import React, { useCallback, useEffect, useRef } from 'react';
import Image from "next/image";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay';

const TWEEN_FACTOR_BASE = 0.10

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

type PropType = {
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale])

  return (
    <div className="embla flex">
      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className='embla__slide__number flex flex-col justify-between items-center w-full pt-5 text-white bg-[#0D67AA] '>
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
          </div>
          <div className="embla__slide">
            <div className='embla__slide__number flex flex-col justify-between items-center w-full pt-5 text-black bg-[#E8E9EF]'>
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
          </div>
          <div className=" embla__slide">
            <div className='embla__slide__number flex flex-col justify-between items-center w-full pt-5 text-white bg-[#17235D]'>
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
          </div>
          <div className="embla__slide">
            <div className='embla__slide__number flex flex-col justify-between items-center w-full pt-5 text-black bg-[#E8EFE9]'>
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
          </div>
          <div className="embla__slide">
            <div className='embla__slide__number flex flex-col justify-between items-center w-full pt-5 text-white bg-[#0D67AA]'>
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
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>


      </div>
    </div>
  )
}

export default EmblaCarousel
