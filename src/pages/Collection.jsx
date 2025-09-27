import React from 'react'
import Nav from '../components/collectionscomponent/Nav'
import Collect from '../components/collectionscomponent/collect'
import Layout from '../components/Layout'

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