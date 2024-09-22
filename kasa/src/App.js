import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Accueil from './routes/Accueil';
import Apropos from './routes/Apropos';
import Logement from './routes/Logement';
import Erreur from './routes/Erreur';
import Header from './routes/composants/Header';
import Footer from './routes/composants/Footer';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header/>
        <Routes>
          <Route path="/" exact Component={Accueil} />
          <Route path="/apropos" Component={Apropos} />
          <Route path="/logement/:id" Component={Logement} />
          <Route path="/erreur" Component={Erreur}/>
          {/*Si un lien quelquonque est entré, l'utilisateur est automatiquement redirigé vers la page d'erreur*/}
          <Route path="*" Component={() => <Navigate to="/erreur" />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
