import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            My Website
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="how-to-play.html">
                  How to play
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className=" container-fluid p-0 h-100">
        <div className="d-flex h-100">
          <div
            className="btn flex-fill"
            style={{ backgroundColor: "red", height: "100vh" }}
          >
            {/* You can add more content here if needed */}
          </div>
          <div
            className="btn flex-fill"
            style={{ backgroundColor: "blue", height: "100vh" }}
          >
            {/* You can add more content here if needed */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
