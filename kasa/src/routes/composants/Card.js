import React from 'react';

const Card = ({title, cover}) => {
    return(
        <article>
            <h3>{title}</h3>
            <img src={cover} alt={title}/>
        </article>
    );
}

export default Card;