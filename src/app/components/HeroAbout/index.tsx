export const HeroAbout = () => {
    return (
      <section className="text-[#fff] body-font bg-secondary">
        <div className="container h-screen mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight mb-3 text-white dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
              Sobre <span className="text-emerald-500">Breaking Bad</span>
            </h1>
            <p className="mb-8 md:pl-0 pl-2 pr-2 leading-relaxed text-white">
              Breaking Bad é uma das séries mais aclamadas de todos os tempos. Acompanha a transformação de <strong>Walter White</strong>, um pacato professor de química que, após um diagnóstico de câncer, decide entrar para o mundo do crime para garantir o futuro de sua família.
              A série é conhecida por seu roteiro impecável, personagens marcantes e reviravoltas intensas.
            </p>
            <div className="flex justify-center">
              <a href="#personagens" className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-700 rounded text-lg transition">
                Conheça os Personagens
              </a>
              <a href="#episodios" className="ml-4 inline-flex text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-lg transition">
                Ver Episódios
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img className="object-cover object-center rounded-xl shadow-lg" alt="breaking bad logo" src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" />
          </div>
        </div>
      </section>
    );
  }  