import "./App.css";
import logo from "./images/ironhack-logo-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import menu from "./images/menu-top-xs.png";
import reactLogo from "./logo.svg";
// Image paths are going to be resolved by the browser making a request for each image
// And the webpack server serving each image from the "public" folder
// Therefore we specify them as endpoints (not as the paths in our system)

function App() {
  return (
    <div className="App">
      <main>
        <nav>
          <img src={logo} alt="logo" />
          <img src={menu} className="toggle" alt="menu" />
        </nav>

        <section className="content">
          <div>
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch, to become a
              Ninja Developer.
            </p>
            <button>Awesome!</button>
          </div>

          <div className="logo-panel">
            <img src={reactLogo} alt="react-logo" />
          </div>
        </section>
      </main>

      <section className="card-panel">
        <div className="card">
          {/* OR <img src="/images/icon1.png" alt="" /> */}
          <img src={icon1} alt="illustration" />
          <h4 className="card-title">Declarative</h4>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="card">
          {/* OR <img src="/images/icon2.png" alt="" /> */}
          <img src={icon2} alt="illustration" />
          <h4 className="card-title">Components</h4>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="card">
          {/* OR <img src="/images/icon3.png" alt="" /> */}
          <img src={icon3} alt="illustration" />
          <h4 className="card-title">Single-Way</h4>
          <p>A set of immutable values are passed to the components.</p>
        </div>

        <div className="card">
          {/* OR <img src="/images/icon4.png" alt="" /> */}
          <img src={icon4} alt="illustration" />
          <h4 className="card-title">JSX</h4>
          <p>Statically-typed, design to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

// Export the component using the ES6 export syntax
export default App;
