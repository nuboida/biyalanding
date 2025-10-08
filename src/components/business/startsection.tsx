"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";


const BusinessStartSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        const tl = gsap
          .timeline({ defaults: { ease: "none" } })
          .from(
            sectionRef.current.querySelectorAll(".staggered-reveal"),
            { opacity: 0, duration: 0.5, stagger: 0.5 },
            "<"
          );

        ScrollTrigger.create({
          trigger: sectionRef.current.querySelector(".work-wrapper"),
          start: "100px bottom",
          end: "center center",
          scrub: 0,
          animation: tl,
        });
      } else {
        return;
      }
    });

    return () => ctx.revert();
  }, []);

  const backgroundColors = ["#000000"];

  const linearGradients = [
    "linear-gradient(to bottom right, #ef008f, #6ec3f4)",
    "linear-gradient(to bottom right, #6ec3f4, #7038ff)",
    "linear-gradient(to bottom right, #7038ff, #c9c9c9)",
  ];

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = [0 / 3 - 0.1, 1 / 3 - 0.1, 2 / 3 - 0.1];

    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoints, index) => {
      const distance = Math.abs(latest - breakpoints);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);

    setActiveCard(closestBreakpointIndex);
  });

  return (
    <>
      <section className="mb-5 bg-[url('/startsectionbg.png')] bg-cover min-h-screen work-wrapper">
        <div className="container mx-auto mb-20" ref={sectionRef}>
          <div className=" px-4 sm:px-36 py-20 md:pt-40">
            <div className="text-white w-full md:w-8/12 lg:w-5/12 text-center md:text-left pt-20">
              <h1 className="text-6xl md:text-9xl font-mono staggered-reveal">How it Works</h1>
            </div>
          </div>

          <motion.div
            ref={containerRef}
            className="h-[35rem] flex justify-center space-x-10 p-4 rounded-2xl overflow-y-auto"
          >
            <div className="flex items-start px-4">
              <div className="max-w-2xl">
                <div className="my-8 flex gap-2">
                  <motion.div animate={{opacity: activeCard === 0 ? 1 : 0.3}} className="w-[30px] h-[30px] bg-white"/>
                  <div>
                    <motion.h2
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === 0 ? 1 : 0.3,
                      }}
                      className="text-2xl font-bold text-white"
                    >
                      Upload CSV
                    </motion.h2>
                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === 0 ? 1 : 0.3,
                      }}
                      className="text-lg text-slate-300 max-w-sm mt-4"
                    >
                      Easily streamline your recharge process by simply uploading the sheet containing all the phone numbers you wish to recharge. With just a few clicks, you can ensure every number on your list is topped up efficiently and without hassle.
                    </motion.p>
                  </div>
                </div>
                <div className="h-20" />
                <div className="my-8 flex gap-2">
                  <motion.div animate={{opacity: activeCard === 1 ? 1 : 0.3}} className="w-[30px] h-[30px] bg-white"/>
                  <div>
                    <motion.h2
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === 1 ? 1 : 0.3,
                      }}
                      className="text-2xl font-bold text-white"
                    >
                      Process And Pay
                    </motion.h2>
                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === 1 ? 1 : 0.3,
                      }}
                      className="text-lg text-slate-300 max-w-sm mt-4"
                    >
                      Quickly process the entire batch of numbers you’ve uploaded and proceed to make payment seamlessly. This efficient system ensures that all recharges are completed accurately and without delays.
                    </motion.p>
                  </div>
                </div>
                <div className="h-20" />
                <div className="my-8 flex gap-2">
                  <motion.div animate={{opacity: activeCard === 2 ? 1 : 0.3}} className="w-[30px] h-[30px] bg-white"/>
                  <div>
                    <motion.h2
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === 2 ? 1 : 0.3,
                      }}
                      className="text-2xl font-bold text-white"
                    >
                      Instant Recharge
                    </motion.h2>
                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === 2 ? 1 : 0.3,
                      }}
                      className="text-lg text-slate-300 max-w-sm mt-4"
                    >
                      Once payment is confirmed, all numbers in the file will be topped up in a short time.
                    </motion.p>
                  </div>
                </div>
                <div className="h-40" />
              </div>
            </div>

              {
                activeCard === 0 && (
                  <motion.div
                    animate={{
                      // backgroundImage: linearGradients[activeCard % linearGradients.length],
                      backgroundImage: 'url("/howItWorks1.png")',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      opacity: 1,
                    }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.5, delay: 0.5}}
                    className="hidden lg:block w-1/2 rounded-xl bg-white sticky top-0 overflow-hidden"
                  >
                    {/* {contentItems[activeCard].content ?? null} */}
                  </motion.div>
                )
              }

              {
                activeCard === 1 && (
                  <motion.div
                    animate={{
                      // backgroundImage: linearGradients[activeCard % linearGradients.length],
                      backgroundImage: 'url("/howItWorks3.png")',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      opacity: 1,
                    }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.5, delay: 0.5}}
                    className="hidden lg:block w-1/2 rounded-xl bg-white sticky top-0 overflow-hidden"
                  >
                    {/* {contentItems[activeCard].content ?? null} */}
                  </motion.div>
                )
              }

              {
                activeCard === 2 && (
                  <motion.div
                    animate={{
                      // backgroundImage: linearGradients[activeCard % linearGradients.length],
                      backgroundImage: 'url("/howItWorks2.png")',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      opacity: 1,
                    }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 2, delay: 0.5}}
                    exit={{ opacity: 0 }}
                    className="hidden lg:block w-1/2 rounded-xl bg-white sticky top-0 overflow-hidden"
                  >
                    {/* {contentItems[activeCard].content ?? null} */}
                  </motion.div>
                )
              }
          </motion.div>



          <div className="px-4 mt-40 sm:px-8 md:px-16 lg:px-36 bg-[#0D67AA] pb-20 md:pb-30">
            <div className="bg-primary">
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="pb-10 w-full lg:w-1/2 pl-4 sm:pl-10 md:pl-20 text-center lg:text-left">
                  <div className="w-full lg:w-8/12">
                    <h1 className="text-6xl 2xl:text-7xl mb-5 font-mono">All your <span className="text-[#17235D]">Payments</span> in one place</h1>
                    <p>With us, payments are no longer a task they’re a conversation. Start chatting today and experience the easiest way to pay.</p>
                    <div className="mt-10">
                      <Link href={"https://business.biya.com.ng/register"} className="bg-accent1 text-white py-3 px-8 font-sans">
                        Start now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                  <div className="w-full lg:w-11/12">
                    <Image
                      src={"/businessstartimage.png"}
                      alt="image"
                      width={577}
                      height={480}
                      className="w-full h-full"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BusinessStartSection;
