import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import FooterBlock from './FooterBlock';

const questions = [
    { abbreviation: 'MW', meaning: 'Does the child show signs of muscle weakness?', category: 'Muscular' },
    { abbreviation: 'LT', meaning: 'Does the child have low muscle tone (hypotonia)?', category: 'Muscular' },
    { abbreviation: 'PG', meaning: 'Does the child have difficulty walking or an unusual gait?', category: 'Motor' },
    { abbreviation: 'DSM', meaning: 'Has the child been evaluated using the DSM (Diagnostic and Statistical Manual)?', category: 'Diagnostic' },
    { abbreviation: 'RD', meaning: 'Does the child struggle with reading or recognizing letters?', category: 'Cognitive' },
    { abbreviation: 'MB', meaning: 'Does the child have poor balance or fall frequently?', category: 'Motor' },
    { abbreviation: 'W', meaning: 'Does the child have trouble walking independently?', category: 'Motor' },
    { abbreviation: 'CS', meaning: 'Does the child struggle with tasks requiring coordination (like catching a ball)?', category: 'Motor' },
    { abbreviation: 'LAH', meaning: 'Does the child have limited use of arms or hands?', category: 'Motor' },
    { abbreviation: 'MM', meaning: 'Does the child show delayed or abnormal motor movements?', category: 'Motor' },
    { abbreviation: 'FE', meaning: 'Does the child show limited or unusual facial expressions?', category: 'Motor' },
    { abbreviation: 'WD', meaning: 'Did the child have a delayed walking milestone?', category: 'Motor' },
    { abbreviation: 'UM1', meaning: 'Does the child have difficulty with upper body motor functions?', category: 'Motor' },
    { abbreviation: 'J', meaning: 'Does the child show jerky movements or sudden jumps?', category: 'Motor' },
    { abbreviation: 'OL', meaning: 'Does the child keep limbs in overlapping or crossed positions?', category: 'Motor' },
    { abbreviation: 'S', meaning: 'Does the child appear stiff or rigid in movements?', category: 'Motor' },
    { abbreviation: 'IS', meaning: 'Does the child struggle with body stability or posture?', category: 'Motor' },
    { abbreviation: 'VD', meaning: 'Does the child have difficulty seeing or tracking objects?', category: 'Sensory' },
    { abbreviation: 'LI', meaning: 'Does the child show signs of limb weakness or limited use?', category: 'Motor' },
    { abbreviation: 'PEC', meaning: 'Does the child avoid or lack eye contact?', category: 'Behavioral' },
    { abbreviation: 'CT', meaning: 'Did the child skip or struggle with crawling?', category: 'Motor' },
    { abbreviation: 'D', meaning: 'Does the child drool excessively beyond infancy?', category: 'Motor / Oral Motor' },
    { abbreviation: 'A', meaning: 'Does the child show poor coordination or trouble with balance?', category: 'Motor' },
    { abbreviation: 'SM', meaning: 'Does the child have delayed speech or motor development?', category: 'Developmental' },
    { abbreviation: 'I', meaning: 'Does the child show signs of incoordination during tasks?', category: 'Motor' },
    { abbreviation: 'RB', meaning: 'Does the child show repetitive behaviors (e.g., hand-flapping, rocking)?', category: 'Behavioral / Autism indicator' },
    { abbreviation: 'UM2', meaning: 'Is there concern about upper motor function related to behavioral signs?', category: 'Behavioral / Autism indicator' },
    { abbreviation: 'TT', meaning: 'Does the child frequently walk on their toes?', category: 'Behavioral / Motor' },
    { abbreviation: 'AN', meaning: 'Does the child have trouble maintaining attention or gets easily distracted?', category: 'Cognitive' },
    { abbreviation: 'FA', meaning: 'Does the child struggle with focusing on tasks or instructions?', category: 'Cognitive' },
    { abbreviation: 'TDA', meaning: 'Does the child have difficulty focusing on specific goals or tasks?', category: 'Cognitive' },
    { abbreviation: 'SA', meaning: 'Does the child struggle with understanding social cues or interactions?', category: 'Behavioral' },
    { abbreviation: 'CM', meaning: 'Does the child have trouble communicating with others?', category: 'Behavioral' },
    { abbreviation: 'TM', meaning: 'Did the child reach speech milestones (like first words) later than expected?', category: 'Developmental' }
];

const Questionnaire = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isAnswered, setIsAnswered] = useState(false);
    const [result, setResult] = useState(null); // Store the predicted disease result
    const navigate = useNavigate();

    const handleChange = (value) => {
        const abbreviation = questions[currentIndex].abbreviation;
        setAnswers((prev) => ({ ...prev, [abbreviation]: value === 'Y' ? 1 : 0 }));
        setIsAnswered(true); // Mark as answered
    };

    const handleNext = () => {
        if (!isAnswered) {
            alert("Please answer the current question before proceeding.");
            return; // Prevent moving to next question if the current one is not answered
        }

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setIsAnswered(false); // Reset answer status for the next question
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('"https://nikhil.sbs/stage_1_test/', {
                input_data: Object.values(answers),
            });
            setResult(response.data.predicted_disease); // Set the result from the server
        } catch (error) {
            console.error('Error predicting disease:', error);
        }
    };

    if (result) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">Predicted Disease</h2>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                        <p className="text-lg font-semibold mb-4">The predicted disease is: {result}</p>
                    </div>
                    <div className="mt-6 flex justify-center gap-4">
                        <button
                            onClick={() => navigate('/')}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow-md"
                        >
                            Go Back
                        </button>
                        <button
                            onClick={() => navigate('/Diagnose/questionnaire_stage_2')}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow-md"
                        >
                           Stage 2
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10">
                <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
                    <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-4">
                        Autism & Neurological Disorder Screening
                    </h1>
                    <p className="text-center text-gray-600 text-md mb-6">
                        This brief questionnaire helps us identify early signs of neurological or developmental disorders.
                        Please answer honestly and to the best of your knowledge. Your responses are confidential.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg shadow-inner border border-blue-100">
                        <h2 className="text-xl font-semibold text-blue-600 mb-3">
                            Stage 1: Initial Screening
                        </h2>
                        <p className="text-lg font-medium text-gray-700 mb-4">
                            {currentQuestion.meaning} <span className="text-gray-500">({currentQuestion.abbreviation})</span>
                        </p>

                        <div className="flex justify-around text-lg">
                            <label className="cursor-pointer flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="response"
                                    value="Y"
                                    checked={answers[currentQuestion.abbreviation] === 1}
                                    onChange={() => handleChange('Y')}
                                    className="accent-blue-600"
                                />
                                <span>Yes</span>
                            </label>

                            <label className="cursor-pointer flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="response"
                                    value="N"
                                    checked={answers[currentQuestion.abbreviation] === 0}
                                    onChange={() => handleChange('N')}
                                    className="accent-blue-600"
                                />
                                <span>No</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <button
                            onClick={handleNext}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-all duration-200"
                        >
                            {currentIndex === questions.length - 1 ? 'Submit Answers' : 'Next Question'}
                        </button>
                    </div>

                    <p className="mt-6 text-sm text-gray-500 text-center">
                        Please note: This is not a diagnosis. For medical concerns, consult a healthcare professional.
                    </p>
                </div>
            </div>
            <FooterBlock />
        </>
    );
};

export default Questionnaire;
