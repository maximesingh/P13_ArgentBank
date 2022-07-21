import React from 'react'
import './Account.scss'
import PropTypes from 'prop-types'; 

/** display account transaction
 * @param  {string} title
 * @param  {string} amount
 * @param  {string} description
 */
export default function Account({title,amount,description}) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}

Account.propTypes = {
    title: PropTypes.string,
    amount: PropTypes.string,
    description: PropTypes.string,
}
