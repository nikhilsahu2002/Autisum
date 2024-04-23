import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
// import { img } from "../assets/img.jpg";

function AutismQuiz() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const handleAnswer = (question, points) => {
    setAnswers({ ...answers, [question]: points });
  };

  const handleSubmit = () => {
    const totalScore = Object.values(answers).reduce(
      (acc, curr) => acc + curr,
      0,
    );
    setScore(totalScore);
    setSubmitted(true);
    setShowDialog(true);
  };

  const renderResult = () => {
    if (!submitted) return null;
    let interpretation = "";
    if (score <= 5) {
      interpretation = "Low likelihood of autism traits.";
    } else if (score <= 10) {
      interpretation =
        "Moderate likelihood of autism traits. Consider seeking further evaluation.";
    } else {
      interpretation =
        "High likelihood of autism traits. It's advisable to consult with a healthcare professional.";
    }
    return (
      <div>
        <h2>You Score: {score}</h2>
        <p>Interpretation: {interpretation}</p>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="absolute top-0 inset-x-0 h-64 flex items-start">
          <div className="h-24 w-2/3 bg-gradient-to-br from-blue-500 opacity-20 blur-2xl "></div>
          <div className="h-20 w-3/5 bg-gradient-to-r from-[#488ad4] opacity-40 blur-2xl "></div>
        </div>
        <h1 className=" text-5xl justify-center flex font-extrabold mb-5 p-5">
          Autism Diagnosis Test
        </h1>
        <div class="grid lg:grid-cols-2 sm:grid-cols-1  gap-4">
          <div className="ml-5 ">
            <p class="mb-3 text-lg text-gray-500 md:text-xl ">
              Answer the following questions to assess Your Childr autism traits
            </p>
            <p class="text-gray-500 ">
              The autism detection form offers a structured approach to
              assessing potential autism traits. Carefully crafted questions
              cover key areas such as social interaction, communication skills,
              and sensory sensitivities. Designed for ease of use, the form
              encourages honest responses and provides valuable insights for
              timely interventions and support.
            </p>

            <div className="mb-5 mt-5">
              <div className="">
                <h3>
                  Question 1: Do Your Child find it easy to make eye contact
                  during conversations?
                </h3>
                <div className="mt-2">
                  <button
                    onClick={() => handleAnswer("q1", 2)}
                    style={{
                      backgroundColor:
                        answers["q1"] === 2 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    Yes
                  </button>
                  <button
                    onClick={() => handleAnswer("q1", 0)}
                    style={{
                      backgroundColor:
                        answers["q1"] === 0 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    No
                  </button>
                  <button
                    onClick={() => handleAnswer("q1", 1)}
                    style={{
                      backgroundColor:
                        answers["q1"] === 1 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600">
                    Sometimes
                  </button>
                </div>
              </div>
            </div>
            <div className=" flex">
              <div className="">
                <h3>
                  Question 2: How do Your Child feel about social gatherings or
                  events?
                </h3>
                <div className="mt-2">
                  <button
                    onClick={() => handleAnswer("q2", 2)}
                    style={{
                      backgroundColor:
                        answers["q2"] === 2 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    I enjoy them
                  </button>
                  <button
                    onClick={() => handleAnswer("q2", 1)}
                    style={{
                      backgroundColor:
                        answers["q2"] === 1 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    I prefer smaller settings
                  </button>
                  <button
                    onClick={() => handleAnswer("q2", 0)}
                    style={{
                      backgroundColor:
                        answers["q2"] === 0 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    I find them overwhelming
                  </button>
                </div>
              </div>
            </div>
            <div className=" mt-5">
              <div className="">
                <h3>
                  Question 3: Are Your Child sensitive to loud noises or bright
                  lights?
                </h3>
                <div className="mt-2">
                  <button
                    onClick={() => handleAnswer("q3", 2)}
                    style={{
                      backgroundColor:
                        answers["q3"] === 2 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    Yes, very sensitive
                  </button>
                  <button
                    onClick={() => handleAnswer("q3", 1)}
                    style={{
                      backgroundColor:
                        answers["q3"] === 1 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    Somewhat sensitive
                  </button>
                  <button
                    onClick={() => handleAnswer("q3", 0)}
                    style={{
                      backgroundColor:
                        answers["q3"] === 0 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600">
                    No, not really
                  </button>
                </div>
              </div>
            </div>

            <div className=" mt-5">
              <div className="">
                <h3>
                  Question 4: Do Your Child have difficulty understanding
                  others' emotions?
                </h3>
                <div className="mt-2">
                  <button
                    onClick={() => handleAnswer("q4", 2)}
                    style={{
                      backgroundColor:
                        answers["q4"] === 2 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    Yes, often
                  </button>
                  <button
                    onClick={() => handleAnswer("q4", 1)}
                    style={{
                      backgroundColor:
                        answers["q4"] === 1 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    Sometimes
                  </button>
                  <button
                    onClick={() => handleAnswer("q4", 0)}
                    style={{
                      backgroundColor:
                        answers["q4"] === 0 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600">
                    No, not really
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="">
                <h3>
                  Question 5: Do Your Child prefer routine and predictability in
                  Your Childr daily life?
                </h3>
                <div className="mt-2">
                  <button
                    onClick={() => handleAnswer("q5", 2)}
                    style={{
                      backgroundColor:
                        answers["q5"] === 2 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    Yes, I need it
                  </button>
                  <button
                    onClick={() => handleAnswer("q5", 1)}
                    style={{
                      backgroundColor:
                        answers["q5"] === 1 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    I like some routine
                  </button>
                  <button
                    onClick={() => handleAnswer("q5", 0)}
                    style={{
                      backgroundColor:
                        answers["q5"] === 0 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600">
                    I'm flexible with routines
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="">
                <h3>
                  Question 6: How do Your Child handle changes in plans or
                  unexpected events?
                </h3>
                <div className="mt-2">
                  <button
                    onClick={() => handleAnswer("q6", 2)}
                    style={{
                      backgroundColor:
                        answers["q6"] === 2 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    I struggle with changes
                  </button>
                  <button
                    onClick={() => handleAnswer("q6", 1)}
                    style={{
                      backgroundColor:
                        answers["q6"] === 1 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    I adapt with some difficulty
                  </button>
                  <button
                    onClick={() => handleAnswer("q6", 0)}
                    style={{
                      backgroundColor:
                        answers["q6"] === 0 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600">
                    I'm flexible and adapt easily
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="">
                <h3>
                  Question 7: Are Your Child interested in a wide range of
                  topics or activities?
                </h3>
                <div className="mt-2">
                  <button
                    onClick={() => handleAnswer("q7", 2)}
                    style={{
                      backgroundColor:
                        answers["q7"] === 2 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    Yes, I have many interests
                  </button>
                  <button
                    onClick={() => handleAnswer("q7", 1)}
                    style={{
                      backgroundColor:
                        answers["q7"] === 1 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    I have a few specific interests
                  </button>
                  <button
                    onClick={() => handleAnswer("q7", 0)}
                    style={{
                      backgroundColor:
                        answers["q7"] === 0 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600">
                    I have limited interests
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="">
                <h3>
                  Question 8: Do Your Child often engage in repetitive behaviors
                  or movements?
                </h3>
                <div className="mt-2">
                  <button
                    onClick={() => handleAnswer("q8", 2)}
                    style={{
                      backgroundColor:
                        answers["q8"] === 2 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    Yes, frequently
                  </button>
                  <button
                    onClick={() => handleAnswer("q8", 1)}
                    style={{
                      backgroundColor:
                        answers["q8"] === 1 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    Sometimes, to a moderate extent
                  </button>
                  <button
                    onClick={() => handleAnswer("q8", 0)}
                    style={{
                      backgroundColor:
                        answers["q8"] === 0 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600">
                    No, rarely
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="">
                <h3>
                  Question 9: How do Your Child feel about changes in Your
                  Childr daily routine?
                </h3>
                <div className="mt-2">
                  <button
                    onClick={() => handleAnswer("q9", 2)}
                    style={{
                      backgroundColor:
                        answers["q9"] === 2 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    I feel anxious or upset
                  </button>
                  <button
                    onClick={() => handleAnswer("q9", 1)}
                    style={{
                      backgroundColor:
                        answers["q9"] === 1 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    I feel a bit unsettled
                  </button>
                  <button
                    onClick={() => handleAnswer("q9", 0)}
                    style={{
                      backgroundColor:
                        answers["q9"] === 0 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600">
                    I don't mind changes
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="">
                <h3>
                  Question 10: Do Your Child have difficulty recognizing social
                  cues or non-verbal communication?
                </h3>
                <div className="mt-2">
                  <button
                    onClick={() => handleAnswer("q10", 2)}
                    style={{
                      backgroundColor:
                        answers["q10"] === 2 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    Yes, often
                  </button>
                  <button
                    onClick={() => handleAnswer("q10", 1)}
                    style={{
                      backgroundColor:
                        answers["q10"] === 1 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    Sometimes, to some extent
                  </button>
                  <button
                    onClick={() => handleAnswer("q10", 0)}
                    style={{
                      backgroundColor:
                        answers["q10"] === 0 ? "#4299e1" : "#6b7280",
                    }}
                    className="text-white px-4 py-2 rounded hover:bg-blue-600">
                    No, not really
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 mb-5">
              Check Autism
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img src="src\assets\img.jpg" alt="" />
          </div>
        </div>

        {showDialog && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {renderResult()}
              <button
                onClick={() => setShowDialog(false)}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2">
                Close
              </button>
              <Link
                to="/"
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Check Doctors
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AutismQuiz;
