const MainHero = () => {
  return (
    <div className="mt-25 h-screen font-mono font-bold px-10">
      <div className="flex justify-center h-full pt-10">
        <div className="flex flex-col items-center">
          <h1 className="text-9xl">EASY</h1>
          <div className="bubble -mt-8">
            <h1 className="text-9xl text-white">PAYMENTS</h1>
          </div>
          <h1 className="text-9xl">JUST A CHAT AWAY</h1>
          <p className="text-black font-extralight font-sans w-2/3 text-center text-lg">Pay bills and manage transactions on your favorite platforms like Telegram, Slack, Messenger, Skype, or your browser. it’s simple, fast, and hassle-free.</p>
          <div className="mt-10">
            <span className="bg-accent1 text-white py-3 px-8 font-sans text-xl">
              Get Started
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHero;
