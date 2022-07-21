import React from 'react'
import './SignInPage.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import InputForm from '../../components/inputForm/InputForm'

const SignInPage = () => {
  return (
    <div className="signInPage bg-dark">
      <Header />
      <InputForm />
      <Footer />
    </div>
  )
}
export default SignInPage
