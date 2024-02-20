import React, { useState, useEffect } from 'react';
import './css/Kasa.scss';
import './css/Apropos.scss';
import Banner from './composants/Banner';
import Collapse from './composants/Collapse';

const Apropos = () => {
    
  return (
    <div className='main'>
      <Banner imageName="image2.png" isFilter={false}/>
      <div className='collapse'>
        <Collapse head='Fiabilité' description='Les annonces postées sur Kasa garantissent une fiabilité totale. 
        Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes'/>

        <Collapse head='Respect' description='La bienveillance fait partie des valeurs fondatrices de Kasa. 
        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'/>

        <Collapse head='Service' description='La bienveillance fait partie des valeurs fondatrices de Kasa. 
        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'/>

        <Collapse head='Sécurité' description='La sécurité est la priorité de Kasa. 
        Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
        En laissant une note aussi bien à l`hôte qu`au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes'/>
      </div>
    </div>
  );
};
  
export default Apropos;