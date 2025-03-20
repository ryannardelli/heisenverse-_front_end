export const CharactersPreview = () => {
  return (
    <section className="bg-slate-900 py-12 text-white" id="personagens">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Personagens Principais
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Card - Walter White */}
          <div className="bg-slate-800 p-4 rounded-lg shadow-lg text-center">
            <img
              src="https://i.pinimg.com/originals/09/f2/ab/09f2ab426208bb5da41fb869bddf2ffd.jpg"
              alt="Walter White"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Walter White</h3>
            <p className="text-sm mt-2 text-gray-400">Professor & Heisenberg</p>
          </div>

          {/* Card - Jesse Pinkman */}
          <div className="bg-slate-800 p-4 rounded-lg shadow-lg text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/c/c6/Jesse_Pinkman_S5B.png"
              alt="Jesse Pinkman"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Jesse Pinkman</h3>
            <p className="text-sm mt-2 text-gray-400">Ex-aluno & Parceiro</p>
          </div>

          {/* Card - Saul Goodman */}
          <div className="bg-slate-800 p-4 rounded-lg shadow-lg text-center">
            <img
              src="http://media1.s-nbcnews.com/i/streams/2013/September/130911/8C8952203-130911-ent-saulgoodman-hmed.jpg"
              alt="Saul Goodman"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Saul Goodman</h3>
            <p className="text-sm mt-2 text-gray-400">Advogado de Defesa</p>
          </div>

          {/* Card - Gustavo Fring */}
          <div className="bg-slate-800 p-4 rounded-lg shadow-lg text-center">
            <img
              src="https://i.pinimg.com/736x/79/fe/b1/79feb1611dddcbce7910e0c1081df6e2.jpg"
              alt="Gustavo Fring"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Gustavo Fring</h3>
            <p className="text-sm mt-2 text-gray-400">Empresário & Chefão</p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="#todos-personagens"
            className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition"
          >
            Ver Todos os Personagens
          </a>
        </div>
      </div>
    </section>
  );
};
