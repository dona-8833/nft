import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Market from "./pages/Market";
import LaunchPad from "./pages/LaunchPad";

function App() {
  return < >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/collections" element={<Collection/>} />
        <Route path="/marketplace" element={<Market/>} />
        <Route path="/launchpad" element={<LaunchPad/>} />
      </Routes>
  </>;
}

export default App;
