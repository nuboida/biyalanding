import React from 'react';
import Image from "next/image";
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
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
    <section className="embla flex">
      <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* {slides.map((index) => (
            <div className="embla__slide border border-white" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))} */}
          <div className="embla__slide mx-5 border border-white">
              <div className="flex flex-col justify-between items-center w-full pt-5 text-white bg-[#0D67AA] embla__slide">
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
          <div className="embla__slide mx-5 border border-white">
              <div className="flex flex-col justify-between items-center w-full h-full pt-5 text-black bg-[#E8E9EF] embla__slide">
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
          <div className="embla__slide mx-5 border border-white">
              <div className="flex flex-col justify-between items-center w-full h-full pt-5 text-white bg-[#17235D] embla__slide">
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
          <div className="embla__slide mx-5 border border-white">
              <div className="flex flex-col justify-between items-center w-full h-full pt-5 text-black bg-[#E8EFE9] embla__slide">
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
          <div className="embla__slide mx-5 border border-white">
              <div className="flex flex-col justify-between items-center w-full h-full pt-5 text-white bg-[#0D67AA] embla__slide">
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

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
