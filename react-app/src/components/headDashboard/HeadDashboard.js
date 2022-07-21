import { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setFirstName, setLastName } from '../../redux/reducer'
import './HeadDashboard.css'

const HeadDashboard = () => {
  const LOGIN_PROFILE = 'http://localhost:3001/api/v1/user/profile'
  const dispatch = useDispatch()
  const user = useSelector((state) => {return state})
  const [toggle, setToggle] = useState(false)
  const [userInputsProfile, setUserInputsProfile] = useState({
    firstName: '',
    lastName: ''
  })

  const firstName = userInputsProfile.firstName
  const lastName = userInputsProfile.lastName

/**
 * The function putRequest() is a PUT request to the LOGIN_PROFILE
 * endpoint. The request body is an object with the firstName and lastName properties
 * @returns The response from the server.
 */
  async function putRequest() {
    return axios
    .put(
      LOGIN_PROFILE,
        { firstName, lastName },
    )
    .then(function (response) {
      console.log(response)
        return response;
    })
    .catch(function (error) {
      console.log(error.message)
        return error.message;
    });
}
  
/**
 * If toggle is false, set toggle to true, otherwise set toggle to false
 */
  const changeToggle = () => {
    toggle === false ? setToggle(true) : setToggle(false)
  }

/**
 * A function that handles the input change.
 * @param event - the event that triggered the function
 */
  function handleInputChange(event) {
    const inputName = event.target.name
    setUserInputsProfile({...userInputsProfile, [inputName]: event.target.value,})

  }

/**
 * Makes a request to the server, and then dispatches
 * the response to the reducer
 * @param e - the event object
 */
  const changeName = async(e) => {
    e.preventDefault()
    const response = await putRequest()
    dispatch(setFirstName(response.data.body.firstName))
    dispatch(setLastName(response.data.body.lastName))
    changeToggle()
  }

  
/* A ternary operator that checks if the user is undefined. If it is, it will display the name Tony
Jarvis. If it is not undefined, it will display the user's first and last name. */
  const welcome = (
    <>
      <h1>
        Welcome back
        <br />
        {user !== undefined ? `${user.user.firstName} ${user.user.lastName}` : "Tony Jarvis!"}
      </h1>
      <button className="edit-button " onClick={changeToggle}>
        Edit Name
      </button>
    </>
  )

/* A function that returns a form to change the firstName and LastName. */
  const editZone = (
    <>
      <h1>Welcome back</h1>
      <form onSubmit={e => changeName(e)}>
      <input className="firstName input" 
             type="text" 
             name="firstName" 
             placeholder="tony" 
             onChange={handleInputChange}/>

      <input className="familyName input" 
             type="text" 
             name="lastName" 
             placeholder="Jarvis" 
             onChange={handleInputChange}/>

      <div className="buttonBox">
        <button className="save-button btn"  
                type="submit" >
                Save
        </button>
        <button className="cancel-button btn" 
                onClick={changeToggle}>
          Cancel
        </button>
      </div>
      </form>
    </>
  )

  return <div className="header">
    {toggle == false 
    ? welcome 
    : editZone}
    </div>
}

export default HeadDashboard
