import React from 'react'
import axios from 'axios'
import './SignOut.css'

const SignOut = () => {
 
/**
 * It deletes the authToken from localStorage and removes the Authorization header from axios
 */
  const deleteStorage = () => {
    window.localStorage.removeItem('authToken');
    delete axios.defaults.headers['Authorization'];
  }
  return (
    <a className="main-nav-item" 
      href="/" 
      onClick={deleteStorage}>
        <i className="fa fa-sign-out"></i>
        Sign Out
    </a>
  )
}
export default SignOut
