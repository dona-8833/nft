import React from "react";
import Layout from "../components/landing/Layout";
import Nav from "../components/marketcomponent/Nav";
import Slider from "../components/marketcomponent/Slider";
import Overview from "../components/marketcomponent/Overview";
import AvailableCollections from "../components/marketcomponent/AvailableCollections";

function Market() {
  return (
    <div>
      <Layout>
        <Nav />
        <Slider />
        <Overview />
        <AvailableCollections />
      </Layout>
    </div>
  );
}

export default Market;
