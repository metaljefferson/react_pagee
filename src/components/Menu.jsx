import React from "react";

export default () => {
    return(
        <nav
        className="navbar navbar-expand-lg navbar-dark absolute-top"
        id="mainNav"
      >
        <div id="mainNavigation">
          <nav role="navigation">
            <div class="py-3 text-center border-bottom">
              <img src={images["logo-mv-70x51.svg"]} alt="" class="invert" />
            </div>
            <div class="alert alert-warning alert-dismissible d-flex align-items-center fade show">
              <i class="fa-solid fa-triangle-exclamation"></i>
              <strong class="mx-2">Aviso !</strong> O GRUPO MAIS VALOR não
              solicita depósitos, transferências, adiantamentos ou cobranças de
              taxas para nenhum de seus clientes.
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
              ></button>
            </div>
          </nav>
          <div class="navbar-expand-md">
            <div class="navbar-dark text-center my-2">
              <button
                class="navbar-toggler w-50"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fa-solid fa-bars"></i> <span>Menu</span>
              </button>
            </div>
            <div
              class="text-center mt-3 collapse navbar-collapse"
              id="navbarNavDropdown"
            >
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li id="Services" class="nav-item">
                  <a class="nav-link " href="#services">
                    Serviços
                  </a>
                </li>
                <li id="Portfolio" class="nav-item">
                  <a class="nav-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li id="Contato" class="nav-item">
                  <a class="nav-link" href="#contact">
                    Contato
                  </a>
                </li>

                <li class="nav-item dropdown dropdown_hover">
                  <a
                    class="nav-link"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Company
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  
  const images = importAll(
    require.context("../assets/img/", false, /\.(png|jpe?g|svg)$/)
  );