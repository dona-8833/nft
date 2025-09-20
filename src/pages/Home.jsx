import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Discover from "../components/Discover";

function Home() {
  return (
    <div>
      <Layout>
        <Nav />
        <Hero />
        <Features />
        <Discover />
      </Layout>
    </div>
  );
}

export default Home;
