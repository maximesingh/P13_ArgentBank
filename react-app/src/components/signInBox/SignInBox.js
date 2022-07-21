import React from 'react'
import { NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './SignInBox.css'

const SignInBox = () => {
  const user = useSelector((state) => {return state})
  return (
    <NavLink
      to={!window.localStorage.getItem('authToken')
      ? "/signin" 
      : "/profile"}
      className="main-nav-item">

      <i className="fa fa-user-circle"></i>
      {!window.localStorage.getItem('authToken') 
        ? "Sign In" 
        : user.user.firstName}
    </NavLink>

  )
}
export default SignInBox