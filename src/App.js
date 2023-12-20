// Import necessary libraries and components
import React from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import Page from "./Components/Page";

function App() {
  return (
    <div className="App">
      {/* Render the Page component */}
      <Page />
      {/* Render the SideBar component */}
      <SideBar />
    </div>
  );
}

export default App;
