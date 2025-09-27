import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Market from "./pages/Market";

function App() {
  return < >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/collections" element={<Collection/>} />
        <Route path="/marketplace" element={<Market/>} />
      </Routes>
  </>;
}

export default App;
