import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import rasm1 from './apple.png'
import rasm2 from './car.png'
import rasm3 from './phone.png'
import './Header.css'


const tugma = (salom) => salom.preventDefault();



const rasmlar = [
    <img src={rasm1} onDragStart={tugma} role='presentation' />,
    <img src={rasm2} onDragStart={tugma} role='presentation' />,
    <img src={rasm3} onDragStart={tugma} role='presentation' />


];



const Header = () => {
    return (
        <AliceCarousel
            mouseTracking
            items={rasmlar}
            activeIndex={0}
            animationDuration={800}
            animationType='slide'
            autoPlay={true}
            autoPlayControls={true}
            autoPlayDirection='ltr'
            disableButtonsControls={true}
            disableDotsControls={true}
            disableSlideInfo={false}
            infinite={true}
            responsive={
                {
                    0: {
                        items: 1,
                    },
                    1024: {
                        items: 3,
                        itemsFit: 'contain',
                    }
                }
            }
D

        />)
        

}

export default Header