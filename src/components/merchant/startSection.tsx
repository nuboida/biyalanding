"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const MerchantStartSection = () => {

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

    const { scrollYProgress } = useScroll({
      container: containerRef,
      offset: ["start start", "end start"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      const cardsBreakpoints = [0 / 4 - 0.1, 1 / 4 - 0.1, 2 / 4 - 0.1, 3 / 4 - 0.1];

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
      <section className="mb-5 bg-[url('/startsectionbg.png')] bg-cover min-h-screen" ref={sectionRef}>
        <div className="container mx-auto mb-20">
          <div className=" px-4 sm:px-36 py-20 md:pt-40">
            <div className="text-white w-full md:w-8/12 lg:w-5/12 text-center md:text-left pt-20">
              <h1 className="text-6xl md:text-9xl font-mono">How it Works</h1>
            </div>
          </div>

          <motion.div
            ref={containerRef}
            className="h-[35rem] flex justify-center space-x-10 p-4 rounded-2xl overflow-y-auto"
          >
            <div className="flex items-start px-4">
              <div className="max-w-2xl">
                <div className="h-20" />
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
                      Enter Order Details
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
                      The agent inputs the customer’s ID, order ID, and amount. This information is sent to the customer who would either accept or decline the order request
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
                      Send the Request
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
                      A secure payment request is sent directly to the customer’s chat. The customer gets to choose if they approve the order or not.
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
                      Customer Confirms
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
                      With a simple tap, they approve or decline the payment.
                    </motion.p>
                  </div>
                </div>
                <div className="h-20" />
                <div className="my-8 flex gap-2">
                  <motion.div animate={{opacity: activeCard === 3 ? 1 : 0.3}} className="w-[30px] h-[30px] bg-white"/>
                  <div>
                    <motion.h2
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === 3 ? 1 : 0.3,
                      }}
                      className="text-2xl font-bold text-white"
                    >
                      You get Paid
                    </motion.h2>
                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === 3 ? 1 : 0.3,
                      }}
                      className="text-lg text-slate-300 max-w-sm mt-4"
                    >
                      Payment is processed instantly, and you keep business moving.
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
                      backgroundImage: 'url("/merchantWork1.png")',
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
                      backgroundImage: 'url("/merchantWork2.png")',
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
                      backgroundImage: 'url("/merchantWork3.png")',
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

              {
                activeCard === 3 && (
                  <motion.div
                    animate={{
                      // backgroundImage: linearGradients[activeCard % linearGradients.length],
                      backgroundImage: 'url("/merchantWork4.png")',
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
                    <h1 className="text-5xl lg:text-6xl 2xl:text-7xl mb-5 font-mono">All your <span className="text-[#17235D]">Payments</span> in one place</h1>
                    <p>With us, payments are no longer a task they’re a conversation. Start chatting today and experience the easiest way to pay.</p>
                    <div className="mt-10">
                      <Link href={"https://merchant.biya.com.ng/register"} className="bg-accent1 text-white py-3 px-8 font-sans">
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

export default MerchantStartSection;
