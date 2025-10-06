import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="container mx-auto px-4 sm:px-10 pb-40 pt-10">
      <div className="flex flex-col sm:flex-row items-center mb-10">
        <div>
          <Image
            src={"/biyaicon.svg"}
            alt="biya icon"
            height={100}
            width={150}
            className="h-auto"
          />
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold text-center sm:text-left">Biyabot</h1>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-stretch gap-10">
        <div className="w-full md:w-auto mr-auto">
          <h5 className="text-lg font-semibold mb-5 text-center md:text-left">Be the first to know when we open up applications</h5>
          <div className="flex flex-nowrap">
            <input className="border px-4 sm:px-10 py-2 w-full" placeholder="Email Address" />
            <button className="py-2 px-4 bg-black text-white">Subscribe</button>
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full md:w-auto md:ml-10 mt-10 md:mt-0">
          <h5 className="font-semibold">Company</h5>
          <div>
            <Link href={"#"}>Biyabot</Link>
          </div>
          <div>
            <Link href={"#"}>Biya for merchant</Link>
          </div>
          <div>
            <Link href={"#"}>Biya for business</Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full md:w-auto md:ml-10 mt-10 md:mt-0">
          <h5 className="font-semibold">Legal</h5>
          <div>
            <Link href={"#"}>Terms and Conditions</Link>
          </div>
          <div>
            <Link href={"#"}>Privacy Policy</Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full md:w-auto md:ml-10 mt-10 md:mt-0">
          <h5 className="font-semibold">Contact Us</h5>
          <div className="flex items-center gap-2">
            <div>
              <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.48553 8.71471L0.421875 15.5731V1.85633L7.48553 8.71471ZM13.0544 11.6634C12.3501 12.3411 11.2372 12.3411 10.5329 11.6634L8.66839 9.85646L1.61288 16.7148H21.9662L14.9107 9.85646C14.0893 10.6532 13.4241 11.302 13.0544 11.6634ZM11.6746 10.4807C11.7403 10.5464 11.8471 10.5464 11.9128 10.4807C13.5288 8.90881 19.0831 3.5269 21.9662 0.714844H1.61284C3.39107 2.44174 10.0237 8.88214 11.6746 10.4807ZM21.687 3.27747C20.1018 4.82162 17.9087 6.949 16.0936 8.71497L23.1572 15.5734V1.85659L21.687 3.27747Z" fill="black" />
              </svg>
            </div>
            <h5>hello@biya.com.ng</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;
