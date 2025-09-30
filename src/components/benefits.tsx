import Image from "next/image";

const Benefits = () => {
  return (
    <div className="my-20 relative h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl md:text-9xl font-mono text-center">Why Biyabot</h1>
      </div>
        <div className="w-full absolute top-15 left-56 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image
            src={"/benefit1.svg"}
            alt="benefit"
            height={119}
            width={308}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full absolute top-24 right-40 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image
            src={"/benefit2.svg"}
            alt="benefit"
            height={119}
            width={308}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full absolute bottom-20 left-40 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image
            src={"/benefit3.svg"}
            alt="benefit"
            height={119}
            width={308}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full absolute bottom-0 right-40 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image
            src={"/benefit4.svg"}
            alt="benefit"
            height={119}
            width={240}
            className="w-full h-auto"
          />
        </div>
      </div>
  )
}

export default Benefits;
