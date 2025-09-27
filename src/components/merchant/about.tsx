import Image from "next/image";

const About = () => {
  return (
    <section className="my-20">
      <div className="px-10 mb-10">
        <div className="flex justify-center">
          <h1 className="font-mono text-9xl">Effortless Payments, No Barriers</h1>
        </div>
      </div>

      <div className="px-20 my-20">
        <div className="bg-[#E8E9EF] flex justify-between items-center px-5 py-5">
          <div className="w-1/2">
            <div className="flex flex-col w-11/12 pl-14">
              <h1 className="font-semibold text-2xl my-7">No More Checkout Hassles</h1>
              <p>
                Customers approve payments with a quick tap, making transactions smoother and reducing friction at checkout. Just a seamless experience for both you and your customers.
              </p>
            </div>
          </div>

          <div className="w-1/2">
            <div className="w-12/12">
              <Image
                src={"/merchantaboutimage1.png"}
                alt="image"
                height={205}
                width={478}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 my-20">
        <div className="bg-[#E8E9EF] flex justify-between items-center px-5 py-5">
          <div className="w-1/2">
            <div className="flex flex-col w-11/12 pl-14">
              <h1 className="font-semibold text-2xl my-7">Multi-Platform Convenience</h1>
              <p>
                Accept payments easily through chat on browsers, Slack, Skype, and other messaging platforms your customers already use. No need for extra apps or complicated setups just a smooth and intuitive payment experience wherever they are.
              </p>
            </div>
          </div>

          <div className="w-1/2">
            <div className="w-12/12">
              <Image
                src={"/merchantaboutimage2.png"}
                alt="image"
                height={205}
                width={478}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 my-20">
        <div className="bg-[#E8E9EF] flex justify-between items-center px-5 py-5">
          <div className="w-1/2">
            <div className="flex flex-col w-11/12 pl-14">
              <h1 className="font-semibold text-2xl my-7">Safe & Secure</h1>
              <p>
                Every transaction is encrypted with advanced security protocols, ensuring that your business and customers' sensitive information remains safe from fraud and unauthorized access.
              </p>
            </div>
          </div>

          <div className="w-1/2">
            <div className="w-12/12">
              <Image
                src={"/merchantaboutimage3.png"}
                alt="image"
                height={205}
                width={478}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
