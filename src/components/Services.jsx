
export default () => {
  return (
    <section class="container" id="services">
      <div class="row">
        <div className="col-lg-12 text-center mb-4">
          <h2 className="section-heading text-uppercase">
            Precisando de dinheiro?
          </h2>
          <h3 className="section-subheading">
            Temos as melhores soluções pra você ter um crédito a mais.
          </h3>
        </div>

        <div class="col-md-4">
          <div class="profile-card-2">
            <a data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src={images["credito.jpg"]} class="img img-responsive" />
            </a>
            <div
              class="profile-name "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Financiamento de Veiculos
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModal"
            tabinex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Contratar Veiculos
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                  <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Nome
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Digite seu nome"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        E-mail
                      </span>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Digite seu e-mail"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Tel
                      </span>
                      <input
                        type="tel"
                        class="form-control"
                        placeholder="Digite seu telefone"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        CPF
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Digite seu CPF"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Fechar
                  </button>
                  <button type="button" class="btn btn-primary">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="profile-card-2">
            <a data-bs-toggle="modal"
              data-bs-target="#exampleModal1">
              <img src={images["credito.jpg"]} class="img img-responsive" />
            </a>
            <div class="profile-name" data-bs-toggle="modal"
              data-bs-target="#exampleModal1">Emprestimo Consignado</div>
          </div>
          <div
            class="modal fade"
            id="exampleModal1"
            tabinex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Emprestimo Consignado
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form action="" method="post" id='form-contato'>
                  <div class="input-group mb-3">
                      <span class="input-group-text msg-erro msg-nome" for="nome" id="basic-addon1">
                        Nome
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        E-mail
                      </span>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Digite seu e-mail"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Tel
                      </span>
                      <input
                        type="tel"
                        class="form-control"
                        placeholder="Digite seu telefone"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        CPF
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Digite seu CPF"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Fechar
                  </button>
                  <button type="button" class="btn btn-primary" id='botao'>
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="profile-card-2">
            <a data-bs-toggle="modal"
              data-bs-target="#exampleModal2">
              <img src={images["credito.jpg"]} class="img img-responsive" />
            </a>
            <div class="profile-name" data-bs-toggle="modal"
              data-bs-target="#exampleModal2">Cartao de Credito</div>
          </div>
          <div
            class="modal fade"
            id="exampleModal2"
            tabinex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel2">
                    Cartao de Credito
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form action="" method="post" id="form-contato">
                  <div class="input-group mb-3">
                      <span for="nome" class="input-group-text" id="basic-addon1">
                        Nome
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Digite seu nome"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        E-mail
                      </span>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Digite seu e-mail"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Tel
                      </span>
                      <input
                        type="tel"
                        class="form-control"
                        placeholder="Digite seu telefone"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        CPF
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Digite seu CPF"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Fechar
                  </button>
                  <button type="button" class="btn btn-primary">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

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
