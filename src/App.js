import shecodeslogo from "./shecodeslogo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={shecodeslogo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="code-credit">This project was coded by <a href="https://github.com/CharityO3">Charity Orhoridiohwo</a> and is open-sourced on <a href="https://github.com/CharityO3/dictionary-project">GitHub</a> and hosted on <a href="https://dictionary-app-word-search.netlify.app/">Netlify</a>
      </footer>
      </div>
    </div>
  );
}

