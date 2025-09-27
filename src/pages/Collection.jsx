import React from 'react'
import Nav from '../components/collectionscomponent/Nav'
import Layout from '../components/Layout'
import Collect from '../components/collectionscomponent/collect'

function Collection() {
  return (
    <div>
        <Layout>
            <Nav/>
            <Collect/>
        </Layout>
    </div>
  )
}

export default Collection