import { useState } from "react";
import questions from "../logic/questions";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Index de la question actuelle
  const [answers, setAnswers] = useState([]); // Liste des réponses données
  const [result, setResult] = useState(null); // Stocke le membre final correspondant une fois le quiz terminé

  const currentQuestion = questions[currentQuestionIndex];

  // Fonction appelée lorsqu'un utilisateur choisit une réponse
  const handleAnswer = (member) => {
    setAnswers([...answers, member]); // Ajoute la réponse à l'historique

    if (currentQuestionIndex + 1 < questions.length) {
      // Passe à la question suivante si ce n'est pas la dernière
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Si c'est la dernière question, calculer les résultats
      calculateResult([...answers, member]);
    }
  };

  // Calcul du résultat final en fonction des réponses
  const calculateResult = (allAnswers) => {
    const tally = allAnswers.reduce((acc, member) => {
      acc[member] = (acc[member] || 0) + 1;
      return acc;
    }, {});

    const finalResult = Object.keys(tally).reduce((a, b) =>
      tally[a] > tally[b] ? a : b
    );

    setResult(finalResult);
  };

  // Redémarre le quiz
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="quiz-container mx-auto max-w-2xl p-6 bg-gray-100 rounded-lg shadow-lg mb-20" id="quiz">
      {result ? (
        <div className="result-container text-center">
          <h1 className="text-3xl font-bold mb-4">You are most like:</h1>
          <p className="text-xl text-purple-600 font-semibold">{result}</p>
          <button
            onClick={resetQuiz}
            className="mt-6 py-2 px-4 bg-yellow-700 text-black font-semibold rounded-lg shadow hover:bg-yellow-700 transition"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="question-container">
          <h1 className="text-2xl font-bold mb-6 text-black">
            Question {currentQuestionIndex + 1} of {questions.length}
          </h1>
          <p className="text-lg mb-4 text-black">{currentQuestion.question}</p>
          <div className="options-container flex flex-col gap-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.member)}
                className="py-2 px-4 bg-yellow-700 text-white font-medium rounded-lg shadow hover:bg-yellow-700 transition"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
