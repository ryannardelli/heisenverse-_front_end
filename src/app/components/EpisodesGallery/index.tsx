export const EpisodesGallery = () => {
  return (
    <section className="bg-secondary dark:bg-slate-900 py-12" id="episodios">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-white dark:text-white">
          Episódios Memoráveis
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTQxOTU4ODQ2Ml5BMl5BanBnXkFtZTgwNTM0MTI2MDE@._V1_.jpg"
              alt="Ozymandias"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">Ozymandias</h3>
              <p className="text-gray-400 text-sm mt-2">
                No auge do caos, alianças desmoronam e segredos vêm à tona.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-emerald-400 font-bold">Nota: 10/10</span>
                <span className="text-gray-400 text-xs">
                  Temporada 5, Ep. 14
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://static.tvmaze.com/uploads/images/original_untouched/405/1012763.jpg"
              alt="Face Off"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">Face Off</h3>
              <p className="text-gray-400 text-sm mt-2">
                Walter confronta Gus em um final explosivo e inesquecível.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-emerald-400 font-bold">Nota: 9.9/10</span>
                <span className="text-gray-400 text-xs">
                  Temporada 4, Ep. 13
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://imgix.ranker.com/list_img_v2/313/2540313/original/why-the-fly-episode-of-breaking-bad-is-low-key-amazing-u1"
              alt="Fly"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">Fly</h3>
              <p className="text-gray-400 text-sm mt-2">
                Walter trava uma batalha simbólica com uma mosca no laboratório.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-emerald-400 font-bold">Nota: 8.8/10</span>
                <span className="text-gray-400 text-xs">
                  Temporada 3, Ep. 10
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition"
          >
            Ver Todos os Episódios
          </a>
        </div>
      </div>
    </section>
  );
};
