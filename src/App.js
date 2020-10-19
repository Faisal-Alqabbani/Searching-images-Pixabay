import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar title="PixaBay Images Finder" />
      <Search />
    </div>
  );
}

export default App;
