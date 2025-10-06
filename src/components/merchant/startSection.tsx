import Image from "next/image";

const MerchantStartSection = () => {
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
                  <h1 className="text-2xl font-semibold">Enter Order Details</h1>
                  <p className="font-extralight">
                    The agent inputs the customer’s ID, order ID, and amount. This information is sent to the customer who would either accept or decline the order request
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mb-10">
                <div className="bg-white p-3 w-[40px] h-[40px]"></div>
                <div className="text-white w-1/2">
                  <h1 className="text-2xl font-semibold">Send the Request</h1>
                  <p className="font-extralight">
                    A secure payment request is sent directly to the customer’s chat. The customer gets to choose if they approve the order or not.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mb-10">
                <div className="bg-white p-3 w-[40px] h-[40px]"></div>
                <div className="text-white w-1/2">
                  <h1 className="text-2xl font-semibold">Customer Confirms</h1>
                  <p className="font-extralight">
                    With a simple tap, they approve or decline the payment.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mb-10">
                <div className="bg-white p-3 w-[40px] h-[40px]"></div>
                <div className="text-white w-1/2">
                  <h1 className="text-2xl font-semibold">You Get Paid</h1>
                  <p className="font-extralight">
                    Payment is processed instantly, and you keep business moving.
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
                    <h1 className="text-5xl lg:text-6xl 2xl:text-7xl mb-5 font-mono">All your <span className="text-[#17235D]">Payments</span> in one place</h1>
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

export default MerchantStartSection;
