import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import './css/Kasa.scss';
import './css/Logement.scss';
import Collapse from './composants/Collapse';
import SlidesShow from './composants/SlideShow';
import logementsData from './json/logements.json';
import starRed from './images/star_red.png'
import starGray from './images/star_gray.png'


const Logement = () => {
  
  const logements = logementsData;

  // Récupère l'id dans l'url
  const {id} = useParams();

  // Cherche l'id du logement correspondant à l'id dans l'url
  const selectedLogement = logements.find(logement => logement.id === id);

  // Si aucun id correspondant, renvoi vers la page d'erreur
  if (!selectedLogement){
    return <Navigate to="/erreur"/>;
  }

  return (
    <div className='main'>
      <SlidesShow selectedLogement={selectedLogement}/>

      <div className='infos_logement'>
        <div className='location'>
          <h1>{selectedLogement.title}</h1>
          <p>{selectedLogement.location}</p>
          <div className='tags'>
            {selectedLogement.tags.map(tag => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        </div>

        <div className='infos_host'>
          <div className='host'>
            <p>{selectedLogement.host.name}</p>
            <img src={selectedLogement.host.picture}/>
          </div>
          <div className='note'>
            {Array.from({ length: 5 }, (_, index) => (
              <img key={index} src={index < selectedLogement.rating ? starRed : starGray} alt="étoile"/>
            ))}
          </div>
        </div>
      </div>

      <div className='more_infos'>
        <Collapse head='Description' description={selectedLogement.description}/>
        <Collapse head='Équipements' description={selectedLogement.equipments}/>
      </div>
    </div>
  );
};
  
export default Logement;