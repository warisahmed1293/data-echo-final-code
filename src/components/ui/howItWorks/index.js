const cardData = [
  {
    title: "Feedback",
    description:
      "Feedback provides individuals with valuable insights, fosters learning and improvement, and serves as a catalyst for personal and professional growth.",
  },
  {
    title: "Individualization",
    description:
      "Effective interpretation of data can be used to better understand student needs and employ strategies to differentiate instruction. Data analysis helps teachers and institutions understand their students’ learning abilities and challenges and facilitates an ingrained cultural process that uses detailed inputs (information) to ensure optimal outputs (results for students).",
  },
  {
    title: "Probabilistic prediction",
    description:
      "Using statistical models and algorithms to anticipate or estimate the likelihood of various educational outcomes, such as student performance, enabling educators to make data-informed decisions and provide targeted interventions for improved learning outcomes.",
  },
];

const CardComponent = ({ title, description }) => (
  <div className="max-w-sm rounded-2xl group overflow-hidden cursor-pointer transition-all duration-200 shadow-lg bg-[#F6F7FB] hover:bg-[#0E6CAC] border border-white h-full">
    <div className="px-6 py-14">
      <div className="font-bold text-2xl mb-2  text-gray-700 group-hover:text-white leading-[30px] ">
        {title}
      </div>
      <p className="text-base font-normal text-gray-700 group-hover:text-white">
        {description}
      </p>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <div className="py-10 m-2 text-center md:m-0">
      <div className="text-center">
        <div className="text-4xl font-bold leading-normal text-gray-800 md:text-5xl">
          How DataEcho
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            Works
          </span>{" "}
        </div>
        <p class="text-xl text-gray-600 pt-4">
          We offer a lens into three core qualities that will improve learning:
        </p>
      </div>
      <div className="relative">
        <div className="grid items-center gap-8 mx-auto mt-16 justify-items-center lg:grid lg:grid-cols-3 max-w-7xl">
          {cardData.map((card, index) => (
            <CardComponent
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
