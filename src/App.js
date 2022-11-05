import Navbar from "./components/Navbar";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./utils/contants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthData } from "./store";

axios.defaults.baseURL = BASE_URL;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("@atk");

    if (token) {
      dispatch(setAuthData(JSON.parse(token)));
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
