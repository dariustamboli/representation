import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchInput from './components/SearchInput/SearchInput';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Header />
        <SearchInput />
        <button>Use my Location</button>
      </header>
    </div>
  );
}

export default App;

