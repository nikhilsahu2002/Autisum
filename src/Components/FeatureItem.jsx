const iconRender = (val) => {
  switch (val) {
    case "task":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
          />
        </svg>
      );
    case "form":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 9h12M6 13.5h12M6 18h12M9 6h6m0-3H9a3 3 0 00-3 3v18a3 3 0 003 3h6a3 3 0 003-3V6a3 3 0 00-3-3z"
          />
        </svg>
      );
    case "face":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 9.75h.008v.008H15V9.75zm-6 0h.008v.008H9V9.75zM12 17.25c-1.25 0-2.45-.63-3.2-1.69a.75.75 0 111.2-.88 2.75 2.75 0 004 0 .75.75 0 111.2.88A4.75 4.75 0 0112 17.25zM21 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2s10 4.477 10 10z"
          />
        </svg>
      );

    case "euro-circle":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "fire":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
          />
        </svg>
      );
    default:
      return <>No Icon</>;
  }
};

const FeatureItem = ({ title, description, icon }) => {
  return (
    <div className="flex gap-5 sm:gap-6  items-start">
      <div className="min-w-max flex">
        <span className="p-4 rounded-md bg-gray-100  text-gray-800 ">
          {iconRender(icon)}
        </span>
      </div>
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-gray-900 ">{title}</h2>
        <p className="text-gray-700 ">{description}</p>
      </div>
    </div>
  );
};
const features = [
  {
    id: 1,
    title: "Stage-wise Manual Diagnosis",
    description:
      "Answer stage-based questionnaires to assess autism risk manually. Each stage deepens the analysis.",
    icon: "form",
  },
  {
    id: 2,
    title: "Facial Image Test",
    description:
      "We use advanced image analysis techniques to assess facial features and detect signs of autism.",
    icon: "face", // Assuming "face" is the icon you added
  },
  {
    id: 3,
    title: "MRI Test Result",
    description:
      "MRI scan reveals certain points in the brain that reflect autism, guiding personalized healthcare decisions.",
    icon: "task",
  },
  {
    id: 4,
    title: "Consultancy",
    description:
      "We provide world best doctors for daignosis and provide online consultancies",
    icon: "euro-circle",
  }
];
const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="space-y-4 max-w-2xl">
          <span className="text-blue-600 font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600  before:rounded-full">
            Why Us
          </span>
          <h1 className="font-bold text-gray-800  text-3xl">
            We help you to Understand And Diagnosis Autisum
          </h1>
        </div>
        <div className="mx-auto flex flex-col md:flex-row gap-10 xl:gap-14">
          <div className="md:w-1/2 md:flex-1 flex flex-col space-y-5 md:gap-y-6 md:py-4 xl:py-6">
            {features.map((feature) => (
              <FeatureItem key={feature.id} {...feature} />
            ))}
          </div>
          <div className="md:w-1/2 md:flex-1 lg:flex xl:w-[45%]  bg-gray-100  border border-gray-200  p-1.5 shadow-xl shadow-gray-200/50  rounded-md">
            <div className="relative lg:w-full h-full">
              <img
                src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
                width={2240}
                alt="system engineers celebrating successful-code-"
                className="absolute inset-0 rounded h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
