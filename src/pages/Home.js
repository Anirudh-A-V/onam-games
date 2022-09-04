import React from 'react'
import 'Home.css'
import { Carousel } from '../Carousel/Carousel'
import { Cards } from '../Cards/Cards'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

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
