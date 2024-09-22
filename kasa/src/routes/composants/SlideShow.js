import React, {useState} from 'react';
import { Slide } from 'react-slideshow-image';
import ArrowLeft from '../images/arrow_left.png'
import ArrowRight from '../images/arrow_right.png'

const SlideShow = ({selectedLogement}) => {

    // Position dans le tableau
    const [currentIndex, setCurrentIndex] = useState(1);

    // Flèche gauche
    const prevSlide = () => {
        if (currentIndex > 1) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(selectedLogement.pictures.length);
        }
    };

    // Flèche droite
    const nextSlide = () => {
        if (currentIndex < selectedLogement.pictures.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(1);
        }
    };

    return(
        <div className="carrousel">
            <img className="carrousel_img" src={selectedLogement.pictures[currentIndex - 1]} alt="Image carrousel"/>
            {selectedLogement.pictures.length > 1 && (
            <>
                <img className="arrow arrow_left" src={ArrowLeft} alt="Flèche gauche" onClick={prevSlide}/>
                <img className="arrow arrow_right" src={ArrowRight} alt="Flèche droite" onClick={nextSlide}/>
                <div className='carrousel_length'>
                    <p>{currentIndex}/{selectedLogement.pictures.length}</p>
                </div>
            </>
            )}
        </div>
    ); 
}

export default SlideShow;