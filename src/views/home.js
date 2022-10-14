import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Internal Optimization Representative</title>
        <meta
          property="og:title"
          content="Internal Optimization Representative"
        />
      </Helmet>
    </div>
  )
}

export default Home
