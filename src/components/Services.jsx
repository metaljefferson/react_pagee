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
            <img
              src={images['grande_imagem-20180712060412-433-800x577.jpg']}
              class="img img-responsive" width={650}
            />
            <div class="profile-name">Financiamento de Veiculos</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="profile-card-2">
            <img
                src={images['credito.jpg']}
              class="img img-responsive"
            />
            <div class="profile-name">Emprestimo Consignado</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="profile-card-2">
            <img
              src={images['credito.jpg']}
              class="img img-responsive"
            />
            <div class="profile-name">Cartao de Credito</div>
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
