import Image from "next/image";

const MainAbout = () => {
  return (
    <div className="bg-[url('/about-bg.png')] px-6 bg-cover h-screen">
      <div className="flex justify-between items-center container-xl pt-50 border-b-2">
        <div>
          <h1 className="text-9xl font-mono">What is Biyabot</h1>
          <h6 className="font-semibold">BiyaBot is a payment platform designed to simplify your life.</h6>
          <p className="w-5/12">
            Whether you’re topping up your phone, paying a bill, or managing bulk recharges for your business, you can do it all with just a chat. By becoming a merchant you can receive payments from your customers.
          </p>
          <div className="mt-5">
            <span className="bg-accent1 text-white py-2 px-6 font-sans">
              Get Started
            </span>
          </div>
        </div>
        <div>
          <Image
            src={"/about-image.png"}
            alt="image"
            width={586}
            height={535}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default MainAbout;
