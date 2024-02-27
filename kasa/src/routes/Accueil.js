import React, { useState, useEffect } from 'react';
import './css/Kasa.scss';
import './css/Accueil.scss';
import Banner from './composants/Banner';
import Card from './composants/Card';
import logementsData from './json/logements.json';
import { Link } from 'react-router-dom';

const Accueil = () => {
  const [logements, setLogements] = useState([]);

  // Récupère les données du document json et le stocke dans la variable d'état logements, une seule fois
  useEffect(() => {
    setLogements(logementsData);
  }, []);
  
  return (
    <div className='main'>
      <div className='banner_title'>
        <div className='title'>
          <p>Chez vous, partout, ailleurs</p></div>
          <Banner imageName="image1.png" isFilter={true}/>
      </div>
      <div className='gallery'>
        {/*Pour chaque logement, on récupère son titre et sa couverture puis on les utilise comme paramètre pour le composant Card*/}
        {logements.map(logement => (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <Card title={logement.title} cover={logement.cover} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Accueil;
