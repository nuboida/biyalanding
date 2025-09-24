import Link from "next/link";
import Image from "next/image";

const MainHeader = () => {
    return (
      <header className="fixed overflow-hidden z-20 w-full">
        <nav className="border-b-2 bg-white/50 backdrop-blur-2xl flex items-center py-6 px-10 mr-auto max-lg:hidden container-xl">
        {/* Logo Start */}
          <div className="w-full flex items-center justify-between lg:w-auto mr-20">
            <Link href="/">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={150}
                height={30}
                priority
                className="w-auto h-auto"
              />
            </Link>
          </div>
          {/* Logo End */}

          {/* Nav Buttons Start */}
          <div className="w-full group-data-[state=active]:h-fit h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap">
            <div className="mt-6 dark:text-body md:-ml-4 lg:pr-4 lg:mt-0">
              <ul className="space-y-6 tracking-wide text-base lg:text-lg lg:flex lg:space-y-0 bg-[#0D67AA]/15 py-2 px-2">
                <Link href={"/merchant"}>
                  <span className="bg-white text-lg text-black px-4 py-1 font-bold">
                    Individuals
                  </span>
                </Link>
                <Link href={"/merchant"}>
                  <span className="text-lg text-black px-4 py-1">
                    Business
                  </span>
                </Link>
                <Link href={"/merchant"}>
                  <span className="text-lg text-black px-4 py-1">
                    Merchant
                  </span>
                </Link>
              </ul>
            </div>
          </div>
          {/* Nav Buttons End */}

          <div className="flex flex-col justify-center items-center tracking-wide text-base ml-auto">
            <span className="bg-black text-white py-2 px-6 font-semibold">
              Get Started
            </span>
          </div>
        </nav>
      </header>
    )
}

export default MainHeader;
