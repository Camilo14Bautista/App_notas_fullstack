function FooterPage() {
  return (
    <footer className="w-[98%] bg-white/60 backdrop-blur-[1px] rounded-lg m-4 dark:bg-gray-800/70 absolute z-40 -bottom-2 px-8 shadow-lg dark:backdrop-blur-sm">
      <div className=" w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
        <span className="text-sm text-gray-800 sm:text-center dark:text-white">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Okumura™
          </a>
          . Todos los derechos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-800 dark:text-white sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Acerda de
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Politicas de privacidad
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licencia
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterPage;
