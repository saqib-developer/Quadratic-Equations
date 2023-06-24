import './App.css';

function App() {



  return (
    <>
      <header>
        <nav>
          <div className="logo"><a href="index.html"><img src="img/logo4.png" alt="MSN" /></a></div>
          <ul className="nav-elements">
            <li><a href="index.html"><img src="img/icons/home.svg" alt="" />Home</a></li>
            <li><a href="index.html"><img src="img/icons/info.svg" alt="" />About</a></li>
            <li><a href="index.html"><img src="img/icons/contact_support.svg" alt="" />Contact</a></li>
            <li><a href="index.html"><img src="img/icons/expand.svg" alt="" />More</a></li>
          </ul>
          <div className="search">
            <input type="search" placeholder="Search Here..." />
          </div>
        </nav>
      </header>
      
      <main>
        <div className="container">
          <div className="slider">
            <img className="img0" src="img/logo5.png" alt="" />
          </div>
          <div className="container2">

            <div className="content">
              <h1>Quadratic Equations</h1>

              A quadratic equation is a second-order polynomial equation in a single
              variable x. The standrad form of Quadratic Eauation is:
              <br />
              ax<sub>2</sub> + bx + c = 0
              <br />
              <ul>
                <li>The value of a, b, c is usually known.</li>
                <li>"x" is an variable or unknown quantity.</li>
                <li>"a" can never be zero(because then it be called linear equation)</li>
              </ul>
              <br />
              The standrad equation can represent any equation
              <br />
              <b>For Example:</b>
              <br />
              8x<sub>2</sub> + 4x + 45 = 0
              <br />
              -2x<sub>2</sub> + 23x - 24 = 0
              <br />
              <h3>Name</h3>
              The name Quadratic comes from "quad" meaning square, because the variable gets squared (like x
              <sup>2</sup>).
              <br />
              It is also called an "Equation of Degree 2" (because of the "2" on the x).

            </div>
          </div>
        <hr />
        <p>lakjfd;lakjf</p>
        </div>
      </main>

      <footer>
        <span>Copyright &copy; Created By Saqib</span>
        <div>
          <a href="https://www.fiverr.com/share/pAR6Eo" target="_blank" rel="noopener noreferrer"><img
            src="img/icons/fiverr-logo.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/muhammad-saqib-nawaz-868871257/" target="_blank"
            rel="noopener noreferrer"><img src="img/icons/linkledn-logopng.png" alt="" /></a>
          <a href="mailto:muhammadsaqib8379@gmail.com" target="_blank" rel="noopener noreferrer"><img
            src="img/icons/email-logo.png" alt="" /></a>
        </div>
      </footer>
    </>
  );
}

export default App;
