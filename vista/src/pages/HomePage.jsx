import { Link } from "react-router-dom";
import ThemeSelector from "../components/ThemeSelector";

function HomePage() {
  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm fixed w-[99%] z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 rounded-lg mt-2 ml-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Okumura Notes
          </span>
        </a>
        <div className="flex md:order-2 gap-3 space-x-3 md:space-x-0 rtl:space-x-reverse mt-4 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
          <ThemeSelector />
          <Link to="/register">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Registrarse
            </button>
          </Link>
          <Link to="/login">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Iniciar Sesion
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default HomePage;
