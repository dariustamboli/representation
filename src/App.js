import "./App.css";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import Button from "./components/Button/Button";
import RepCard from "./components/RepCard/RepCard";
// import { representatives } from "./representativesMockData.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SearchInput />
        <p className="spacing">Or</p>
        <div className="location-button">
          <Button label="Use my location" />
        </div>
      </header>
      <div className="rep-block">
        <h2>Federal</h2>
        <RepCard party="repub" />
        <RepCard party="dem" />
        <h2>State</h2>
        <RepCard party="dem" />
        <RepCard party="repub" />
        <h2>Local</h2>
        <RepCard party="dem" />
        <RepCard party="dem" />
      </div>
    </div>
  );
}

export default App;
