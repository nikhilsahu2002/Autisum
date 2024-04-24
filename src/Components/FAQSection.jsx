import React, { useState } from "react";

function FAQSection() {
  const [answersState, setAnswersState] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
  });

  const toggleAnswer = (question) => {
    setAnswersState({
      ...answersState,
      [question]: !answersState[question],
    });
  };
  const questionContent = [
    "What is autism?",
    "What are the early signs of autism?",
    "What causes autism?",
    "How common is autism?",
  ];

  const answerContent = [
    "Autism, or autism spectrum disorder (ASD), is a developmental disorder characterized by challenges with social skills, repetitive behaviors, speech, and nonverbal communication. It is a spectrum condition, meaning that it affects individuals differently and to varying degrees.",
    "Early signs of autism can include limited or no eye contact, delayed speech or language skills, difficulty with social interaction, repetitive behaviors (like rocking or hand-flapping), and sensitivity to sensory stimuli.",
    "The exact cause of autism is unknown, but it is believed to involve a combination of genetic and environmental factors. There is ongoing research in this area to better understand the causes of autism.",
    "Autism is relatively common, with an estimated prevalence of about 1 in 54 children in the United States, according to the Centers for Disease Control and Prevention (CDC).",
  ];

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Explore Common Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleAnswer(`question${index}`)}>
                <span className="flex text-lg font-semibold text-black">
                  {questionContent[index - 1]}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 ${
                    answersState[`question${index}`]
                      ? "transform rotate-0"
                      : "transform rotate-180"
                  }`}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`answer${index}`}
                style={{
                  display: answersState[`question${index}`] ? "block" : "none",
                }}
                className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>{answerContent[index - 1]}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 textbase mt-9">
          Still have questions?{" "}
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
            Contact our support
          </span>
        </p>
      </div>
    </section>
  );
}

export default FAQSection;
