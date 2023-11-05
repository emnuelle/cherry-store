import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; 
import MyVerticallyCenteredModal from './components/MyModal';
import CardComponent from './components/CardComponent';
import Carrossel from './components/Carrossel';
import CustomImage from './components/CustomImage';
import './App.css';



function App() {

  const [modalShow, setModalShow] = useState(false); 

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light custom-navbar-bg p-3">
          <a className="navbar-brand" href="#">
            <img
              src="./public/cs-logo.svg"
              alt="Logo Cherry Store"
              width="100"
              height="100"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home Page
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Destaques
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Decoração
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Beleza
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Vestuário
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Colecionáveis
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Música
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <Carrossel />

      <div className="produtos produtosCustom p-1 ">
        <div className="tituloProdutos">
          <img
            src="./public/destaques.png"
            alt="destaques"
            width="400rem"
            height="auto"
          />
        </div>
        <div className="row p-1">
          <div className="col-6 col-md-3 p-2 d-flex justify-content-center">
            <CardComponent
              link="/"
              imageUrl="./public/razer-sanrio.webp"
              title="Razer x Sanrio HEADSET edição limitada"
              description="Som surround 7.1 imersivo para áudio posicional: equipado com drivers de 40 mm com ajuste personalizado..."
              valor="666,00"
            />
          </div>
          <div className="col-6 col-md-3 p-2 d-flex justify-content-center">
            <CardComponent
              link="/"
              imageUrl="./public/capa-lana.webp"
              title="
              Lana Del Rey LP Chemtrails Over the Country Club"
              description="Sétimo álbum de estúdio. Foi lançado em 19 de março de 2021."
              valor="256,60"
            />
          </div>
          <div className="col-6 col-md-3 p-2 d-flex justify-content-center">
            <CardComponent
              link="/"
              imageUrl="./public/elvira.webp"
              title="PRÉ-VENDA Boneca Monster High Skullector Elvira Mattel"
              description="Anfitriã icônica do terror, damos as boas-vindas a Elvira em nossa série Monster High Skullector. "
              valor="1.990,00"
            />
          </div>
          <div className="col-6 col-md-3 p-2 d-flex justify-content-center">
            <CardComponent
              link="/"
              imageUrl="./public/cinna.webp"
              title="Keycap personalizado Cinnamoroll Sanrio"
              description="Bonito teclado mecânico único, Backspace Enter Key."
              valor="36,53"
            />
          </div>
        </div>
      </div>

      <div className='row p-3 imgPromo'>
        <div className='col p-2'>
        <CustomImage src="./public/img1-promo.png" alt="Promo Acessórios" fluid={true} />
        </div>
        <div className='col p-2'>
        <CustomImage src="./public/img2-promo.png" alt="Promo calçados" fluid={true} />
        </div>
      </div>

      <div className="produtos produtosCustom p-1 ">
        <div className="row p-1">
          <div className="col-6 col-md-3 p-2 d-flex justify-content-center">
            <CardComponent
              link="/"
              imageUrl="./public/miku.webp"
              title="Figure HATSUNE MIKU"
              description="Figuras de Ação Movíveis Articulações Conter Os Adereços Desktop Decoração Coleção Modelo PVC."
              valor="125,70"
            />
          </div>
          <div className="col-6 col-md-3 p-2 d-flex justify-content-center">
            <CardComponent
              link="/"
              imageUrl="./public/bibble.webp"
              title="
              Bibble de pelúcia"
              description="Bibble da Barbie Fairytopia de pulúcia"
              valor="39,90"
            />
          </div>
          <div className="col-6 col-md-3 p-2 d-flex justify-content-center">
            <CardComponent
              link="/"
              imageUrl="./public/SIOUX.webp"
              title="Kaleidoscope LP"
              description="Um álbum único que combina rock psicodélico, folk e influências étnicas, proporcionando uma experiência sonora envolvente e cativante."
              valor="129,90"
            />
          </div>
          <div className="col-6 col-md-3 p-2 d-flex justify-content-center">
            <CardComponent
              link="/"
              imageUrl="./public/anya.webp"
              title="Figure Anya Forger de Spy X Family em PVC"
              description=" Um lindo modelo de coleção baseado no popular anime Spy X Family. Esta figura cativante é perfeita para fãs da série e colecionadores."
              valor="76,59"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="botaoModal text-center p-4">
            <Button className="p-2" variant='light' onClick={() => setModalShow(true)}>
              Clique para saber mais sobre a nossa políticas de entrega.
            </Button>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>



      <footer className="text-center text-lg-start custom-navbar-bg text-muted">
        <div className="row p-3">
          <div className="col text-align-left">
            <ul>
              <li>
                <a className="footer-link" href="/">
                  Home Page
                </a>
              </li>
              <li>
                <a className="footer-link" href="/">
                  Destaques
                </a>
              </li>
              <li>
                <a className="footer-link" href="/">
                  Decoração
                </a>
              </li>
              <li>
                <a className="footer-link" href="/">
                  Beleza
                </a>
              </li>
              <li>
                <a className="footer-link" href="/">
                  Vestuário
                </a>
              </li>
              <li>
                <a className="footer-link" href="/">
                  Colecionáveis
                </a>
              </li>
              <li>
                <a className="footer-link" href="/">
                  Música
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <img
              src="./public/cs-logo.svg"
              alt="Logo cherry Store"
              width="170"
              height="170"
            />
          </div>

          <div className="col text-align-left">
            <p>Nos acompanhe pelas redes sociais!</p>
            <ul>
              <li>
                <img
                  className="p-1"
                  src="./public/icinstagram.svg"
                  alt="logo Instagram"
                  height="40"
                />
                <a className="footer-link" href="/">
                  Instagram
                </a>
              </li>
              <li>
                <img
                  className="p-1"
                  src="./public/icpinterest.svg"
                  alt="logo Pinterest"
                  height="40"
                />
                <a className="footer-link" href="/">
                  Pinterest
                </a>
              </li>
              <li>
                <img
                  className="p-1"
                  src="./public/ictiktok.svg"
                  alt="logo Tiktok"
                  height="40"
                />
                <a className="footer-link" href="/">
                  Tiktok
                </a>
              </li>
            </ul>
          </div>

          <div className="p-2 text-center">
            <p>Cherry Store | todos os direitos reservados 2023.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
