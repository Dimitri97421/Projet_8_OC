import React from 'react';

const Banner = ({ imageName, isFilter }) => {

  // Si isFilter est vrai, on applique un filtre sur la bannière. Aucun filtre dans le cas contraire
  const filterStyle = isFilter == true ? { filter: 'brightness(40%)' } : {};

  return (
    <img className='image_source' src={require(`../images/${imageName}`)} alt={`${imageName}`} style={filterStyle}/>
  );
};

export default Banner;

