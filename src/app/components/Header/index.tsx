import Link from "next/link";

/* eslint-disable @next/next/no-html-link-for-pages */
export const Header = () => {
  return (
    <header className="bg-secondary text-white shadow-md font-inter">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <span className="text-primary text-2xl font-bold">Br</span>
          <span className="text-primary text-2xl font-bold">Ba</span>
          <span className="ml-2 text-xl font-semibold">Heinsenverse</span>
        </div>

        <nav className="hidden md:flex gap-6 text-sm uppercase tracking-wide">
          <a href="/" className="hover:text-primary transition">
            Home
          </a>
          <a href="/characters" className="hover:text-primary transition">
            Peronsagens
          </a>
          <a href="/episodes" className="hover:text-primary transition">
            Episódios
          </a>
          <a href="/quizzes" className="hover:text-primary transition">
            Quizzes
          </a>
          <a href="/about" className="hover:text-primary transition">
            Sobre
          </a>
        </nav>

        <div>
          <Link
            href="/dashboard"
            className="bg-primary hover:bg-assets text-white px-4 py-2 rounded-md transition inline-block"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
