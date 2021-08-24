import "./App.css";
import Home from "./components/Home/index.js";
import Header from "./components/Header/index.js";
import Navbar from "./components/Navbar/index.js";
import Footer from "./components/Footer/index.js";
import About from "./pages/About/index.js";
import Contact from "./pages/Contact/index.js";
import Projects from "./pages/Projects/index.js";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <HashRouter>
          <Route exact path="/" component={Home} />

          <Route exact path="/About" component={About} />

          <Route exact path="/Contact" component={Contact} />

          <Route exact path="/Projects" component={Projects} />
        </HashRouter>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
