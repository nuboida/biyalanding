import Image from "next/image";

const About = () => {
  return (
    <section className="container mx-auto my-20">
      <div className="px-4 sm:px-10 mb-10">
        <div className="flex justify-center text-center">
          <h1 className="font-mono text-6xl md:text-9xl">How we help your Business</h1>
        </div>
      </div>
      <div className="px-4 sm:px-10 md:px-20">
        <div className="bg-[#E8E9EF] flex flex-col md:flex-row justify-between items-center px-4 sm:px-10 pt-5">
          <div className="w-full md:w-1/2">
            <div className="w-full md:w-9/12">
              <Image
                src={"/businessaboutimage.svg"}
                alt="image"
                height={527}
                width={544}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="flex flex-col w-full md:w-11/12 md:pl-14">
              <div>
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.3333 27.0649H31.6667V7.0649H15V10.3982H28.3333V27.0649ZM28.3333 30.3982V35.3982C28.3333 36.3182 27.5833 37.0649 26.655 37.0649H6.67833C6.45854 37.0662 6.24066 37.0241 6.0372 36.9409C5.83375 36.8578 5.64872 36.7353 5.49276 36.5804C5.33681 36.4255 5.21299 36.2414 5.12842 36.0385C5.04386 35.8356 5.00022 35.618 5 35.3982L5.005 12.0649C5.005 11.1449 5.755 10.3982 6.68333 10.3982H11.6667V5.39823C11.6667 4.95621 11.8423 4.53228 12.1548 4.21972C12.4674 3.90716 12.8913 3.73157 13.3333 3.73157H33.3333C33.7754 3.73157 34.1993 3.90716 34.5118 4.21972C34.8244 4.53228 35 4.95621 35 5.39823V28.7316C35 29.1736 34.8244 29.5975 34.5118 29.9101C34.1993 30.2226 33.7754 30.3982 33.3333 30.3982H28.3333ZM11.6667 27.0649V30.3982H15V32.0649H18.3333V30.3982H19.1667C20.2717 30.3982 21.3315 29.9592 22.1129 29.1778C22.8943 28.3964 23.3333 27.3366 23.3333 26.2316C23.3333 25.1265 22.8943 24.0667 22.1129 23.2853C21.3315 22.5039 20.2717 22.0649 19.1667 22.0649H14.1667C13.9457 22.0649 13.7337 21.9771 13.5774 21.8208C13.4211 21.6645 13.3333 21.4526 13.3333 21.2316C13.3333 21.0106 13.4211 20.7986 13.5774 20.6423C13.7337 20.486 13.9457 20.3982 14.1667 20.3982H21.6667V17.0649H18.3333V15.3982H15V17.0649H14.1667C13.0616 17.0649 12.0018 17.5039 11.2204 18.2853C10.439 19.0667 10 20.1265 10 21.2316C10 22.3366 10.439 23.3964 11.2204 24.1778C12.0018 24.9592 13.0616 25.3982 14.1667 25.3982H19.1667C19.3877 25.3982 19.5996 25.486 19.7559 25.6423C19.9122 25.7986 20 26.0106 20 26.2316C20 26.4526 19.9122 26.6645 19.7559 26.8208C19.5996 26.9771 19.3877 27.0649 19.1667 27.0649H11.6667Z" fill="#17235D" />
                </svg>
              </div>
              <h1 className="font-semibold text-2xl my-7">Automated Bulk Recharge</h1>
              <p>
                We help your business easily automate airtime and data recharges, ensuring easy and reliable transactions that enhance customer satisfaction and streamline operations, saving you time and resources.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-10 md:px-20 my-20">
        <div className="bg-primary flex flex-col-reverse md:flex-row justify-between items-center px-4 sm:px-10 pt-5">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col w-full md:w-11/12 md:pl-14">
              <div>
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_109_8783)">
                    <path d="M20.3171 37.0932C18.3473 37.0932 16.3967 36.7052 14.5768 35.9514C12.757 35.1976 11.1034 34.0927 9.71049 32.6998C8.31761 31.3069 7.21272 29.6534 6.4589 27.8335C5.70508 26.0136 5.31709 24.063 5.31709 22.0932C5.31709 20.1234 5.70508 18.1728 6.4589 16.353C7.21272 14.5331 8.31761 12.8795 9.71049 11.4866C11.1034 10.0937 12.757 8.98884 14.5768 8.23502C16.3967 7.4812 18.3473 7.09322 20.3171 7.09322C24.2953 7.09322 28.1106 8.67357 30.9237 11.4866C33.7367 14.2997 35.3171 18.115 35.3171 22.0932C35.3171 26.0715 33.7367 29.8868 30.9237 32.6998C28.1106 35.5129 24.2953 37.0932 20.3171 37.0932ZM21.9838 22.0932V13.7599H18.6504V25.4265H26.9838V22.0932H21.9838ZM3.22876 10.8965L9.12043 5.00488L11.4788 7.36155L5.58376 13.2549L3.22876 10.8965ZM31.5121 5.00488L37.4054 10.8965L35.0488 13.2549L29.1554 7.36155L31.5138 5.00488H31.5121Z" fill="#17235D" />
                  </g>
                  <defs>
                    <clipPath id="clip0_109_8783">
                      <rect width="40" height="40" fill="white" transform="translate(0.316895 0.426758)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h1 className="font-semibold text-2xl my-7">Schedule Bulk Recharge</h1>
              <p>
                Effortlessly manage your airtime and data recharges with the convenience of setting up weekly, monthly, or fully customizable schedules. Enjoy the flexibility to stay connected at all times, ensuring you never run out of airtime or data.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="w-full">
              <Image
                src={"/nairaicon.svg"}
                alt="image"
                height={527}
                width={544}
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
