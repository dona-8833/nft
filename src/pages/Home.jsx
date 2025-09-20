import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Discover from "../components/Discover";
import Reasson from "../components/Reasson";
import RoadMap from "../components/RoadMap";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Layout>
        <Nav />
        <Hero />
        <Features />
        <Discover />
        <Reasson/>
        <RoadMap/>
        <Faq/>
      </Layout>
        <Cta/>
        <Footer/>
    </div>
  );
}

export default Home;
