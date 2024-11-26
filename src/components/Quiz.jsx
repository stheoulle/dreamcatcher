import { useState } from "react";

const Quiz = () => {
  const [result, setResult] = useState(null);

  const handleQuizSubmit = () => {
    setResult("Tu es Siyeon !");
  };

  return (
    <section className="py-20 bg-gray-50 text-center" id="quiz">
      <h2 className="text-3xl font-bold mb-8">Quel membre de Dreamcatcher es-tu ?</h2>
      {!result ? (
        <div className="quiz-form space-y-4">
          <div>
            <label className="block text-lg mb-2">Ta couleur préférée :</label>
            <select className="block w-1/2 mx-auto p-2 border border-gray-300 rounded-lg">
              <option value="rouge">Rouge</option>
              <option value="bleu">Bleu</option>
              <option value="noir">Noir</option>
            </select>
          </div>
          <button
            onClick={handleQuizSubmit}
            className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-lg shadow-lg transition-all"
          >
            Voir mon résultat
          </button>
        </div>
      ) : (
        <div className="quiz-result">
          <p className="text-2xl font-semibold">{result}</p>
        </div>
      )}
    </section>
  );
};

export default Quiz;
