import './App.css';

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light custom-navbar-bg p-3">
          <a className="navbar-brand" href="#"><img src="./public/cs-logo.svg" alt="Logo Cherry Store" width="100" height="100" /></a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home Page</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Destaques</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Decoração</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Beleza</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Vestuário</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Colecionáveis</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Música</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <br />
      <br />
      <h1>coisas aqui depois</h1>
      <br />
      <br />
      
      <footer class="text-center text-lg-start custom-navbar-bg text-muted">

        <div className='row p-3'>

        <div className='col text-align-left'>
            <ul>
              <li><a className="footer-link" href="/">Home Page</a></li>
              <li><a className="footer-link" href="/">Destaques</a></li>
              <li><a className="footer-link" href="/">Decoração</a></li>
              <li><a className="footer-link" href="/">Beleza</a></li>
              <li><a className="footer-link" href="/">Vestuário</a></li>
              <li><a className="footer-link" href="/">Colecionáveis</a></li>
              <li><a className="footer-link" href="/">Música</a></li>
            </ul>
          </div>

          <div className='col'>
            <img src="./public/cs-logo.svg" alt="Logo cherry Store" width="170" height="170"/>
          </div>

          <div className='col text-align-left'>
            <p>Nos acompanhe pelas redes sociais!</p>
            <ul>
              <li>
                <img className='p-1' src="./public/icinstagram.svg" alt="logo Instagram" height="40"/>
                <a className="footer-link" href="/">Instagram</a>
              </li>
              <li>
                <img className='p-1' src="./public/icpinterest.svg" alt="logo Pinterest" height="40"/>
                <a className="footer-link" href="/">Pinterest</a>
              </li>
              <li>
                <img className='p-1' src="./public/ictiktok.svg" alt="logo Tiktok" height="40"/>
                <a className="footer-link" href="/">Tiktok</a>
              </li>
            </ul>
          </div>

        <div className='p-2'>
          <p>Cherry Store | todos os direitos reservados 2023.</p>
        </div>

        </div>

      </footer>


    </>
  );
}

export default App;
