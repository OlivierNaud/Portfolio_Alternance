import "./App.css";
import "./assets/scss/aboutme.scss";
import "./assets/scss/accueil.scss";
import "./assets/scss/all.scss";
import "./assets/scss/menu.scss";
import "./assets/scss/projetentreprise.scss";
import "./assets/scss/projetperso.scss";
import Portfolio from "./component/portfolio/Portfolio";
export const API_URL = process.env.REACT_APP_API_URL;

function App() {
  return <Portfolio />;
}

export default App;
