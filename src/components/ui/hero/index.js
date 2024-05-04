const HeroSection = () => {
  return (
    <div className="relative z-0 flex flex-col px-4 py-10 mx-auto md:flex-row max-w-7xl">
      <div className="flex flex-col flex-1 my-auto ">
        <div className="flex flex-col">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tighter text-center text-gray-800 md:text-start md:text-6xl leading-tighter">
            Data{/* */}
            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Echo
            </span>
          </h1>

          <p className="text-xl font-medium leading-8 text-center text-black md:text-start">
            At the heart of our mission lies the conviction that data serves as
            the cornerstone of academic success. It&apos;s not just information; it&apos;s
            a narrative constantly echoing insights and opportunities. Our role?
            We&apos;re listeners, attuned to its profound language, ready to decipher
            its ECHOES into meaningful actions
          </p>
          <div className="flex flex-col items-center mt-10 md:flex-row gap-x-3">
            <a href="/demo">
              <button className="bg-[#0E6CAC] whitespace-nowrap font-semibold text-white py-4 px-7 rounded-full leading-7 flex items-center justify-center gap-x-3 h-[60px] w-[223px] text-lg">
                Request a Demo
                <span />
              </button>
            </a>
            <a href="/demo">
              <button className="flex items-center justify-center py-4 text-lg font-semibold leading-7 text-black rounded-full bg-blue-gradient whitespace-nowrap px-7 gap-x-3">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div>
          <img
            src="hero.jpeg"
            className="w-10/12 mx-auto bg-cover rounded-md md:mx-0 lg:ml-auto h-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
