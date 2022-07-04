import React from "react";

export default () => {
    return ( <section id="faq" className="faq section-bg">
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

      <div className="faq-list p-3  bg-success bg-opacity-10 border border-info border-start-0 rounded-end ">
        <ul>
          <li data-aos="fade-up " data-aos-delay="100">
            <a
              data-bs-toggle="collapse"
              data-bs-target="#faq-list-2"
              className="collapsed text-uppercase "
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
              className="collapsed text-uppercase"
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
              className="collapsed text-uppercase"
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
              className="collapsed text-uppercase"
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
              className="collapsed text-uppercase"
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

    )
}