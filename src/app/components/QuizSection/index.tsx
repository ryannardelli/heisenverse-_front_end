export const QuizSection = () => {
  return (
    <section className="bg-white dark:bg-slate-900 py-12" id="quiz">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Teste Seus Conhecimentos sobre Breaking Bad!
        </h2>

        <div className="bg-emerald-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Responda a perguntas sobre a série e descubra o quanto você
            realmente conhece Breaking Bad!
          </h3>
          <p className="text-lg mb-8">
            Será que você lembra dos detalhes sobre os eventos mais importantes?
            Quem é o verdadeiro mestre da química? Teste seus conhecimentos
            sobre a trama, personagens e momentos icônicos!
          </p>

          {/* Botão para acessar o quiz */}
          <div className="flex justify-center">
            <a
              href="#quiz-form"
              className="inline-flex items-center bg-emerald-700 text-white px-6 py-3 rounded-md hover:bg-emerald-800 transition"
            >
              Começar o Quiz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
