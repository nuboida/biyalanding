import Image from "next/image";

const Hero = () => {
  return (
    <section className="my-25 px-10 h-screen">
      <div className="flex items-center justify-between h-full">
        <div className="w-1/2">
          <h1 className="text-9xl font-semibold font-mono">EASY <span className="text-[#FF834E]">BULK RECHARGES</span> ANYTIME, ANYWHERE.
          </h1>
          <p className="w-6/12 text-lg">
            We help you manage and automate data and airtime and data subscriptions with Biya for business.
          </p>
          <div className="mt-10">
              <span className="bg-accent1 text-white py-3 px-8 font-sans text-xl">
                Get Started
              </span>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <Image
              src={"/businessheroimage.png"}
              alt="image"
              height={707}
              width={1055}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
