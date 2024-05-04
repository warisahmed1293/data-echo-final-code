const IntroductionSection = () => {
  return (
    <div className="py-10 m-2 text-center md:m-0" id='about'>
      <div className="text-4xl font-semibold text-gray-800 md:text-6xl">
        About
        <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
          Us
        </span>{" "}
      </div>
      <div className="relative flex flex-col items-center mx-auto mt-6 border flex-wrap border-gray-300 lg:flex-row rounded-3xl max-w-7xl petal_bg_demo">
        <div className="petal_bg_div rounded-3xl" />
        <div className="z-10 w-full p-4 text-primary lg:w-1/2 sm:p-16 lg:p-12">
          <div className="pb-3 md:pb-10">
            <span className="block pb-3 text-base font-semibold leading-6 text-center text-[#0E6CAC] lg:text-left">
              Introducing DataEcho.
            </span>
            <p className="font-medium md:text-4xl text-xl md:leading-[44px] tracking-[-0.02] text-gray-600 text-center lg:text-left">
              DataEcho is an educational and student data analytics company
            </p>
          </div>
          <div>
            <p className="font-normal text-lg text-gray-700 leading-[28px] text-primary text-center lg:text-left">
              founded on the belief that “data is ripe to give education the
              transformative jolt it needs.” We aim to spearhead the process of
              individualizing learning in schools through highly customizable
              yet robust empirical tools with which to understand both how to
              teach and how to learn.
            </p>
          </div>
        </div>
        <div className="z-10 flex flex-row justify-center w-full p-4 lg:w-1/2 sm:p-16 lg:p-12">
          <iframe
            width="560"
            height="335"
            src="https://www.youtube.com/embed/uBlzHy1-TeU?si=ZbAr51FHbamExkJg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="xl:w-[570px] xl:h-[325px] w-[390px] h-[300px] rounded-md"
          ></iframe>
        </div>
        {/* My Work */}
        <div className="w-full flex flex-col justify-center items-center p-2">
          <h1 className="text-blue-900 text-2xl font-bold leading-6 mb-4">Our Offerings</h1>
          <div className="md:flex justify-center md:space-x-5 lg:space-x-12 my-2">
            <div className="max-w-sm duration-200 shadow-lg text-gray-800 bg-[#F6F7FB] hover:bg-[#0E6CAC] hover:text-white cursor-pointer rounded-2xl w-full p-6 my-2 h-60 flex-col flex justify-center">
              <h1 className="text-2xl font-bold">Schools</h1>
              <p className="my-1">Student Reporting Systems</p>
              <p>Student Management Systems</p>
            </div>
            <div className="max-w-sm duration-200 shadow-lg text-gray-800 bg-[#F6F7FB] hover:bg-[#0E6CAC] hover:text-white cursor-pointer rounded-2xl w-full p-6 my-2 h-60 flex-col flex justify-center">
              <h1 className="text-2xl font-bold">Governments</h1>
              <p className="my-1">Education Sector Analysis Dashboards
                Yearly Analytics Reports</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default IntroductionSection;
