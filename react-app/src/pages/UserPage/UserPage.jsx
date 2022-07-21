import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { userInfo,changeUserInfo } from '../../action';
import './UserPage.scss'
import Account from '../../components/Account/Account';
import { accounts } from '../../services/accounts'; //mocked account data

export default function UserPage() {
    const user = useSelector((state) => state.user); //get user state
    const dispatch = useDispatch()
    
    //get user info
    useEffect(() => {
        dispatch(userInfo());
    },[dispatch]);

    //get value of input
    const [firstName, setfirstName] = useState('');
	const [lastName, setlastName] = useState('');
    const handleInputChange = (event) => {
        event.target.id === 'firstName' 
        ? setfirstName(event.target.value) 
        : setlastName(event.target.value) 
    }
    
    //change user.firstName & user.lastName in API
    const onSubmit = (event) =>{
        event.preventDefault();
        dispatch(changeUserInfo(firstName,lastName))
        setShowResults(false)
    }
   
    //handle display of form
    const [showResults, setShowResults] = useState(false)
    const displayForm = () => setShowResults(true)
    const removeForm = () => setShowResults(false)

    if(!user.logged){return <Redirect to='/'/>}
    return (
        <main className="main bg-dark">
            <div className="header">
            {!showResults ? <h1>Welcome back  <br />{user.firstName} {user.lastName}</h1> : <h1>Welcome back</h1>}
                
                {showResults && 
                <form onSubmit={onSubmit}>
                    <div className="input">
                        <input required className="input-edit" type="text" id="firstName" placeholder={user.firstName}  value={firstName} onChange={handleInputChange}/>
                        <input required className="input-edit" type="text" id="lastName" placeholder={user.lastName} value={lastName} onChange={handleInputChange}/>
                    </div>
                    <div className="buttons">
                        <button className="edit-button form-button" type="submit"  >Save</button>
                        <button className="edit-button form-button" type='button' onClick={removeForm} >Cancel</button>
                    </div>
                </form>
                 }
                {!showResults &&  <button className="edit-button" onClick={displayForm}>Edit Name</button> }
            </div>

            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account,index) =>
                <Account key={index} title={account.title} amount={account.amount} description={account.description} />
            )};
        </main>
    )
}
