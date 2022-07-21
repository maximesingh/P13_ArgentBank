import React from 'react'
import { useLocation, NavLink} from 'react-router-dom'
import './Header.css'
import argentBankLogo from '../../assets/argentBankLogo.png'
import SignOut from '../signOut/SignOut'
import SignInBox from '../signInBox/SignInBox'

const Header = () => {
  const location = useLocation()


/**
 * If the user is on the profile page, display the sign in box and the sign out button. If the user is
 * on any other page, display the sign in box
 * @returns the SignInBox component if the pathname is not equal to "/profile". If the pathname is
 * equal to "/profile", the function is returning the SignInBox component and the SignOut component.
 */
  function displaySignInHeader(){
    if (location.pathname === "/profile"){
      return (
        <>
          <SignInBox /> 
          <SignOut />
        </> 
      )
    } else {
        return <SignInBox />
      }
    }
  
  return (
    <nav className="main-nav">
      <NavLink
            to="/"
            className="main-nav-logo"
          >
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {displaySignInHeader()}
      </div>
    </nav>
  )
}
export default Header
