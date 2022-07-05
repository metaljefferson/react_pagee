export default () => {
  return (
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">Mais Valor para Você!</div>
          <div className="intro-heading text-uppercase">
            Ganhe dinheiro sem sair de casa
          </div>
          <a
            className="btn btn-success  text-uppercase js-scroll-trigger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal4" 
          >
            Contratar
          </a>
          <div
            class="modal fade"
            id="exampleModal4"
            tabinex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel4">
                    Contratar
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
      </div>
    </header>
  );
};
