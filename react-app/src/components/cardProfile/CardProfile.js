import React from 'react'
import './CardProfile.css'
import {mockUserProfile} from '../../data/mockUserProfile'

const CardProfile = () => {
  return (
    mockUserProfile.map((card) =>         
        <section className="account" key={card.id}>
        <div className="account-content-wrapper">
            <h3 className="account-title">{card.title}</h3>
            <p className="account-amount">{card.amount}</p>
            <p className="account-amount-description">{card.description}</p>
        </div>
        <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
        </div>
    </section>)
  )
}
export default CardProfile