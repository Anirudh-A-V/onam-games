import React from 'react'
import './Home.css'
import Carousel from '../components/Carousel/Carousel'
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export default function Home() {
    return (
        <div className="home">
            <Header />
            <Carousel />
            <Cards />
            <Footer />
        </div>
    )
}
