import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";

function App() {
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
        {/* Create new section to hold ThirdComponent */}
        <section>
          <ThirdComponent />
        </section>
      </div>
    </div>
  );
}

export default App;
