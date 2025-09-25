import Image from "next/image";

const Benefits = () => {
  return (
    <div className="my-20 relative">
      <div className="flex justify-center items-center py-52">
        <h1 className="text-9xl font-mono">Why Biyabot</h1>
      </div>
      <div className="absolute top-16 left-56">
        <Image
          src={"/benefit1.svg"}
          alt="benefit"
          height={119}
          width={308}
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-24 right-40">
        <Image
          src={"/benefit2.svg"}
          alt="benefit"
          height={119}
          width={308}
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-20 left-40">
        <Image
          src={"/benefit3.svg"}
          alt="benefit"
          height={119}
          width={308}
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 right-40">
        <Image
          src={"/benefit4.svg"}
          alt="benefit"
          height={119}
          width={308}
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default Benefits;
