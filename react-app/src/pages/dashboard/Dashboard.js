import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import './Dashboard.css'
import { setFirstName, setLastName, setEmail} from '../../redux/reducer'
import { useDispatch } from 'react-redux'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import HeadDashboard from '../../components/headDashboard/HeadDashboard'
import CardProfile from '../../components/cardProfile/CardProfile'

const Dashboard = () => {
  const PROFILE_URL = 'http://localhost:3001/api/v1/user/profile'
  const dispatch = useDispatch()
  const [userResult, setUserResult] = useState()

/**
 * This function makes a post request to the server, and then sets the user's first name, last name,
 * and email in the redux store
 */
  async function postRequest(){
    await axios
    .post(PROFILE_URL,{})
      .then((response) => {
        setUserResult(response)
        dispatch(setFirstName(response.data.body.firstName))
        dispatch(setLastName(response.data.body.lastName))
        dispatch(setEmail(response.data.body.email))
        return response
    })
    .catch((error) => {
        return error
    })
  }

  useEffect(async () => {
    await postRequest()
  },[])



  return (
    <div className="Dashboard">
      <Header />
      <main className="main bg-dark ">
        <HeadDashboard />
        <h2 className="sr-only">Accounts</h2>
        <CardProfile />
      </main>
      <Footer />
    </div>
  )
}
export default Dashboard
