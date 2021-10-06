import "./App.css";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import Button from "./components/Button/Button";
import RepCard from "./components/RepCard/RepCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SearchInput />
        Or
        <div className="locationButton">
          <Button label="Use my location" />
        </div>
      </header>
      <div className="RepBlock">
        <h2>Federal</h2>
        <RepCard type="primary" />
        <RepCard type="secondary" />
        <h2>State</h2>
        <RepCard type="secondary" />
        <RepCard type="primary" />
        <h2>Local</h2>
        <RepCard type="secondary" />
        <RepCard type="secondary" />
      </div>
    </div>
  );
}

export default App;
