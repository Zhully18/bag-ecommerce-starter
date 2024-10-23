import React from 'react'
import Hero from '../../Components/Hero/Hero'
import ProductList from '../../Components/ProductList/ProductList'
import Features from '../../Components/Features/Features'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <ProductList />
    </div>
  )
}

export default Homepage