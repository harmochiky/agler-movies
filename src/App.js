import Navbar from "./components/Navbar";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./utils/contants";

axios.defaults.baseURL = BASE_URL;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
