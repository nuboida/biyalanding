import Image from "next/image";

const Hero = () => {
  return (
    <section className="my-25 px-10 h-screen">
      <div className="flex items-center justify-between h-full">
        <div className="w-1/2">
          <h1 className="text-8xl w-10/12 font-semibold font-mono">GET PAID <span className="text-[#FDA813]">INSTANTLY</span> WITH JUST A CHAT.
          </h1>
          <p className="w-8/12 text-lg">
            Receive payments effortlessly—no apps, no long processes. Just send a request, let your customer approve it, and get paid instantly through their favourite chat platform.
          </p>
          <div className="mt-5">
              <span className="bg-accent1 text-white py-2 px-6 font-sans">
                Get Started
              </span>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <Image
              src={"/merchantheroimage.png"}
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
