import React from 'react'
import Nav from '../components/nav'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Features from '../components/Features'

function Home() {
  return (
    <div  >
        <Layout>
        <Nav/>
        <Hero/>
        <Features/>
        </Layout>
    </div>
  )
}

export default Home