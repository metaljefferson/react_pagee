import React from "react";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  const portfolioLinks = [
    {
      title: "Threads",
      caption: "Illustration",
    },
    {
      title: "Explore",
      caption: "Graphic Design",
    },
    {
      title: "Finish",
      caption: "Identity",
    },
    {
      title: "Lines",
      caption: "Branding",
    },
    {
      title: "Southwest",
      caption: "Website Design",
    },
    {
      title: "Window",
      caption: "Photography",
    },
    {
      title: "Pizza",
      caption: "I love pizza!",
    },
    {
      title: "Pizza",
      caption: "I love pizza!",
    },
    {
      title: "Pizza",
      caption: "I love pizza!",
    },
  ];

  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg navbar-dark absolute-top"
        id="mainNav"
      >
        <div className="container">
          <img
            className="img-fluid  mx-auto"
            src={images["logo-mv-70x51.svg"]}
            alt=""
          />
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#menu">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  Produtos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">
                  Contato
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-success text-uppercase js-scroll-trigger"
                  href="#services"
                >
                  Contratar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Mais Valor para Você!</div>
            <div className="intro-heading text-uppercase">
              Ganhe dinheiro sem sair de casa !D
            </div>
            <a
              className="btn btn-success  text-uppercase js-scroll-trigger"
              href="#services"
            >
              Contratar
            </a>
          </div>
        </div>
      </header>

      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Serviços</h2>
              <h3 className="section-subheading text-muted">
                Faça parte de uma das maiores redes de crédito do Brasil!
              </h3>
            </div>
          </div>
          <div class="container">
            <div class="row">

              <div className="d-flex">
                <figure class="image-block">
                  <img className="img-fluid" src="https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                  <figcaption>
                    <h3>
                      More Info
                    </h3>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    <button>
                      More Info
                    </button>
                  </figcaption>
                </figure>

                <figure class="image-block figure">
                  <img className="img-fluid" src="https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <div>
                  <figcaption className="">
                    <h3>
                      More Info
                    </h3>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    <button>
                      More Info
                    </button>
                  </figcaption>
                  </div>
                </figure>
                
                <figure class="image-block">
                  <img className="img-fluid" src="https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                  <figcaption>
                    <h3>
                      More Info
                    </h3>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    <button>
                      More Info
                    </button>
                  </figcaption>
                </figure>
              </div>


            </div>
          </div>
        </div>
      </section>

      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                Our Amazing Team
              </h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="img/team/1.jpg"
                  alt=""
                />
                <h4>Kay Garland</h4>
                <p className="text-muted">Lead Designer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="img/team/2.jpg"
                  alt=""
                />
                <h4>Larry Parker</h4>
                <p className="text-muted">Lead Marketer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="img/team/3.jpg"
                  alt=""
                />
                <h4>Diana Pertersen</h4>
                <p className="text-muted">Lead Developer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-center m-5">Nossos Parceiros:</h2>

      <div className="container card-group  w-60">
        <div className="accordion  d-lg-flex" id="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="one">
              <button
                className="accordion-button btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-one"
                aria-expanded="true"
                aria-controls="collapse-one"
              >
                <img
                  className="card-img-top"
                  src={images["daycoval1.svg"]}
                ></img>
              </button>
            </h2>
            <div
              id="collapse-one"
              className="accordion-collapse collapse"
              aria-labelledby="one"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>Banco Daycoval CNPJ 62.232.889/0001-90</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="two">
              <button
                className="accordion-button collapsed btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-two"
                aria-expanded="false"
                aria-controls="collapse-two"
              >
                <img
                  className="img-fluid card-img-top"
                  src={images["safra.svg"]}
                ></img>
              </button>
            </h2>
            <div
              id="collapse-two"
              className="accordion-collapse collapse"
              aria-labelledby="two"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>Banco Safra S/A - CNPJ: 58.160.789/0001-28</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="three">
              <button
                className="accordion-button collapsed btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-three"
                aria-expanded="false"
                aria-controls="collapse-three"
              >
                <img
                  className="img-fluid card-img-top"
                  src={images["banco-santander.svg"]}
                ></img>
              </button>
            </h2>
            <div
              id="collapse-three"
              className="accordion-collapse collapse"
              aria-labelledby="three"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  2022 Banco Santander (Brasil) S.A., CNPJ: 90.400.888/0001-42
                  Av. Presidente Juscelino Kubitscheck 2041/2235 – Vila Olímpia
                  – São Paulo/SP.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="four">
              <button
                className="accordion-button collapsed btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-four"
                aria-expanded="false"
                aria-controls="collapse-four"
              >
                <img
                  className="img-fluid card-img-top"
                  src={images["bb.svg"]}
                ></img>
              </button>
            </h2>
            <div
              id="collapse-four"
              className="accordion-collapse collapse"
              aria-labelledby="four"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  © Banco do Brasil S/A - CNPJ 00.000.000/0001-91 SAUN QD 5 LT
                  B, Asa Norte, Brasília-DF, Brasil - CEP 70040-912
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="five">
              <button
                className="accordion-button collapsed btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-five"
                aria-expanded="false"
                aria-controls="collapse-five"
              >
                <img
                  className="img-fluid card-img-top"
                  src={images["bradesco.svg"]}
                ></img>
              </button>
            </h2>
            <div
              id="collapse-five"
              className="accordion-collapse collapse"
              aria-labelledby="five"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  Banco Bradesco SA | CNPJ: 60.746.948.0001-12 Cidade De Deus,
                  S/Nº Vila Yara | Osasco | SP | CEP: 06029-900
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="six">
              <button
                className="accordion-button collapsed btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-six"
                aria-expanded="false"
                aria-controls="collapse-six"
              >
                <img
                  className="img-fluid card-img-top"
                  src={images["itau1.svg"]}
                ></img>
              </button>
            </h2>
            <div
              id="collapse-six"
              className="accordion-collapse collapse"
              aria-labelledby="six"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  Itaú Unibanco Holding S.A. CNPJ: 60.872.504/0001-23 Praça
                  Alfredo Egydio de Souza Aranha, 100, Torre Olavo Setubal,
                  Parque Jabaquara - CEP 04344-902 - São Paulo - Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="faq" className="faq section-bg">
        <div className="container">
          <div className="section-title ">
            <h2>Dúvidas frequentes:</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="faq-list text-uppercase p-3  bg-success bg-opacity-10 border border-info border-start-0 rounded-end ">
            <ul>
              <li data-aos="fade-up" data-aos-delay="100">
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-2"
                  className="collapsed "
                >
                  <i className="fas fa-circle-question text-success "></i>{" "}
                  Preciso ter um CNPJ para trabalhar como parceiro Mais Valor?{" "}
                  <i className="fa icon-arrow-collapsed"></i>
                </a>
                <div
                  id="faq-list-2"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Não. Este é um programa de bonificação também para pessoas
                    físicas que buscam por uma renda extra de forma prática e
                    segura.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="200">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-3"
                  className="collapsed"
                >
                  <i className="fas fa-circle-question text-success "></i> Tem
                  limite para indicação de clientes?{" "}
                  <i className="fa icon-arrow-collapsed"></i>
                </a>
                <div
                  id="faq-list-3"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Não. Você pode indicar quantos clientes quiser e de qualquer
                    localidade.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="300">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-4"
                  className="collapsed"
                >
                  <i className="fas fa-circle-question text-success "></i> Quais
                  documentos eu preciso para indicar um cliente?{" "}
                  <i className="fa icon-arrow-collapsed"></i>
                </a>
                <div
                  id="faq-list-4"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Para realizar a indicação serão necessários alguns
                    documentos, lembrando que o documento de identificação
                    pessoal (CNH ou RG) é obrigatório. Caso o indicado não
                    possua os demais documentos, a Mais Valor poderá entrar em
                    contato solicitando o complemento dos documentos
                    necessários.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-5"
                  className="collapsed"
                >
                  <i className="fas fa-circle-question text-success "></i> Como
                  é feita a validação de um cliente indicado?{" "}
                  <i className="fa icon-arrow-collapsed"></i>
                </a>
                <div
                  id="faq-list-5"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    A validação é realizada em duas etapas. Primeiramente será
                    realizado a análise de crédito e validação dos documentos
                    dos clientes indicados e logo depois a contratação do
                    crédito pré-aprovado pelo cliente.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="500">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-6"
                  className="collapsed"
                >
                  <i className="fas fa-circle-question text-success "></i> Como
                  saber o melhor produto para trabalhar?{" "}
                  <i className="fa icon-arrow-collapsed"></i>
                </a>
                <div
                  id="faq-list-6"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Os parceiros da Mais Valor recebem todo o suporte e
                    treinamento, com mesa de Análise especializada nos produtos.
                    Dessa forma, você poderá escolher os produtos que mais
                    combinam com o seu perfil e disponibilidade.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contato</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Nome: *"
                        required="required"
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Email: *"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Telefone: *"
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Mensagem: *"
                        required="required"
                        data-validation-required-message="Please enter a message."
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button
                      id="sendMessageButton"
                      className="btn btn-success  text-uppercase"
                      type="submit"
                    >
                      Enviar mensagem
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-lg-start">
        <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Conecte-se conosco nas redes sociais :</span>
          </div>

          <div className="icon_networks">
            <a href="#" className="me-4 text-reset">
              <img src={images["facebook.svg"]}></img>
            </a>
            <a href="#" className="me-4 text-reset">
              <img src={images["twitter.svg"]}></img>
            </a>
            <a href="#" className="me-4 text-reset">
              <img src={images["instagram.svg"]}></img>
            </a>
            <a href="#" className="me-4 text-reset">
              <img src={images["linkedin.svg"]}></img>
            </a>
            <a href="#" className="me-4 text-reset">
              <img src={images["whatsapp.svg"]}></img>
            </a>
          </div>
        </div>

        <div>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-credit-card me-3"></i> Grupo Mais Valor
                </h6>
                <p>
                  A Mais Valor é uma das maiores gestoras de negócios,
                  especializada em assessoria financeira para pessoas físicas e
                  empresas, com agências e representantes distribuídos pelos
                  principais estados do Brasil.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Produtos</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Empréstimo FGTS
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Empréstimo Consignado
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Financiamento de Veículos
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Seguros
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                <h6 className="text-uppercase fw-bold mb-4">Informações</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Trabalhe Conosco
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Negocie sua dívida
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Blog
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Código de Defesa do Consumidor
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Rua Quinze de Novembro
                  184 Sala 601, Centro, SP, 01013-904
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>{" "}
                  sac@grupomaisvalor.com.br
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> (11) 3467-0070
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          Copyright © 2022 - Grupo Mais Valor. Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./assets/img/", false, /\.(png|jpe?g|svg)$/)
);
console.log(images);

export default App;
