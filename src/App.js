import React from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import Page from "./Components/Page";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", height: "100vh", overflow: "hidden" }}
    >
      <Page />
      <SideBar />
    </div>
  );
}

export default App;
