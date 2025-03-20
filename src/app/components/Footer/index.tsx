import "@fortawesome/fontawesome-free/css/all.min.css";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Links rápidos */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul>
              <li>
                <a href="#personagens" className="hover:text-emerald-500">
                  Personagens
                </a>
              </li>
              <li>
                <a href="#episodios" className="hover:text-emerald-500">
                  Episódios
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-emerald-500">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Me siga</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Desenvolvedor */}
          <div className="w-full sm:w-1/3 text-center sm:text-right">
            <p className="text-sm">
              Feito por <span className="font-semibold">Ryan Nardelli</span> -
              Desenvolvedor
            </p>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Heinsenverse. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
