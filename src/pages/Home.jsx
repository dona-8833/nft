import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Discover from "../components/Discover";
import Reasson from "../components/Reasson";

function Home() {
  return (
    <div>
      <Layout>
        <Nav />
        <Hero />
        <Features />
        <Discover />
        <Reasson/>
      </Layout>
    </div>
  );
}

export default Home;
