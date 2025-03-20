import "/public/styles/hero.css";

export const HeroPrinciple = () => {
    return(
        <div className="main relative overflow-hidden w-full h-screen">
            <video autoPlay loop muted playsInline className="bg__video absolute inset-0 w-full h-full object-cover">
                <source src="/videos/bg-video.mp4" type="video/mp4" />
            </video>
        <div className="content absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white z-10 px-4 md:px-8">
             <h2
                className="text-4xl font-extrabold leading-10 tracking-tight text-primary sm:text-5xl sm:leading-none md:text-6xl">
                Heinsen
                <span className="font-bold text-secondary">Verse</span>
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl">
                Você sempre terá histórias incríveis pra assistir e personagens pra conhecer.
            </p>
            <div className="promo mt-6 text-xl font-semibold text-gray-300">
                <a href="#your-link" className="px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-assets transition duration-200">Acessar Agora</a>
            </div>
        </div>
    </div>
    );
}