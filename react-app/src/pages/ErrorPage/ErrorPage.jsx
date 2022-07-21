import React from 'react'
import {Link} from 'react-router-dom'
import './ErrorPage.scss'

export default function ErrorPage() {
    return (
        <main className='errorPage'>
            <section>
				<p className='errorPage404'>404</p>
				<p className='errorPageText'>Oups ! La page que vous demandez n'existe pas.</p>
				<Link className='errorPageLink' to='/'>Retourner sur la page d’accueil</Link>
            </section>
        </main>
    )
}
