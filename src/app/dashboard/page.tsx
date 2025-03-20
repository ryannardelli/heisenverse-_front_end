import {
  IoHomeOutline,
  IoChatbubbleOutline,
  IoSettingsOutline,
  IoHelpBuoyOutline,
  IoLogOutOutline,
  IoRocketOutline,
  IoNewspaperOutline,
  IoMenuOutline,
  IoSearchOutline,
} from "react-icons/io5";
import "/public/styles/sidebar.css";

export default function Dashboard() {
  return (
    <>
      <div className="container-dashboard">
        <div className="navigation">
          <ul>
            <li>
              <a href="#">
                <span className="icon">
                  <IoRocketOutline size={20} />
                </span>
                <span className="title">Brand Name</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <IoHomeOutline size={20} />
                </span>
                <span className="title">Dashboard</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <IoNewspaperOutline size={20} />
                </span>
                <span className="title">Feed</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <IoChatbubbleOutline size={20} />
                </span>
                <span className="title">Mensagem</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <IoHelpBuoyOutline size={20} />
                </span>
                <span className="title">Quiz</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <IoSettingsOutline size={20} />
                </span>
                <span className="title">Configurações</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <IoLogOutOutline size={20} />
                </span>
                <span className="title">Sair</span>
              </a>
            </li>

            <button className="w-20 h-10 rounded-full ml-4 mt-12 bg-white flex items-center transition duration-300 focus:outline-none shadow">
              <div
                id="switch-toggle"
                className="w-12 h-12 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
            </button>
          </ul>
        </div>
      </div>

      <div className="main">
        <div className="topbar">
          <div className="toggle">
            <IoMenuOutline size={32} />
          </div>
          <div className="search">
            <label>
              <input type="text" placeholder="Pesquise aqui" />
              <IoSearchOutline className="icon-search" size={20} />
            </label>
          </div>

          <div className="user">
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
              alt="Image User"
            />
          </div>
        </div>
      </div>
    </>
  );
}
