import React from "react";

export default () =>{
    return(
        <section className="bg-light page-section">
        <h2 className="text-center m-5">Nossos Parceiros:</h2>

        <div className="container card-group  w-60">
          <div className="accordion  d-lg-flex" id="accordion">
            <div>
              <h2 className="accordion-header" id="one">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-one"
                  aria-expanded="true"
                  aria-controls="collapse-one"
                >
                  <img
                    className="img-fluid"
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
            <div>
              <h2 className="accordion-header" id="two">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-two"
                  aria-expanded="false"
                  aria-controls="collapse-two"
                >
                  <img className="img-fluid" src={images["safra.svg"]}></img>
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
            <div>
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
                    className="img-fluid"
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
                    Av. Presidente Juscelino Kubitscheck 2041/2235 – Vila
                    Olímpia – São Paulo/SP.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="accordion-header" id="four">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-four"
                  aria-expanded="false"
                  aria-controls="collapse-four"
                >
                  <img className="img-fluid" src={images["bb.svg"]}></img>
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

            <div>
              <h2 className="accordion-header" id="five">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-five"
                  aria-expanded="false"
                  aria-controls="collapse-five"
                >
                  <img className="img-fluid" src={images["bradesco.svg"]}></img>
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

            <div>
              <h2 className="accordion-header" id="six">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-six"
                  aria-expanded="false"
                  aria-controls="collapse-six"
                >
                  <img className="img-fluid" src={images["itau1.svg"]}></img>
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
          <div className="accordion  d-lg-flex" id="accordion">
            <div>
              <h2 className="accordion-header" id="seven">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-seven"
                  aria-expanded="true"
                  aria-controls="collapse-seven"
                >
                  <img
                    className="img-fluid"
                    src={images["daycoval1.svg"]}
                  ></img>
                </button>
              </h2>
              <div
                id="collapse-seven"
                className="accordion-collapse collapse"
                aria-labelledby="seven"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>Banco Daycoval CNPJ 62.232.889/0001-90</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="accordion-header" id="eight">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-eight"
                  aria-expanded="false"
                  aria-controls="collapse-eight"
                >
                  <img className="img-fluid" src={images["safra.svg"]}></img>
                </button>
              </h2>
              <div
                id="collapse-eight"
                className="accordion-collapse collapse"
                aria-labelledby="eight"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>Banco Safra S/A - CNPJ: 58.160.789/0001-28</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="accordion-header" id="nine">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-nine"
                  aria-expanded="false"
                  aria-controls="collapse-nine"
                >
                  <img
                    className="img-fluid"
                    src={images["banco-santander.svg"]}
                  ></img>
                </button>
              </h2>
              <div
                id="collapse-nine"
                className="accordion-collapse collapse"
                aria-labelledby="nine"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    2022 Banco Santander (Brasil) S.A., CNPJ: 90.400.888/0001-42
                    Av. Presidente Juscelino Kubitscheck 2041/2235 – Vila
                    Olímpia – São Paulo/SP.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="accordion-header" id="ten">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-ten"
                  aria-expanded="false"
                  aria-controls="collapse-ten"
                >
                  <img className="img-fluid" src={images["bb.svg"]}></img>
                </button>
              </h2>
              <div
                id="collapse-ten"
                className="accordion-collapse collapse"
                aria-labelledby="ten"
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

            <div>
              <h2 className="accordion-header" id="eleven">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-eleven"
                  aria-expanded="false"
                  aria-controls="collapse-eleven"
                >
                  <img
                    className="img-fluid"
                    src={images["Telefone-Banco-Pan.jpg"]}
                    width={300}
                  ></img>
                </button>
              </h2>
              <div
                id="collapse-eleven"
                className="accordion-collapse collapse"
                aria-labelledby="eleven"
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

            <div>
              <h2 className="accordion-header" id="twelve">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-twelve"
                  aria-expanded="false"
                  aria-controls="collapse-twelve"
                >
                  <img
                    className="img-fluid"
                    src={images["ole.png"]}
                    width={225}
                  ></img>
                </button>
              </h2>
              <div
                id="collapse-twelve"
                className="accordion-collapse collapse"
                aria-labelledby="twelve"
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
          <div className="accordion  d-lg-flex" id="accordion">
            <div>
              <h2 className="accordion-header" id="thirteen">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-thirteen"
                  aria-expanded="true"
                  aria-controls="collapse-thirteen"
                >
                  <img
                    className="img-fluid"
                    src={images["Inbursa_Featured_Image.png"]}
                  ></img>
                </button>
              </h2>
              <div
                id="collapse-thirteen"
                className="accordion-collapse collapse"
                aria-labelledby="thirteen"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>Banco Daycoval CNPJ 62.232.889/0001-90</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="accordion-header" id="fourteen">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-fourteen"
                  aria-expanded="false"
                  aria-controls="collapse-fourteen"
                >
                  <img
                    className="img-fluid"
                    src={images["f653224b37e34dfa45e4acc661dffbf4.png"]}
                    width={225}
                  ></img>
                </button>
              </h2>
              <div
                id="collapse-fourteen"
                className="accordion-collapse collapse"
                aria-labelledby="fourteen"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>Banco Safra S/A - CNPJ: 58.160.789/0001-28</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="accordion-header" id="fifteen">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-fifteen"
                  aria-expanded="false"
                  aria-controls="collapse-fifteen"
                >
                  <img
                    className="img-fluid"
                    src={images["banco-cetelem-1-1024x576.png"]}
                    width={400}
                  ></img>
                </button>
              </h2>
              <div
                id="collapse-fifteen"
                className="accordion-collapse collapse"
                aria-labelledby="fifteen"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    2022 Banco Santander (Brasil) S.A., CNPJ: 90.400.888/0001-42
                    Av. Presidente Juscelino Kubitscheck 2041/2235 – Vila
                    Olímpia – São Paulo/SP.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="accordion-header" id="sixteen">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-sixteen"
                  aria-expanded="false"
                  aria-controls="collapse-sixteen"
                >
                  <img
                    className="img-fluid"
                    src={images["c6-bank.png"]}
                    width={"400"}
                  ></img>
                </button>
              </h2>
              <div
                id="collapse-sixteen"
                className="accordion-collapse collapse"
                aria-labelledby="sixteen"
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

            <div>
              <h2 className="accordion-header" id="seventeen">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-seventeen"
                  aria-expanded="false"
                  aria-controls="collapse-seventeen"
                >
                  <img
                    className="img-fluid"
                    src={images["256x256bb.jpg"]}
                    width={"225"}
                  ></img>
                </button>
              </h2>
              <div
                id="collapse-seventeen"
                className="accordion-collapse collapse"
                aria-labelledby="seventeen"
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

            <div>
              <h2 className="accordion-header" id="eighteen">
                <button
                  className="accordion-button collapsed btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-eighteen"
                  aria-expanded="false"
                  aria-controls="collapse-eighteen"
                >
                  <img
                    className="img-fluid"
                    src={images["bancobrb.jpg"]}
                    width={"225"}
                  ></img>
                </button>
              </h2>
              <div
                id="collapse-eighteen"
                className="accordion-collapse collapse"
                aria-labelledby="eighteen"
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
      </section>

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