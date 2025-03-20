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
                src="https://upload.wikimedia.org/wikipedia/en/6/65/Walter_White_S5B.png"
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
                src="https://upload.wikimedia.org/wikipedia/en/d/d0/Saul_Goodman_BCS_S3.png"
                alt="Saul Goodman"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Saul Goodman</h3>
              <p className="text-sm mt-2 text-gray-400">Advogado de Defesa</p>
            </div>
  
            {/* Card - Gustavo Fring */}
            <div className="bg-slate-800 p-4 rounded-lg shadow-lg text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/6/61/Gus_Fring_BCS_S3.png"
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