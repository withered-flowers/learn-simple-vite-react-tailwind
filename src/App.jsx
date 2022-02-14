import { Routes, Route, Link } from "react-router-dom";
// This is for using history from browser
// v5 react-router hooks is named useHistory
// v6 react-router hooks is named useNavigate
import { useNavigate } from "react-router-dom";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";

function App() {
  // declare hooks to use the navigate
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="custom-container bg-slate-200">
        <header className="App-header">
          <p className="h1">Simple React Apps with Tailwind</p>
        </header>
        {/* Create new section to hold FirstComponent */}
        <section>
          <FirstComponent />
        </section>
        {/* Create new section to hold SecondComponent */}
        <section>
          <SecondComponent />
        </section>
        {/* Create new section to hold ThirdComponent or FourthComponent */}
        <section>
          <nav>
            {/* Delclare the link in here (href) */}
            {/* navigate -1 to go back 1 page before */}
            <a href="#" className="link" onClick={() => navigate(-1)}>
              Back
            </a>
            <Link to="/third-component" className="link">
              Third Component
            </Link>
          </nav>
          {/* Declare the routes here */}
          <Routes>
            <Route path="/third-component" element={<ThirdComponent />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default App;
