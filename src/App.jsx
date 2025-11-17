import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Market from "./pages/Market";
import LaunchPad from "./pages/LaunchPad";
import MarketCol from "./pages/MarketCol";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/marketplace" element={<Market />} />
        <Route path="/launchpad" element={<LaunchPad />} />
        <Route path="/collectionDetails" element={<MarketCol />} />
      </Routes>
    </>
  );
}

export default App;
