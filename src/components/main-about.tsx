import Image from "next/image";

const MainAbout = () => {
  return (
    <>
      <div className="mb-20 bg-[url('/about-bg.png')] bg-cover">
        <div className="container mx-auto">
          <div className="px-4 sm:px-36 min-h-screen flex items-center">
            <div className="flex flex-col lg:flex-row justify-between items-center container-xl pt-20 lg:pt-0">
              <div className="pb-10 w-full lg:w-1/2 flex flex-col justify-between gap-2 text-center lg:text-left">
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
            <div className="flex flex-col items-center text-center px-4">
              <h1 className="text-6xl lg:text-9xl 2xl:text-[170px] font-mono">How We Make Life Easier</h1>
              <p className="w-full md:w-6/12 lg:w-4/12 text-center">We offer a wide range of services designed to simplify transactions for both individuals and businesses. From managing bulk transactions to helping merchants get paid instantly, Biya ensures every process is seamless, secure, and stress-free.</p>
            </div>
            <div className="px-20 mt-20">
              <div className="flex justify-center items-stretch gap-4 max-md:flex-wrap">
                <div className="flex flex-col justify-between items-center w-full sm:w-8/12 md:w-5/12 lg:w-3/12 px-2 pt-5 text-white bg-[#0D67AA]">
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
                <div className="flex flex-col justify-between items-center w-full sm:w-8/12 md:w-5/12 lg:w-3/12 px-2 pt-5 text-black bg-[#E8E9EF]">
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
                <div className="flex flex-col justify-between items-center w-full sm:w-8/12 md:w-5/12 lg:w-3/12 px-2 pt-5 text-white bg-[#17235D]">
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
                <div className="flex flex-col justify-between items-center w-full sm:w-8/12 md:w-5/12 lg:w-3/12 px-2 pt-5 text-black bg-[#E8EFE9]">
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
                <div className="flex flex-col justify-between items-center w-full sm:w-8/12 md:w-5/12 lg:w-3/12 px-2 pt-5 text-white bg-[#0D67AA]">
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
        </div>
      </div>
    </>
  )
}

export default MainAbout;
