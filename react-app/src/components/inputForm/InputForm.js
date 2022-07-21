import React, {useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch} from 'react-redux'
import './InputForm.css'
import {setToken } from '../../redux/reducer'
import axios from 'axios'


const InputForm = () => {
  const LOGIN_URL = 'http://localhost:3001/api/v1/user/login'
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [messageError, setMessageError] = useState('')
  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  })
  
/**
 * It takes the name of the input and the value of the input and sets the state of the userInputs
 * object to the value of the input
 * @param event - the event that triggered the function
 */
  function handleInputChange(event) {
    const inputName = event.target.name
    setUserInputs({...userInputs, [inputName]: event.target.value,})
    if(event.target.value.length == 0 ){
      setMessageError('You must fill all the fields')
    } else {
      setMessageError('')
    }
  }

/**
 * If the tokenState is not null, navigate to the profile page
 * @param tokenState - Try to fetch token in local storage
 */
  function navigateTo(tokenState){
    if (tokenState !== null) {
      navigate('/profile')
    } 
  }

/**
 * It sends a POST request to the server with the user's inputs, and if the request is successful, it
 * saves the token in the local storage and sets the Authorization header to the token
 * @param userInputs - an object that contains the username and password of the user.
 */
  async function loginRequest(userInputs) {
    await axios
    .post(LOGIN_URL, userInputs)
    .then((response) => {
      window.localStorage.setItem('authToken', JSON.stringify(response.data.body.token))
      axios.defaults.headers['Authorization'] = 'Bearer ' + response.data.body.token
    })
    .catch((error) => setMessageError("Username or password is not correct!"))
  }

/**
 * It takes the user inputs, sends them to the server, and then sets the token in the state
 * @param e - the event object
 */
  async function login(e) {
    e.preventDefault()
    await loginRequest(userInputs)
    dispatch(setToken(window.localStorage.getItem('authToken')))
    navigateTo(window.localStorage.getItem('authToken'))
  }

  return (
    <main className="main bg-dark noTopMargin">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => login(e)}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <span className="msgErr">{messageError}</span>

          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}
export default InputForm
