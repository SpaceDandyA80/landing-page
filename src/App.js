import "./App.css";
import Home from "./components/Home/index.js";
import Header from "./components/Header/index.js";
import Navbar from "./components/Navbar/index.js";
import Footer from "./components/Footer/index.js";
import About from "./pages/About/index.js";
import Contact from "./pages/Contact/index.js";
import Projects from "./pages/Projects/index.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router basename="/landing-page">
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />

          <Route path="/About" component={About} />

          <Route path="/Contact" component={Contact} />

          <Route path="/Projects" component={Projects} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
