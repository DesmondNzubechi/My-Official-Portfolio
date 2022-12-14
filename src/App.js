import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Service";

function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    <About />
    <Services />
    </div>
  );
}

export default App;
