import logo from "./logo.jpg";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} className="App-logo img-fluid" alt="logo"/>
            <span>WordHub</span>
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset"/>
        </main>
        <footer className="code-credit">
          This project was coded by <a href="https://github.com/CharityO3" target="_blank" rel="noreferrer">Charity Orhoridiohwo</a> and is open-sourced on <a href="https://github.com/CharityO3/dictionary-project" target="_blank" rel="noreferrer">GitHub</a> and hosted on <a href="https://dictionary-app-word-search.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

