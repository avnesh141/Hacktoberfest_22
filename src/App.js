import { useState } from "react";
import React from "react";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import "./App.css";
function App() {
  const [mode, setmode] = useState("dark");
  const [text, settext] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = function (type, message) {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      settext("dark");
      document.body.style.backgroundColor = "white";
      showAlert("SUCCESS ", " Light-Mode has been enabled");
      document.title = "REACT APP-LIGHT MODE";
    } else {
      setmode("dark");
      settext("light");
      document.body.style.backgroundColor = "grey";
      showAlert("SUCCESS", "Dark-Mode has been enabled");
      document.title = "REACT APP-DARK MODE";
    }
  };
  document.body.style.backgroundColor = mode === "dark" ? "grey" : "light";
  return (
      <Router>
      <Navbar mode={mode} text={text} toggleMode={togglemode} />
      <Alert alert={alert} />
        <div className="container my-3">
          
      <Routes>
          <Route path="/" element={<TextForm mode={mode} />}>
      
          </Route>
          <Route path="/about" element={  <About />}>
          </Route>
        </Routes>
        </div>
    </Router>
  );
}
export default App;
