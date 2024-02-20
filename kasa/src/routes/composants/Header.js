import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoKasa from '../images/logo.png';

const Header = () => {

    // Récupère l'url actuelle
    const location = useLocation();

    return(
        <header>
        <img src={logoKasa} alt="logo kasa" />
        <div className='navbar'>
            {/*Si on est sur la page d'accueil, le paragraphe sera souligné*/}
            <Link to="/" style={{ textDecoration: location.pathname === '/' ? 'underline' : 'none' }}>
                <p>Accueil</p>
            </Link>
            {/*Si on est sur la page À propos, le paragraphe sera souligné*/}
            <Link to="/apropos" style={{ textDecoration: location.pathname === '/apropos' ? 'underline' : 'none' }}>
                <p>À propos</p>
            </Link>
        </div>
    </header>
    );
};

export default Header;