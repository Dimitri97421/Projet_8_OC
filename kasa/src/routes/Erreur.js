import React from 'react';
import './css/Kasa.scss';
import './css/Erreur.scss';
import { Link } from 'react-router-dom';

const Erreur = () => {
    return(
        <div className='error'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to='/'>
                <p>Retourner sur la page d'accueil</p>
            </Link>

        </div>
    );
}

export default Erreur;