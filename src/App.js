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
          <img className="img-fluid  mx-auto" src={images['logo-maisvalor-branco.png']} alt="" />
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
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-success"></i>
                <i className="fa fa-credit-card fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">
                Crédito pessoal para clientes correntistas e não correntistas.
              </h4>
              <p className="text-muted">
                Ganhos acima de 3 mil reais, de acordo com a produção.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-success"></i>
                <i className="fa fa-briefcase fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Consórcio</h4>
              <p className="text-muted">
                Empresa com mais de uma década no mercado.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-success"></i>
                <i className="fa fa-building fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Financiamento Imobiliário</h4>
              <p className="text-muted">Amplo portfólio de produtos.</p>
            </div>
          </div>
        </div>
      </section>

      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                Dúvidas frequentes:
              </h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack-1x text-success"></i>
                      <i className="fa fa-comments-dollar fa-stack-1x fa-inverse"></i>
                    </span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>
                        Preciso Ter um CNPJ Para Trabalhar como Parceiro Mais
                        Valor?
                      </h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Não. Este é um programa de bonificação também para
                        pessoas físicas que buscam por uma renda extra de forma
                        prática e segura.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack-1x text-success"></i>
                      <i className="fa fa-people-carry-box fa-stack-1x fa-inverse"></i>
                    </span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Tem Limite para Indicação de Clientes?</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Não. Você pode indicar quantos clientes quiser e de
                        qualquer localidade.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack-1x text-success"></i>
                      <i className="fa fa-file-lines fa-stack fa-inverse"></i>
                    </span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>
                        Quais Documentos Eu Preciso Para Indicar um Cliente?
                      </h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Para realizar a indicação serão necessários alguns
                        documentos, lembrando que o documento de identificação
                        pessoal (CNH ou RG) é obrigatório. Caso o indicado não
                        possua os demais documentos, a Mais Valor poderá entrar
                        em contato solicitando o complemento dos documentos
                        necessários.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack text-success"></i>
                      <i className="fa-brands fa-product-hunt fa-stack-1x fa-inverse"></i>
                    </span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Como Saber o Melhor Produto para Trabalhar?</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Os parceiros da Mais Valor recebem todo o suporte e
                        treinamento, com mesa de Análise especializada nos
                        produtos. Dessa forma, você poderá escolher os produtos
                        que mais combinam com o seu perfil e disponibilidade.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div class="timeline-image">
                    <button
                      class="btn rounded-circle btn-success btn-lg"
                      type="button"
                    >
                      Faça já o seu cadastro!
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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

      <h2 className="text-center m-3">Nossos Parceiros:</h2>

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
                <img className="card-img-top" src={images['cnpj.png']}></img>
              </button>
            </h2>
            <div
              id="collapse-one"
              className="accordion-collapse collapse"
              aria-labelledby="one"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>This is accordion body.</p>
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
              <img className="img-fluid card-img-top" src={images['cnpj.png']}></img>
              </button>
            </h2>
            <div
              id="collapse-two"
              className="accordion-collapse collapse"
              aria-labelledby="two"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>This is accordion body.</p>
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
              <img className="img-fluid card-img-top" src={images['cnpj.png']}></img>
              </button>
            </h2>
            <div
              id="collapse-three"
              className="accordion-collapse collapse"
              aria-labelledby="three"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>This is accordion body.</p>
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
              <img className="img-fluid card-img-top" src={images['cnpj.png']}></img>
              </button>
            </h2>
            <div
              id="collapse-four"
              className="accordion-collapse collapse"
              aria-labelledby="four"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>This is accordion body.</p>
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
              <img className="img-fluid card-img-top" src={images['cnpj.png']}></img>
              </button>
            </h2>
            <div
              id="collapse-five"
              className="accordion-collapse collapse"
              aria-labelledby="five"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>This is accordion body.</p>
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
              <img className="img-fluid card-img-top" src={images['cnpj.png']}></img>
              </button>
            </h2>
            <div
              id="collapse-six"
              className="accordion-collapse collapse"
              aria-labelledby="six"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>This is accordion body.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            <span>Conecte-se conosco nas redes sociais</span>
          </div>

          <div className="icon_networks">
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Grupo Mais Valor
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
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Sobre Nós</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
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
                  <i className="fas fa-envelope me-3"></i>
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
          Copyright © 2019/2022 - Grupo Mais Valor. Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}

function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
 }

 const images = importAll(require.context('./assets/img/', false, /\.(png|jpe?g|svg)$/));
 console.log(images)

export default App;
