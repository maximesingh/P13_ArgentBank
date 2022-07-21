import React from 'react'
import {useSelector } from 'react-redux'
import './Home.css'
import Header from '../../components/header/Header'
import Sectionhome from '../../components/sectionHome/SectionHome'
import Footer from '../../components/footer/Footer'

const Home = () => {
  const user = useSelector((state) => {return state})
  console.log(user)
  return (
    <div className='home'>
        <Header />
        <Sectionhome />
        <Footer />
    </div>
  )
}
export default Home