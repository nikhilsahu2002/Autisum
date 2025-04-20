import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import FooterBlock from './FooterBlock';

const questions = [
    { abbreviation: 'MW', meaning: 'Does the child show signs of muscle weakness?', category: 'Muscular' },
    { abbreviation: 'LT', meaning: 'Does the child have low muscle tone (hypotonia)?', category: 'Muscular' },
    { abbreviation: 'PG', meaning: 'Does the child have poor gait or trouble walking smoothly?', category: 'Motor' },
    { abbreviation: 'DSM', meaning: 'Has the child been assessed using the DSM (Diagnostic and Statistical Manual)?', category: 'Diagnostic' },
    { abbreviation: 'RD', meaning: 'Does the child face difficulties in reading?', category: 'Cognitive' },
    { abbreviation: 'MB', meaning: 'Does the child struggle with motor balance or coordination?', category: 'Motor' },
    { abbreviation: 'W', meaning: 'Does the child experience issues while walking?', category: 'Motor' },
    { abbreviation: 'CS', meaning: 'Does the child have poor coordination skills?', category: 'Motor' },
    { abbreviation: 'LAH', meaning: 'Does the child have limited use of their arms or hands?', category: 'Motor' },
    { abbreviation: 'MM', meaning: 'Are the child’s motor movements delayed or unusual?', category: 'Motor' },
    { abbreviation: 'FE', meaning: 'Does the child have limited or abnormal facial expressions?', category: 'Motor' },
    { abbreviation: 'WD', meaning: 'Was there a delay in the child starting to walk?', category: 'Motor' },
    { abbreviation: 'J', meaning: 'Does the child frequently show jerky or jumping movements?', category: 'Motor' },
    { abbreviation: 'OL', meaning: 'Does the child keep limbs in overlapping or crossed positions?', category: 'Motor' },
    { abbreviation: 'S', meaning: 'Does the child appear stiff or rigid in their body movements?', category: 'Motor' },
    { abbreviation: 'IS', meaning: 'Does the child struggle with maintaining physical stability?', category: 'Motor' },
    { abbreviation: 'VD', meaning: 'Does the child have difficulty with vision or tracking objects?', category: 'Sensory' },
    { abbreviation: 'LI', meaning: 'Does the child show signs of impaired limb function?', category: 'Motor' },
    { abbreviation: 'PEC', meaning: 'Does the child avoid or lack eye contact?', category: 'Behavioral' },
    { abbreviation: 'D', meaning: 'Does the child drool excessively beyond expected age?', category: 'Motor / Oral Motor' },
    { abbreviation: 'A', meaning: 'Does the child show signs of poor coordination (ataxia)?', category: 'Motor' },
    { abbreviation: 'SM', meaning: 'Is there a delay in the child’s speech or motor development?', category: 'Developmental' },
    { abbreviation: 'I', meaning: 'Does the child show incoordination in physical activities?', category: 'Motor' },
    { abbreviation: 'RB', meaning: 'Does the child show repetitive behaviors like rocking or hand-flapping?', category: 'Behavioral / Autism indicator' },
    { abbreviation: 'UM', meaning: 'Does the child have challenges with upper motor functions?', category: 'Behavioral / Autism indicator' },
    { abbreviation: 'TT', meaning: 'Does the child often walk on their toes?', category: 'Behavioral / Motor' },
    { abbreviation: 'AN', meaning: 'Does the child struggle with maintaining attention?', category: 'Cognitive' },
    { abbreviation: 'HD', meaning: 'Does the child show signs of hearing difficulty?', category: 'Internal Lingual parameters' },
    { abbreviation: 'DI', meaning: 'Is the child delayed in imitating sounds or gestures?', category: 'Internal Lingual parameters' },
    { abbreviation: 'DD', meaning: 'Does the child show signs of delayed overall development?', category: 'Internal Lingual parameters' },
    { abbreviation: 'IN', meaning: 'Does the child have difficulty clearly pronouncing words (inarticulation)?', category: 'Internal Lingual parameters' },
    { abbreviation: 'GI', meaning: 'Does the child have trouble using correct grammar while speaking?', category: 'Internal Lingual parameters' },
    { abbreviation: 'SD', meaning: 'Has the child experienced delayed speech development?', category: 'Internal Lingual parameters' },
    { abbreviation: 'FA', meaning: 'Does the child have difficulty staying focused?', category: 'Cognitive' },
    { abbreviation: 'TDA', meaning: 'Does the child struggle to focus on tasks or goals?', category: 'Cognitive' },
    { abbreviation: 'SA', meaning: 'Does the child have trouble understanding social cues or interactions?', category: 'Behavioral' },
    { abbreviation: 'TM', meaning: 'Was there a delay in the child reaching talking milestones?', category: 'Developmental' }
];

const QuestionnaireStage2 = () => {
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
            const response = await axios.post('"https://nikhil.sbs/stage_2_test/', {
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
                            onClick={() => navigate('/Diagnose/facetest')}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow-md"
                        >
                            Face Test 
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
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 py-10 px-4">
                <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
                    {/* Main Heading */}
                    <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-4">
                        Autism & Neurological Disorder Screening
                    </h1>

                    {/* Subtext Description */}
                    <p className="text-center text-gray-600 mb-6 text-md">
                        This is <span className="font-semibold text-blue-700">Stage 2</span> of our disorder detection process.
                        At this point, we're taking a closer look based on your earlier responses to identify more specific patterns
                        related to neurodevelopmental or behavioral conditions. Please continue to answer thoughtfully — your input
                        plays a vital role in guiding the next steps of care and evaluation.
                    </p>


                    {/* Question Block */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-inner border border-blue-100">
                        <h2 className="text-xl font-semibold text-blue-600 mb-3">
                            Stage 2: Intermediate Screening
                        </h2>
                        <p className="text-lg font-medium text-gray-800 mb-4">
                            {currentQuestion.meaning} <span className="text-gray-500">({currentQuestion.abbreviation})</span>
                        </p>

                        {/* Radio Options */}
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

                    {/* Next/Submit Button */}
                    <div className="mt-8 text-center">
                        <button
                            onClick={handleNext}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-all duration-200"
                        >
                            {currentIndex === questions.length - 1 ? 'Submit Responses' : 'Next Question'}
                        </button>
                    </div>

                    {/* Disclaimer or Note */}
                    <p className="mt-6 text-sm text-gray-500 text-center italic">
                        Note: This is an Intermediate screening and not a professional diagnosis. Please consult a certified specialist for a comprehensive evaluation.
                    </p>
                </div>
            </div>
            <FooterBlock />
        </>

    );
};

export default QuestionnaireStage2;
