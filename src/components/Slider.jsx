import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { SliderData } from './SliderData';


const items = SliderData.map((item) => (
    <img src={item.image} alt={item.title} className="w-[175px] bg-black " />
));

const Carousel = () => (
    <AliceCarousel
        className='font-product-sans'
        items={items}
        controlsStrategy="alternate"
        disableButtonsControls
        infinite
        disableSlideInfo
        autoPlayInterval={500}
        disableDotsControls
        autoPlay
        
    />
);

export default Carousel;
