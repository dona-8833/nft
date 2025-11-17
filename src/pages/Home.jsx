import React from "react";
import Nav from "../components/landing/Nav";
import Hero from "../components/landing/Hero";
import Layout from "../components/landing/Layout";
import Features from "../components/landing/Features";
import Discover from "../components/landing/Discover";
import Reasson from "../components/landing/Reasson";
import RoadMap from "../components/landing/RoadMap";
import Faq from "../components/landing/Faq";
import Cta from "../components/landing/Cta";
import Footer from "../components/landing/Footer";

function Home() {
  return (
    <div>
      <Layout>
        <Nav />
        <Hero />
        <Features />
        <Discover />
        <Reasson />
        <RoadMap />
        <Faq />
      </Layout>
      <Cta />
      <Footer />
    </div>
  );
}

export default Home;
