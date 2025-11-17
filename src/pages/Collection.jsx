import React from "react";
import Nav from "../components/collectionscomponent/Nav";
import Layout from "../components/landing/Layout.jsx";
import Collect from "../components/collectionscomponent/Colate.jsx";

function Collection() {
  return (
    <div>
      <Layout>
        <Nav />
        <Collect />
      </Layout>
    </div>
  );
}

export default Collection;
