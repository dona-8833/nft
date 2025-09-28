import React from 'react'
import Layout from '../components/Layout'
import Nav from '../components/launchpadcomponent/Nav'
import LaunchSlide from '../components/launchpadcomponent/LaunchSlide'
import LauchCard from '../components/launchpadcomponent/LauchCard'

function LaunchPad() {
  return (
    <div>
        <Layout>
            <Nav/>
            <LaunchSlide/>
            <LauchCard/>
        </Layout>
    </div>
  )
}

export default LaunchPad