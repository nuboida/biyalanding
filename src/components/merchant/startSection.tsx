import Image from "next/image";

const MerchantStartSection = () => {
  return (
    <>
      <section className="mb-5">
              <div className="bg-[url('/startsectionbg.png')] px-10 bg-cover">
                <div className="pt-50 text-white w-5/12">
                  <h1 className="text-8xl font-mono">Pay The Smart Way</h1>
                  <p>Join our community of Biya users who now pay their bills the stress-free way. Oh yes, there’s no need to go to a physical office or join those queues!</p>
                </div>
              </div>
              <div className="bg-[url('/startsectionimage2.png')] bg-cover h-screen px-6">
                <div className="flex items-center px-20">
                  <div className="w-1/2 flex">
                    <div className="w-6/12">
                      <Image
                        src={'/startsectionimage.svg'}
                        alt="image"
                        height={526}
                        width={445}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div>
                      <div className="flex gap-10 items-center border-b-2 border-white py-2 text-gray-600">
                        <div>
                          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_752_9983)">
                              <path d="M40 60.47C35.9375 60.47 32.24 59.375 28.905 57.19C25.57 55.0025 23.07 52.19 21.405 48.7525L5 20C1.5625 26.1475 0 33.0225 0 40C0 50 3.255 58.725 9.765 66.1725C16.275 73.62 24.375 78.0725 34.0625 79.5325L45.665 59.455C44.4975 59.7975 42.55 60.47 40 60.47Z" fill="#A1D0E6" fillOpacity="0.7" />
                              <path d="M27.4225 23.8275C31.1175 20.965 35.3125 20 40 20H74.375C70.8325 13.96 66.015 8.855 59.9225 5.3125C53.8275 1.7725 47.1875 0 40 0C33.75 0 27.915 1.3275 22.5 3.985C17.0825 6.64 12.07 10.5075 8.39746 15.47L20 35C21.145 30.5225 23.7225 26.695 27.4225 23.8275Z" fill="#A1D0E6" />
                              <path d="M76.9925 25H53.75C57.8125 29.0625 60.47 34.2725 60.47 40C60.4978 44.1823 59.2432 48.2727 56.875 51.72L40.47 80C51.4075 79.895 60.73 75.9375 68.44 68.125C76.145 60.3125 80 50.9375 80 40C80 34.8975 79.14 29.53 76.9925 25Z" fill="#A1D0E6" fillOpacity="0.5" />
                              <path d="M40 55C48.2843 55 55 48.2843 55 40C55 31.7157 48.2843 25 40 25C31.7157 25 25 31.7157 25 40C25 48.2843 31.7157 55 40 55Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip0_752_9983">
                                <rect width="80" height="80" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <h1 className="text-3xl text-white">Browser</h1>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-10 items-center border-b-2 border-white py-2">
                        <div className="w-[80px] h-[80px]">
                          <Image
                            src={"/icons/slack.svg"}
                            alt="slack icon"
                            height={80}
                            width={80}
                            className="w-full h-full"
                          />
                        </div>
                        <h1 className="text-3xl text-white">Slack</h1>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-10 items-center border-b-2 border-white py-2">
                        <div className="w-[80px] h-[80px]">
                          <Image
                            src={"/icons/messenger.svg"}
                            alt="messenger icon"
                            height={80}
                            width={80}
                            className="w-full h-full"
                          />
                        </div>
                        <h1 className="text-3xl text-white">Messenger</h1>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-10 items-center border-b-2 border-white py-2">
                        <div className="w-[80px] h-[80px]">
                          <Image
                            src={"/icons/skype.svg"}
                            alt="messenger icon"
                            height={80}
                            width={80}
                            className="w-full h-full"
                          />
                        </div>
                        <h1 className="text-3xl text-white">Skype</h1>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-10 items-center border-b-2 border-white py-2">
                        <div className="w-[80px] h-[80px]">
                          <Image
                            src={"/icons/telegram.svg"}
                            alt="messenger icon"
                            height={80}
                            width={80}
                            className="w-full h-full"
                          />
                        </div>
                        <h1 className="text-3xl text-white">Telegram</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-36 bg-[#0D67AA] pb-30">
                <div className="bg-primary">
                  <div className="flex justify-between items-center">
                    <div className="pb-10 w-1/2 pl-20">
                      <div className="w-8/12">
                        <h1 className="text-7xl mb-5 font-mono">All your <span className="text-[#17235D]">Payments</span> in one place</h1>
                        <p>With us, payments are no longer a task they’re a conversation. Start chatting today and experience the easiest way to pay.</p>
                        <div className="mt-10">
                          <span className="bg-accent1 text-white py-3 px-8 font-sans text-xl">
                            Start now
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 flex justify-end relative">
                      <div className="w-11/12">
                        <Image
                          src={"/businessstartimage.png"}
                          alt="image"
                          width={577}
                          height={480}
                          className="w-full h-full"
                        />
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </section>
    </>
  )
}

export default MerchantStartSection;
