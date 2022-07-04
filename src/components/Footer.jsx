import React from "react";

export default () => {
  return (
    <footer className="text-center text-lg-start">
      <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Conecte-se conosco nas redes sociais :</span>
        </div>

        <div>
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
                <i className="fas fa-credit-card me-3"></i>Grupo Mais Valor
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
                <i className="fas fa-home me-3"></i>Rua Quinze de Novembro 184
                Sala 601, Centro, SP, 01013-904
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>{" "}
                sac@grupomaisvalor.com.br
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>TEL -(11) 3467-0070
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>SAC - 0800-042-0710
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
