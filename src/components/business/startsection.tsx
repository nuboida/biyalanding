import Image from "next/image";

const BusinessStartSection = () => {
  return (
    <>
      <section className="mb-5 bg-[url('/startsectionbg.png')] bg-cover min-h-screen">
        <div className="container mx-auto mb-20">
          <div className=" px-4 sm:px-36 py-20 md:pt-40">
            <div className="text-white w-full md:w-8/12 lg:w-5/12 text-center md:text-left pt-20">
              <h1 className="text-6xl md:text-9xl font-mono">How it Works</h1>
            </div>
          </div>

          <div className="flex items-center justify-between px-4 sm:px-36">
            <div className="flex flex-col w-1/2">
              <div className="flex gap-2 mb-10">
                <div className="bg-white p-3 w-[40px] h-[40px]"></div>
                <div className="text-white w-1/2">
                  <h1 className="text-2xl font-semibold">Upload CSV</h1>
                  <p className="font-extralight">
                    Easily streamline your recharge process by simply uploading the sheet containing all the phone numbers you wish to recharge. With just a few clicks, you can ensure every number on your list is topped up efficiently and without hassle.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mb-10">
                <div className="bg-white p-3 w-[40px] h-[40px]"></div>
                <div className="text-white w-1/2">
                  <h1 className="text-2xl font-semibold">Process and Pay</h1>
                  <p className="font-extralight">
                    Quickly process the entire batch of numbers you’ve uploaded and proceed to make payment seamlessly. This efficient system ensures that all recharges are completed accurately and without delays.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mb-10">
                <div className="bg-white p-3 w-[40px] h-[40px]"></div>
                <div className="text-white w-1/2">
                  <h1 className="text-2xl font-semibold">Instant Recharge</h1>
                  <p className="font-extralight">
                    Once payment is confirmed, all numbers in the file will be topped up in a short time.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <Image
                src={"/howItWorksImg.png"}
                alt="upload csv screen"
                width={827}
                height={625}
                className="w-full h-full"
              />
            </div>
          </div>


          <div className="px-4 mt-40 sm:px-8 md:px-16 lg:px-36 bg-[#0D67AA] pb-20 md:pb-30">
            <div className="bg-primary">
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="pb-10 w-full lg:w-1/2 pl-4 sm:pl-10 md:pl-20 text-center lg:text-left">
                  <div className="w-full lg:w-8/12">
                    <h1 className="text-6xl 2xl:text-7xl mb-5 font-mono">All your <span className="text-[#17235D]">Payments</span> in one place</h1>
                    <p>With us, payments are no longer a task they’re a conversation. Start chatting today and experience the easiest way to pay.</p>
                    <div className="mt-10">
                      <span className="bg-accent1 text-white py-3 px-8 font-sans">
                        Start now
                      </span>
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
